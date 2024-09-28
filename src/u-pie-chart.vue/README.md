# Pie Chart

## Example
### Basic Form

``` html
<u-pie-chart :data="[3, 6, 5, 4, 2]"></u-pie-chart>
```

``` html
<u-pie-chart legend title="24 hours consumption" :data="[
    { name: 'Container Service', value: 20 },
    { name: 'Cloud Server', value: 20 },
    { name: 'Load Balancing', value: 15 },
    { name: 'RDS', value: 35 },
    { name: 'Cloud Hard Disk', value: 9 },
    { name: 'Message Queue', value: 1 },
    { name: 'Public IP', value: 1 },
]"></u-pie-chart>
```

``` html
<u-pie-chart legend title="24 hours consumption" :data="[
    { name: 'Container Service', value: 20 },
    { name: 'Cloud Server', value: 20 },
    { name: 'Load Balancing', value: 15 },
    { name: 'RDS', value: 35 },
    { name: 'Cloud Hard Disk', value: 9 },
    { name: 'Message Queue', value: 0 },
    { name: 'Public IP', value: 0 },
]"></u-pie-chart>
```

### Data Status

#### Loading
``` html
<u-pie-chart title="24-hour consumption" border legend></u-pie-chart>
```

#### Loading Failed
``` html
<u-pie-chart title="24-hour consumption" border legend :data="null"></u-pie-chart>
```

#### Empty State
``` html
<u-pie-chart title="24-hour consumption" legend :data="[]"></u-pie-chart>
```

#### The Sum is 0

``` html
<u-pie-chart legend title="Visits Per Week" :data="[
    { name: 'selector1', value: 0 },
    { name: 'selector2', value: 0 },
    { name: 'selector3', value: 0 },
    { name: 'selector4', value: 0 },
]"></u-pie-chart>
```

### Set Color

``` html
<u-pie-chart legend :data="[
    { name: 'Number of successful requests', value: 90, color: 'success' },
    { name: 'Number of failed requests', value: 10, color: 'error' },
    { name: 'Number of thread timeouts', value: 4, color: '#5b9cff' },
    { name: 'Number of thread rejections', value: 6, color: 'warning' },
]"></u-pie-chart>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | The title of the chart |
| caption | String | | Description of the chart |
| data | Array | | The data to be displayed in the chart, the object key value in the array: percent represents the proportion, please pass in an integer form, for example 30 represents 30%, name represents the name of the proportion, which will be displayed in the legend at the bottom |
| border | Boolean | false | Whether there is a table frame |
| width | String | `100%` | The width of the chart |
| height | String | `480px` | The height of the chart |
| titleAlign | String | `center` | The alignment of the chart title, the default is centered, the values   are: left, center, right |

### Slot

| Slot | Description |
| ---- | ----------- |
| tooltip | Custom tooltip content (scope slot, please refer to the example how to write a custom tooltip) |
