# Table View

## Example
### Basic Form
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border>
            <u-table-view-column title="Date" label="Date"></u-table-view-column>
            <u-table-view-column ellipsis title="Name" label="Name"></u-table-view-column>
            <u-table-view-column ellipsis title="address" label="Address" sortable>
                <template slot-scope="scope">
                    {{scope.row.address}}
                </template>
            </u-table-view-column>
            <u-table-view-column title="Gender" label="Female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
        </u-table-view>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2024-05-02',
                name: 'Homer Simpson',
                address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-04',
                name: 'Marge Simpson',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-01',
                name: 'Bart Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                female: 'female',
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                female: 'male',
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                female: 'male',
            }],
            options: [
                {
                    name: 'All',
                    value: '',
                },
                {
                    name: 'Male',
                    value: 'Male'
                },
                {
                    name: 'Female',
                    value: 'Female'
                },
            ],
            value: ''
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        },
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
    },
};
</script>
```


#### Display Limit Rows of Data by Default

The table column `pattern` attribute can be set to the `limit` value. The number of displayed items can be controlled by setting the `limit` attribute
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border pattern="limit" :limit="4">
            <u-table-view-column type="expand" default-text="">
                <template slot="expandContent">
                    <span>11</span>
                </template>
            </u-table-view-column>
            <u-table-view-column title="Date" label="Date" sortable></u-table-view-column>
            <u-table-view-column ellipsis title="Name" label="Name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column ellipsis title="address" label="Address" sortable>
                <template slot-scope="scope">
                    {{scope.row.address}}
                </template>
            </u-table-view-column>
            <u-table-view-column title="Gender" label="Female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
        </u-table-view>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2024-05-02',
                name: 'Homer Simpson',
                address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-04',
                name: 'Marge Simpson',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-01',
                name: 'Bart Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                female: 'female',
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                female: 'male',
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                female: 'female',
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                female: 'female',
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                female: 'male',
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                female: 'male',
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                female: 'female',
            }],
            options: [
                {
                    name: 'All',
                    value: '',
                },
                {
                    name: 'Male',
                    value: 'Male'
                },
                {
                    name: 'Female',
                    value: 'Female'
                },
            ],
            value: ''
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        },
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
    }
};
</script>
```

#### Using table components in u-subtabs
``` vue
<template>
    <u-subtabs value="B">
        <u-subtab title="Template" value="A">
            <u-table-view :data="list">
                <u-table-view-column title="name" width="30%" label="Name">
                </u-table-view-column>
                <u-table-view-column ellipsis title="Available Region" label="region"></u-table-view-column>
                <u-table-view-column title="IP" label="IP" width="200px" sortable></u-table-view-column>
            </u-table-view>
        </u-subtab>
        <u-subtab title="Style" value="B">
            <u-table-view :data="tdata">
                <u-table-view-column label="Date">
                    <div slot="headerTitle">
                        Date
                    </div>
                </u-table-view-column>
                <u-table-view-column ellipsis title="Name" label="Name"></u-table-view-column>
                <u-table-view-column title="address" label="Address" width="200px" sortable></u-table-view-column>
            </u-table-view>
        </u-subtab>
    </u-subtabs>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2024-05-02',
                name: 'Homer Simpson',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
            }, {
                date: '2024-05-04',
                name: 'Marge Simpson',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario'
            }, {
                date: '2024-05-01',
                name: 'Bart Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario'
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario'
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }],
            list: [
                {
                    name: 'dash',
                    region: 'Availability Zone A',
                    IP: 'Private network 10.18.203.14',
                },
                {
                    name: 'asdf',
                    region: 'Availability Zone B',
                    IP: 'Private network 10.177.0.2',
                },
                {
                    name: 'wert',
                    region: 'Availability Zone A',
                    IP: 'Private network 10.18.203.10',
                },
                {
                    name: 'fghh',
                    region: 'Availability Zone A',
                    IP: 'Private network 10.18.203.9',
                },
                {
                    name: 'zxcv',
                    region: 'Availability Zone B',
                    IP: 'Private network 10.18.203.8',
                },
            ],
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        }
    }
};
</script>
```

