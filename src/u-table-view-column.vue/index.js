import { Emitter } from 'proto-ui.kubevue';
export default {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    props: {
        title: String,
        sortable: { type: Boolean, default: false },
        filter: { type: Boolean, default: false },
        options: Array,
        value: [String, Number, Boolean],
        optionsDirection: {
            type: String,
            default: 'ltr',
        },
        label: String,
        type: String, // selection time expand radio
        headSelection: { type: Boolean, default: true },
        width: String,
        minWidth: { type: [String, Number], default: '80' },
        formatter: Function,
        sortMethod: Function, // Prepare deprecated properties
        sortRemoteMethod: Function, // Prepare to discard properties
        filterMethod: Function, // Prepare to discard properties
        placement: {
            type: String,
            default: 'bottom-start',
        },
        horizontal: {
            type: String,
        },
        // tooltip: { type: Boolean, default: false },
        ellipsis: { type: Boolean, default: false },
        timeFormat: { type: String, default: 'YYYY-MM-DD HH:mm:ss' },
        fixed: { type: String, validator: (value) => ['left', '', 'right'].includes(value) },
        defaultText: { type: String, default: '-' },
        expandIcon: { type: String, default: 'right-down', validator: (value) => ['up-down', 'right-down'].includes(value) },
        expandStrict: { type: Boolean, default: false }, // Turn on the expand strict matching mode. The icon will be displayed only if the corresponding label field has a value.
        expandLabel: String, // When used with expand mode, field combinations may occur.
        expandClass: String, // Customize the icon style of expand
        headClass: { type: String, default: '' }, // Meet custom head style requirements
        columnClass: { type: String }, // Meet custom table column style requirements
        visible: { type: Boolean, default: true }, // The display of certain columns in special business scenarios needs to be judged based on conditions
    },
    mixins: [Emitter],
    data() {
        return {
            // index: 0,
            // sortoperate: '',
            selectValue: this.value,
            row: {},
            hide: true,
            parentVM: undefined,
            currentWidth: this.getWidth(),
            copyWidth: this.getWidth(),
            fixedWidth: undefined, // When table height fixed and table column fixed are used together, the width of some columns needs special processing. At this time, when the right column is fixed, the width needs to be the original normal width, and the width of the scroll bar cannot be subtracted.
        };
    },
    watch: {
        value(newValue) {
            this.selectValue = newValue;
        },
        selectValue(newValue) {
            this.$emit('update:value', newValue);
        },
        width(newValue) {
            this.currentWidth = this.copyWidth = this.getWidth(newValue);
        },
        type() {
            // When using v-if, existing elements will be reused. At this time, the type will change, causing the width to change. Special processing is required to initialize the width size.
            this.currentWidth = this.copyWidth = this.getWidth();
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    mounted() {
        this.index = this.$parent.columns.indexOf(this);
    },
    methods: {
        getWidth(value) {
            if (this.type === 'selection' && !this.title)
                return value || this.width || 35;
            else if (this.type === 'expand')
                return value || this.width || 50;
            else if (this.type === 'time')
                return value || this.width || 160;
            else
                return value || this.width;
        },
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
