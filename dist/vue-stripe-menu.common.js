module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1e53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5253bf0a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Mob.vue?vue&type=template&id=10049cdc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:['vsm-section', 'vsm-section_mob', {
    'vsm-open': _vm.active
  }]},[_c('div',{staticClass:"vsm-mob",on:{"click":_vm.onClickHamburger}},[_vm._t("hamburger",[_vm._m(0)])],2),_c('div',{staticClass:"vsm-mob-content"},[_c('transition',{attrs:{"name":"vsm-mob-anim"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"vsm-mob-content__wrap"},[_c('div',{staticClass:"vsm-mob-close",on:{"click":_vm.onClickHamburger}}),_vm._t("default")],2)])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vsm-mob__hamburger"},[_c('div',{staticClass:"vsm-mob-line"}),_c('div',{staticClass:"vsm-mob-line"}),_c('div',{staticClass:"vsm-mob-line"})])}]


// CONCATENATED MODULE: ./src/components/Mob.vue?vue&type=template&id=10049cdc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Mob.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Mobvue_type_script_lang_js_ = ({
  name: 'VsmMob',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // Support change value without accept props
      active: this.value
    }
  },
  watch: {
    // Support for changing a variable externally
    value (val) {
      if (this.active !== val) {
        this.active = val
      }
    },
    // Lock the permanent event on click, hang event only when the menu is opened
    active (val) {
      if (val) {
        this.registerEvent()
      } else {
        this.unregisterEvent()
      }
    }
  },
  mounted () {
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints
    this._touchEvent = touchSupport ? 'touchend' : 'click'
  },
  beforeDestroy () {
    this.unregisterEvent()
  },
  methods: {
    closeDropdown () {
      this.emitValue(false)
    },
    onClickHamburger () {
      this.emitValue(!this.active)
    },
    registerEvent () {
      document.body.addEventListener(this._touchEvent, this.eventEndHandler)
    },
    unregisterEvent () {
      document.body.removeEventListener(this._touchEvent, this.eventEndHandler)
    },
    emitValue (toggle) {
      this.active = toggle
      this.$emit('input', toggle)
    },
    // Close Dropdown content after outside click
    eventEndHandler (evt) {
      if (this.$el !== evt.target && !this.$el.contains(evt.target)) {
        this.emitValue(false)
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/Mob.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mobvue_type_script_lang_js_ = (Mobvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Mob.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mobvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Mob = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb62");
/* harmony import */ var _components_Mob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1e53");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8594");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_2__);


// Import Vue components



// Import scss


// Create module definition for Vue.use()
const plugin = {
  // Declare install function executed by Vue.use()
  install: (Vue) => {
    if (plugin.installed) {
      return
    }

    plugin.installed = true

    // Components
    Vue.component('vsmMenu', _components_Menu__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])
    Vue.component('vsmMob', _components_Mob__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])
  }
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
/* harmony default export */ __webpack_exports__["a"] = (plugin);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "8594":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/main.js
var main = __webpack_require__("56d7");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main["a" /* default */]);



/***/ }),