#### Customize Display/Hide
In business, it is often the case that the visibility of a column is based on a variable. In order to ensure that the order of the columns does not change, the `visible` property is used to control the visibility of the column.
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border max-height="400">
            <u-table-view-column :visible="isShow" label="Date">
                <div slot="headerTitle">
                    Date
                </div>
            </u-table-view-column>
            <u-table-view-column ellipsis title="Name" label="Name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column title="Address" label="Address" width="200px" sortable></u-table-view-column>
        </u-table-view>
        <u-button style="margin-top: 10px;" @click="toggle">Toggle</u-button>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2024-05-02',
                name: 'Homer Simpson',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
            }, {
                date: '2024-05-04',
                name: 'Marge Simpson',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario'
            }, {
                date: '2024-05-01',
                name: 'Bart Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario'
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario'
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }],
            isShow: false,
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        },
        toggle() {
            this.isShow = !this.isShow;
        },
    }
};
</script>
```

#### Sorting and Formatting
To sort a column, you need to set the `sortable` attribute for this column, pass in `slot='headerTitle'` to customize the header, and for the date column, you can add the `type="time"` attribute to the `u-table-view-column` tag to convert the timestamp into the YYYY-MM-DD HH:mm:ss format. If you want to customize the date display format, you can customize the date format by passing in the `timeFormat="YYYY-MM-DD"` attribute.
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border max-height="400">
            <u-table-view-column label="Date">
                <div slot="headerTitle">
                    date
                </div>
            </u-table-view-column>
            <u-table-view-column ellipsis title="Name" label="Name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column title="address" label="Address" width="200" sortable></u-table-view-column>
            <u-table-view-column title="Date of Birth" label="Date" type="time"></u-table-view-column>
        </u-table-view>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2024-05-02',
                name: 'Homer Simpson',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                date: 728524800000,
            }, {
                date: '2024-05-04',
                name: 'Marge Simpson',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                date: 696902400000,
            }, {
                date: '2024-05-01',
                name: 'Bart Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                date: 665366400000,
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                date: 665366400000,
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                date: 665366400000,
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                date: 728524800000,
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                date: 696902400000,
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                date: 665366400000,
            }, {
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                date: 760060800000,
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                date: 728524800000,
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                date: 665366400000,
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                date: 760060800000,
            }],
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        }
    }
};
</script>
```


#### Custom Sorting Method
To customize the sorting method in synchronous mode, just pass in the `sortMethod` attribute. Click to sort. To asynchronously obtain backend data, you need to pass in the `sortRemoteMethod` method. Clicking to sort will automatically execute the `sortRemoteMethod` method. By default, a column is sorted. You need to add the `defaultSort` attribute on `u-table-view`.
``` vue
<template>
    <u-table-view :data="tdata" :default-sort="defaultSort" @sort-change="sortChange">
        <u-table-view-column title="Date" label="Date" sortable :sort-method="sortMethod"></u-table-view-column>
        <u-table-view-column title="Name" label="Name"></u-table-view-column>
        <u-table-view-column title="Address" label="Address"></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2024-05-02',
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
            }, {
                date: '2024-05-04',
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario'
            }, {
                date: '2024-05-01',
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }],
            defaultSort: {
                title: 'Date',
                order: 'asc',
            },
        };
    },
    methods: {
        sortMethod(a, b) {
            console.log(arguments)
            let va = new Date(a).getTime();
            let vb = new Date(b).getTime();
            if (va -vb < 0)
                return true;
            else
                return false;
        },
        sortChange(value) {
            console.log(value.column, value.label, value.order);
        },
    }
};
</script>
```

#### Delete the Selected Row

For table columns whose `type` type is `selection`, you can control the selection state of `checkbox`. The `selected` attribute of each object passed in `data` indicates whether it is selected by default, and `disabled` indicates whether it is selectable.

You can also specify the `headSelection` attribute on the table column to control whether the list can be fully selected.

