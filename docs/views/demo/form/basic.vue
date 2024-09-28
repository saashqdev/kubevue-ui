<template>
    <div>
        <h1>Basic Form</h1>
        <p>Form pages are used to collect or verify information from users. Basic forms are commonly used in form scenarios with few data items</p>
        <div :class="$style.form">
            <u-form :rules="rules" gap="large" @validate="canSubmit = $event.valid">
                <u-form-item label="Billing method" required>
                    <u-radios value="0">
                        <u-radio label="0">Yearly and Monthly Subscription</u-radio>
                        <u-radio label="1">Pay as you Go</u-radio>
                    </u-radios>
                </u-form-item>
                <u-form-item label="Instance Name" name="name">
                    <u-input size="huge" maxlength="63" placeholder="Composed of 1-63 letters, numbers, and underscores, starting with a letter and ending with a letter or number"></u-input>
                </u-form-item>
                <u-form-item label="" name="label">
                    <u-input size="huge" maxlength="63" placeholder="Required if label is empty"></u-input>
                </u-form-item>
                <u-form-item label="Specification">
                    <u-capsules value="0101">
                        <u-capsule value="0101">1 core 1GB</u-capsule>
                        <u-capsule value="0102">1 core 2GB</u-capsule>
                        <u-capsule value="0204">2 core 4GB</u-capsule>
                        <u-capsule value="0408">4 core 8GB</u-capsule>
                        <u-capsule value="0816">8 core 16GB</u-capsule>
                        <u-capsule value="0832">8 core 32GB</u-capsule>
                        <u-capsule value="1664">16 core 64GB</u-capsule>
                    </u-capsules>
                </u-form-item>
                <u-form-item label="Type" description="High-performance SSD cloud disk does not support snapshot function" layout="block">
                    <u-capsules value="SSD">
                        <u-capsule value="SSD">SSD Cloud Disk</u-capsule>
                        <u-capsule value="HSSD">High Performance SSD Cloud Disk</u-capsule>
                    </u-capsules>
                </u-form-item>
                <u-form-item label="Port Number">
                    <u-input size="huge" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
                </u-form-item>
                <u-form-item label="Details">
                    <u-textarea size="huge"></u-textarea>
                </u-form-item>
                <u-form-item>
                    <u-button :disabled="!canSubmit" color="primary">Create Now</u-button>
                </u-form-item>
            </u-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                name: [
                    { type: 'string', required: true, trigger: 'input + blur', message: 'Please enter the instance name' },
                ],
                label: [
                    { type: 'string', required: true, trigger: 'input + blur', message: 'Please enter label' },
                ],
            },
            canSubmit: false,
        };
    },
};
</script>

<style module>
.form {
    margin-top: 50px;
}
</style>
