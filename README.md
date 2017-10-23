# vue-maskedinput

Masked input Vue component

[Demo](https://luyilin.github.io/vue-maskedinput/example/dist/index)

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

### mask : string
The masking pattern to be applied to the `<input>`.

### `formatCharacters`: `Object`
Customised format character definitions for use in the pattern.

### `placeholderChar`: `string`
Customised placeholder character used to fill in editable parts of the pattern.

### `placeholder` : `string`
A default `placeholder` will be generated from the mask's pattern, but you can pass a `placeholder` prop to provide your own.

See the [inputmask-core docs](https://github.com/insin/inputmask-core#placeholderchar--string) for details.

## License

MIT &copy; [luyilin](https://github.com/luyilin)