``` vue
<template>
    <u-linear-layout direction="vertical">
            <u-button color="primary" style="width:160px;" :disabled="checkedData.length === 0" @click="delData">Delete</u-button>
            <u-table-view :data="tdata" @selection-change="selectionChange($event)">
                <u-table-view-column type="selection"></u-table-view-column>
                <u-table-view-column title="Date" label="Date" type="time"></u-table-view-column>
                <u-table-view-column title="Name" label="Name" ></u-table-view-column>
                <u-table-view-column title="Address" label="Address" ></u-table-view-column>
            </u-table-view>
    </u-linear-layout>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1521551897133,
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                selected: true,
            }, {
                date: 1521551897133,
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                disabled: true,
            }, {
                date: 1521551897133,
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: 1521551897133,
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                disabled: true,
            }],
            allChecked: false,
            checkedData: [],
        };
    },
    watch:
        allChecked(newValue) {
            console.log(newValue);
        },
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        },
        selectionChange(data) {
            console.log(data);
            this.checkedData = data;
        },
        delData() {
            let indexes = undefined;
            this.checkedData.forEach((item) => {
                this.tdata.some((checked, index) => {
                    if (item.name === checked.name) {
                        indexes = index;
                        return true;
                    }
                });
                if (indexs !== undefined)
                    this.tdata.splice(indexes, 1);
            });
            this.checkedData = [];
        },
    }
};
</script>
```

#### Selection with Title
Just add the `title` attribute to the `type='selection'` column normally
``` vue
<template>
    <u-linear-layout direction="vertical">
        <u-table-view :data="tdata" @selection-change="selectionChange($event)">
            <u-table-view-column type="selection" title="Selection" width="100"></u-table-view-column>
            <u-table-view-column title="Date" label="Date" type="time"></u-table-view-column>
            <u-table-view-column title="Name" label="Name" ></u-table-view-column>
            <u-table-view-column title="Address" label="Address" ></u-table-view-column>
        </u-table-view>
    </u-linear-layout>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1521551897133,
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                selected: true,
            }, {
                date: 1521551897133,
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                disabled: true,
            }, {
                date: 1521551897133,
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario'
            }, {
                date: 1521551897133,
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                disabled: true,
            }],
            allChecked: false,
            checkedData: [],
        };
    },
    watch:
        allChecked(newValue) {
            console.log(newValue);
        },
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        },
        selectionChange(data) {
            console.log(data);
            this.checkedData = data;
        },
    }
};
</script>
```

#### Single Choice
The first column of the custom table is a radio button, just set `type='radio'`
``` vue
<template>
    <u-linear-layout direction="vertical">
        <u-table-view :data="tdata" show-color radio-value-field="id" :radioValue.sync="radioValue" @radio-change="selectionChange($event)">
            <u-table-view-column type="radio" ellipsis width="56"></u-table-view-column>
            <u-table-view-column title="Date" label="Date" type="time"></u-table-view-column>
            <u-table-view-column title="Name" label="Name" ></u-table-view-column>
            <u-table-view-column title="Address" label="Address" ></u-table-view-column>
        </u-table-view>
    </u-linear-layout>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1521551897133,
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                selected: true,
                id: '1',
            }, {
                date: 1521551897133,
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                id: '2',
            }, {
                date: 1521551897133,
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                id: '3',
            }, {
                date: 1521551897133,
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                id: '4',
            }],
            allChecked: false,
            checkedData: [],
            radioValue: '1',
        };
    },
    watch:
        allChecked(newValue) {
            console.log(newValue);
        },
        radioValue(newValue) {
            console.log(newValue);
        },
    },
    methods: {
        formatter(row, column) {
            if (row.name === 'Homer Simpson')
                return 'Funny One';
            else
                return row.name;
        },
        selectionChange(data) {
            console.log(data);
            this.checkedData = data;
        },
    }
};
</script>
```

#### Filtering Asynchronous Data
For a table with data filtering function, if you want to filter and load data asynchronously, please listen to the `filter-change` method, send an asynchronous request to get data, and change `tdata`.

