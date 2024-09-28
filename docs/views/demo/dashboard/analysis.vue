<template>
    <div :class="$style.root">
        <div :class="$style.title">
            <h1>Visits per week</h1>
            <u-table :class="$style.table">
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>150</td>
                        <td>300</td>
                        <td>28</td>
                        <td>200</td>
                        <td>74</td>
                        <td>532</td>
                        <td>420</td>
                    </tr>
                </tbody>
            </u-table>
            </div>
        <div :class="$style.row">
            <div :class="$style.chart">
                <u-bar-chart :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{key: 'number', name: 'Visits' }]" :data="[{ week: 'Monday', number: 150 }, { week: 'Tuesday', number: 300 }, { week: 'Wednesday', number: 28 }, { week: 'Thursday ', number: 200 }, { week: 'Friday', number: 74 }, { week: 'Saturday', number: 532 }, { week: 'Sunday', number: 420 }]" border legend title="Every Weekly visits"></u-bar-chart>
            </div>
            <div :class="$style.chart">
                <u-xbar-chart :y-axis="{ key: 'week' }" :x-axis="{ min: 0 }" :series="[{key: 'number', name: 'Visits' }]" :data="[{ week: 'Monday', number: 150 }, { week: 'Tuesday', number: 300 }, { week: 'Wednesday', number: 28 }, { week: 'Thursday ', number: 200 }, { week: 'Friday', number: 74 }, { week: 'Saturday', number: 532 }, { week: 'Sunday', number: 420 }]" border legend title="Every Weekly visits"></u-xbar-chart>
            </div>
        </div>
        <div :class="$style.row">
            <div :class="$style.chart">
                <u-line-chart :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]" :data=" [{ week: 'Monday', number: 150 }, { week: 'Tuesday', number: 300 }, { week: 'Wednesday', number: 28 }, { week: 'Thursday', number: 200 }, { week: 'Friday', number: 74 }, { week: 'Saturday', number: 532 }, { week: 'Sunday', number: 420 }]" border legend title="Visits per week"></ u-line-chart>
            </div>
            <div :class="$style.chart">
                <u-pie-chart :data="[
                    { 'percent': 25, 'name': 'selector1' },
                    { 'percent': 25, 'name': 'selector2' },
                    { 'percent': 25, 'name': 'selector3' },
                    { 'percent': 25, 'name': 'selector4' }
                    ]" border legend title="Visits Per Week">
                </u-pie-chart>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style module>
.row:not(:first-child) {
    background-color: white;
}
.row::after {
    clear: both;
}
.row::before, .row::after {
    content: " ";
    display: table;
}
.chart[class] {
    width: 45%;
    display: inline-block;
    margin: 0 2%;
}
.title {
    width: 100%;
    /* text-align: center; */
    margin-bottom: 50px;
}
h1 {
    font-weight: 500;
}
.table[class] {
    width: 90%;
    margin-left: 5%;
}
.table td, .table th {
    border: 1px solid #eee;
}
</style>
