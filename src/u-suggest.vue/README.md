# Automatically Suggest

## Example
### Basic Form

``` html
<u-linear-layout>
    <u-suggest placeholder="Will automatically prompt when entering">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="absent">Absent</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="brief">Brief</u-suggest-item>
        <u-suggest-item value="calendar">Calendar</u-suggest-item>
        <u-suggest-item value="cancel">Cancel</u-suggest-item>
    </u-suggest>
    <u-suggest value="bread">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="absent">Absent</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="brief">Brief</u-suggest-item>
        <u-suggest-item value="calendar">Calendar</u-suggest-item>
        <u-suggest-item value="cancel">Cancel</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### Read-Only, Disable, Disable a Certain Item

``` html
<u-linear-layout>
    <u-suggest value="cake" readonly>
        <u-suggest-item value="Apple">Apple</u-suggest-item>
        <u-suggest-item value="Banana">Banana</u-suggest-item>
        <u-suggest-item value="cake">Cake</u-suggest-item>
    </u-suggest>
    <u-suggest value="cake" disabled>
        <u-suggest-item value="Apple">Apple</u-suggest-item>
        <u-suggest-item value="Banana">Banana</u-suggest-item>
        <u-suggest-item value="cake">Cake</u-suggest-item>
    </u-suggest>
    <u-suggest value="cake">
        <u-suggest-item value="Apple">Apple</u-suggest-item>
        <u-suggest-item value="banana" disabled>Banana</u-suggest-item>
        <u-suggest-item value="cake">Ccake</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### Matching Method

``` html
<u-linear-layout>
    <u-suggest match-method="includes" placeholder="Include (default)">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="absent">Absent</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="brief">Brief</u-suggest-item>
        <u-suggest-item value="calendar">Calendar</u-suggest-item>
        <u-suggest-item value="cancel">Cancel</u-suggest-item>
    </u-suggest>
    <u-suggest match-method="startsWith" placeholder="Match only at the beginning">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="absent">Absent</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="brief">Brief</u-suggest-item>
        <u-suggest-item value="calendar">Calendar</u-suggest-item>
        <u-suggest-item value="cancel">Cancel</u-suggest-item>
    </u-suggest>
    <u-suggest match-method="endsWith" placeholder="Match only the end">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="absent">Absent</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="brief">Brief</u-suggest-item>
        <u-suggest-item value="calendar">Calendar</u-suggest-item>
        <u-suggest-item value="cancel">Cancel</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### Case Sensitive

By default, it is case-insensitive, which can be enabled with the `case-sensitive` property.

``` html
<u-linear-layout>
    <u-suggest placeholder="Case sensitive">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="Absent">Absent</u-suggest-item>
        <u-suggest-item value="ABOUT">ABOUT</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="Break">Break</u-suggest-item>
        <u-suggest-item value="BRIEF">Brief</u-suggest-item>
    </u-suggest>
    <u-suggest case-sensitive placeholder="Case insensitive">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="Absent">Absent</u-suggest-item>
        <u-suggest-item value="ABOUT">ABOUT</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="Break">Break</u-suggest-item>
        <u-suggest-item value="BRIEF">Brief</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### Strict Mode

In strict mode, the value in the input box must exactly match the value in one of the options.

