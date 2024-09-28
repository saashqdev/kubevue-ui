# Quick Start

### Install

Use npm to install the component library `kubevue-ui.kubevue`. It is recommended to install `kubevue-utils` to easily install component libraries, components, filters, etc. globally.

``` shell
npm install --save kubevue-ui.kubevue kubevue-utils
```

### Usage

``` javascript
import Vue from 'vue';
import * as CloudUI from 'kubevue-ui.kubevue';
import { install } from 'kubevue-utils';
install(CloudUI, Vue); // Global registration component library
```

If you want to make stylistic or logical changes to a component, check out [Extending and Inheriting Components](https://kubevue.github.io/guides/components) in the Kubevue documentation.

### Example

```vue
<template>
<div>
    <u-modal :visible.sync="modalVisible" title="Hint" mask-close cancel-button="">
        <span>Welcome to Cloud UI!</span>
    </u-modal>
    <u-button @click="open()">Open</u-button>
</div>
</template>

<script>
export default {
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        open() {
            this.modalVisible = true;
        },
    },
};
</script>
```
