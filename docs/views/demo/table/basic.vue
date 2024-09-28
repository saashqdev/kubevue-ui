<template>
    <div>
        <h1>Basic Table</h1>
        <p>Basic tables are mainly used for information display and some commonly used functions, such as select all, sorting, filtering, etc.</p>
        <div>
            <u-table-view :data="tdata" border>
                <u-table-view-column type="selection"></u-table-view-column>
                <u-table-view-column title="Date" label="Date" sortable></u-table-view-column>
                <u-table-view-column :formatter="formatter" ellipsis title="name" label="Name"></u-table-view-column>
                <u-table-view-column title="address" label="Address" sortable></u-table-view-column>
                <u-table-view-column :options="options" :value="value" :filter-method="filterMethod" title="gender" label="Female" filter></u-table-view-column>
        </u-table-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tdata: [{
                date: '2024-05-02',
                name: 'Homer Simpson',
                address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario',
                female: 'Male',
            }, {
                date: '2024-05-04',
                name: 'Bart Simpson',
                address: 'Kubeworkz, 1932 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-01',
                name: 'Marge Simpson',
                address: 'Kubeworkz, 1933 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }, {
                date: '2024-05-03',
                name: 'Sideshow Bob',
                address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-02',
                name: 'Ned Flanders',
                address: 'Kubeworkz, 1932 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-04',
                name: 'Maggie Simpson',
                address: 'Kubeworkz, 1933 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }, {
                date: '2024-05-03',
                name: 'Marge Simpson',
                address: 'Kubeworkz, 1932 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }, {
                date: '2024-05-02',
                name: 'Homer Simpson',
                address: 'Kubeworkz, 1933 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-04',
                name: 'Lisa Simpson',
                address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }, {
                date: '2024-05-01',
                name: 'Ned Flanders',
                address: 'Kubeworkz, 1932 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-03',
                name: 'Maggie Simpson',
                address: 'Kubeworkz, 1933 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }],
            options: [
                {
                    name: 'All',
                    value: '',
                },
                {
                    name: 'Male',
                    value: 'Male',
                },
                {
                    name: 'Female',
                    value: 'Female',
                },
            ],
            value: '',
        };
    },
    methods: {
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        },
    },
};
</script>