``` vue
<template>
    <u-table-view :data="tdata" @filter-change="filterChange">
        <u-table-view-column title="Date" label="Date" sortable :formatter="dateFormat"></u-table-view-column>
        <u-table-view-column title="Name" label="Name" ></u-table-view-column>
        <u-table-view-column title="Address" label="Address" ></u-table-view-column>
        <u-table-view-column title="Gender" label="Female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1501977600000,
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                female: 'male',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                female: 'male',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                female: 'female',
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
                    value: 'Male'
                },
                {
                    name: 'Female',
                    value: 'Female'
                },
            ],
            value: ''
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        filterChange(data){
            console.log(data);
        }
    }
};
</script>
```
#### Scoped Slot Mode
In order to customize the content display of cells, you can use scope slots to get the current row content through `slot-scope="{row}"` in the `u-table-view-column` tag, and customize the cell content display
``` vue
<template>
    <div>
        <u-table-view :data="tdata" v-show="show">
            <u-table-view-column title="Date" width="20%" label="Date" sortable :formatter="dateFormat"></u-table-view-column>
            <u-table-view-column title="Name" width="10%" label="Name" ></u-table-view-column>
            <u-table-view-column title="Address" width="15%" label="Address"></u-table-view-column>
            <u-table-view-column title="Address" width="10%" label="Address"></u-table-view-column>
            <u-table-view-column title="Address" width="20%" label="Address"></u-table-view-column>
            <u-table-view-column title="Address" width="10%" label="Address"></u-table-view-column>
            <u-table-view-column title="Gender" width="15%" label="Female" filter :options="options" :value="value" :filter-method="filterMethod"></u- table-view-column>
            <u-table-view-column title="Proportion" width="200">
                <template slot-scope="{row}">
                    <u-button @click="click(row)">Configuration</u-button>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal :visible.sync="visible">
            <div>
                <span>{{current.name}}</span>
                <span style="margin-left:10px;">{{current.address}}</span>
            </div>
        </u-modal>
        <u-button @click="tableShow"> Show </u-button>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1501977600000,
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                female: 'male',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: 'Ned Flanders',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                female: 'male',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario',
                female: 'female',
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
                    value: 'Male'
                },
                {
                    name: 'Female',
                    value: 'Female'
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            console.log('click');
            console.log(row);
            this.visible = true;
            this.current = row;
        },
        tableShow() {
            this.show = !this.show;
        }
    }
};
</script>
```

#### Loading Status
Set the `loading` property to display the loading status of the component, and pass the custom loading text to the `loadText` property
``` vue
<template>
<div>
    <u-table-view :data="tdata" loading load-text="Loading..."">
        <u-table-view-column title="Date" label="Date" sortable></u-table-view-column>
        <u-table-view-column title="Name" label="Name"></u-table-view-column>
        <u-table-view-column title="Address" label="Address" ></u-table-view-column>
    </u-table-view>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2024-05-03',
                name: 'John Doe',
                address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario'
            }],
        };
    }
};
</script>
```

#### Data is an Empty Array to Customize the Display Text
Customize the empty state text of the table through the attribute `noDataText` or custom named slot `slot="no-data-text"`
``` vue
<template>
<div>
    <u-table-view :data="tdata" >
        <u-table-view-column type="selection"></u-table-view-column>
        <u-table-view-column title="Date" label="Date" sortable></u-table-view-column>
        <u-table-view-column title="Name" label="Name"></u-table-view-column>
        <u-table-view-column title="Address" label="Address" ></u-table-view-column>
        <div slot="no-data-text">
            <span style="margin-right:10px">No data yet,</span>
            <u-link>Please refresh the page</u-link>
        </div>
    </u-table-view>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [],
        };
    }
};
</script>
```

#### Table Rows can be Expanded

