import InputMask from 'inputmask-core'

const KEYCODE_Z = 90
const KEYCODE_Y = 89

function getSelection (el) {
  var start, end, rangeEl, clone
  if (el.selectionStart !== undefined) {
    start = el.selectionStart
    end = el.selectionEnd
  }
  else {
    try {
      el.focus()
      rangeEl = el.createTextRange()
      clone = rangeEl.duplicate()

      rangeEl.moveToBookmark(document.selection.createRange().getBookmark())
      clone.setEndPoint('EndToStart', rangeEl)

      start = clone.text.length
      end = start + rangeEl.text.length
    }
    catch (e) {}
  }

  return { start, end }
}

function isUndo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Y : KEYCODE_Z)
}

function isRedo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Z : KEYCODE_Y)
}

function setSelection(el, selection) {
  var rangeEl

  try {
    if (el.selectionStart !== undefined) {
      el.focus()
      el.setSelectionRange(selection.start, selection.end)
    }
    else {
      el.focus()
      rangeEl = el.createTextRange()
      rangeEl.collapse(true)
      rangeEl.moveStart('character', selection.start)
      rangeEl.moveEnd('character', selection.end - selection.start)
      rangeEl.select()
    }
  }
  catch (e) {}
}

export default {
  name: 'masked-input',

  render(h) {
    return h('input', {
      ref: 'input',
      domProps: {
        value: this.value
      },
      on: {
        change: this._change,
        keydown: this._keydown,
        keypress: this._keypress,
        paste: this._paste
      }
    })
  },

  props: {
    pattern: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    formatCharacters: {
      type: Object,
      default: () => {
        return {
          'w': {
            validate(char) { return /\w/.test(char) },
          },
          'W': {
            validate(char) { return /\w/.test(char) },
            transform(char) { return char.toUpperCase() }
          }
        }
      }
    },
    placeholder: {
      type: String
    },
    placeholderChar: {
      type: String
    },
    hideUnderline: {
      type: Boolean
    }
  },

  watch: {
    pattern() {
      this.init()
    },
    value(newValue) {
      if (this.mask) this.mask.setValue(newValue)
    },
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      var options = {
        pattern: this.pattern,
        value: this.value,
        formatCharacters: this.formatCharacters
      }
      if (this.placeholderChar) {
        options.placeholderChar = this.props.placeholderChar
      }
      this.mask = new InputMask(options)
      this.$refs.input.placeholder = this.placeholder ? this.placeholder : this.hideUnderline ? '' : this.mask.emptyValue

      if (this.$refs.input.value === '') {
        this.$emit('input', '', '')
      } else {
        [...this.$refs.input.value].map((i) => {
          if(this.mask.input(i)) {
            this.$refs.input.value = this.mask.getValue()
            setTimeout(this._updateInputSelection, 0)
          }
        })
      }
    },

    _change(e) {
      var maskValue = this.mask.getValue()
      if (this.$refs.input.value !== maskValue) {
        // Cut or delete operations will have shortened the value
        if (this.$refs.input.value.length < maskValue.length) {
          var sizeDiff = maskValue.length - this.$refs.input.value.length
          this._updateMaskSelection()
          this.mask.selection.end = this.mask.selection.start + sizeDiff
          this.mask.backspace()
        }
        this._updateValue(e)
      }
    },

    _keydown(e) {
      if (isUndo(e)) {
        e.preventDefault()
        if (this.mask.undo()) {
          this._updateValue(e)
        }
        return
      }
      else if (isRedo(e)) {
        e.preventDefault()
        if (this.mask.redo()) {
          this._updateValue(e)
        }
        return
      }

      if (e.key === 'Backspace') {
        e.preventDefault()
        this._updateMaskSelection()
        if (this.mask.backspace()) {
          this._updateValue(e)
        }
        if (this.$refs.input.value === '') {
          this.$emit('input', '', '')
        }
      }
    },

    _keypress(e) {
      if (e.metaKey || e.altKey || e.ctrlKey || e.key === 'Enter') return
      e.preventDefault()
      this._updateMaskSelection()
      if (this.mask.input((e.key || e.data))) {
        this._updateValue(e)
      }
    },

    _paste(e) {
      e.preventDefault()
      this._updateMaskSelection()
      if (this.mask.paste(e.clipboardData.getData('Text'))) {
        this._updateValue(e)
      }
    },

    _updateMaskSelection() {
      this.mask.selection = getSelection(this.$refs.input)
    },

    _updateInputSelection() {
      setSelection(this.$refs.input, this.mask.selection)
    },

    _getDisplayValue() {
      var value = this.mask.getValue()
      return value === this.mask.emptyValue ? '' : value
    },

    _updateValue(e) {
      this.$refs.input.value = this._getDisplayValue()
      this.$emit('input', this.$refs.input.value, this.mask.getRawValue())
      this._updateInputSelection()
      if (this.change) {
        this.change(e)
      }
    }
  }
}

