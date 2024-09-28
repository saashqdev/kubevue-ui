# 线状图 LineChart

## 示例
### 基本形式

``` html
<u-line-chart legend title="每星期访问量"
    :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]"
    :data="[
        { week: '星期一', number: 150 },
        { week: '星期二', number: 300 },
        { week: '星期三', number: 28 },
        { week: '星期四', number: 200 },
        { week: '星期五', number: 74 },
        { week: '星期六', number: 532 },
        { week: '星期日', number: 420 }
    ]"></u-line-chart>
```

### 曲线图

``` html
<u-line-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :smooth="true" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 },
{ week: '星期二', number: 300 },
{ week: '星期三', number: 28 },
{ week: '星期四', number: 200 },
{ week: '星期五', number: 74 },
{ week: '星期六', number: 532 },
{ week: '星期日', number: 420 }]"></u-line-chart>
```

### 填充下方区域

``` html
<u-line-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :fill="true" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 },
{ week: '星期二', number: 300 },
{ week: '星期三', number: 28 },
{ week: '星期四', number: 200 },
{ week: '星期五', number: 74 },
{ week: '星期六', number: 532 },
{ week: '星期日', number: 420 }]"></u-line-chart>
```


### 隐藏图例
``` html
<u-line-chart border legend title="每星期访问量" :legend="false" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 },
{ week: '星期二', number: 300 },
{ week: '星期三', number: 28 },
{ week: '星期四', number: 200 },
{ week: '星期五', number: 74 },
{ week: '星期六', number: 532 },
{ week: '星期日', number: 420 }]"></u-line-chart>
```

### 单位
``` html
<u-line-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0, name: '个' }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 },
{ week: '星期二', number: 300 },
{ week: '星期三', number: 28 },
{ week: '星期四', number: 200 },
{ week: '星期五', number: 74 },
{ week: '星期六', number: 532 },
{ week: '星期日', number: 420 }]"></u-line-chart>
```


### 多线段形式

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
            title: '每星期访问量',
            xaxis: { key: 'week' },
            yaxis: { min: 0, name: '个' },
            series: [{ key: 'number' }, { key: 'num' }],
            data: [
                { week: '星期一', number: 150, num: 1200 },
                { week: '星期二', number: 300, num: 1200 },
                { week: '星期三', number: 28, num: 1000 },
                { week: '星期四', number: 200, num: 2000 },
                { week: '星期五', number: 74, num: 740 },
                { week: '星期六', number: 532, num: 2000 },
                { week: '星期日', number: 420, num: 5000 },
            ],
            smooth: true,
        };
    },
};
</script>
```

### 自定义tooltip

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
            title: '每星期访问量',
            xaxis: { key: 'week' },
            yaxis: { min: 0, name: '个' },
            series: [{ key: 'number' }],
            data: [
                { week: '星期一', number: 150 },
                { week: '星期二', number: 300 },
                { week: '星期三', number: 28 },
                { week: '星期四', number: 200 },
                { week: '星期五', number: 74 },
                { week: '星期六', number: 532 },
                { week: '星期日', number: 420 },
            ],
            smooth: true,
        };
    },
};
</script>
```

### 简单散点图

``` vue
<template>
    <u-line-chart border scatter legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth" @click="point">
        <div slot="title">{{ title }}</div>
    </u-line-chart>
</template>

<script>
export default {
    data() {
        return {
            title: '每星期访问量',
            xaxis: { key: 'week' },
            yaxis: { min: 0, name: '个' },
            series: [{ key: 'number' }],
            data: [
                { week: '星期一', number: 150 },
                { week: '星期二', number: 300 },
                { week: '星期三', number: 28 },
                { week: '星期四', number: 200 },
                { week: '星期五', number: 74 },
                { week: '星期六', number: 532 },
                { week: '星期日', number: 420 },
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
| title | String |  | 图表的标题 |
| caption | String |  | 图表的描述 |
| data | Array |  | 图表需要显示的数据 |
| xAxis | Object | | 绘制X轴需要传入的数据，属性key的值为data数组中对象的某个属性，依据此值来绘制X轴的刻度尺 |
| yAxis | Object | | 绘制Y轴需要传入的数据，属性min，max表示Y轴的最大值和最小值，count表示Y轴最小值和最大值之间分成几段，默认值为8 |
| series | Array |  | 传入绘制每条线的数据，数组中对象的属性key对象data数组中对象某个属性，hidden属性表示默认隐藏此选段，absent表示不显示此选段，默认作为tooltip显示的数据内容 |
| border | Boolean | false | 是否有表框 |
| legend | Boolean | false | X轴下方是否显示每条线段对应的标签 |
| width | String | `100%` | 图表的宽度 |
| height | String | `480px` | 图表的高度 |
| smooth | Boolean | false | 线段是否采用平滑方式绘制 |
| fill | Boolean | false | 线段和X轴之间否填充 |
| titleAlign | String | `center` | 图表标题的对齐方式，默认是居中，值有:left,center,right |
| loading | Boolean | `false` | true表示正在加载中，false表示加载完成 |
| scatter | Boolean | `false` | 散点图 |

### Events

#### @click

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | Object | 当前点的数据 |
| $event.index | String | 当前索引 |

### Slots

| Slot | Description |
| ---- | ----------- |
| tooltip | 自定义tooltip内容，作用域插槽，其中`row`表示当前点的数据，`index`表示当前点的索引 |

| Slot | Description |
| ---- | ----------- |
| operate | 自定义内容 |

| Slot | Description |
| ---- | ----------- |
| titleTemplate | 自定义标题内容 |

| Slot | Description |
| ---- | ----------- |
| captionTemplate | 自定义caption内容 |
