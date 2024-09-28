# Table

## Example
### Basic Form

``` html
<u-table>
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1991-05-28</td>
        </tr>
    </tbody>
</u-table>
```

### Style Extensions

``` html
<u-table ghost>
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1991-05-28</td>
        </tr>
    </tbody>
</u-table>
```

``` html
<u-table ghost striped>
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1991-05-28</td>
        </tr>
    </tbody>
</u-table>
```

### Size Expansion

``` html
<u-table ghost size="small">
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1991-05-28</td>
        </tr>
    </tbody>
</u-table>
```

## Table API

### Slots

#### (default)

Insert `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` into the table