import Tooltip from 'proto-ui.kubevue/src/u-tooltip.vue';
export default {
    name: 'u-tooltip',
    mixins: [Tooltip],
    props: {
        size: { type: String, default: 'normal' },
    },
};
