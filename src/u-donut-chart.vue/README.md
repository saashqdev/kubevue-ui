# DonutChart DonutChart

## Example
### Basic Form

``` html
<u-donut-chart :data="[3, 6, 5, 4, 2]"></u-donut-chart>
```

``` html
<u-donut-chart legend title="24 hours consumption" :data="[
    { name: 'Object Storage', value: 40 },
    { name: 'Container Service', value: 20 },
    { name: 'Cloud Server', value: 30 },
    { name: 'Elastic Public IP', value: 10 },
]"></u-donut-chart>
```

### Tooltips

```vue
<template>
    <u-donut-chart :data="data" tooltip unit="元"></u-donut-chart>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { percent: 40, name: 'Object Storage', value: 40, state: 'nos' },
                { percent: 20, name: 'Container Service', value: 20, state: 'nce' },
                { percent: 30, name: 'Cloud Server', value: 30, state: 'nvm' },
                { percent: 10, name: 'Elastic Public IP', value: 10, state: 'net' },
            ],
        };
    },
};
</script>
```

### Legend

```vue
<template>
    <u-donut-chart :data="data" legend unit="Dollars"></u-donut-chart>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { percent: 7, name: 'Object Storage', value: 7, state: 'nos' },
                { percent: 5, name: 'Container Service', value: 5, state: 'nce' },
                { percent: 8, name: 'Cloud Server', value: 8, state: 'nvm' },
                { percent: 10, name: 'Elastic Public IP', value: 10, state: 'net' },
                { percent: 9, name: 'RDS', value: 9, state: 'rds' },
                { percent: 1, name: 'Redis', value: 1, state: 'ncr' },
                { percent: 20, name: 'Elasticsearch', value: 20, state: 'nes' },
                { percent: 15, name: 'Message Queue', value: 15, state: 'nqs' },
                { percent: 5, name: 'CDN', value: 5, state: 'cdn' },
                { percent: 12, name: 'DDoS Basic Protection', value: 12, state: 'ddos' },
                { percent: 8, name: 'SSL', value: 8, state: 'ssl' },
            ],
        };
    },
};
</script>
```

### Data Status

#### Loading
``` html
<u-donut-chart title="24-hour consumption" border legend></u-donut-chart>
```

#### Loading Failed
``` html
<u-donut-chart title="24-hour consumption" border legend :data="null"></u-donut-chart>
```

#### Empty State
``` html
<u-donut-chart title="24-hour consumption" legend :data="[]"></u-donut-chart>
```

#### The Sum is 0

``` html
<u-donut-chart legend title="Visits per week" :data="[
    { name: 'Selector1', value: 0 },
    { name: 'Selector2', value: 0 },
    { name: 'Selector3', value: 0 },
    { name: 'Selector4', value: 0 },
]"></u-donut-chart>
```

### Set Color

``` html
<u-donut-chart legend :data="[
    { name: 'Number of successful requests', value: 90, color: 'success' },
    { name: 'Number of failed requests', value: 10, color: 'error' },
    { name: 'Number of thread timeouts', value: 4, color: '#5b9cff' },
    { name: 'Number of thread rejections', value: 6, color: 'warning' },
]"></u-donut-chart>
```

### Size Expansion

``` html
<u-donut-chart size="small" legend title="24-hour consumption" :data="[
    { name: 'Object Storage', value: 40 },
    { name: 'Container Service', value: 20 },
    { name: 'Cloud Server', value: 30 },
    { name: 'Elastic Public IP', value: 10 },
]"></u-donut-chart>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | | The data to be displayed in the chart, the object key value in the array: percent represents the proportion, please pass in an integer form, for example, 30 represents 30%; name represents the name of the percentage; value represents the value of the percentage; state represents a description of the proportion, which is used to determine the background color of the area. |
| unit | String | | Unit of chart data |
| width | Number | `160` | Width of chart |
| height | Number | `160` | The height of the chart |
| tooltip | Boolean | `false` | Whether to display tooltips |
| legend | Boolean | `false` | Whether to display the legend |
