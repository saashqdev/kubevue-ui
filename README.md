# Kubevue UI

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
