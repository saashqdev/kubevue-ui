# Single Line Input

## Example
### Basic Form

Most of the attributes are the same as those of the `<input>` element.

``` html
<u-input maxlength="12" placeholder="1~12 lowercase letters" autofocus></u-input>
```

### Encryption

``` html
<u-input type="password" maxlength="12" placeholder="Please enter password"></u-input>
```

### Number

Using the `number` modifier of `v-model`, you can easily convert the input value to the number type.

```vue
<template>
<div>
    <u-input v-model.number="value" maxlength="12" placeholder="Please enter the port number" @input="onInput"></u-input>
    Output: {{ output }}
</div>
</template>

<script>
export default {
    data() {
        return {
            value: 3306,
            output: '',
        };
    },
    methods: {
        onInput(value) {
            this.output = JSON.stringify({
                inputValue: value,
                modelValue: this.value,
            });
        },
    },
};
</script>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-input value="readonly" readonly></u-input>
    <u-input value="disabled" disabled></u-input>
</u-linear-layout>
```

### Size Expansion

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-input size="mini" value="mini" readonly></u-input>
        <u-input size="mini small" value="mini small" readonly></u-input>
        <u-input size="mini normal" value="mini normal" readonly></u-input>
        <u-input size="mini medium" value="mini medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="small mini" value="small mini" readonly></u-input>
        <u-input size="small" value="small" readonly></u-input>
        <u-input size="small normal" value="small normal" readonly></u-input>
        <u-input size="small medium" value="small medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="normal mini" value="normal mini" readonly></u-input>
        <u-input size="normal small" value="normal small" readonly></u-input>
        <u-input value="normal" readonly></u-input>
        <u-input size="normal medium" value="normal medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="medium mini" value="medium mini" readonly></u-input>
        <u-input size="medium small" value="medium small" readonly></u-input>
        <u-input size="medium normal" value="medium normal" readonly></u-input>
        <u-input size="medium" value="medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="large" value="large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="huge" value="huge" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="huge full" value="huge full" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
```

### Delete Function
```html
<u-input close size="normal large" placeholder="1~12 lowercase letters" autofocus></u-input>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | `'text'` | The type of input box, currently only supports two types: `'text'` and `'password'` |
| value | String | | The value of the input box |
| placeholder | String | | Native properties |
| maxlength | Number | | Native properties |
| autofocus | Boolean | | Native properties |
| readonly | Boolean | | Native properties |
| disabled | Boolean | | Native attribute |
| size | String | `'normal'` | Size extension, supports one value: `'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `' full'', or a combination of two values, the former represents height and the latter represents width, similar to CSS padding writing format |
| close | Boolean | `'false'` | Delete function, default value `false`, it will only be displayed when the value is `true` and there is input content in the input box |
| maxlengthMessage | String | | Error message when input content reaches the upper limit, and takes effect when wrapped by [FormItem](#/components/u-form) |

### Slots

#### (default)

Insert `HTML` or `Component` to display additional content.

### Events

#### @input

Fires on input

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | Value of input box |

#### @change

Triggered when the value changes (different from native events)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | Changed value |
| $event.oldValue | String | Old value |

#### @focus

Triggered when focus is obtained

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | Native event object |

#### @blur

Triggered when focus is lost

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | Native event object |

#### @reset

Triggered when the delete icon is clicked

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | Value after reset |

### Methods
#### Focus

Put the input box in focus

| Param | Type | Description |
| ----- | ---- | ----------- |
| | | |

#### Blur

Make the input box lose focus

| Param | Type | Description |
| ----- | ---- | ----------- |
| | | |

#### removeValue()

Delete input value
