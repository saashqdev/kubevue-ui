import { Emitter } from 'proto-ui.kubevue';

export default {
    name: 'u-action',
    parentName: 'u-actions',
    mixins: [Emitter],
    inheritAttrs: false,
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
