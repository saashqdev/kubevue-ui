<template>
    <div>
        <h1>Advanced List</h1>
        <p>In some complex scenarios, the basic form cannot meet our needs, and some customized functions or styles need to be added to the basic form</p>
        <div>
            <h3>Scope Slot Method</h3>
            <u-table-view :data="tdata">
                <u-table-view-column :formatter="dateFormat" title="Date" width="20%" label="date" sortable></u-table-view-column>
                <u-table-view-column title="Name" width="10%" label="name"></u-table-view-column>
                <u-table-view-column title="Address" width="15%" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Address" width="10%" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Address" width="20%" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Address" width="10%" label="address" tooltip></u-table-view-column>
                <u-table-view-column :options="options" :value="value" :filter-method="filterMethod" title="Gender" width="15%" label="female" filter></u- table-view-column>
                <u-table-view-column title="Proportion" width="200">
                    <template slot-scope="scope">
                        <u-button @click="click(scope.row)">Configuration</u-button>
                    </template>
                </u-table-view-column>
            </u-table-view>
            <u-modal :visible.sync="visible">
                <div>
                    <span>{{ current.name }}</span>
                    <span style="margin-left:10px;">{{ current.address }}</span>
                </div>
            </u-modal>
        </div>
        <!-- <div>
            <h3>Table Rows can be Expanded</h3>
            <u-table-view :data="tdata">
                <u-table-view-column type="expand">
                    <template slot-scope="scope">
                        <u-info-list style="overflow:hidden;text-align:left;white-space:initial;">
                            <u-info-list-group title="Basic information">
                                <u-info-list-item label="VPC Name">{{scope.row.name}}</u-info-list-item>
                                <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                                <u-info-list-item label="Network segment">10.3.0.4/16</u-info-list-item>
                                <u-info-list-item label="Default VPC">Yes</u-info-list-item>
                                <u-info-list-item label="Creation Time">2018-02-22</u-info-list-item>
                            </u-info-list-group>
                            <u-info-list-group title="Basic Information">
                                <u-info-list-item label="VPC Name">defaultVPC</u-info-list-item>
                                <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                                <u-info-list-item label="Network Segment">10.3.0.4/16</u-info-list-item>
                                <u-info-list-item label="Default VPC">Yes</u-info-list-item>
                                <u-info-list-item label="Creation Time">2018-02-22</u-info-list-item>
                            </u-info-list-group>
                        </u-info-list>
                    </template>
                </u-table-view-column>
                <u-table-view-column width="200" title="Date" label="date" sortable type="time" time-format="YYYY-MM-DD"></u-table-view-column >
                <u-table-view-column title="Name" width="200" label="name" ></u-table-view-column>
                <u-table-view-column title="Address" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Address" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Address" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Address" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Address" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="Gender" width="200" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table -view-column>
                <u-table-view-column title="Operation" width="150">
                    <template slot-scope="scope">
                        <u-button @click="click(scope.row)">Configuration</u-button>
                    </template>
                </u-table-view-column>
            </u-table-view>
            <u-modal :visible.sync="visible">
                <div>
                    <span>{{current.name}}</span>
                    <span style="margin-left:10px;">{{current.address}}</span>
                </div>
            </u-modal>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            tdata: [{
                date: 1501977600000,
                name: 'Homer Simpson',
                address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario',
                male: 'Male',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: 'Marge Simpson',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'Female',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: 'Bart Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                male: 'Male',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: 'Lisa Simpson',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                female: 'Female',
                use: 12,
                total: 20,
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
            current: {},
            visible: false,
            show: false,
        };
    },
    methods: {
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
        dateFormat(row) {
            const value = row.date;
            const year = new Date(value).getFullYear();
            let month = new Date(value).getMonth() + 1;
            month += '';
            if (month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            this.visible = true;
            this.current = row;
        },
        tableShow() {
            this.show = true;
        },
    },
};
</script>

<style module>

</style>
