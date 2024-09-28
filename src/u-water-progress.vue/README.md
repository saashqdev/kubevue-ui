# Well

## Example
### Basic Form

``` html
<u-water-progress :value="36"></u-water-progress>
```

### Add Text

``` html
<u-water-progress text="Memory usage" :value="36"></u-water-progress>
```

### Color Extension

``` html
<u-linear-layout>
    <u-water-progress text="Memory Usage" :value="20"></u-water-progress>
    <u-water-progress text="Memory Usage" :value="35" color="primary"></u-water-progress>
    <u-water-progress text="Memory Usage" :value="50" color="success"></u-water-progress>
    <u-water-progress text="Memory Usage" :value="65" color="warning"></u-water-progress>
    <u-water-progress text="Memory Usage" :value="80" color="error"></u-water-progress>
</u-linear-layout>
```