Usage scenario: The table has too much content to display. It should be noted that the custom content in expand will be affected by the style added to the table, such as no line break, centering, etc. If it is not the desired effect, you need to customize it to eliminate the influence of the parent element on the custom element content style.
``` vue
<template>
    <div>
        <u-table-view :data="tdata">
            <u-table-view-column type="expand" default-text="">
                <template slot="expandContent" slot-scope="scope">
                    <u-info-list style="overflow:hidden;text-align:left;white-space:initial;">
                        <u-info-list-group title="Basic Information">
                            <u-info-list-item label="VPC Name">{{scope.row.name}}</u-info-list-item>
                            <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                            <u-info-list-item label="Network Segment">10.3.0.4/16</u-info-list-item>
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
            <u-table-view-column title="Date" label="Date" sortable type="time" time-format="YYYY-MM-DD"></u-table-view-column>
            <u-table-view-column title="Name" label="Name" ></u-table-view-column>
            <u-table-view-column title="Gender" label="Female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
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
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1501977600000,
                name: 'Dave Cork',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                female: 'male',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: 'Ned Flanders',
                address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                female: 'female',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: 'Lisa Simpson',
                address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                female: 'male',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: 'John Doe',
                address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario',
                female: 'female',
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
                    value: 'Male'
                },
                {
                    name: 'Female',
                    value: 'Female'
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            console.log('click');
            console.log(row);
            this.visible = true;
            this.current = row;
        },
        tableShow() {
            this.show = true;
        }
    }
};
</script>
```

#### Advanced Usage of Expand
By default, only the content in an icon will be expanded. If you do not want this limitation, please pass the `expandPattern` property to `u-table-view`. As long as the value is not equal to `'toggle'`, it is OK. It is recommended to pass `'normal'`. By default, to expand the first row, you need to set the `'expanded'` value to `true` in the first row of data.
```Vue
<template>
    <u-table-view :show-header="false" expand-pattern="normal" :data="tdata" :row-class-name="rowClassName" @toggle-expand="toggleExpand" border>
        <u-table-view-column title="Date" label="Date"></u-table-view-column>
        <u-table-view-column title="Details" column-class="info" label="Info"></u-table-view-column>
        <u-table-view-column title="Icon" expand-class="infoIcon" type="expand" label="Listlogs" default-text="" expand-strict expand-icon="up-down">
            <template slot="expandContent" slot-scope="scope">
                <div>
                    <p v-for="item in scope.row.listlogs" v-text="item"></p>
                </div>
            </template>
        </u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data() {
        return {
            tdata: [
                {
                    date: '2018-04-19 14:54:02',
                    info: 'Instance creation completed',
                    listlogs:[
                        '2018-04-19 14:52:49 Instance creation started..',
                        '2018-04-19 14:52:49 Cloud host creation started...',
                        '2018-04-19 14:53:20 Cloud host creation completed, cloud host UUID: 05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                        '2018-04-19 14:53:20 Cloud disk creation started...',
                    ],
                    expanded: true,
                },
                {
                    date: '2018-05-19 14:54:02',
                    info: 'Instance creation completed',
                    listlogs:[
                        '2018-05-19 14:52:49 Instance creation started..',
                        '2018-05-19 14:52:49 Cloud host creation started...',
                        '2018-05-19 14:53:20 Cloud host creation completed, cloud host UUID: 05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                        '2018-05-19 14:53:20 Cloud disk creation started...',
                    ],
                },
                {
                    date: '2018-06-19 14:54:02',
                    info: 'Instance creation completed',
                    listlogs:[
                        '2018-06-19 14:52:49 Instance creation started..',
                        '2018-06-19 14:52:49 Cloud host creation started...',
                        '2018-06-19 14:53:20 Cloud host creation completed, cloud host UUID: 05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                        '2018-06-19 14:53:20 Cloud disk creation started...',
                    ],
                },
                {
                    date: '2018-07-19 14:54:02',
                    info: 'Instance creation completed',
                },
            ],
            currentIndex: 0,
            direction: '', }
    },
    methods: {
        toggleExpand(e) {
            // {index, direction, row} index indicates the row number, direction indicates the direction, and row indicates all data objects in the current row
            this.currentIndex = e.index;
            this.direction = e.direction;
        },
        rowClassName (index, row) {
            if (index === this.currentIndex && this.direction === 'down') {
                return 'infoRow';
            }
            return '';
        }
    }
}
</script>
<style module>
:global(.infoRow)[class]{
    background: #d8d8d8;
}
:global(.infoIcon){
    margin-left: 5px;
}
:global(.info){
    text-align: center;
}
</style>
```

#### Fixed Left and Right Columns

