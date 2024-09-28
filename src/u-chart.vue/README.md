# Chart Base Class Chart

<u-label>Display Type</u-label>&nbsp;<u-label>Chart Class</u-label>&nbsp;<u-label>Abstract Component</u-label>&nbsp;<u-label> Default Block Level</u-label>

It is used to extend the base class of various charts and standardize the basic framework and interface.

## Example
### Basic Form

``` html
<u-chart title="Chart" :data="[1]"></u-chart>
```

### Border

``` html
<u-chart title="Chart" border :data="[1]"></u-chart>
```

### Title and Description
``` html
<u-chart title="Chart Title" caption="Workload in the past 7 days" :data="[1]"></u-chart>
```

### Legend

``` html
<u-chart title="Legend" legend :data="[1]" :series="[
    { name: 'Number of readings', field: 'readings' },
    { name: 'Number of likes', field: 'stars' },
    { name: 'Favorites', field: 'favors' },
]"></u-chart>
```

#### Modify Color

``` html
<u-chart title="Legend" legend :data="[1]" :series="[
    { name: 'Number of successful requests', field: 'success', color: 'success' },
    { name: 'Number of failed requests', field: 'failed', color: 'error' },
    { name: 'Number of thread timeouts', field: 'timeout', color: '#5b9cff' },
    { name: 'Number of thread rejections', field: 'refused', color: 'warning' },
]"></u-chart>
```

### Data Status

#### loading
``` html
<u-chart title="Legend" border legend :series="[
    { name: 'Number of readings', field: 'readings' },
    { name: 'Number of likes', field: 'stars' },
    { name: 'Favorites', field: 'favors' },
]"></u-chart>
```

#### Loading Failed
``` html
<u-chart title="Legend" border legend :data="null" :series="[
    { name: 'Number of readings', field: 'readings' },
    { name: 'Number of likes', field: 'stars' },
    { name: 'Favorites', field: 'favors' },
]"></u-chart>
```

#### Empty State
``` html
<u-chart title="Legend" legend :data="[]" :series="[
    { name: 'Number of readings', field: 'readings' },
    { name: 'Number of likes', field: 'stars' },
    { name: 'Favorites', field: 'favors' },
]"></u-chart>
```

### Size Expansion

``` html
<u-linear-layout direction="vertical">
    <u-chart title="Chart" caption="Workload in the past 7 days" border legend size="small" :data="[1]" :series="[
        { name: 'Number of readings', field: 'readings' },
        { name: 'Number of likes', field: 'stars' },
        { name: 'Favorites', field: 'favors' },
    ]"></u-chart>
    <u-chart title="Chart" caption="Workload in the past 7 days" border legend size="normal" :data="[1]" :series="[
        { name: 'Number of readings', field: 'readings' },
        { name: 'Number of likes', field: 'stars' },
        { name: 'Favorites', field: 'favors' },
    ]"></u-chart>
    <u-chart title="Chart" caption="Workload in the past 7 days" border legend size="large" :data="[1]" :series="[
        { name: 'Number of readings', field: 'readings' },
        { name: 'Number of likes', field: 'stars' },
        { name: 'Favorites', field: 'favors' },
    ]"></u-chart>
</u-linear-layout>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | The title of the chart |
| caption | String | | Description of the chart |
| series | Array | | Legend information |
| data | Array | | Data to be displayed |
| border | Boolean | `false` | Whether there is a border |
| legend | Boolean | `false` | Whether to display the legend |
| loading | Boolean | `false` | Whether loading |
