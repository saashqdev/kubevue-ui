# Line Chart

## Example
### Basic Form

``` html
<u-line-chart legend title="Visits Per Week"
    :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]"
    :data="[
        { week: 'Monday', number: 150 },
        { week: 'Tuesday', number: 300 },
        { week: 'Wednesday', number: 28 },
        { week: 'Thursday', number: 200 },
        { week: 'Friday', number: 74 },
        { week: 'Saturday', number: 532 },
        { week: 'Sunday', number: 420 }
    ]"></u-line-chart>
```

### Curve Graph

``` html
<u-line-chart border legend title="Visits Per Week" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :smooth="true" :series ="[{ key: 'number' }]" :data="[{ week: 'Monday', number: 150 },
{ week: 'Tuesday', number: 300 },
{ week: 'Wednesday', number: 28 },
{ week: 'Thursday', number: 200 },
{ week: 'Friday', number: 74 },
{ week: 'Saturday', number: 532 },
{ week: 'Sunday', number: 420 }]"></u-line-chart>
```

### Fill in the Area Below

``` html
<u-line-chart border legend title="Visits Per Week" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :fill="true" :series ="[{ key: 'number' }]" :data="[{ week: 'Monday', number: 150 },
{ week: 'Tuesday', number: 300 },
{ week: 'Wednesday', number: 28 },
{ week: 'Thursday', number: 200 },
{ week: 'Friday', number: 74 },
{ week: 'Saturday', number: 532 },
{ week: 'Sunday', number: 420 }]"></u-line-chart>
```


### Hide Legend
``` html
<u-line-chart border legend title="Visits Per Week" :legend="false" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series ="[{ key: 'number' }]" :data="[{ week: 'Monday', number: 150 },
{ week: 'Tuesday', number: 300 },
{ week: 'Wednesday', number: 28 },
{ week: 'Thursday', number: 200 },
{ week: 'Friday', number: 74 },
{ week: 'Saturday', number: 532 },
{ week: 'Sunday', number: 420 }]"></u-line-chart>
```

### Unit
``` html
<u-line-chart border legend title="Visits Per Week" :x-axis="{ key: 'week' }" :y-axis="{ min: 0, name: 'a' }" :series ="[{ key: 'number' }]" :data="[{ week: 'Monday', number: 150 },
{ week: 'Tuesday', number: 300 },
{ week: 'Wednesday', number: 28 },
{ week: 'Thursday', number: 200 },
{ week: 'Friday', number: 74 },
{ week: 'Saturday', number: 532 },
{ week: 'Sunday', number: 420 }]"></u-line-chart>
```


### Multi-Line Segment Form

``` vue
<template>
    <u-line-chart border legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth">
        <div slot="title">{{ title }}</div>
    </u-line-chart>
</template>

<script>
export default {
    data() {
        return {
            title: 'Visits Per Week',
            xaxis: { key: 'week' },
            yaxis: { min: 0, name: 'piece' },
            series: [{ key: 'number' }, { key: 'num' }],
            data: [
                { week: 'Monday', number: 150, num: 1200 },
                { week: 'Tuesday', number: 300, num: 1200 },
                { week: 'Wednesday', number: 28, num: 1000 },
                { week: 'Thursday', number: 200, num: 2000 },
                { week: 'Friday', number: 74, num: 740 },
                { week: 'Saturday', number: 532, num: 2000 },
                { week: 'Sunday', number: 420, num: 5000 },
            ],
            smooth: true,
        };
    },
};
</script>
```

### Custom Tooltip

``` vue
<template>
    <u-line-chart border legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth">
        <div slot="tooltip" slot-scope="scope">
            <span v-for="sery in series">
                {{ sery.name || sery.field || sery.key }}: {{ scope.row[sery.field || sery.key] }}
            </span>
        </div>
    </u-line-chart>
</template>

<script>
export default {
    data() {
        return {
            title: 'Visits Per Week',
            xaxis: { key: 'week' },
            yaxis: { min: 0, name: 'piece' },
            series: [{ key: 'number' }],
            data: [
                { week: 'Monday', number: 150 },
                { week: 'Tuesday', number: 300 },
                { week: 'Wednesday', number: 28 },
                { week: 'Thursday', number: 200 },
                { week: 'Friday', number: 74 },
                { week: 'Saturday', number: 532 },
                { week: 'Sunday', number: 420 },
            ],
            smooth: true,
        };
    },
};
</script>
```

### Simple Scatter Plot

```vue
<template>
    <u-line-chart border scatter legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth" @click="point">
        <div slot="title">{{ title }}</div>
    </u-line-chart>
</template>

<script>
export default {
    data() {
        return {
            title: 'Visits Per Week',
            xaxis: { key: 'week' },
            yaxis: { min: 0, name: 'piece' },
            series: [{ key: 'number' }],
            data: [
                { week: 'Monday', number: 150 },
                { week: 'Tuesday', number: 300 },
                { week: 'Wednesday', number: 28 },
                { week: 'Thursday', number: 200 },
                { week: 'Friday', number: 74 },
                { week: 'Saturday', number: 532 },
                { week: 'Sunday', number: 420 },
            ],
            smooth: true,
        };
    },
    methods: {
        point(e) {
            console.log(e);
        },
    },
};
</script>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | The title of the chart |
| caption | String | | Description of the chart |
| data | Array | | The data to be displayed in the chart |
| xAxis | Object | | The data that needs to be passed in to draw the
| yAxis | Object | | The data that needs to be passed in to draw the Y-axis. The attributes min and max represent the maximum and minimum values   of the Y-axis, and count represents the number of segments divided into the minimum and maximum values   of the Y-axis. The default value is 8 |
| series | Array | | Pass in the data for drawing each line, the attribute key object of the object in the array, an attribute of the object in the data array, the hidden attribute means that this selection is hidden by default, and absent means that this selection is not displayed, and it is displayed as a tooltip by default. Data content |
| border | Boolean | false | Whether there is a table frame |
| legend | Boolean | false | Whether to display the label corresponding to each line segment below the X-axis |
| width | String | `100%` | The width of the chart |
| height | String | `480px` | The height of the chart |
| smooth | Boolean | false | Whether the line segment is drawn smoothly |
| fill | Boolean | false | Whether to fill between the line segment and the X-axis |
| titleAlign | String | `center` | The alignment of the chart title, the default is centered, the values   are: left, center, right |
| loading | Boolean | `false` | True means loading, false means loading completed |
| scatter | Boolean | `false` | Scatter plot |

### Events

#### @click

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | Object | Data of current point |
| $event.index | String | Current index |

### Slots

| Slot | Description |
| ---- | ----------- |
| tooltip | Custom tooltip content, scope slot, where `row` represents the data of the current point and `index` represents the index of the current point |

| Slot | Description |
| ---- | ----------- |
| operate | Custom content |

| Slot | Description |
| ---- | ----------- |
| titleTemplate | Custom title content |

| Slot | Description |
| ---- | ----------- |
| captionTemplate | Custom caption content |
