# Kubevue UI

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/kubevue-ui.kubevue.svg?style=flat-square
[npm-url]: http://npmjs.org/package/kubevue-ui.kubevue
[david-img]: http://img.shields.io/david/kubevue/kubevue-ui.svg?style=flat-square
[david-url]: https://david-dm.org/kubevue/kubevue-ui
[download-img]: https://img.shields.io/npm/dm/kubevue-ui.kubevue.svg?style=flat-square
[download-url]: https://npmjs.org/package/kubevue-ui.kubevue

## Install
``` shell
npm install --save kubevue-ui.kubevue kubevue-utils
```

## QuickStart

``` javascript
import Vue from 'vue';
import * as CloudUI from 'kubevue-ui.kubevue';
import { installComponents } from 'kubevue-utils';
installComponents(CloudUI, Vue);
```

## Development

``` shell
npm install
npm install -g kubevue-cli
kubevue dev
```

## Build

``` shell
kubevue build
```

## Publish

``` shell
kubevue build
kubevue ghpages
```
