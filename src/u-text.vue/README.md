# Text

Used to quickly and temporarily adjust text size, color and other features in business. Not recommended for use in encapsulated base components.

## Example
### Size Expansion

``` html
<u-linear-layout>
    <u-text size="small">Small text</u-text>
    <u-text size="normal">Normal text</u-text>
    <u-text size="large">Large text</u-text>
</u-linear-layout>
```

### Color Extension

``` html
<u-linear-layout>
    <u-text>Default color</u-text>
    <u-text color="primary">Primary text</u-text>
    <u-text color="secondary">Secondary text</u-text>
    <u-text color="info">Information text</u-text>
    <u-text color="success">Success text</u-text>
    <u-text color="warning">Warning text</u-text>
    <u-text color="error">Error text</u-text>
    <u-text color="disabled">Disabled text</u-text>
</u-linear-layout>
```

### Display Method

``` html
<u-text display="block">These are a few</u-text>
<u-text display="block">Block level</u-text>
<u-text display="block">Text component</u-text>
<u-text display="inline">These are several</u-text>
<u-text>Inline (default)</u-text>
<u-text display="inline">Text component</u-text>
```

### Text Wrapping

``` html
<u-linear-layout direction="vertical">
    <u-text display="block" wrap="ellipsis" style="width: 120px; background: #eee;">When Heaven is about to entrust a great responsibility to this people, they must first work hard on their minds, work their muscles and bones, and starve their bodies. The skin is empty and its body is empty, and its behavior is disturbed by its movements, so it is tempting to endure and gain what it cannot. </u-text>
    <u-text display="block" wrap="break" style="width: 120px; background: #eee;">When heaven is about to entrust a great responsibility to this people, they must first work hard on their minds, work their muscles and bones, and starve their bodies. The skin is empty and its body is empty, and its actions are messed up. Therefore, the mind and forbearance are tempted to gain what it cannot. </u-text>
    <u-text display="block" wrap="nowrap" style="width: 120px; background: #eee;">When Heaven is about to entrust a great responsibility to this people, they must first work hard on their minds, work their muscles and bones, and starve their bodies. The skin is empty and its body is empty, and its actions are messed up. Therefore, the mind and forbearance are tempted to gain what it cannot. </u-text>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| size | String | `'normal'` | Size extension. Optional values: `'small'`, `'normal'`, `'large'` |
| color | String | `'default'` | Color extension. Optional values: `'default'`, `'primary'`, `'secondary'`, `'error'`, `'disabled'` |
| display | String | `'inline'` | Display mode. Optional values: `'inline'`, `'block'` |
| wrap | String | `false` | Newline method. Optional values: `'normal'` means the default mode, `'ellipsis'` means redundant text is omitted, `'break'` means forced line breaks and English line breaks are automatically added, `'nowrap'` means no line breaks at all. |
