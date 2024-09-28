<template>
    <div>
        <h1>Advanced Forms</h1>
        <p>Advanced forms are usually used in form scenarios with a large number of data items and complex scenarios</p>
        <div :class="$style.part">
            <h3>Inline Form</h3>
                <u-form layout="inline" label-size="auto">
                    <u-form-item label="Status">
                        <u-input maxlength="63" placeholder="Authenticating"></u-input>
                    </u-form-item>
                    <u-form-item label="Username">
                        <u-input maxlength="63" placeholder="Please enter username"></u-input>
                    </u-form-item>
                    <u-form-item label="Contact Number">
                        <u-input maxlength="63" placeholder="Please enter contact number"></u-input>
                    </u-form-item>
                    <u-form-item>
                        <u-button color="primary">Query</u-button>
                    </u-form-item>
                </u-form>
        </div>
        <div :class="$style.part">
            <h3>Form Validation</h3>
            <u-form ref="form" :rules="rules1" gap="large">
                <u-form-item label="Username" name="username">
                    <u-input v-model="model.username" size="huge" maxlength="12" placeholder="4~12 characters"></u-input>
                </u-form-item>
                <u-form-item label="Email" name="email">
                    <u-input v-model="model.email" size="huge" maxlength="24" placeholder="Please enter your email"></u-input>
                </u-form-item>
                <u-form-item label="Mobile Phone Number" name="phone">
                    <u-input v-model="model.phone" size="huge" maxlength="11" placeholder="Please enter your mobile phone number"></u-input>
                </u-form-item>
                <u-form-item>
                    <u-button color="primary" @click="submit()">Submit</u-button>
                </u-form-item>
            </u-form>
        </div>
        <div :class="$style.part">
            <h3>Form within a Table</h3>
            <u-table :class="$style.table">
                <thead slot="thead">
                    <tr>
                        <th :class="$style.th_label">Name</th>
                        <th :class="$style.th_label">Age</th>
                        <th :class="$style.th_label">Date of Birth</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr is="u-form" v-for="(add, index) in addList" v-if="addList.length > 0" :key="index" label-size="auto" gap="large" layout="none" @validate="add.canSubmit = $event.valid">
                        <!-- <u-form label-size="auto" layout="none" @validate="add.canSubmit = $event" > -->
                        <td :class="$style.td">
                            <u-form-item :rules="rules.name" placement="bottom" class="$style.item">
                                <u-input v-model="add.name" size="normal"></u-input>
                            </u-form-item>
                        </td>
                        <td :class="$style.td">
                            <u-form-item :rules="rules.age" placement="bottom" class="$style.item">
                                <u-input v-model="add.age" size="normal"></u-input>
                            </u-form-item>
                        </td>
                        <td :style="{overflow:'visible'}">
                            <u-form-item class="$style.item">
                                <u-date-picker :date.sync="add.date"></u-date-picker>
                            </u-form-item>
                        </td>
                        <td>
                            <u-form-item class="$style.item">
                                <u-link size="small" @click="addList.splice(index,1)">
                                    Delete
                                </u-link>
                            </u-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td :class="$style.add" colspan="4"><u-link @click="addInfo">Add</u-link></td>
                    </tr>
                </tbody>
            </u-table>
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
                age: [
                    { type: 'string', required: true, trigger: 'input + blur', message: 'Please enter your age' },
                ],
            },
            canSubmit: false,
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules1: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter username' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: 'Please enter 4~12 characters' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your email' },
                    { type: 'email', trigger: 'blur', message: 'The email format is incorrect' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: 'Mobile phone number format is incorrect' },
                ],
            },
            addList: [
                { name: 'Homer Simpson', age: '20', date: '1992-09-10' },
                { name: 'Marge Simpson', age: '22', date: '1990-2-13' },
            ],
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('Submission successful'))
                .catch((err) => { console.log(err); });
        },
        addInfo() {
            this.addList.push({ name: '', age: '', date: '' });
        },
    },
};
</script>

<style module>
.form {
    margin-top: 50px;
}
.table[class] {
    width: 45%;
}
.table .td[class] {
    padding-bottom: 30px;
}
.add {
    text-align: center;
}
.part {
    margin-top: 50px;
    margin-left: 50px;
}
</style>