Use scenario: too many columns in a table
``` vue
<template>
    <div>
        <u-table-view :data="tdata" width="800" border :loading="loading">
            <u-table-view-column width="200" fixed="left" title="Date" label="Date" sortable type="time" time-format="YYYY-MM-DD"></u- table-view-column>
            <u-table-view-column title="Name" width="200" label="Name" ></u-table-view-column>
            <u-table-view-column title="Address" width="200" label="Address"></u-table-view-column>
            <u-table-view-column title="Address" width="200" label="Address"></u-table-view-column>
            <u-table-view-column title="Address" width="200" label="Address"></u-table-view-column>
            <u-table-view-column title="Address" width="200" label="Address"></u-table-view-column>
            <u-table-view-column title="Address" width="200" label="Address"></u-table-view-column>
            <u-table-view-column title="Gender" width="200" label="Female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table -view-column>
            <u-table-view-column title="Operation" fixed="right" width="150">
                <template slot-scope="scope">
                    <u-button @click="click(scope.row)">Configuration</u-button>
                </template>
            </u-table-view-column>
            <div slot="no-data-text">
                <span style="margin-right:10px">No data yet,</span>
                <u-link>Please refresh the page</u-link>
            </div>
        </u-table-view>
        <u-modal :visible.sync="visible">
            <div>
                <span>{{current.name}}</span>
                <span style="margin-left:10px;">{{current.address}}</span>
            </div>
        </u-modal>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [],
            options: [
                {
                    name: 'All',
                    value: '',
                },
                {
                    name: 'Male',
                    value: 'Male'
                },
                {
                    name: 'Female',
                    value: 'Female'
                },
            ],
            value: '',
            current: {},
            visible: false,
            show: false,
            loading: false,
        };
    },
    created() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.tdata= [
                {
                    date: 1501977600000,
                    name: 'Dave Cork',
                    address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario',
                    female: 'male',
                    use: 12,
                    total: 20,
                }, {
                    date: 1502236800000,
                    name: 'Ned Flanders',
                    address: 'Binjiang District, Hangzhou City, Zhejiang Province',
                    female: 'female',
                    use: 12,
                    total: 20,
                }, {
                    date: 1503100800000,
                    name: 'Lisa Simpson',
                    address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario',
                    female: 'male',
                    use: 12,
                    total: 20,
                }, {
                    date: 1503964800000,
                    name: 'John Doe',
                    address: 'Binjiang District, Hangzhou City, Zhejiang Province',
                    female: 'female',
                    use: 12,
                    total: 20,
                },
                {
                    date: 1503964800000,
                    name: 'John Doe',
                    address: 'Binjiang District, Hangzhou City, Zhejiang Province',
                    female: 'female',
                    use: 12,
                    total: 20,
                },
                {
                    date: 1503964800000,
                    name: 'John Doe',
                    address: 'Binjiang District, Hangzhou City, Zhejiang Province',
                    female: 'female',
                    use: 12,
                    total: 20,
                },
                {
                    date: 1503964800000,
                    name: 'John Doe',
                    address: 'Binjiang District, Hangzhou City, Zhejiang Province',
                    female: 'female',
                    use: 12,
                    total: 20,
                },
                {
                    date: 1503964800000,
                    name: 'John Doe',
                    address: 'Binjiang District, Hangzhou City, Zhejiang Province',
                    female: 'female',
                    use: 12,
                    total: 20,
                },
            ]
        }, 2000);
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            console.log('click');
            console.log(row);
            this.visible = true;
            this.current = row;
        },
        tableShow() {
            this.show = true;
        }
    }
};
</script>
```


TableView API
### Attrs/Props

