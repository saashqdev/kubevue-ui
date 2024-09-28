# Tooltip

## Example
### Basic Form

``` html
<u-linear-layout>
    <u-tooltip content="It is more convenient to use the content attribute">
        <u-button>Use attributes</u-button>
    </u-tooltip>
    <u-tooltip>
        <u-button>Use slot</u-button>
        <span slot="content">Use content <u-link>slot</u-link> for more flexibility</span>
    </u-tooltip>
    <u-button v-tooltip="'The easiest way to use commands'">Use commands</u-button>
</u-linear-layout>
```

### Trigger Method

``` html
<u-linear-layout>
    <u-tooltip content="Tooltip" trigger="hover">
        <u-button>Hover (default)</u-button>
    </u-tooltip>
    <u-tooltip content="Tooltip" trigger="click">
        <u-button>Click</u-button>
    </u-tooltip>
    <u-tooltip content="Tooltip" trigger="right-click">
        <u-button>Right-Click</u-button>
    </u-tooltip>
    <u-tooltip content="Tooltip" trigger="double-click">
        <u-button>Double-Click</u-button>
    </u-tooltip>
</u-linear-layout>
```

#### Specify Offset Distance
``` html
<u-linear-layout>
    <u-tooltip offset="10" content="Tooltip" trigger="hover">
        <u-button>Hover (default)</u-button>
    </u-tooltip>
    <u-tooltip offset="10% 10px" content="Tooltip" trigger="hover">
        <u-button>Hover (default)</u-button>
    </u-tooltip>
</u-linear-layout>
```

#### Delayed Disappearance (hover)
``` html
<u-linear-layout>
    <u-tooltip content="Tooltip" trigger="hover" :hide-delay="300">
        <u-button>Hover (default)</u-button>
    </u-tooltip>
</u-linear-layout>
```

#### Command Form

``` html
<u-linear-layout>
    <u-button v-tooltip="'Tooltip'">Hover (default)</u-button>
    <u-button v-tooltip.click="'Tooltip'">Click</u-button>
    <u-button v-tooltip.right-click="'Tooltip'">Right-Click</u-button>
    <u-button v-tooltip.double-click="'Tooltip'">Double-Click</u-button>
</u-linear-layout>
```

#### Manual Trigger

Tooltip popup/hide can also be triggered manually:

```vue
<template>
<u-tooltip content="Tooltip" trigger="manual" :open.sync="open">
    <u-button @click="open = !open">{{ open ? 'Hide' : 'Pop' }}</u-button>
</u-tooltip>
</template>

<script>
export default {
    data() {
        return {
            open: false,
        };
    },
};
</script>
```

### Popup location
``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-tooltip content="Tooltip" placement="top-start">
            <u-button>Top-Start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="top">
            <u-button>Top</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="top-end">
            <u-button>Top-End</u-button>
        </u-tooltip>
    </u-linear-layout>
    <u-linear-layout>
        <u-tooltip content="Tooltip" placement="left-start">
            <u-button>Left-Start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="left">
            <u-button>Left</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="left-end">
            <u-button>Left-End</u-button>
        </u-tooltip>
    </u-linear-layout>
    <u-linear-layout>
        <u-tooltip content="Tooltip" placement="right-start">
            <u-button>Right-Start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="right">
            <u-button>Right</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="right-end">
            <u-button>Right-End</u-button>
        </u-tooltip>
    </u-linear-layout>
    <u-linear-layout>
        <u-tooltip content="Tooltip" placement="bottom-start">
            <u-button>Bottom-Start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="bottom">
            <u-button>Bottom</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="bottom-end">
            <u-button>Bottom-End</u-button>
        </u-tooltip>
    </u-linear-layout>