``` html
<u-linear-layout>
    <u-suggest placeholder="Non-strict mode">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="absent">Absent</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="brief">Brief</u-suggest-item>
        <u-suggest-item value="calendar">Calendar</u-suggest-item>
        <u-suggest-item value="cancel">Cancel</u-suggest-item>
    </u-suggest>
    <u-suggest strict placeholder="Strict mode">
        <u-suggest-item value="abandon">Abandon</u-suggest-item>
        <u-suggest-item value="absent">Absent</u-suggest-item>
        <u-suggest-item value="bread">Bread</u-suggest-item>
        <u-suggest-item value="brief">Brief</u-suggest-item>
        <u-suggest-item value="calendar">Calendar</u-suggest-item>
        <u-suggest-item value="cancel">Cancel</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### Data Source

When adding data using tags or `data` attributes, they are all static. If you want to dynamically update the data, you can set the data source property. The data source is of `DataSource` type or a normal function, which is required to return an array in the `Array<{ text, value }>` format or a `Promise` object.

#### Synchronize Data Source

``` view
<template>
<u-suggest placeholder="Please enter your email" :data-source="fetchData"></u-suggest>
</template>
<script>
export default {
    methods: {
        fetchData({ filter }) {
            const prefix = filter.value.split('@')[0];
            if (!prefix)
                return [];
            else {
                return ['163.com', '126.com', 'vip.163.com', 'vip.126.com'].map((suffix) => {
                    const text = `${prefix}@${suffix}`;
                    return { text, value: text };
                });
            }
        },
    },
};
</script>
```

#### Asynchronous Data Source

``` view
<template>
<u-suggest placeholder="Please enter place name" :data-source="dataSource"></u-suggest>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        let data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            fetch({ filter }) {
                const value = filter.value.toLowerCase();
                // Here we use Promise and setTimeout to simulate a fetch asynchronous request
                return new Promise((resolve, reject) => {
                    setTimeout((result) => {
                        resolve(data.filter((item) => item.value.toLowerCase().startsWith(value)));
                    }, 500);
                });
            },
        });
    },
}
</script>
```

#### Asynchronous Paging Data Source

<!-- @TODO: Synchronize paging -->

When the amount of data after filtering is still large, you can load asynchronous data in pages. When `new DataSource`, directly rewrite the `loadMore` method. This method will pass in relevant parameters and require a `Promise` object to be returned.

``` view
<template>
<u-suggest placeholder="Please enter item, info or test" :data-source="dataSource"></u-suggest>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        let data = [];
        for (let i = 1; i <= 1000; i++) {
            data.push('item' + i);
            data.push('info' + i);
            data.push('detail' + i);
        }
        data = data.map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            loadMore(params) {
                const value = params.filter.value.toLowerCase();

                // Here we use Promise and setTimeout to simulate an asynchronous request
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data.filter((item) => item.value.includes(value))
                            .slice(params.offset, params.offset + params.limit)
                        );
                    }, 500);
                });
            },
        });
    },
}
</script>
```

### Size Expansion

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-suggest size="mini" placeholder="Mini">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="mini small" placeholder="Mini small">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="mini normal" placeholder="Mini normal">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="mini medium" placeholder="Mini medium">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-suggest size="small mini" placeholder="Small mini">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="small" placeholder="Small">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="small normal" placeholder="Small normal">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="small medium" placeholder="Small medium">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-suggest size="normal mini" placeholder="Normal mini">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="normal small" placeholder="Normal small">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="normal" placeholder="Normal">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="normal medium" placeholder="Normal medium">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-suggest size="medium mini" placeholder="Medium mini">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="medium small" placeholder="Medium small">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="medium normal" placeholder="Medium normal">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
        <u-suggest size="medium" placeholder="Medium">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-suggest size="large" placeholder="Large">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-suggest size="huge" placeholder="Huge">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-suggest size="huge full" placeholder="Huge full">
            <u-suggest-item value="abandon">Abandon</u-suggest-item>
            <u-suggest-item value="absent">Absent</u-suggest-item>
            <u-suggest-item value="bread">Bread</u-suggest-item>
            <u-suggest-item value="brief">Brief</u-suggest-item>
            <u-suggest-item value="calendar">Calendar</u-suggest-item>
            <u-suggest-item value="cancel">Cancel</u-suggest-item>
        </u-suggest>
    </u-linear-layout>
</u-linear-layout>
```

## Suggest API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | The currently selected value |
| field | String | `'text'` | Display text field |
| data | Array\<{ text, value }\> | | Data list in Data writing mode |
| dataSource | DataSource, Function || Multifunctional data source |
| readonly | Boolean | `false` | Read-only |
| disabled | Boolean | `false` | Disabled |
| matchMethod | String, Function | `'includes'` | Matching method. Optional values: `includes` means include only, `startsWith` means only match the beginning, `endsWith` means only match the end. You can also pass a method |
| caseSensitive | Boolean | `false` | Is it case sensitive? The default is case insensitive |
| strict | Boolean | `false` | Whether to use strict mode. When in strict mode, the `value` attribute must be the value of an option or empty |
| size | String | `'normal normal'` | Control width and height attributes, the first value represents the height attribute, the second value represents the width, optional values: `mini`,`small`,`normal`,`medium`,`large`,`huge`,`full`, can be combined with each other |

### Slots

#### (default)

Inserts a `<u-suggest-item>` child component.

### Events

#### @before-select

Triggered before an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The value of the selected item |
| $event.oldValue | Any | Old value |
| $event.item | Object | Object related to the selected item |
| $event.itemVM | SuggestItem | Select item subcomponent |
| $event.preventDefault | Function | Prevent the selection process |

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | Value of the selected item |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The changed value |
| $event.oldValue | Any | Old value |
| $event.item | Object | Object related to the selected item |
| $event.itemVM | SuggestItem | Select item subcomponent |

#### @toggle

Triggered when expanding/collapsed the selection box

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | Expand/collapse state |

## SuggestItem API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | The value of this item |
| disabled | Boolean | `false` | Disable this item |
| item | Object | | Related object. When this option is selected, the thrown event will pass this object, which is convenient for development.

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-select

Triggered before selecting this item

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | The value of this item |
| $event.item | Object | The object associated with this item |
| $event.itemVM | SelectItem | This component |
| $event.preventDefault | Function | Prevent the selection process |