#### View Related Properties

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| color | String | | When the value is `'light'`, the table header background is `#fff` |
| visible| Boolean | `true` | Is the table visible |
| showHeader| Boolean | `true` | Whether to display the table header |
| layout| String | `'fixed'` | Table layout, optional values: `'fixed'`, `'auto'` |
| border | Boolean | `'false'` | Whether to display the table border |
| width | Integer/String | | Width of the table component |
| height| Integer/String | | The height of the table component |
| maxHeight| Integer/String | | Maximum height of table component |
| minHeight| Integer/String | | Minimum height of table component |
| radioTextField | String |`'radioText'`| Radio button text field key |
| radioValueField | String/Number |`'radioLabel'`| Radio button value key |
| defaultText | String | `'-'` | The default content displayed when the cell value is empty. Here is to set the entire table |
| loading| Boolean | `false` | Whether to display loading status information |
| loadText| String | `''` | Text message prompt during loading |
| noDataText | String | `''` | Information displayed when the `data` attribute is an empty array |
| pattern| String | `'normal'` | Setting the value to `'limit'` supports displaying a specified number of data. Optional values: `'normal'`, `'limit'` |
| limit| String, Number | `5` | When the `pattern` attribute value is `'limit'`, the default number of displayed data |
| limitText| String | `'View more'` | When the `pattern` attribute value is `'limit'`, the default prompt content displayed in the last row of the table when the number of data is greater than the value of the `'limit'` attribute |
| allText| String | `'Collapse'`| When the `pattern` attribute value is `'limit'`, the default prompt content displayed in the last row of the table after all data is displayed |
| expandPattern | String | `'toggle'` | Specifies the expansion behavior of columns whose `type` attribute value is `'expand'`. Optional values: `'toggle'`, `'normal'`. When the value is `'toggle'`, other rows will be retracted after one row is expanded. When the value is `'normal'`, every row can be expanded. |
| rowClassName | Function | | Add a custom class function to the table row. The first parameter indicates the index, i.e. the row number. The second parameter is the current row data of the table. |
| xScroll | Boolean | `false` | Whether the table can scroll horizontally when the mouse is rolled |
| showColor | Boolean | `false` | Whether to display the background color of the selected row |

#### Data Related Properties

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | Title of the table |
| data | Array | | The default data to be displayed in the table |
| allChecked.sync | Boolean | `false` | Are all checked by default? |
| defaultSort | Object\< title, order \> | | Default sorting column and order value, where the `title` attribute specifies the default sorting column. `order` specifies the default sorting order, optional values: `'desc'`, `'asc'`. |
| defaultFilter | Object\< title, value, column \> | | By default, a column is used for filtering. The `title` attribute specifies the default filtered column, and `value` specifies the default filtered value. This attribute can be used to specify when there are multiple filter columns. It can be left unspecified when there is only one column. The first filter column will be used by default. |
| forceFilter | Boolean | `false` | When data changes, if there is a data filter column, is filtering required? The default is no filtering. |
| forceSort | Boolean | `false` | When data changes, there is data sorting. Is it necessary to sort? The default is not necessary |
| sortMethod | Function | | Custom sorting method. The first parameter is the previous row of data in the column. The second parameter is the next row of data in the column. The method needs to return a value. The return type is `Boolean`|
| sortRemoteMethod | Function| | Asynchronously execute the sorting method passed in. The first parameter is the column field, the second parameter is the sorting order, and the third parameter is the column object. |
| filterMethod | Function | | Custom filtering method, the first parameter is the column data, the second parameter is the column instance |


### Slots

#### (default)

Insert the `<u-table-view-column>` child component.

#### Title

Customize table title

#### Limit-Text

When the `pattern` attribute value is `'limit'`, the default prompt content displayed in the last row of the table when the number of data is greater than the value of the `'limit'` attribute

#### All-Text

When the `pattern` attribute value is `'limit'`, the default prompt content displayed in the last row of the table after all data is displayed

#### No-Data-Text

Customize the text displayed when the data is empty

#### expandIcon

Replace the default toggle icon when the `type` attribute value in the column is `'expand'`

### Events
#### @sort-change

Click on the sorting label to trigger

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.column | Object | The instance of the current column `column`, which contains all the information of the current column. It is actually an instance of `table-view-column` |
| $event.label | String | The label value of the current column |
| $event.order | String | Current column sort value: `'asc'` or `'desc'` |

#### @filter-change

Click the filter tag to trigger

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.column | Object | The instance of the current column `column`, which contains all the information of the current column. It is actually an instance of `table-view-column` |
| $event.value | String | The selected tag value |
| $event.index | Number | The index value of the current column |


#### @selection-change

Click on the checkbox to trigger

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Array | Data collection of selected rows |

