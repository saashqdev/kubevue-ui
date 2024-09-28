# Action List Actions

## Example
### Basic Form

`'u-action'` actually uses the component `'u-link'` for rendering, so it has all the functions of `'u-link'` and does not need to use the `'u-link'` component internally to implement jumps. and other functions

``` html
<u-linear-layout direction="vertical">
    <u-actions>
        <u-action disabled>Settings</u-action>
        <u-action to="/components/u-navbar">Jump to Navbar</u-action>
        <u-action>Restart</u-action>
    </u-actions>
    <u-actions>
        <u-action disabled>Settings</u-action>
        <u-action to="/components/u-navbar">Jump to Navbar</u-action>
        <u-action>Restart</u-action>
        <u-action disabled>Save as image</u-action>
        <u-action to="/components/u-select">Jump to Select</u-action>
    </u-actions>
</u-linear-layout>
```

### Using instructions

``` html
<u-linear-layout direction="vertical">
    <u-actions>
        <u-action disabled>Settings</u-action>
        <u-action v-tooltip="'Jump to Navbar'" to="/components/u-navbar">Show Tips</u-action>
        <u-action>Restart</u-action>
        <u-action disabled>Save as image</u-action>
        <u-action v-tooltip="'Jump to Select'" to="/components/u-select">Show Tips</u-action>
    </u-actions>
</u-linear-layout>
```


## Actions API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| max-count | Number | 3 | Maximum number of links displayed in a column |
| menu-title | String | 'More' | Menu title |
| placement | String | `'bottom-end'`| The pop-up direction of the menu. Optional values: `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start' `, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |

### Slots

#### (default)

Insert the `<u-action>` child component.

## Action API

All attributes are transmitted transparently.

### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |

### Events

All events are disclosed.

#### @click

Fires when this item is clicked, unlike the native click event, which only fires in a non-disabled state.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | Mouse event object |