</u-linear-layout>
```

#### Command Form

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button v-tooltip.top-start="'Tooltip'">Top-Start</u-button>
        <u-button v-tooltip.top="'Tooltip'">Top</u-button>
        <u-button v-tooltip.top-end="'Tooltip'">Top-End</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.left-start="'Tooltip'">Left-Start</u-button>
        <u-button v-tooltip.left="'Tooltip'">Left</u-button>
        <u-button v-tooltip.left-end="'Tooltip'">Left-End</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.right-start="'Tooltip'">Right-Start</u-button>
        <u-button v-tooltip.right="'Tooltip'">Right</u-button>
        <u-button v-tooltip.right-end="'Tooltip'">Right-End</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.bottom-start="'Tooltip'">Bottom-Start</u-button>
        <u-button v-tooltip.bottom="'Tooltip'">Bottom</u-button>
        <u-button v-tooltip.bottom-end="'Tooltip'">Bottom-End</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Disable

``` html
<u-tooltip content="Tooltip" disabled>
    <u-button disabled>disabled</u-button>
</u-tooltip>
```

### Size Expansion

``` vue
<template>
<u-linear-layout>
    <u-tooltip :content="content" size="small">
        <u-button>Small</u-button>
    </u-tooltip>
    <u-tooltip :content="content">
        <u-button>Normal</u-button>
    </u-tooltip>
    <u-tooltip :content="content" size="large">
        <u-button>Large</u-button>
    </u-tooltip>
    <u-tooltip :content="content" size="auto">
        <u-button>Auto</u-button>
    </u-tooltip>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            content: 'A golden full moon hangs in the deep blue sky, and below is the sandy land on the seaside, where endless green watermelons are planted. Among them was a boy of eleven or twelve years old, wearing a silver ring around his neck, holding a steel fork in his hand, and stabbed a yun with all his strength. Na Yuan twisted her body and escaped from his crotch. ',
        };
    },
};
</script>
```

#### Command Form

``` vue
<template>
<u-linear-layout>
    <u-button v-tooltip.small="content">Small</u-button>
    <u-button v-tooltip="content">Normal</u-button>
    <u-button v-tooltip.large="content">Large</u-button>
    <u-button v-tooltip.auto="content">Auto</u-button>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            content: 'A golden full moon hangs in the deep blue sky, and below is the sandy land on the seaside, where endless green watermelons are planted. Among them was a boy of eleven or twelve years old, wearing a silver ring around his neck, holding a steel fork in his hand, and stabbed a yun with all his strength. Na Yuan twisted her body and escaped from his crotch. ',
        };
    },
};
</script>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| content | String | `'Prompt content'` | Prompt content |
| open.sync | Boolean | `false` | Pop/hide state |
| trigger | String | `'click'` | How to trigger the tooltip. Optional values: `'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | String | `'bottom'` | The pop-up direction of the tooltip. Optional values: `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start' `, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| disabled | Boolean | `false` | Whether to Disable |
| size | String | `'normal'` | Size extension, supports one value: `'small'`, `'normal'`, `'large'`, `'auto'`, or a combination of the two values, the former Represents the height, the latter represents the width, similar to the CSS padding writing format |
| hideDelay | Number | `0` | The delay time for prompt content to disappear, the unit is `'ms'` |
| offset | String | `'0'` | Pop-up layer offset, such as: '10', '10px 10px', '10% 10%', the first value represents the horizontal offset, the second value represents the vertical displacement , the default unit is `px` |

### Slots

#### (default)

Trigger node, only one node can be inserted into this slot. Tooltip will not do anything to it except binding a trigger event to the node.

#### Popper

Customize the entire popup layer.

#### Body

Custom scroll area.

#### Content

Custom content text.

### Events

#### @before-toggle

Triggered before popup/hide

| Param | Type | Description |
| ----- | ---- | ----------- |
| open | Boolean | Pop/hide status |
| $event.preventDefault | Function | Prevent pop-up/hide process |

#### @toggle

Triggered when popping up/hiding

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | Pop/hide state |

### Methods

#### update

Update popper instance

| Param | Type | Description |
| ----- | ---- | ----------- |