#### @radio-change

Click on the radio trigger

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | Radio value of the selected row |
| $event.row | Object | The value of the selected row |
| $event.index | Number | The index of the selected row |

#### @row-click

Click on the table row to trigger

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | Object | Data collection of the selected row |
| $event.index | Int | The index value of the row data |

#### @toggle-expand

Fired when a column is expanded or retracted

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Int | The data index of the selected row |
| $event.direction | String | The direction of the icon, in which direction to expand or collapse |
| $event.row | Object | Data of the selected row |

#### @mouseenter

The mouse on a row of data in the table is in the mouseenter

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Int | Row data index |

#### @mouseleave

The mouse of a row of data in the table is in mouseleave

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Int | Row data index |

## TableViewColumn API
Props/Attrs

#### View related properties

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| width | String | | Refers to the width of the column |
| border | Boolean | `false` | Whether to have a border, default is none |
| fixed | String | | Fix the column to the left or right, see the example `Fix left and right columns`, optional values: `'left'`,`'right'`,`''` |
| ellipsis | Boolean | `false` | Whether to wrap, the default is to wrap, the value is `true` to enable no wrap, and the excess part will be displayed as ellipsis |
| defaultText | String | `'-'` | The default content displayed when the cell value is empty. Here is to set the display of a column |
| headClass | String | `''` | Add a custom `'class'` name to the table header `'th'` to facilitate customizing the style of the table header |
| placement | String | `'bottom-start'` | The pop-up direction of the filterable column option pop-up layer. Optional values: `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start'`,`'left-end'`, `'right-start'`, `'right-end'` |
| expandIcon | String | `'right-down'` | The expansion direction of the icon `icon`. Two types are provided. One is the default right click down `'right-down'`, and the other is the default down click up `'up-down'` |
| expandStrict | Boolean | `false` | When the `type` attribute value is `'expand'`, enable the `'expand'` strict matching mode. The `icon` will only be displayed if the corresponding `label` field has a value |
| expandLabel | String | | When the `type` attribute value is `'expand'`, when a combination form appears, this field is used to specify the attribute field that `icon` depends on for expansion |
| expandClass | String | | Defines the style of `icon` when the `type` attribute value is `'expand'` |
| visible | Boolean | `true` | Controls whether the column is shown/hidden |
| horizontal | String | `` | Controls the alignment of the column. The default is left-aligned. |
| columnClass | String | `` | Customize column style, add class to a column |

#### Data Related Properties

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | The title of the column |
| value | String | | The value selected by the default filter item |
| label | String | | Attribute of the object in object data |
| type | String | | Optional values: `'selection'`, `'expand'`, `'time'`. The value is `'selection'`, indicating whether this column is selectable. For date type values, the value can be set to `'time'`, and converted to the desired date format with the `timeFormat` property. `'expand'` means that an icon appears in the current row. Clicking the icon will add a new row of data under the current row. |
| timeFormat | String | `'YYYY-MM-DD HH:mm:ss'` | When the `type` attribute value is defined as `'time'`, the value returned is in the specified date format |
| sortable | Boolean | `false` | Whether the column is sortable |
| filter | Boolean | `false` | Whether the column is filterable |
| headSelection | Boolean | `true` | Whether the list can be fully selected |
| options | Array\{name, value} | | Filter item list |
| formatter | Function | | Customize the formatting of column data. The first parameter is the object containing the row data, and the second parameter is the column instance. |
| sortMethod (to be discarded, promoted to the parent element) | Function | | Custom sorting method, the first parameter is the previous row of data in the column, the second parameter is the next row of data in the column, the method needs to return a value, the return type is `Boolean` |
| sortRemoteMethod (to be discarded, promoted to the parent element) | Function| | Asynchronously execute the sorting method passed in. The first parameter is the column field, the second parameter is the sorting order, and the third parameter is the column object |
| filterMethod (to be discarded, promoted to the parent element) | Function | | Custom filtering method, the first parameter is the column data, the second parameter is the column instance |

### Slots

#### headerTitle

Insert custom `th` tag content.

#### expandContent

Insert a custom `icon` into the expanded content.