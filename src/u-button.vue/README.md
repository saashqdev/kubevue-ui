# Button Button

## Example
### Basic Form

``` html
<u-button>Settings</u-button>
```

### Link

``` html
<u-linear-layout>
    <u-button href="https://kubevue.github.io" target="_blank">Href</u-button>
    <u-button to="/proto-ui/u-link">to</u-button>
    <u-button href="https://kubevue.github.io" disabled>Disabled</u-button>
</u-linear-layout>
```

### Color Extension
``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button color="primary">Primary</u-button>
        <u-button color="info">Info</u-button>
        <u-button color="success">Success</u-button>
        <u-button color="warning">Warning</u-button>
        <u-button color="error">Error</u-button>
        <u-button color="error" disabled>Disabled</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button color="primary" ghost>Primary</u-button>
        <u-button color="info" ghost>Info</u-button>
        <u-button color="success" ghost>Success</u-button>
        <u-button color="warning" ghost>Warning</u-button>
        <u-button color="error" ghost>Error</u-button>
        <u-button color="error" ghost disabled>Disabled</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Size Expansion

``` html
<u-linear-layout>
    <u-button size="small">Small</u-button>
    <u-button>Normal</u-button>
    <u-button size="large">Large</u-button>
</u-linear-layout>
```

### Square

``` html
<u-button square icon="refresh"></u-button>
```

### Icon

``` html
<u-linear-layout>
    <u-button color="primary" icon="create">Create Instance</u-button>
    <u-button color="primary" icon="loading">Create Now</u-button>
    <u-button color="primary" icon="loading" disabled>Create Now</u-button>
</u-linear-layout>
```

### Display method

``` html
<u-button display="block">Block Level Button</u-button>
<u-button display="inline">Inline Button (default)</u-button>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| href | String | | Link address |
| target | String | | (native attribute) |
| to | String, Location | | Requires vue-router, which is the same as the `to` attribute of `<router-link>`. Can be a string or an object describing the target location. |
| replace | Boolean | `false` | Requires vue-router, the same as the `replace` attribute of `<router-link>`. If `true`, when clicked, `router.replace()` will be called instead of `router.push()`, so no `history` record will be left after navigation. |
| append | Boolean | `false` | Requires vue-router, the same as the `append` attribute of `<router-link>`. If `true`, append the path of `to` after the current path. |
| color | String | | Color extension. Optional value: `'primary'` or leave blank |
| size | String | | Size extension. Optional value: `'small'` or leave blank |
| square | Boolean | `false` | Whether to display as a square |
| disabled | Boolean | `false` | Whether to disable. When disabled, the `click` event will not be responded to. |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | Insert text or HTML |

### Events

#### $listeners

Listen for events on all `<a>` elements.

#### @before-navigate

Triggered before switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | The value of the `to` attribute |
| $event.replace | Boolean | The value of the `replace` attribute |
| $event.append | Boolean | The value of the `append` attribute |
| $event.preventDefault | Function | Prevent switching process |

#### @navigate

Triggered when switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | The value of the `to` attribute |
| $event.replace | Boolean | The value of the `replace` attribute |
| $event.append | Boolean | The value of the `append` attribute |
