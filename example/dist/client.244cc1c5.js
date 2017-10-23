webpackJsonp([1],[,function(t,e,a){t.exports=a(2)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a(7);new n.a({el:"#app",render:function(t){return t(i.a)}})},,,,,function(t,e,a){"use strict";function n(t){a(8)}var i=a(10),s=a(13),r=a(9),u=n,l=r(i.a,s.a,!1,u,null,null);e.a=l.exports},function(t,e){},,function(t,e,a){"use strict";var n=a(11);e.a={components:{MaskedInput:n.a},data:function(){return{pattern:"1111 1111"}}}},function(t,e,a){"use strict";function n(t){var e,a,n,i;if(void 0!==t.selectionStart)e=t.selectionStart,a=t.selectionEnd;else try{t.focus(),n=t.createTextRange(),i=n.duplicate(),n.moveToBookmark(document.selection.createRange().getBookmark()),i.setEndPoint("EndToStart",n),e=i.text.length,a=e+n.text.length}catch(t){}return{start:e,end:a}}function i(t){return(t.ctrlKey||t.metaKey)&&t.keyCode===(t.shiftKey?o:c)}function s(t){return(t.ctrlKey||t.metaKey)&&t.keyCode===(t.shiftKey?c:o)}function r(t,e){var a;try{void 0!==t.selectionStart?(t.focus(),t.setSelectionRange(e.start,e.end)):(t.focus(),a=t.createTextRange(),a.collapse(!0),a.moveStart("character",e.start),a.moveEnd("character",e.end-e.start),a.select())}catch(t){}}var u=a(12),l=a.n(u),c=90,o=89;e.a={name:"masked-input",render:function(t){return t("input",{ref:"input",on:{change:this._change,keydown:this._keydown,keypress:this._keypress,paste:this._paste}})},props:{pattern:{type:String,required:!0},value:{type:String},formatCharacters:{type:Object,default:function(){return{W:{validate:function(t){return/\w/.test(t)},transform:function(t){return t.toUpperCase()}}}}},placeholder:{type:String},placeholderChar:{type:String}},watch:{pattern:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){console.log(this.placeholder);var t={pattern:this.pattern,value:this.value,formatCharacters:this.formatCharacters};this.placeholderChar&&(t.placeholderChar=this.props.placeholderChar),this.mask=new l.a(t),this.$refs.input.placeholder=this.placeholder?this.placeholder:this.mask.emptyValue},_change:function(t){var e=this.mask.getValue();if(console.log(e,this.$refs.input.value),this.$refs.input.value!==e){if(this.$refs.input.value.length<e.length){var a=e.length-this.$refs.input.value.length;this._updateMaskSelection(),this.mask.selection.end=this.mask.selection.start+a,this.mask.backspace()}var n=this._getDisplayValue();this.$refs.input.value=n,n&&this._updateInputSelection()}this.change&&this.change(t)},_keydown:function(t){if(i(t))return t.preventDefault(),void(this.mask.undo()&&(this.$refs.input.value=this._getDisplayValue(),this._updateInputSelection(),this.change&&this.change(t)));if(s(t))return t.preventDefault(),void(this.mask.redo()&&(this.$refs.input.value=this._getDisplayValue(),this._updateInputSelection(),this.change&&this.change(t)));if("Backspace"===t.key&&(t.preventDefault(),this._updateMaskSelection(),this.mask.backspace())){var e=this._getDisplayValue();this.$refs.input.value=e,e&&this._updateInputSelection(),this.change&&this.change(t)}},_keypress:function(t){t.metaKey||t.altKey||t.ctrlKey||"Enter"===t.key||(t.preventDefault(),this._updateMaskSelection(),this.mask.input(t.key||t.data)&&(this.$refs.input.value=this.mask.getValue(),this._updateInputSelection(),this.change&&this.change(t)))},_paste:function(t){t.preventDefault(),this._updateMaskSelection(),this.mask.paste(t.clipboardData.getData("Text"))&&(this.$refs.input.value=this.mask.getValue(),setTimeout(this._updateInputSelection,0),this.change&&this.change(t))},_updateMaskSelection:function(){this.mask.selection=n(this.$refs.input)},_updateInputSelection:function(){r(this.$refs.input,this.mask.selection)},_getDisplayValue:function(){var t=this.mask.getValue();return t===this.mask.emptyValue?"":t}}}},,function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"wrap"},[a("h1",[t._v("Vue masked input")]),t._v(" "),a("h2",[t._v("A Vue component which creates a masked  <input/>")]),t._v(" "),a("ul",[a("li",[a("label",[t._v("Card Number: ")]),t._v(" "),a("masked-input",{attrs:{pattern:"1111 1111 1111 1111"}})],1),t._v(" "),a("li",[a("label",[t._v("Date: ")]),t._v(" "),a("masked-input",{attrs:{pattern:"1111/11/11",placeholder:"yyyy/mm/dd"}})],1),t._v(" "),a("li",[a("label",[t._v("Phone: ")]),t._v(" "),a("masked-input",{attrs:{pattern:"111 1111 1111"}})],1),t._v(" "),a("li",[a("label",[t._v("License Plate: ")]),t._v(" "),a("masked-input",{attrs:{pattern:"A 11111",placeholder:"A 11111"}})],1),t._v(" "),a("li",[a("label",[t._v("Escaped: ")]),t._v(" "),a("masked-input",{attrs:{pattern:"11 \\* 11"}})],1),t._v(" "),a("li",[a("label",[t._v("Leading: ")]),t._v(" "),a("masked-input",{attrs:{pattern:"(1) 111 1111"}})],1),t._v(" "),a("li",[a("label",[t._v("Mix: ")]),t._v(" "),a("masked-input",{attrs:{pattern:"11-WW-1111",placeholder:"11-WW-1111"}})],1),t._v(" "),a("li",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pattern,expression:"pattern"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.pattern=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Pattern: ")]),t._v(" "),a("option",[t._v("1111 1111")]),t._v(" "),a("option",[t._v("111 111")]),t._v(" "),a("option",[t._v("11 11")])]),t._v(" "),a("masked-input",{attrs:{pattern:t.pattern}})],1)])])])},i=[],s={render:n,staticRenderFns:i};e.a=s}],[1]);
//# sourceMappingURL=client.244cc1c5.js.map