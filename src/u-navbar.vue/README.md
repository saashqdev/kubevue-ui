# Navigation Bar

## Example
### Basic Form

#### Routing Mode

``` html
<u-navbar>
    <u-navbar-item to="u-navbar">Component</u-navbar-item>
    <u-navbar-item>Record Management</u-navbar-item>
    <u-navbar-item>Help</u-navbar-item>
</u-navbar>
```

#### Value Mode

``` html
<u-navbar value="3" :router="false">
    <u-navbar-item value="1">Guidelines</u-navbar-item>
    <u-navbar-item value="2">Concept</u-navbar-item>
    <u-navbar-item value="3">Component</u-navbar-item>
</u-navbar>
```

### Color Extension

``` html
<u-linear-layout direction="vertical">
    <u-navbar value="3" :router="false">
        <u-navbar-item value="1">Guidelines</u-navbar-item>
        <u-navbar-item value="2">Concept</u-navbar-item>
        <u-navbar-item value="3">Component</u-navbar-item>
    </u-navbar>
    <u-navbar value="3" :router="false" color="inverse">
        <u-navbar-item value="1">Guidelines</u-navbar-item>
        <u-navbar-item value="2">Concept</u-navbar-item>
        <u-navbar-item value="3">Component</u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

### Location

``` html
<u-linear-layout direction="vertical">
    <u-navbar color="inverse" alignment="left">
        <u-navbar-item to="u-navbar">Component</u-navbar-item>
        <u-navbar-item>Record Management</u-navbar-item>
        <u-navbar-item>Help</u-navbar-item>
    </u-navbar>
    <u-navbar color="inverse" alignment="center">
        <u-navbar-item to="u-navbar">Component</u-navbar-item>
        <u-navbar-item>Record Management</u-navbar-item>
        <u-navbar-item>Help</u-navbar-item>
    </u-navbar>
    <u-navbar color="inverse" alignment="right">
        <u-navbar-item to="u-navbar">Component</u-navbar-item>
        <u-navbar-item>Record Management</u-navbar-item>
        <u-navbar-item>Help</u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

### Separator

``` html
<u-navbar>
    <u-navbar-item>Guide</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item>Configuration</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item to="/proto-ui">Component</u-navbar-item>
    <u-navbar-item to="/libraries">Component library</u-navbar-item>
</u-navbar>
```

### Combined with Logo

``` html
<u-linear-layout direction="vertical">
    <u-navbar>
        <u-logo slot="left"></u-logo>
        <u-navbar-item to="u-navbar">Body</u-navbar-item>
        <u-navbar-item>Record Management</u-navbar-item>
        <u-navbar-item>Help</u-navbar-item>
    </u-navbar>
    <u-navbar color="inverse" alignment="right">
        <u-logo color="inverse" slot="left"></u-logo>
        <u-navbar-item>Products</u-navbar-item>
        <u-navbar-item to="u-navbar">Price</u-navbar-item>
        <u-navbar-item>Help</u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

## Navbar API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| router | Boolean | `true` | Whether to control which item to select based on vue-router |
| value.sync, v-model | Any | | The currently selected value |
| readonly | Boolean | `false` | Whether it is read-only |
| disabled | Boolean | `false` | Whether to disable |

### Slots

#### (default)

Insert `<u-navbar-item>` or `<u-navbar-divider>` subcomponent.

### Events

#### @before-select

Trigger before selecting an item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The value of the selection |
| $event.oldValue | Any | Old value |
| $event.item | Object | Selection related object |
| $event.itemVM | NavbarItem | Selection subcomponent |
| $event.preventDefault | Function | Prevent selection process |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | The value of the selection |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | Changed value |
| $event.oldValue | Any | Old value |
| $event.item | Object | In radio selection mode, the object related to the selected item |
| $event.itemVM | NavbarItem | In radio selection mode, select the item subcomponent |

## NavbarItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | The value of this item |
| disabled | Boolean | `false` | Disable this |
| item | Object | | Related objects. When this is selected, the event thrown will pass the object, making it easier to develop |
| href | String | | Link address |
| target | String | | Open method |
| to | String, Location | | Requires vue-router, which is the same as the `to` attribute of `<router-link>`. Can be a string or an object describing the target location. |
| replace | Boolean | `false` | Requires vue-router, the same as the `replace` attribute of `<router-link>`. If `true`, when clicked, `router.replace()` will be called instead of `router.push()`, so no `history` record will be left after navigation. |
| exact | Boolean | `false` | Requires vue-router, the same as the `exact` attribute of `<router-link>`. It will be highlighted only if it is completely consistent with the route. |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-select

Trigger before selecting this

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The value of this item |
| $event.item | Object | The related object of this item |
| $event.itemVM | NavbarItem | This component |
| $event.preventDefault | Function | Prevent selection process |

#### @before-navigate

Triggered before switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | The value of the `to` attribute |
| $event.replace | Boolean | The value of the `replace` attribute |
| $event.exact | Boolean | The value of the `exact` attribute |
| $event.preventDefault | Function | Prevent switching process |

#### @navigate

Triggered when switching routes using router related attributes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | The value of the `to` attribute |
| $event.replace | Boolean | The value of the `replace` attribute |
| $event.exact | Boolean | The value of the `exact` attribute |

## NavbarDivider API

None
