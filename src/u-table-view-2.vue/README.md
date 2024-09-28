# TableView

## Example
### Basic form

``` html
<u-table-view-2 :data="[
    { id: 1, name: 'Homer Simpson', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 2, name: 'Marge Simpson', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 3, name: 'Bart Simpson', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', birthday: '19910528' },
    { id: 4, name: 'Dave Cork', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', birthday: '19910528' },
    { id: 5, name: 'John Doe', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', birthday: '19910528' },
]">
    <u-table-view-column-2 title="Serial Number" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Name" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Address" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="Birthdate" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

### Loading

``` html
<u-table-view-2>
    <u-table-view-column-2 title="Serial Number" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Name" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Address" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="Birthdate" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

``` html
<u-table-view-2 :data="null">
    <u-table-view-column-2 title="Serial Number" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Name" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Address" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="Birthdate" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

### Empty State

``` html
<u-table-view-2 :data="[]">
    <u-table-view-column-2 title="Serial Number" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Name" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Address" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="Birthdate" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

### Slot

``` html
<u-table-view-2 :data="[
    { id: 1, name: 'Homer Simpson', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 2, name: 'Marge Simpson', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', birthday: '19910528' },
    { id: 3, name: 'Bart Simpson', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', birthday: '19910528' },
    { id: 4, name: 'Dave Cork', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', birthday: '19910528' },
    { id: 5, name: 'John Doe', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', birthday: '19910528' },
]">
    <u-table-view-column-2 title="Serial Number" field="id" width="20%">
        <div slot-scope="{ item }">test {{ item.id * 10 }}</div>
    </u-table-view-column-2>
    <u-table-view-column-2 title="Name" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="Address" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="Birthdate" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```