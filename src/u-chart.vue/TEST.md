### Legend

#### Legend is Too Long

``` html
<u-chart title="More legends" border legend :data="[1]" :series="[
    { name: 'Very long, long, long, long, long, long number of readings', field: 'readings' },
    { name: 'Very long, long, long, long, long, long, long number of likes', field: 'stars' },
    { name: 'Very long, long, long, long, long, long collection number', field: 'favors' },
    { name: 'Very long, long, long, long, long, long, long number of readings', field: 'readings2' },
]"></u-chart>
```

#### Legend is Too Narrow

``` html
<u-chart title="More legends" border legend style="width: 400px;" :data="[1]" :series="[
    { name: 'Very long, long, long number of readings', field: 'readings' },
    { name: 'A long, long, long number of likes', field: 'stars' },
    { name: 'Very long collection number', field: 'favors' },
    { name: 'Very long, long, long number of readings', field: 'readings2' },
]"></u-chart>
```

#### Too Many Legends

``` html
<u-chart title="More legends" border legend :data="[1]" :series="[
    { name: 'Number of Readings', field: 'readings' },
    { name: 'Number of Likes', field: 'stars' },
    { name: 'Favorites', field: 'favors' },
    { name: 'Number of Readings', field: 'readings2' },
    { name: 'Number of Likes', field: 'stars2' },
    { name: 'Very long, long, long, long, long, long collection number', field: 'favors2' },
    { name: 'Readings', field: 'readings3' },
    { name: 'Number of Likes', field: 'stars3' },
    { name: 'Favorites', field: 'favors3' },
    { name: 'Very long, long, long, long, long, long, long number of readings', field: 'readings4' },
    { name: 'Number of Likes', field: 'stars4' },
    { name: 'Favorites', field: 'favors4' },
    { name: 'Readings', field: 'readings5' },
    { name: 'Very long, long, long, long, long, long number of likes', field: 'stars5' },
    { name: 'Favorites', field: 'favors5' },
]"></u-chart>
```