/***/ "fb62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5253bf0a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu.vue?vue&type=template&id=2e3340b5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.element,{tag:"component",staticClass:"vsm-menu vsm-no-transition"},[_c('nav',[_c('ul',{ref:"root",staticClass:"vsm-root"},[_vm._t("before-nav"),_c('li',{staticClass:"vsm-section vsm-section_menu vsm-mob-hide"},_vm._l((_vm.menu),function(item,index){return _c(item.element || (item.dropdown ? 'button' : 'a'),_vm._g(_vm._b({key:index,ref:"links",refInFor:true,tag:"component",class:['vsm-link', item.attributes ? item.attributes.class : null, {
            'vsm-has-dropdown': item.dropdown
          }],attrs:{"data-dropdown":item.dropdown,"aria-haspopup":item.dropdown && 'true',"aria-expanded":item.dropdown && 'false'}},'component',item.attributes,false),item.listeners),[_vm._t("title",[_c('span',[_vm._v(_vm._s(item.title))])],{"item":item,"index":index})],2)}),1),_vm._t("after-nav")],2)]),_c('div',{staticClass:"vsm-dropdown vsm-mob-hide"},[_c('div',{ref:"background",staticClass:"vsm-background"},[_c('div',{ref:"backgroundAlt",staticClass:"vsm-background-alt"})]),_c('div',{ref:"arrow",staticClass:"vsm-arrow"}),_c('div',{ref:"dropdownContainer",staticClass:"vsm-dropdown-container"},_vm._l((_vm.menuHasDropdown),function(item,index){return _c('div',{key:index,ref:"sections",refInFor:true,staticClass:"vsm-dropdown-section",attrs:{"data-dropdown":item.dropdown,"aria-hidden":"false"}},[_c('div',{staticClass:"vsm-dropdown-content"},[_vm._t("default",null,{"item":item,"index":index})],2)])}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=template&id=2e3340b5&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: 'VsmMenu',
  props: {
    /**
     * An array of objects that, when initialized,
     * turn into HTML elements
     * @example
     *  [{
     *   // display menu item
     *   title: 'News',
     *   // activate dropdown content, must be unique!
     *   dropdown: 'news',
     *   // change the HTML element to ours
     *   element: 'router-link',
     *   // v-bind accepts
     *   attributes: {
     *     class: ['my-class1', { 'my-class2': true }],
     *     'data-cool': 'yes'
     *   },
     *   // v-on accepts
     *   listeners: {
     *     mouseover: (evt) => console.log('news hover', evt)
     *   },
     *   // other attributes
     *   new_item: true,
     *  }]
     * },
     */
    menu: {
      type: Array,
      required: true
    },
    /**
     * Change root HTML element
     * @example
     *  div
     */
    element: {
      type: String,
      default: 'header'
    },
    /**
     * Problems displaying the menu? Try changing the two lower
     * properties to the average width and height
     * of your dropdown content.
     */
    baseWidth: {
      type: [Number, String],
      default: 380,
      validator: (val) => +val > 0
    },
    baseHeight: {
      type: [Number, String],
      default: 400,
      validator: (val) => +val > 0
    },
    /**
     * Dropdown content does not go beyond screen size
     * screen + this value
     */
    screenOffset: {
      type: [Number, String],
      default: 10,
      validator: (val) => +val >= 0
    },
    /**
     * By default, the dropdown list drops out on hover,
     * you can change this behavior on click
     */
    handler: {
      type: String,
      default: 'hover',
      validator: (val) => ['hover', 'click'].includes(val)
    }
  },
  computed: {
    /**
     * Menu items that have dropdown content
     */
    menuHasDropdown () {
      return this.menu.filter(item => item.dropdown)
    },
    /**
     * HTML menu elements that have dropdown content
     */
    hasDropdownEls () {
      const links = this.$refs.links || []
      const elements = []

      links.forEach((link) => {
        const el = link instanceof external_commonjs_vue_commonjs2_vue_root_Vue_default.a ? link.$el : link

        if (el.classList.contains('vsm-has-dropdown')) {
          elements.push(el)
        }
      })

      return elements
    },
    /**
     * HTML dropdown content
     */
    sectionEls () {
      const sections = this.$refs.sections || []

      return sections.map((el) => ({
        el,
        name: el.getAttribute('data-dropdown'),
        content: el.children[0]
      }))
    }
  },
  watch: {
    handler (val) {
      this.handler = val
      this.registerDropdownElsEvents(true)
      this.registerDropdownContainerEvents(true)
    }
  },
  mounted () {
    // PointerEvent interface represents the state of a DOM event
    this._pointerEvent = window.PointerEvent ? {
      end: 'pointerup',
      enter: 'pointerenter',
      leave: 'pointerleave'
    } : {
      end: 'touchend',
      enter: 'mouseenter',
      leave: 'mouseleave'
    }

    this.registerGlobalEvents()
    this.registerDropdownElsEvents()
    this.registerDropdownContainerEvents()
  },
  beforeDestroy () {
    this.unregisterGlobalEvents()
  },
  methods: {
    registerGlobalEvents () {
      window.addEventListener('resize', this.windowResizeHandler)
      document.addEventListener('touchmove', this.touchMoveHandler)
      document.addEventListener('touchstart', this.touchStartHandler)
      document.body.addEventListener(this._pointerEvent.end, this.eventEndHandler)
    },
    registerDropdownElsEvents (force = false) {
      this.hasDropdownEls.forEach((el) => {
        // Events have been registered
        if (el._vsmMenu && !force) {
          return
        }

        if (el._vsmMenuHandlers) {
          Object.entries(el._vsmMenuHandlers).forEach(([eventName, fn]) => {
            el.removeEventListener(eventName, fn)
          })
        }

        if (this.handler === 'hover') {
          el._vsmMenuHandlers = {
            focusin: () => {
              this.stopCloseTimeout()
              this.openDropdown(el)
            },
            [this._pointerEvent.enter]: (evt) => {
              if (evt.pointerType !== 'touch') {
                this.stopCloseTimeout()
                this.openDropdown(el)
              }
            },
            [this._pointerEvent.leave]: (evt) => {
              if (evt.pointerType !== 'touch') {
                this.startCloseTimeout()
              }
            }
          }
        } else {
          el._vsmMenuHandlers = {}
        }

        el._vsmMenuHandlers[this._pointerEvent.end] = (evt) => {
          evt.preventDefault()
          evt.stopPropagation()
          this.toggleDropdown(el)
        }

        Object.entries(el._vsmMenuHandlers).forEach(([eventName, fn]) => {
          el.addEventListener(eventName, fn)
        })

        el._vsmMenu = true
      })
    },
    registerDropdownContainerEvents (force = false) {
      const el = this.$refs.dropdownContainer

      // Events have been registered
      if (el._vsmMenu && !force) {
        return
      }

      if (el._vsmMenuHandlers) {
        Object.entries(el._vsmMenuHandlers).forEach(([eventName, fn]) => {
          el.removeEventListener(eventName, fn)
        })
      }

      if (this.handler === 'hover') {
        el._vsmMenuHandlers = {
          [this._pointerEvent.enter]: (evt) => {
            if (evt.pointerType !== 'touch') {
              this.stopCloseTimeout()
            }
          },
          [this._pointerEvent.leave]: (evt) => {
            if (evt.pointerType !== 'touch') {
              this.startCloseTimeout()
            }
          }
        }
      } else {
        el._vsmMenuHandlers = {}
      }

      el._vsmMenuHandlers[this._pointerEvent.end] = (evt) => {
        evt.stopPropagation()
      }

      Object.entries(el._vsmMenuHandlers).forEach(([eventName, fn]) => {
        el.addEventListener(eventName, fn)
      })

      el._vsmMenu = true
    },
    unregisterGlobalEvents () {
      window.removeEventListener('resize', this.windowResizeHandler)
      document.removeEventListener('touchmove', this.touchMoveHandler)
      document.removeEventListener('touchstart', this.touchStartHandler)
      document.body.removeEventListener(this._pointerEvent.end, this.eventEndHandler)
    },
    toggleDropdown (el) {
      if (this._activeDropdown === el) {
        this.closeDropdown()
      } else {
        this.openDropdown(el)
      }
    },
    openDropdown (el) {
      if (this._activeDropdown === el) {
        return
      }

      this.$emit('open-dropdown', el)

      this.$el.classList.add('vsm-overlay-active')
      this.$el.classList.add('vsm-dropdown-active')
      this._activeDropdown = el
      this._activeDropdown.setAttribute('aria-expanded', 'true')
      this.hasDropdownEls.forEach(el => el.classList.remove('vsm-active'))
      el.classList.add('vsm-active')

      const activeDataDropdown = el.getAttribute('data-dropdown')
      let direction = 'vsm-left'
      let offsetWidth
      let offsetHeight
      let content

      this.sectionEls.forEach((item) => {
        item.el.classList.remove('vsm-active')
        item.el.classList.remove('vsm-left')
        item.el.classList.remove('vsm-right')

        if (item.name === activeDataDropdown) {
          item.el.setAttribute('aria-hidden', 'false')
          item.el.classList.add('vsm-active')
          direction = 'vsm-right'
          offsetWidth = item.content.offsetWidth
          offsetHeight = item.content.offsetHeight
          content = item.content
        } else {
          item.el.classList.add(direction)
          item.el.setAttribute('aria-hidden', 'true')
        }
      })

      const bodyWidth = document.documentElement.offsetWidth
      const rootRect = this.$el.getBoundingClientRect()
      const rect = el.getBoundingClientRect()

      // Find the beginning of a menu item
      const leftPosition = rect.left - rootRect.left

      // Step back from the button to the left so that
      // the middle of the content is found in the
      // center of the element
      let centerPosition = leftPosition - (offsetWidth / 2) + (rect.width / 2)

      // Do not let go of the left side of the screen
      if (centerPosition + rootRect.left < +this.screenOffset) {
        centerPosition = +this.screenOffset - rootRect.left
      }

      // Now also check the right side of the screen
      const rightOffset = centerPosition + rootRect.left + offsetWidth
      if (rightOffset > bodyWidth - +this.screenOffset) {
        centerPosition -= (rightOffset - bodyWidth + +this.screenOffset)

        // Recheck the left side of the screen
        if (centerPosition < +this.screenOffset - rootRect.left) {
          // Just set the menu to the full width of the screen
          centerPosition = +this.screenOffset - rootRect.left
          offsetWidth = bodyWidth - +this.screenOffset * 2
        }
      }

      // Possible blurring font with decimal values
      centerPosition = Math.round(centerPosition)

      const ratioWidth = offsetWidth / +this.baseWidth
      const ratioHeight = offsetHeight / +this.baseHeight

      // Activate transition
      clearTimeout(this._disableTransitionTimeout)
      this._enableTransitionTimeout = setTimeout(() => {
        this.$el.classList.remove('vsm-no-transition')
      }, 50)

      this.$refs.dropdownContainer.style.transform = `translate(${centerPosition}px, ${el.offsetTop}px)`
      this.$refs.dropdownContainer.style.width = `${offsetWidth}px`
      this.$refs.dropdownContainer.style.height = `${offsetHeight}px`

      this.$refs.arrow.style.transform = `translate(${leftPosition + (rect.width / 2)}px, ${el.offsetTop}px) rotate(45deg)`
      this.$refs.background.style.transform = `translate(${centerPosition}px, ${el.offsetTop}px) scaleX(${ratioWidth}) scaleY(${ratioHeight})`
      this.$refs.backgroundAlt.style.transform = `translateY(${content.children[0].offsetHeight / ratioHeight}px)`
    },
    closeDropdown () {
      if (!this._activeDropdown) {
        return
      }

      this.$emit('close-dropdown', this._activeDropdown)

      this.hasDropdownEls.forEach((el) => {
        el.classList.remove('vsm-active')
      })

      const activeDropdownSection = this.$refs.dropdownContainer.querySelector('[aria-hidden="false"]')
      if (activeDropdownSection) {
        activeDropdownSection.setAttribute('aria-hidden', 'true')
      }

      clearTimeout(this._enableTransitionTimeout)

      this._disableTransitionTimeout = setTimeout(() => {
        this.$el.classList.add('vsm-no-transition')
      }, 50)

      this.$el.classList.remove('vsm-overlay-active')
      this.$el.classList.remove('vsm-dropdown-active')

      this._activeDropdown.setAttribute('aria-expanded', 'false')
      this._activeDropdown = undefined
    },
    startCloseTimeout () {
      this._closeDropdownTimeout = setTimeout(() => {
        this.closeDropdown()
      }, 50)
    },
    stopCloseTimeout () {
      clearTimeout(this._closeDropdownTimeout)
    },
    touchMoveHandler () {
      this._isDragging = true
    },
    touchStartHandler () {
      this._isDragging = false
    },
    eventEndHandler () {
      if (!this._isDragging) {
        this.closeDropdown()
      }
    },
    /*
     * When the screen is reduced, the active drop-down content
     * does not change its size, because of this,
     * horizontal scrolling may occur
     */
    windowResizeHandler () {
      // Block dropdown from closing on scroll
      // (show/hide browser top header)
      if (this._lastWindowWidth === window.innerWidth) {
        return
      }

      this._lastWindowWidth = window.innerWidth

      this.$refs.dropdownContainer.style = null
      this.$refs.arrow.style = null
      this.$refs.background.style = null
      this.$refs.backgroundAlt.style = null

      this.closeDropdown()
    }
  }
});

// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Menu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Menu = __webpack_exports__["a"] = (component.exports);

/***/ })

/******/ });
//# sourceMappingURL=vue-stripe-menu.common.js.map