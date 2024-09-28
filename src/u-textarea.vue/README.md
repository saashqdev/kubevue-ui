# Multi-Line Input Textarea

## Example
### Basic Form

Most of the attributes are consistent with the `<textarea>` element.

``` html
<u-textarea placeholder="Details" autofocus></u-textarea>
```

### Read Only and Disabled

``` html
<u-linear-layout>
    <u-textarea value="readonly" readonly></u-textarea>
    <u-textarea value="disabled" disabled></u-textarea>
</u-linear-layout>
```

### Resize

``` html
<u-linear-layout>
    <u-textarea value="none" resize="none"></u-textarea>
    <u-textarea value="horizontal" resize="horizontal"></u-textarea>
    <u-textarea value="vertical" resize="vertical"></u-textarea>
    <u-textarea value="both" resize="both"></u-textarea>
</u-linear-layout>
```

### Size Expansion

```html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-textarea size="normal" value="normal" readonly></u-textarea>
        <u-textarea size="normal large" value="normal large" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="medium" value="medium" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="large" value="large" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge" value="huge" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge full" value="huge full" readonly></u-textarea>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String | | The value of the input box |
| placeholder | String | | Native properties |
| minlength | Number | | Native properties |
| maxlength | Number | | Native properties |
| autofocus | Boolean | | Native properties |
| readonly | Boolean | | Native properties |
| disabled | Boolean | | Native attribute |
| resize | String | | Native properties |
| size | String | `'normal'` | Size extension, supports one value: `'normal'`, `'large'`, `'huge'`, `'full'`, or a combination of the two values, the former Represents the height, the latter represents the width, similar to the CSS padding writing format |

<!-- | autosize | String | `'none'` | Adaptive content width and height. Optional values: `none`, `both`, `horizontal`, `vertical` | -->


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

