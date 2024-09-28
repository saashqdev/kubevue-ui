import { getStyle, getScrollSize } from 'cloud-ui.vusion/src/base/utils/style';
import { ellipsisTitle } from 'proto-ui.vusion/src/base/directives';
import { deepCopy } from 'cloud-ui.vusion/src/base/utils/index';
import i18n from 'cloud-ui.vusion/src/u-table-view.vue/i18n';

export default {
    name: 'u-table-view',
    i18n,
    props: {
        title: String,
        data: {
            type: Array,
            default: () => ([]),
        },
        allChecked: { type: Boolean, default: false },
        defaultSort: {
            type: Object,
            default() {
                return {
                    title: undefined,
                    order: undefined,
                };
            },
        },
        defaultFilter: {
            type: Object,
            default() {
                return {
                    title: undefined,
                    value: undefined,
                    column: undefined,
                };
            },
        },
        radioTextField: {
            type: String,
            default: 'radioText',
        },
        radioValueField: {
            type: String,
            default: 'radioLabel',
        },
        radioValue: [String, Number],
        noDataText: { type: String, default() { return this.$t('noDataText'); } },
        loading: { type: Boolean, default: false },
        height: [String, Number],
        maxHeight: [String, Number],
        minHeight: [String, Number],
        layout: {
            type: String,
            default: 'fixed',
        },
        border: { type: Boolean, default: false },
        xScroll: { type: Boolean, default: false }, // Used to handle the horizontal scroll bar when the table appears. The default scroll event is to scroll horizontally.
        width: [String, Number],
        visible: { type: Boolean, default: true },
        pattern: { type: String, default: 'normal' }, // Special display content situation Three forms of waterfall flow are not supported yet
        limit: { type: Number, default: 5 }, // Used to display limit data by default
        limitText: { type: String, default() { return this.$t('limitText'); } },
        allText: { type: String, default() { return this.$t('allText'); } },
        defaultText: { type: String, default: '-' },
        expandPattern: { type: String, default: 'toggle' },
        // mode: { type: String, default: 'self' }, // When using fixed layout, is the calculation method to use the native table or the custom calculation rule configuration item
        showHeader: { type: Boolean, default: true }, // Display table header
        loadText: { type: String, default: '' }, // Text displayed when loading
        rowClassName: { type: Function, default() { return ''; } }, // Customize the style of a single row in a table
        color: String,
        forceFilter: { type: Boolean, default: false }, // Used to force filtering when the data source changes
        forceSort: { type: Boolean, default: false }, // Used to force sorting when the data source changes
        showColor: {
            type: Boolean,
            default: false,
        },
        sortMethod: Function,
        sortRemoteMethod: Function,
        filterMethod: Function,
    },
    data() {
        return {
            columns: [],
            tdata: [],
            allSel: this.allChecked,
            columnsWidth: [],
            currentRadioValue: this.radioValue,
            fixedRightWidth: [],
            copyTdata: [], // The copied version of tdata is mainly used for filtering
            tableWidth: undefined, //When the display value is none, this value needs to be handled specially
            bodyHeight: undefined,
            maxBodyHeight: undefined,
            minBodyHeight: undefined,
            fixedTableHeight: undefined, // When fixed columns and table height are used together
            fixedMaxTableHeight: undefined,
            fixedMinTableHeight: undefined,
            bodyWidth: undefined, // When a vertical scroll bar appears, you need to subtract the width of the scroll bar to ensure that no horizontal scroll bar appears
            scrollWidth: undefined,
            over: false, // When mouseover is in the table, this value is true
            fixedHeight: [], // The height of the table row when fixed
            fixedLeftWidth: null, // The sum of the width of the left part of the table when fixed
            rightColumns: [], // When the fixed value is right, the columns order needs to be reconstructed
            rightColumnsWidth: [], // When the fixed value is right, the columnsWidth order needs to be reconstructed
            isXScroll: false, // Determine whether a horizontal scroll bar will appear
            isYScroll: false, // Determine whether a scroll bar should be added in the vertical direction after adding the height attribute
            fixedHover: false, // Used to realize that when the left and right columns are fixed, the shadow effect can be realized synchronously when hovering to the left and right columns
            // filterValue: undefined, // Used to record the value of the current filter option, so that you can click more to display the correct data when filtering
            // filterColumn: undefined, // Used to record the current filter column, so that you can click more to display the correct data when filtering
            filterTdata: undefined, // used to record all data that meets the conditions after filtering the current filter column
            currentSortColumn: undefined, // indicates the current sort column
            currentSort: this.defaultSort,
            // scrollDiff: false,
            rootBottomBorder: false, // Solve the abnormal style problem caused by adding border-bottom to tr by adding pseudo-elements to the root element
        };
    },
    directives: { ellipsisTitle },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.columns.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.columns.splice(this.columns.indexOf(itemVM), 1);
        });
    },
    mounted() {
        if (this.pattern === 'limit')
            this.tdata = this.initTableData(this.limit);
        else
            this.tdata = this.initTableData();
        // this.copyTdata = this.initTableData();
        this.handleResize();
        window.addEventListener('resize', this.onResize, false);
        if (this.xScroll) {
            this.addMousewheel = true;
            document.addEventListener('mousewheel', this.onMouseWheel, false);
        }
    },
    computed: {
        fixedLeftColumns() {
            return this.columns.filter((column) => column.fixed === 'left' && column.visible);
        },
        fixedRightColumns() {
            const rightCols = [];
            const other = [];
            this.columns.forEach((col) => {
                if (col.fixed && col.fixed === 'right' && col.visible) {
                    rightCols.push(col);
                } else if (col.visible) {
                    other.push(col);
                }
            });
            this.rightColumns = rightCols.concat(other);
            return rightCols;
        },
        expandedColumn() {
            return this.columns.filter((column) => column.type === 'expand' && column.visible)[0];
        },
        allDisabled() {
            return this.tdata.every((item) => item.disabled);
        },
        showColumns() {
            // A collection of columns whose visible attribute is true
            return this.columns.filter((column) => column.visible);
        },
        radioColumn() {
            return this.columns.filter((column) => column.type === 'radio' && column.visible)[0];
        },
    },
    watch: {
        data: {
            deep: true,
            handler(newValue) {
                if (this.pattern === 'limit')
                    this.tdata = this.initTableData(this.limit);
                else
                    this.tdata = this.initTableData();

                // this.copyTdata = this.initTableData();
                const flag = this.showColumns.some((column) => column.filter);
                if (flag && this.forceFilter) {
                    // If the data changes in the filter column, it is necessary to filter and display the data
                    let columnIndex;
                    if (this.defaultFilter.title === undefined) {
                        this.showColumns.some((item, index) => {
                            if (item.filter) {
                                this.defaultFilter.title = item.title;
                                this.defaultFilter.value = item.value;
                                this.defaultFilter.column = item;
                                columnIndex = index;
                                return true;
                            }
                            return false;
                        });
                    } else {
                        this.showColumns.some((column, index) => {
                            if (column.title === this.defaultFilter.title) {
                                this.defaultFilter.column = column;
                                columnIndex = index;
                                return true;
                            }
                            return false;
                        });
                    }
                    const column = this.defaultFilter.column;
                    const value = this.defaultFilter.value;
                    this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                        if (column.filterMethod)
                            return column.filterMethod(value, item[column.label], item, column);
                        else
                            return item[column.label] === value;
                    });
                }
                if (this.pattern === 'limit')
                    this.tdata = this.tdata.slice(0, this.limit);

                if (this.currentSortColumn && this.forceSort) {
                    const order = this.currentSort.order === 'asc' ? -1 : 1;
                    // There is a problem here. Asynchronous execution of data changes does not want us to perform sorting operations.
                    this.sortData(this.currentSortColumn, order, 'change');
                }
                this.handleResize();
            },
        },
        allChecked(newValue) {
            this.allSel = newValue;
        },
        columnsWidth(newValue) {
            const leftIndexs = [];
            const rightIndexs = [];
            this.rightColumnsWidth = [];
            this.fixedLeftColumns && this.fixedLeftColumns.forEach((item) => {
                const index = this.showColumns.indexOf(item);
                leftIndexs.push(index);
            });
            this.fixedRightColumns && this.fixedRightColumns.forEach((item) => {
                const index = this.showColumns.indexOf(item);
                rightIndexs.push(index);
                newValue[index] && this.rightColumnsWidth.push(newValue[index]);
            });
            this.showColumns.forEach((item, index) => {
                if (rightIndexs.indexOf(index) === -1 && newValue[index]) {
                    this.rightColumnsWidth.push(newValue[index]);
                }
            });
            this.fixedLeftWidth = null;
            this.fixedRightWidth = null;
            leftIndexs.forEach((item) => {
                if (newValue[item])
                    this.fixedLeftWidth += parseFloat(newValue[item]);
            });
            rightIndexs.forEach((item) => {
                if (newValue[item])
                    this.fixedRightWidth += parseFloat(newValue[item]);
            });

            if (this.isYScroll) {
                this.fixedRightWidth -= this.scrollWidth;
            }
        },
        visible(newValue) {
            this.handleResize();
        },
        loading(newVal) {
            // In more complex cases, data may be assigned first, and then loading is set to false
            this.handleResize();
        },
        columns() {
            // List column modification will result in changes to list settings
            this.handleResize();
        },
        showColumns() {
            this.handleResize();
        },
        radioValue(value) {
            this.currentRadioValue = value;
        },
        currentRadioValue(value) {
            let row;
            let sindex;
            this.data.some((item, index) => {
                if (item[this.radioValueField] === value) {
                    row = item;
                    sindex = index;
                    return true;
                }
                return false;
            });
            this.$emit('update:radioValue', value);
            this.$emit('radio-change', {
                value,
                row,
                index: sindex,
            });
            if (sindex === this.data.length - 1)
                this.rootBottomBorder = true;
            else
                this.rootBottomBorder = false;
        },
    },
    methods: {
        rowClsName(index) {
            return this.rowClassName(index, this.tdata[index]);
        },
        showExpandIcon(column, value) {
            if (column.expandStrict) {
                if (!value)
                    return false;
                if (Array.isArray(value))
                    return value.length;
                if (typeof value === 'object')
                    return Object.keys(value).length;
                return value;
            }
            return true;
        },
        // Display the specific content of the table cell function. The current rule is that row[column.label] is an object, and the array does not display the content at all, only the basic type is displayed.
        showContent(column, value) {
            if (value === 0)
                return value;
            else if (!value && column.defaultText === '')
                return '';
            else {
                if (Array.isArray(value) || typeof value === 'object' && column.defaultText === '')
                    return column.defaultText;
                if (Array.isArray(value) || typeof value === 'object')
                    return column.defaultText || this.defaultText;
                return value || column.defaultText || this.defaultText;
            }
        },
        handleSort(column) {
            if (column.sortable) {
                if (column.title === this.currentSort.title)
                    this.currentSort.order = this.currentSort.order === 'asc' ? 'desc' : 'asc';
                else {
                    this.currentSort.title = column.title;
                    this.currentSort.order = 'desc';
                }
                this.currentSortColumn = column;
                const order = this.currentSort.order === 'asc' ? -1 : 1;
                this.sortData(column, order);
            }
        },
        sortData(column, order, type) {
            // The type field is passed in when data changes. The sort-change method cannot be called at this time to prevent an infinite loop
            const label = column.label;
            const sortRemoteMethod = this.sortRemoteMethod || column.sortRemoteMethod;
            const sortMethod = this.sortMethod || column.sortMethod;
            if (sortRemoteMethod) {
                // Asynchronous execution sorting method
                sortRemoteMethod(label, this.currentSort.order, column);
            } else {
                if (sortMethod)
                    this.copyTdata.sort((value1, value2) => sortMethod(value1[label], value2[label]) ? order : -order);
                else {
                    this.copyTdata.sort((value1, value2) => {
                        if (value1[label] === value2[label])
                            return 0;
                        return value1[label] < value2[label] ? order : -order;
                    });
                }
                if (this.pattern === 'limit')
                    this.tdata = this.copyTdata.slice(0, this.limit);
                else
                    this.tdata = this.copyTdata;
            }

            if (!type) {
                this.$emit('sort-change', {
                    column,
                    label,
                    order: this.currentSort.order,
                });
            }
        },
        getSelection(value) {
            const data = value || this.tdata;
            const selectionIndexes = [];
            let noDisabledCount = 0;
            data.forEach((row, index) => {
                if (row.selected)
                    selectionIndexes.push(index);
                if (!row.disabled)
                    noDisabledCount++;
            });
            // Here, the checkboxes for the pit row data are in disabled state. Click Select All to select all.
            if (selectionIndexes.length === noDisabledCount && selectionIndexes.length !== 0)
                this.allSel = true;
            else
                this.allSel = false;
            this.$emit('update:allChecked', this.allSel);
            return this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1);
        },
        allSelected() {
            this.$nextTick(() => {
                const flag = this.allSel;
                const copydata = this.tdata.concat();
                copydata.forEach((item) => {
                    if (!item.disabled)
                        item.selected = flag;
                });
                this.tdata = copydata;
                const selection = this.getSelection();
                if (flag)
                    this.$emit('select-all', selection);

                this.$emit('selection-change', selection);
            });
        },
        initTableData(value) {
            let tdata = [];
            // Now the original data is deep copied. The reason now is that not making a deep copy will affect the original data, adding some new attributes, causing changes in the original data.
            // 1 Is it necessary to perform a deep copy (how to solve the problem of affecting the change of the original data) 2 Perform a deep copy, does the data change require $emit events
            const copyData = deepCopy([], this.data);
            this.copyTdata = copyData;
            copyData.forEach((item, index) => {
                /* eslint-disable */
                item.original_data = this.data[index];
                item.original_index = index;
            });
            const selection = this.showColumns && this.showColumns.some((item) => item.type && item.type === 'selection');
            const expand = this.showColumns && this.showColumns.some((item) => item.type && item.type === 'expand');
            if (selection && expand) {
                copyData.forEach((item) => {
                    if (item.selected === undefined)
                        item.selected = false;
                    if (item.expanded === undefined)
                        item.expanded = false;
                    if (item.iconName === undefined)
                        item.iconName = 'right';
                    if (item.disabled === undefined)
                        item.disabled = false;
                    tdata.push(item);
                });
            } else if (selection) {
                copyData.forEach((item) => {
                    if (item.selected === undefined)
                        item.selected = false;
                    if (item.disabled === undefined)
                        item.disabled = false;
                    tdata.push(item);
                });
            } else if (expand) {
                copyData.forEach((item) => {
                    if (item.expanded === undefined)
                        item.expanded = false;
                    if (item.iconName === undefined)
                        item.iconName = 'right';
                    tdata.push(item);
                });
            } else {
                copyData.forEach((item) => {
                    tdata.push(item);
                });
            }
            if (!copyData.length)
                this.allSel = false;
            //Fixed left and right column synchronization shadow implementation scheme
            if (this.fixedLeftColumns.length > 0 || this.fixedRightColumns.length > 0)
                tdata.forEach((item) => item.hover = false);

            if (value)
                tdata = tdata.slice(0, value);

            const selectionArr = this.getSelection(this.data);
            // if (selectionArr.length !== 0)
            this.$emit('selection-change', selectionArr);

            return tdata;
        },
        handleResize() {
            if (this.layout !== 'auto') {
                this.$nextTick(() => {
                    // Determine whether a horizontal scroll bar will appear
                    let parentWidth;
                    parentWidth = this.$el.offsetWidth;
                    let tableWidth = this.$refs.body && this.$refs.body.offsetWidth;
                    if (parentWidth === 0) {
                        // The initial table is hidden and needs special processing. The above two values   default to 0.
                        let parentNode = this.$refs.root.parentNode;
                        while (parentNode && parentNode.offsetWidth === 0)
                            parentNode = parentNode.parentNode;
                        parentWidth = tableWidth = parentNode.offsetWidth || 0;
                    }

                    // Get the column sets with specific percentage values   and without width respectively
                    // Get a set of columns with specific values   and non-values
                    const percentColumns = [];
                    const valueColumns = [];
                    const noWidthColumns = [];
                    this.showColumns.forEach((item) => {
                        const width = item.copyWidth ? item.copyWidth + '' : undefined;
                        if (width && width.indexOf('%') !== -1)
                            percentColumns.push(item);
                        else if (width)
                            valueColumns.push(item);
                        else if (!width)
                            noWidthColumns.push(item);
                    });

                    let leaveWidth = 0;

                    // All are percentages
                    if (percentColumns.length === this.showColumns.length) {
                        let sumWidth = 0;
                        this.showColumns.forEach((item) => {
                            sumWidth += parseFloat(item.copyWidth);
                        });
                        if (sumWidth !== 100) {
                            percentColumns.forEach((item) => {
                                item.currentWidth = item.copyWidth = parseFloat(item.copyWidth) / sumWidth * 100 + '%';
                            });
                        }
                    }

                    // Special case where all values   are numeric and the sum is less than the current total width
                    let isAutoWidthChange = false;
                    if (valueColumns.length === this.showColumns.length) {
                        let sumWidth = 0;
                        this.showColumns.forEach((item) => {
                            sumWidth += parseFloat(item.currentWidth);
                        });
                        if (tableWidth > 0 && sumWidth < tableWidth)
                            isAutoWidthChange = true;
                    }

                    let percentWidthSum = 0;
                    percentColumns.forEach((item) => {
                        const width = parseFloat(item.copyWidth) * parentWidth / 100;
                        item.currentWidth = width;
                        percentWidthSum += width;
                    });
                    let valueWidthSum = 0;
                    valueColumns.forEach((item) => valueWidthSum += parseFloat(item.copyWidth));

                    leaveWidth = parentWidth - percentWidthSum - valueWidthSum;

                    if (leaveWidth > 0 && noWidthColumns.length > 0) {
                        const width = leaveWidth / noWidthColumns.length;
                        noWidthColumns.forEach((item) => item.currentWidth = width);
                    }

                    const allWidth = !this.showColumns.some((cell) => !cell.copyWidth); // each column set a width

                    if (allWidth) {
                        this.tableWidth = this.showColumns.map((cell) => {
                            if ((cell.copyWidth + '').indexOf('%') !== -1)
                                return parseFloat(cell.copyWidth) * parentWidth / 100;
                            else
                                return parseFloat(cell.currentWidth);
                        }).reduce((a, b) => a + b, 0);
                    } else if (getStyle(this.$el, 'width') === 'auto') {
                        let parentNode = this.$el.parentNode;
                        while (getStyle(parentNode, 'width') === 'auto')
                            parentNode = parentNode.parentNode;
                        this.tableWidth = parseFloat(getStyle(parentNode, 'width')) + 'px';
                    } else
                        this.tableWidth = parseFloat(getStyle(this.$el, 'width')) + 'px';
                    // Since percentages may cause decimal point problems, causing floating point precision problems, the typical 0.2+0.1 is not equal to 0.3, the comparison here needs special processing

                    if (parseFloat(this.tableWidth) - parentWidth <= 0) {
                        this.tableWidth = parentWidth;
                        this.isXScroll = false;
                    } else
                        this.isXScroll = Math.abs(parseFloat(this.tableWidth) - parentWidth) > 0.001;

                    this.scrollWidth = getScrollSize();
                    const titleHeight = parseFloat(getStyle(this.$refs.title, 'height')) || 0;
                    const headHeight = parseFloat(getStyle(this.$refs.head, 'height')) || 0;
                    const tableHeight = this.$refs.body.offsetHeight;
                    if (this.height && !this.loading && this.data.length) {
                        // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                        this.bodyHeight = this.height - titleHeight - headHeight;
                        this.isYScroll = tableHeight > this.bodyHeight;
                    } else {
                        this.bodyWidth = this.tableWidth;
                        // this.bodyHeight = parseFloat(getStyle(this.$refs.body, 'height')) || 0;
                    }
                    if (this.maxHeight && !this.loading && this.data.length) {
                        // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                        this.fixedMaxTableHeight = this.maxBodyHeight = this.maxHeight - titleHeight - headHeight;
                        this.isYScroll = tableHeight > this.maxBodyHeight;
                    }
                    if (this.minHeight && !this.loading && this.data.length) {
                        // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                        this.fixedMinTableHeight = this.minBodyHeight = this.minHeight - titleHeight - headHeight;
                    }
                    if (this.isXScroll)
                        this.fixedMaxTableHeight = this.fixedMaxTableHeight - this.scrollWidth;

                    if (this.loading && tableWidth > parentWidth) {
                        this.fixedTableHeight = parseFloat(getStyle(this.$refs.body, 'height')) || 0;
                        // this.$refs.body.parentNode.scrollLeft = (tableWidth - parentWidth) / 2;
                    } else if (tableWidth > parentWidth && this.bodyHeight) {
                        this.fixedTableHeight = this.bodyHeight - this.scrollWidth;
                        // this.$refs.body.parentNode.scrollLeft = (tableWidth - parentWidth) / 2;
                    } else
                        this.fixedTableHeight = this.bodyHeight;

                    this.columnsWidth = [];

                    // When clicking sorting and filtering, there is no need to subtract the scroll bar width again
                    // Handle the width problem when there is a scroll bar
                    let diffCurrentWidth = parseFloat(this.tableWidth);
                    this.showColumns.forEach((item, index) => {
                        //Store the value of item.currentWidth before it may change, because if a horizontal scroll bar appears, the value of item.currentWidth will change.
                        // At this time, the width of the last col corresponding to the table that makes up the tbody should be its own width minus the width of the scroll bar, otherwise it will cause misalignment problems
                        diffCurrentWidth = Math.abs(diffCurrentWidth - parseFloat(item.currentWidth));
                        if (index === this.showColumns.length - 1 && diffCurrentWidth > 1 && !isAutoWidthChange){
                            this.columnsWidth.push(parseFloat(item.currentWidth) + this.scrollWidth);
                        } else
                            this.columnsWidth.push(item.currentWidth);
                        if (this.height && index === (this.showColumns.length - 1) && this.isYScroll && diffCurrentWidth < 0.001) {
                            item.currentWidth = parseFloat(item.currentWidth) - this.scrollWidth;
                            item.fixedWidth = item.currentWidth;
                            // this.scrollDiff = true;
                        }
                        if (this.maxHeight && index === (this.showColumns.length - 1) && this.isYScroll && diffCurrentWidth < 0.001) {
                            item.currentWidth = parseFloat(item.currentWidth) - this.scrollWidth;
                            item.fixedWidth = item.currentWidth;
                            // this.scrollDiff = true;
                        }
                    });
                });
            }
        },
        select(option, column, index) {
            this.$refs.popper && this.$refs.popper.forEach((item) => item.toggle(false));
            column.selectValue = option.value;
            this.defaultFilter.title = column.title;
            this.defaultFilter.value = option.value;
            this.defaultFilter.column = column;
            // Need to consider the case where the data is empty to filter and load data asynchronously
            this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                if (column.filterMethod)
                    return column.filterMethod(option.value, item[column.label], item, column);
                else
                    return item[column.label] === option.value;
            });
            if (this.pattern === 'limit')
                this.tdata = this.tdata.slice(0, this.limit);

            this.$emit('filter-change', {
                column,
                value: option.value,
                index,
            });
        },
        /**
         * Select or cancel events
         * @param {row} currently selected row data
         */
        changeSelect(row) {
            const selection = this.getSelection();
            if (row.selected)
                this.$emit('select', selection);
            else
                this.$emit('select-cancel', selection);

            this.$emit('selection-change', selection);
        },
        rowClick(row, index) {
            if (this.radioColumn && !row.disabled) {
                // If a radio button exists, the clicked row must be selected
                this.currentRadioValue = row[this.radioValueField];
            }
            this.$emit('row-click', {
                data: row,
                index,
            });
        },
        onResize() {
            this.handleResize();
        },
        translateTime(value, format) {
            if (!value)
                return this.defaultText;
            const self = this;
            const maps = {
                YYYY(date) {
                    return date.getFullYear();
                },
                MM(date) {
                    return self.fixDate(date.getMonth() + 1);
                },
                DD(date) {
                    return self.fixDate(date.getDate());
                },
                HH(date) {
                    return self.fixDate(date.getHours());
                },
                mm(date) {
                    return self.fixDate(date.getMinutes());
                },
                ss(date) {
                    return self.fixDate(date.getSeconds());
                },
            };
            const date = new Date(value);
            const pattern = new RegExp(Object.keys(maps).join('|'), 'g');
            return format.replace(pattern, (capture) => maps[capture] ? maps[capture](date) : '');
        },
        fixDate(value) {
            value = '' + value;
            return value.length <= 1 ? '0' + value : value;
        },
        onMouseWheel(e) {
            const direction = e.wheelDelta / 120 > 0 ? -1 : 1;
            const parentWidth = this.$refs.root.offsetWidth;
            const tableWidth = this.$refs.body.offsetWidth;
            const diffWidth = tableWidth - parentWidth;
            if (tableWidth > parentWidth && this.over) {
                e.preventDefault();
                if (this.$refs.body.parentNode.scrollLeft >= diffWidth && direction === 1)
                    this.$refs.body.parentNode.scrollLeft = diffWidth;
                else if (this.$refs.body.parentNode.scrollLeft < 0 && direction === -1)
                    this.$refs.body.parentNode.scrollLeft = 0;
                else if (direction === -1)
                    this.$refs.body.parentNode.scrollLeft += -50;
                else
                    this.$refs.body.parentNode.scrollLeft += 50;
            }
        },
        mouseenter() {
            this.over = true;
        },
        mouseleave() {
            this.over = false;
        },
        toggleExpand(index) {
            if (this.expandPattern === 'toggle') {
                this.tdata.forEach((item, kindex) => {
                    if (kindex !== index) {
                        item.expanded = false;
                        item.iconName = 'right';
                    }
                });
            }
            const copyRowData = this.tdata[index];
            copyRowData.expanded = !copyRowData.expanded;
            if (!copyRowData.expanded)
                copyRowData.iconName = 'right';
            else
                copyRowData.iconName = 'down';
            this.tdata.splice(index, 1, copyRowData);
            // Since clicking will cause a scroll bar to appear on the page, the table fixed layout will not change, resulting in problems with the table display and the layout needs to be recalculated
            this.handleResize();
            this.$emit('toggle-expand', {
                index,
                direction: copyRowData.iconName,
                row: copyRowData,
            });
        },
        bodyScroll(s) {
            this.$refs.head.scrollLeft = e.target.scrollLeft;
            if (this.fixedLeftColumns.length > 0)
                this.$refs.lefttable.scrollTop = e.target.scrollTop;
            if (this.fixedRightColumns.length > 0)
                this.$refs.righttable.scrollTop = e.target.scrollTop;
            this.$refs.popper && this.$refs.popper[0] && this.$refs.popper[0].toggle(false);
        },
        fixmouseenter(value) {
            if (value === -1) {
                this.fixedHover = true;
                this.$emit('mouseenter', {
                    index: 0,
                });
            } else {
                const obj = this.tdata[value];
                obj.hover = true;
                this.tdata.splice(value, 1, obj);
                this.$emit('mouseenter', {
                    index: value,
                });
            }
        },
        fixmouseleave(value) {
            if (value === -1) {
                this.fixedHover = false;
                this.$emit('mouseleave', {
                    index: 0,
                });
            } else {
                const obj = this.tdata[value];
                obj.hover = false;
                this.tdata.splice(value, 1, obj);
                this.$emit('mouseleave', {
                    index: value,
                });
            }
        },
        showAll() {
            const filterValue = this.defaultFilter.value;
            if (this.defaultFilter.value) {
                this.tdata = this.copyTdata.filter((item) => {
                    const filterColumn = this.defaultFilter.column;
                    if (filterColumn.filterMethod)
                        return filterColumn.filterMethod(filterValue, item[filterColumn.label], item, filterColumn);
                    else
                        return item[filterColumn.label] === filterValue;
                });
            } else
                this.tdata = this.copyTdata;
        },
        showLimit() {
            this.tdata = this.tdata.slice(0, this.limit);
        },
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize, false);
        if (this.addMousewheel) {
            document.removeEventListener('mousewheel', this.onMouseWheel, false);
        }
    },
};