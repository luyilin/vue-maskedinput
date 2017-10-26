# vue-maskedinput

[![npm](https://img.shields.io/npm/v/vue-maskedinput.svg)](https://www.npmjs.com/package/vue-maskedinput)
[![npm](https://img.shields.io/npm/dm/vue-maskedinput.svg)](https://www.npmjs.com/package/vue-maskedinput)
[![CircleCI](https://img.shields.io/circleci/project/github/luyilin/vue-maskedinput.svg)](https://circleci.com/gh/luyilin/vue-maskedinput/tree/master)

A [Vue](https://vuefe.cn/) component for `<input>` masking, built on top of [inputmask-core](https://github.com/insin/inputmask-core).

### [Demo](https://luyilin.github.io/vue-maskedinput/example/dist/index)

## Install

```bash
yarn add vue-maskedinput
```

CDN: [UNPKG](https://unpkg.com/vue-maskedinput/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-maskedinput/) (available as `window.MaskedInput`)

## Usage

```vue
<template>
  <masked-input pattern="11/1111" placeholder="11/1111"></masked-input>
</template>

<script>
import MaskedInput from 'vue-maskedinput'

export default {
  components: {
    MaskedInput
  }
}
</script>
```

## Props

### `mask` : `string`
The masking pattern to be applied to the `<input>`.

### `formatCharacters`: `Object`
Customised format character definitions for use in the pattern.

### `placeholderChar`: `string`
Customised placeholder character used to fill in editable parts of the pattern.

### `placeholder` : `string`
A default `placeholder` will be generated from the mask's pattern, but you can pass a `placeholder` prop to provide your own.

### `value` : `string`
A default value for the mask.

### `hideUnderline` : `Boolean`
A boolean to hide placeholder's underline

See the [inputmask-core docs](https://github.com/insin/inputmask-core#placeholderchar--string) for details.

## License

MIT &copy; [luyilin](https://github.com/luyilin)
