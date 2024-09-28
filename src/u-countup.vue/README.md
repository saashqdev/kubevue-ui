# Digital Gradient CountUp

## Example
### Basic Form

``` html
<u-countup :end="100"></u-countup>
```

#### Grouping (1,000 vs 1000)
``` html
<u-countup :end="1000" is-group></u-countup>
```

#### Prefix, Suffix
``` html
<u-countup :end="100" prefix="$" suffix="USD"></u-countup>
```

#### Decimal
``` html
<u-countup :end="100" :decimals="2"></u-countup>
```

#### Animation Function
``` html
<u-countup :end="100" is-easing></u-countup>
```

#### Gradient Time (time unit is seconds)
``` html
<u-countup :end="100" :duration="3"></u-countup>
```

#### Convert Units to Simplify Data
``` html
<u-countup :end="4567890" simplify></u-countup>
```

### Method
```vue
<template>
    <u-form>
    <u-form-item label="Demo Effect">
        <u-linear-layout>
        <u-countup ref="countup" :start="start" :end="end" :auto-start="autoStart" :is-easing="isEasing" :duration="duration"></u-countup>
        <u-button style="vertical-align: bottom;" color="primary" @click="show">Turn on Gradient</u-button>
        <u-button style="vertical-align: bottom;" @click="reset">Reset</u-button>
         <u-button style="vertical-align: bottom;" @click="pause">{{ `${isPause?'Resume':'Pause'}` }}</u-button>
        </u-linear-layout>
    </u-form-item>
    <u-form-item label="End Value">
        <u-input v-model.number="end"></u-input>
    </u-form-item>
    <!-- Does not support dynamically changing attributes -->
    <!-- <u-form-item label="Gradient Time">
        <u-input v-model.number="duration"></u-input>
    </u-form-item>
    <u-form-item label="Enable Animation Function">
        <u-capsules :value.sync="isEasing">
            <u-capsule :value="false">false</u-capsule>
            <u-capsule :value="true">true</u-capsule>
        </u-capsules>
    </u-form-item> -->
    </u-form>
</template>
<script>
export default{
    data() {
        return {
            start: 0,
            end: 100,
            duration: 2,
            isEasing: true,
            isPause: false,
            // autoStart: false,
        };
    },
    methods: {
        show() {
            // if (this.autoStart)
            this.$refs.countup.update(this.end);
            // else
            //   this.autoStart = true;
        },
        reset() {
            this.$refs.countup.reset();
        },
        pause() {
            this.isPause = !this.isPause;
            this.$refs.countup.pauseResume();
        },
    },
};
</script>
```

### Gradient End Callback Function
```vue
<template>
    <u-linear-layout>
        <u-countup :end="100" :auto-start="autoStart" :end-callback="end"></u-countup>
        <u-button style="vertical-align: bottom;" color="primary" @click="start">autoStart</u-button>
    </u-linear-layout>
</template>
<script>
export default{
    data() {
        return {
            autoStart: false,
        };
    },
    methods: {
        start() {
            this.autoStart = true;
        },
        end() {
            console.log('Gradient ends');
        },
    },
};
</script>
```


## CountUp API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| start | Number | `0` | Gradient start value |
| end | Number | | Gradient end value |
| duration | Number | `2` | Gradient time interval, time unit is seconds |
| isEasing | Boolean | `false` | Whether to use animation function `easingFn` to process data |
| isGroup | Boolean | `false` | Whether to group, the default group separator `'separator'` attribute value is `','' |
| separator | String | `','' | Group separator |
| decimals | Number | `0` | Number of decimal places |
| easingFn | Function | `'easeOutExpo'` | Custom gradient animation, default uses `Robert Penner's easeOutExpo` function |
| simplify | Boolean | `false` | Whether to use custom units to simplify data |
| unit | Array | `[[3, 'K+'], [6, 'M+'], [9, 'G+']]` | Custom unit used with the `'simplify'` attribute |
| prefix | String | `''` | Prefix content |
| suffix | String | `''` | Suffix content |
| endCallback | Function | `` | Callback function after the gradient ends |
| autoStart | Boolean | `false` | Whether to enable gradient |

### Slots

#### (default)

Insert text or `HTML`.

### Events

#### @update

End of update gradient

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Number | Latest end value |

#### @reset

reset

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Number | Initial value |

#### @pauseResume

Toggle gradient

| Param | Type | Description |
| ----- | ---- | ----------- |
| - | - | - |


### Methods

#### update(value)

Update gradient end value

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Number | Latest end value |

#### reset()

reset

| Param | Type | Description |
| ----- | ---- | ----------- |
| - | -| - |

#### pauseResume()

Toggle gradient

| Param | Type | Description |
| ----- | ---- | ----------- |
| - | - | - |

