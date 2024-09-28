import Modal from 'cloud-ui.kubevue/src/u-modal.vue';

export default {
    name: 'u-modal',
    extends: Modal,
    props: {
        primaryButton: { type: String, default: 'okButton' },
        disablePrimaryButton: { type: Boolean, default: false },
    },
};
