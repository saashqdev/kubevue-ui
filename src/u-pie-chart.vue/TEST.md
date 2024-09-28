### Contains 0 Cases

``` html
<u-pie-chart legend :data="[
    { name: 'Number of successful requests', value: 0, color: 'success' },
    { name: 'Number of failed requests', value: 2, color: 'error' },
    { name: 'Number of thread rejections', value: 0, color: 'info' },
]"></u-pie-chart>
```

### Contains Undefined Cases

``` html
<u-pie-chart legend :data="[
    { name: 'Number of successful requests', value: 4, color: 'success' },
    { name: 'Number of failed requests', value: 2, color: 'error' },
    { name: 'Number of thread rejections', value: undefined, color: 'info' },
]"></u-pie-chart>
```
