export default {
    name: 'u-table-view-2',
    props: {
        data: { type: Array },
        title: String,
        titleAlignment: { type: String, default: 'center' },
        border: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        loadingText: { type: String, default: 'Loading...' },
        error: { type: Boolean, default: false },
        errorText: { type: String, default: 'Loading failed, please try again' },
        emptyText: { type: String, default: 'No data yet' },
    },
    data() {
        return {
            columnVMs: [],
        };
    },
    created() {
        this.$on('add-column-vm', (columnVM) => {
            columnVM.parentVM = this;
            this.columnVMs.push(columnVM);
        });
        this.$on('remove-column-vm', (columnVM) => {
            columnVM.parentVM = undefined;
            this.columnVMs.splice(this.columnVMs.indexOf(columnVM), 1);
        });
    },
    mounted() {
        this.handleResize();
    },
    watch: {
        data: {
            deep: true,
            handler() {
                this.handleResize();
            },
        },
    },
    methods: {
        handleResize() {
            // Determine whether a horizontal scroll bar will appear
            // let parentWidth = this.$el.offsetWidth;
            // let tableWidth = this.$refs.body.offsetWidth;
            // // The initial table is hidden and requires special processing, because the above two values     are 0 at this time
            // if (parentWidth === 0)
            // parentWidth = tableWidth = this.$refs.root.parentNode.offsetWidth;

            // // Get column collections with percentages, specific values, and no width respectively
            // const percentColumnVMs = [];
            // const valueColumnVMs = [];
            // const noWidthColumnVMs = [];
            // this.columnVMs.forEach((columnVM) => {
            // if (columnVM.tempWidth && columnVM.tempWidth.endsWith('%'))
            // percentColumnVMs.push(columnVM);
            // else if (columnVM.tempWidth)
            // valueColumnVMs.push(columnVM);
            //else
            // noWidthColumnVMs.push(columnVM);
            // });

            // remained letWidth = 0;
            // // All are percentages
            // if (percentColumnVMs.length === this.columnVMs.length) {
            //     let sumWidth = this.columnVMs.reduce((prev, curr) => prev + parseFloat(curr.tempWidth), 0);
            //     if (sumWidth !== 100) {
            //         percentColumnVMs.forEach((columnVM) => {
            //             columnVM.tempWidth = parseFloat(columnVM.tempWidth) / sumWidth * 100 + '%';
            //         });
            //     }
            // }

            // let percentWidthSum = 0;
            // percentColumnVMs.forEach((columnVM) => {
            //     const width = parseFloat(columnVM.tempWidth) / 100 * parentWidth;
            //     columnVM.currentWidth = width;
            //     percentWidthSum += width;
            // });

            // let valueWidthSum = 0;
            // valueColumns.forEach((item) => valueWidthSum += parseFloat(item.copyWidth));

        },
    },
};
