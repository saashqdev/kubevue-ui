<template>
    <div>
        <h1>Select List</h1>
        <div :class="$style.part">
            <h3>List Selection</h3>
            <u-list-view>
                <u-list-view-item>Water Cup</u-list-view-item>
                <u-list-view-item>Nuts</u-list-view-item>
                <u-list-view-item>Towels</u-list-view-item>
                <u-list-view-item>Sofa</u-list-view-item>
            </u-list-view>
        </div>
        <div :class="$style.part">
            <h3>Tree Structure List Selection</h3>
            <u-tree-view :data="[
                { text: 'Folder 1', type: 'directory', children: [
                    { text: 'Folder 1.1', type: 'directory' },
                    { text: 'Folder 1.2', type: 'directory', children: [
                        { text: 'File 1.2.1', type: 'file' },
                        { text: 'File 1.2.2', type: 'file' },
                    ] },
                    { text: 'File 1.3', type: 'file' },
                    { text: 'File 1.4', type: 'file' },
                ] },
                { text: 'Folder 2', type: 'directory' },
                { text: 'Folder 3', type: 'directory', children: [
                    { text: 'File 3.1', type: 'file' },
                    { text: 'File 3.2', type: 'file' },
                ] },
            ]">
                <span slot="text" slot-scope="{ node, expanded, text }">
                    {{ node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄' }}
                    {{ text }}
                </span>
            </u-tree-view>
        </div>
        <div :class="$style.part">
            <h3>Capsule Selection List</h3>
            <u-capsules>
                <u-capsule size="small">6</u-capsule>
                <u-capsule size="small" label="12% off">7</u-capsule>
                <u-capsule size="small" label="12% off">8</u-capsule>
                <u-capsule size="small" label="12% off">9</u-capsule>
                <u-capsule size="small" label="12% off">1 year</u-capsule>
                <u-capsule size="small" label="10% off">2 years</u-capsule>
            </u-capsules>
        </div>
        <div :class="$style.part">
            <h3>Single-Select List</h3>
            <u-linear-layout>
                <u-select>
                    <u-select-item>Apple</u-select-item>
                    <u-select-item>Banana</u-select-item>
                    <u-select-item>Cake</u-select-item>
                </u-select>
                <u-select>
                    <u-select-item>Please select</u-select-item>
                    <u-select-item>Apple</u-select-item>
                    <u-select-item>Banana</u-select-item>
                    <u-select-item>Cake</u-select-item>
                </u-select>
            </u-linear-layout>
        </div>
        <div :class="$style.part">
            <h3>Multiple Selections to Filter the List</h3>
            <u-multi-select :filter-method="filterMethod" :data="options" v-model="value1" filter size="large"></u-multi-select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: undefined,
            value1: [],
            options: [
                { text: 'Alabama', value: 'Alabama' },
                { text: 'Alaska', value: 'Alaska' },
                { text: 'Arizona', value: 'Arizona' },
                { text: 'Arkansas', value: 'Arkansas' },
                { text: 'California', value: 'California' },
                { text: 'Colorado', value: 'Colorado' },
                { text: 'Connecticut', value: 'Connecticut' },
                { text: 'Delaware', value: 'Delaware' },
                { text: 'Florida', value: 'Florida' },
                { text: 'Georgia', value: 'Georgia' },
                { text: 'Hawaii', value: 'Hawaii' },
                { text: 'Idaho', value: 'Idaho' },
                { text: 'Illinois', value: 'Illinois' },
            ],
        };
    },
    methods: {
        filterMethod(data, query) {
            const tdata = data.filter((item) => {
                if (item.value.toLowerCase().indexOf(query.toLowerCase()) > -1)
                    return item;
                else
                    return false;
            });
            return tdata;
        },
    },
};
</script>

<style module>
.part {
    width: 60%;
    margin-bottom: 50px;
}
</style>