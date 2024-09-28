# 快速开始

### 安装

使用 npm 安装组件库 `kubevue-ui.kubevue`, 推荐安装 `kubevue-utils` 可以方便的在全局安装组件库、组件、过滤器等。

``` shell
npm install --save kubevue-ui.kubevue kubevue-utils
```

### 使用

``` javascript
import Vue from 'vue';
import * as CloudUI from 'kubevue-ui.kubevue';
import { install } from 'kubevue-utils';
install(CloudUI, Vue); // 全局注册组件库
```

如果您想对组件进行样式或逻辑上的修改，请查看 Kubevue 文档中的[组件的扩展和继承](https://kubevue.github.io/guides/components)。

### 示例

```vue
<template>
<div>
    <u-modal :visible.sync="modalVisible" title="提示" mask-close cancel-button="">
        <span>Welcome to use Cloud UI !</span>
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
