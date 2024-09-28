# Linear progress bar LinearProgress

## Example
### Basic Form

``` html
<u-linear-progress :percent="36"></u-linear-progress>
```

### Highly Scalable

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-progress :percent="36" size="small">small</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :percent="36" size="normal">normal</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress size="large">large</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress size="huge">huge</u-linear-progress>
    </u-linear-layout>
</u-linear-layout>
```

### Scope Restrictions
``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-progress :range="[20]" :percent="36">20</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :range="[20,50]" :percent="36">20,50</u-linear-progress>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| percent | Number | `0` | Percent |
| size | String | `'normal'` | Height expansion, the value has four values: `'small'`, `'normal'`, `'large'`, `'huge'` |
| range | Array | `[0, 100]` | Percent range limit |

### Slots

#### (default)

Insert text or HTML.
