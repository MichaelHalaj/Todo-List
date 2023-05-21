/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n    display: flex;\n    font-size: 16px;\n    width: 100vw;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #f8fafc;\n    flex-direction: column;\n    font-family: 'Montserrat', sans-serif;\n    max-width: 100%;\n    overflow-x: hidden;\n}\nbutton {\n    border: none;\n    font-family: 'Montserrat', sans-serif;\n}\nbutton:focus-visible{\n    outline: none;\n}\n.navbar {\n    display: flex;\n    font-size: 100px;\n    font-weight: 900;\n    background-color: #4b5563;\n    color: #f8fafc;\n    justify-content: center;\n}\n.content {\n    display: flex;\n    font-size: 1.8em;\n    height: 100%;\n    width: 100vw;\n}\n.title-second {\n    color: #ef4444;\n}\n.sidebar {\n    background-color: #9ca3af;\n    flex: 1 1 600px;\n}\n#projects-title {\n    font-weight: 900;\n    color: #ef4444;\n    display: flex;\n    flex-direction: column; \n    gap: 16px;\n}\n#add-project {\n    font-size: 1.8rem;\n    background-color: #9ca3af;\n    color: #f8fafc;\n    border-radius: 5px 5px 5px 5px;\n    padding: 8px;\n}\ninput[type='text'] {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.8rem;\n    border: none;\n}\ninput[type='text']:focus-visible {\n    outline: none;\n}\n#add-project:hover {\n    background-color: #6b7280;\n    cursor: pointer;\n}\n.col {\n    display: flex;\n    flex-direction: column;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n}\n#project-input { \n    box-sizing: border-box; /* Without this, input box exceeds size of container because of the padding */\n    padding: 8px;\n    border-radius: 0px 5px 5px 0px;\n    width: 100%;\n    background-color: #f8fafc;\n    color: #4b5563;\n    border: 2px solid #f1f5f9;\n}\n#project-input:focus-visible {\n    border: 2px solid #4b5563;\n}\n#project-add,\n#project-cancel {\n    margin: 8px;\n    flex: 1;\n    font-size: 1.8rem;\n    font-family: 'Montserrat', sans-serif;\n    border-radius: 5px;\n    border: none;\n    background-color: #9ca3af;\n}\n#project-add:hover,\n#project-cancel:hover {\n    cursor: pointer;\n    background-color: #6b7280;\n} \n#project-add:focus-visible,\n#project-cancel:focus-visible {\n    outline: none;\n}\n#project-add {\n    color: #f8fafc;\n}\n#project-cancel{\n    color: #ef4444;\n}\n.hide {\n    display: none;\n}\n.sidebar-list {\n    padding: 32px;\n    color: #f8fafc;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.project-item {\n    display: flex;\n    font-size: 1.8rem;\n    color: #f8fafc;\n    justify-content: center;\n    background-color: #6b7280;\n    border-radius: 0px 5px 5px 0px;\n    padding: 8px;\n    border-width: 5px 5px 5px 5px;\n    border-left: 3px solid #ef4444;\n}\n.project-item:hover {\n    cursor: pointer;\n    background-color: #4b5563;\n}\n.project-item:focus-visible {\n    outline: none;\n}\n.todo-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 24px;\n}\n.add-task {\n    background-color: #f8fafc;\n    font-size: 1.8rem;\n    color: #9ca3af; \n    padding: 10px;\n    border-radius: 5px;\n    border-style: none;\n}\n.add-task:hover {\n    cursor: pointer;\n    background-color: #f1f5f9;\n}\n.add-task:focus-visible {\n    outline: none;\n}\n#task-form {\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    gap: 8px;\n}\n.row-task-form {\n    display: flex;\n    gap: 8px;\n}\ntextarea {\n    resize: none;\n    height: 80px;\n}\n#due-date,\n#title {\n    flex: 1;\n}\n.task-item {\n    box-shadow: 0 0 5px #9ca3afd0;\n    border-radius: 5px;\n    padding: 8px;\n    color: #4b5563;\n}\n.task-item:hover {\n    background-color: #f1f5f9;\n}\n#title {\n    padding: 8px;\n    border-radius: 5px;\n    width: 100%;\n    background-color: #f8fafc;\n    color: #4b5563;\n    box-shadow: 0 0 5px #9ca3af;\n}\n#title:focus-visible {\n    box-shadow: 0 0 5px #4b5563; \n}\ninput[type=\"datetime-local\"],\ntextarea {\n    padding: 8px;\n    border: none;\n    font-family: 'Montserrat', sans-serif;\n    box-shadow: 0 0 5px #9ca3af;\n    border-radius: 5px;\n    font-size: 1.8rem;\n    color: #4b5563;\n}\ntextarea {\n    font-size: 1rem;\n}\ninput[type=\"datetime-local\"]:focus-visible,\ntextarea:focus-visible {\n    outline: none;\n    box-shadow: 0 0 5px #4b5563; \n}\n#add-task-button {\n    border: none;\n    background-color: #ef4444;\n    color: #f1f5f9;\n    font-size: 1.8rem;\n    padding: 8px;\n    border-radius: 5px;\n    flex: 1;\n}\n#add-task-button:hover {\n    cursor: pointer;\n    background-color: #ce4040;\n}\n#cancel-button {\n    flex: 1;\n    border-radius: 5px;\n    font-size: 1.8rem;\n    background-color: #f8fafc;\n    border: 2px solid #9ca3af;\n    color: #9ca3af;\n}\n#cancel-button:hover {\n    cursor: pointer;\n    background-color: #e9e9e9;\n}\n\n/* Customize the label (the container) */\n.container {\n    display: block;\n    position: relative; \n    padding-left: 35px;\n    margin-bottom: auto;\n    margin-top: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0; \n    height: 25px;\n    width: 25px;\n    background-color: #f8fafc;\n    border-radius: 5px;\n    border: 1px solid #6b7280\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n    background-color: #dcdee0;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n    background-color: #ef4444;\n    border: 1px solid #ef4444;\n  }\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n  .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n.task-row {\n    padding-left: 50px;\n    display: flex;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body,\nhtml {\n    display: flex;\n    font-size: 16px;\n    width: 100vw;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #f8fafc;\n    flex-direction: column;\n    font-family: 'Montserrat', sans-serif;\n    max-width: 100%;\n    overflow-x: hidden;\n}\nbutton {\n    border: none;\n    font-family: 'Montserrat', sans-serif;\n}\nbutton:focus-visible{\n    outline: none;\n}\n.navbar {\n    display: flex;\n    font-size: 100px;\n    font-weight: 900;\n    background-color: #4b5563;\n    color: #f8fafc;\n    justify-content: center;\n}\n.content {\n    display: flex;\n    font-size: 1.8em;\n    height: 100%;\n    width: 100vw;\n}\n.title-second {\n    color: #ef4444;\n}\n.sidebar {\n    background-color: #9ca3af;\n    flex: 1 1 600px;\n}\n#projects-title {\n    font-weight: 900;\n    color: #ef4444;\n    display: flex;\n    flex-direction: column; \n    gap: 16px;\n}\n#add-project {\n    font-size: 1.8rem;\n    background-color: #9ca3af;\n    color: #f8fafc;\n    border-radius: 5px 5px 5px 5px;\n    padding: 8px;\n}\ninput[type='text'] {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.8rem;\n    border: none;\n}\ninput[type='text']:focus-visible {\n    outline: none;\n}\n#add-project:hover {\n    background-color: #6b7280;\n    cursor: pointer;\n}\n.col {\n    display: flex;\n    flex-direction: column;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n}\n#project-input { \n    box-sizing: border-box; /* Without this, input box exceeds size of container because of the padding */\n    padding: 8px;\n    border-radius: 0px 5px 5px 0px;\n    width: 100%;\n    background-color: #f8fafc;\n    color: #4b5563;\n    border: 2px solid #f1f5f9;\n}\n#project-input:focus-visible {\n    border: 2px solid #4b5563;\n}\n#project-add,\n#project-cancel {\n    margin: 8px;\n    flex: 1;\n    font-size: 1.8rem;\n    font-family: 'Montserrat', sans-serif;\n    border-radius: 5px;\n    border: none;\n    background-color: #9ca3af;\n}\n#project-add:hover,\n#project-cancel:hover {\n    cursor: pointer;\n    background-color: #6b7280;\n} \n#project-add:focus-visible,\n#project-cancel:focus-visible {\n    outline: none;\n}\n#project-add {\n    color: #f8fafc;\n}\n#project-cancel{\n    color: #ef4444;\n}\n.hide {\n    display: none;\n}\n.sidebar-list {\n    padding: 32px;\n    color: #f8fafc;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.project-item {\n    display: flex;\n    font-size: 1.8rem;\n    color: #f8fafc;\n    justify-content: center;\n    background-color: #6b7280;\n    border-radius: 0px 5px 5px 0px;\n    padding: 8px;\n    border-width: 5px 5px 5px 5px;\n    border-left: 3px solid #ef4444;\n}\n.project-item:hover {\n    cursor: pointer;\n    background-color: #4b5563;\n}\n.project-item:focus-visible {\n    outline: none;\n}\n.todo-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 24px;\n}\n.add-task {\n    background-color: #f8fafc;\n    font-size: 1.8rem;\n    color: #9ca3af; \n    padding: 10px;\n    border-radius: 5px;\n    border-style: none;\n}\n.add-task:hover {\n    cursor: pointer;\n    background-color: #f1f5f9;\n}\n.add-task:focus-visible {\n    outline: none;\n}\n#task-form {\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    gap: 8px;\n}\n.row-task-form {\n    display: flex;\n    gap: 8px;\n}\ntextarea {\n    resize: none;\n    height: 80px;\n}\n#due-date,\n#title {\n    flex: 1;\n}\n.task-item {\n    box-shadow: 0 0 5px #9ca3afd0;\n    border-radius: 5px;\n    padding: 8px;\n    color: #4b5563;\n}\n.task-item:hover {\n    background-color: #f1f5f9;\n}\n#title {\n    padding: 8px;\n    border-radius: 5px;\n    width: 100%;\n    background-color: #f8fafc;\n    color: #4b5563;\n    box-shadow: 0 0 5px #9ca3af;\n}\n#title:focus-visible {\n    box-shadow: 0 0 5px #4b5563; \n}\ninput[type=\"datetime-local\"],\ntextarea {\n    padding: 8px;\n    border: none;\n    font-family: 'Montserrat', sans-serif;\n    box-shadow: 0 0 5px #9ca3af;\n    border-radius: 5px;\n    font-size: 1.8rem;\n    color: #4b5563;\n}\ntextarea {\n    font-size: 1rem;\n}\ninput[type=\"datetime-local\"]:focus-visible,\ntextarea:focus-visible {\n    outline: none;\n    box-shadow: 0 0 5px #4b5563; \n}\n#add-task-button {\n    border: none;\n    background-color: #ef4444;\n    color: #f1f5f9;\n    font-size: 1.8rem;\n    padding: 8px;\n    border-radius: 5px;\n    flex: 1;\n}\n#add-task-button:hover {\n    cursor: pointer;\n    background-color: #ce4040;\n}\n#cancel-button {\n    flex: 1;\n    border-radius: 5px;\n    font-size: 1.8rem;\n    background-color: #f8fafc;\n    border: 2px solid #9ca3af;\n    color: #9ca3af;\n}\n#cancel-button:hover {\n    cursor: pointer;\n    background-color: #e9e9e9;\n}\n\n/* Customize the label (the container) */\n.container {\n    display: block;\n    position: relative; \n    padding-left: 35px;\n    margin-bottom: auto;\n    margin-top: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    \n  }\n  \n  /* Hide the browser's default checkbox */\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0; \n    height: 25px;\n    width: 25px;\n    background-color: #f8fafc;\n    border-radius: 5px;\n    border: 1px solid #6b7280\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n    background-color: #dcdee0;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n    background-color: #ef4444;\n    border: 1px solid #ef4444;\n  }\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n  .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .container .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n.task-row {\n    padding-left: 50px;\n    display: flex;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddTaskNode: () => (/* binding */ createAddTaskNode),
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm),
/* harmony export */   removeAllChildren: () => (/* binding */ removeAllChildren)
/* harmony export */ });
const removeAllChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
const createAddTaskNode = () => {
  const node = document.createElement('button');
  node.classList.add('add-task');
  node.innerText = 'Add Task';
  return node;
};
const createTaskForm = () => {
  // Create form element
  const form = document.createElement('form');
  form.setAttribute('id', 'task-form');

  // Create title of task element
  const title = document.createElement('input');
  title.setAttribute('id', 'title');
  title.setAttribute('type', 'text');
  title.setAttribute('maxlength', '30');
  title.setAttribute('placeholder', 'Enter Task Name');

  // Create description input
  const description = document.createElement('textarea');
  description.setAttribute('id', 'description');
  description.setAttribute('placeholder', 'Enter Description of Task (Optional)')

  // Create date input
  const date = document.createElement('input');
  date.setAttribute('type', 'datetime-local');
  date.setAttribute('id', 'due-date');

  // Create row
  const row = document.createElement('div');
  row.classList.add('row-task-form');
  const row2 = document.createElement('div');
  row2.classList.add('row-task-form');

  // Create submit
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'add-task-button');
  submit.setAttribute('value', 'Add');

  // Create cancel
  const cancel = document.createElement('button');
  cancel.setAttribute('id', 'cancel-button');
  cancel.innerText = 'Cancel';

  row.appendChild(title);
  row.appendChild(date);
  row2.appendChild(submit);
  row2.appendChild(cancel);
  form.appendChild(row);
  form.appendChild(description);
  form.appendChild(row2);
  return form;
};



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.taskList = [];
  }

  get getProjectTitle() {
    return this.projectTitle;
  }

  /**
     * @param {string} projectTitle
     */
  set setProjectTitle(projectTitle) {
    this.projectTitle = projectTitle;
  }

  addTask(taskObj) {
    this.taskList.push(taskObj);
  }

  set setTaskList(taskList) {
    this.setTaskList = taskList;
  }

  get getTaskList() {
    return this.taskList;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority = 'none', completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  get getTitle() {
    return this.title;
  }

  get getDescription() {
    return this.description;
  }

  get getDueDate() {
    return this.dueDate;
  }

  get getPriority() {
    return this.priority;
  }

  get getCompleted() {
    return this.completed;
  }

  set setTitle(title) {
    this.title = title;
  }

  set setDescription(description) {
    this.description = description;
  }

  set setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  set setPriority(priority) {
    this.priority = priority;
  }

  set setCompleted(completed) {
    this.completed = completed;
  }
}
/*
const Task = (title, description, dueDate, priority, completed = false) => ({
  title, description, dueDate, priority, completed,
}); */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ "./src/functions.js");





/**
 * Attach all project titles under the My Projects title within the DOM
 */
const myProjectsTitle = document.querySelector('#projects-title');

const todoListNode = document.querySelector('.todo-list');

const addNewProjectNode = document.querySelector('#add-project');

const cancelNewProjectNode = document.querySelector('#project-cancel');

const sideBarListNode = document.querySelector('.sidebar-list');

const projectFormNode = document.querySelector('#project-form');

const addTask = document.querySelector('.add-task');

const projectsList = [];

function hideProjectForm() {
  projectFormNode.reset();
  projectFormNode.classList.add('hide');
  projectFormNode.classList.remove('col');
  addNewProjectNode.classList.remove('hide');
}

function showProjectForm() {
  projectFormNode.classList.remove('hide');
  projectFormNode.classList.add('col');
  addNewProjectNode.classList.add('hide');
}

cancelNewProjectNode.addEventListener('click', () => {
  hideProjectForm();
});

addNewProjectNode.addEventListener('click', () => {
  showProjectForm();
});

function createTaskItemNode(task) {
  const taskNode = document.createElement('div');
  const titleTaskNode = document.createElement('div');

  const row = document.createElement('div');
  row.classList.add('task-row');

  const container = document.createElement('label');
  container.classList.add('container');
  const checkMarkInput = document.createElement('input');
  checkMarkInput.setAttribute('type', 'checkbox');
  const checkmark = document.createElement('span');
  checkmark.classList.add('checkmark');
  if (task.completed) {
    checkMarkInput.setAttribute('checked', 'checked');
  }
  checkMarkInput.addEventListener('click', () => {
    if (task.completed) {
      task.setCompleted = false;
    } else {
      task.setCompleted = true;
    }
  });
  container.appendChild(checkMarkInput);
  container.appendChild(checkmark);
  taskNode.appendChild(container);
  row.appendChild(titleTaskNode);
  titleTaskNode.innerText = task.getTitle;
  taskNode.appendChild(row);
  taskNode.classList.add('task-item');
  return taskNode;
}
function createNewProject(projectTitle) {
  const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectTitle);
  const newProjectNode = document.createElement('button');
  newProjectNode.textContent = newProject.getProjectTitle;
  newProjectNode.classList.add('project-item');
  projectsList.push(newProject);
  myProjectsTitle.appendChild(newProjectNode);
  newProjectNode.addEventListener('click', () => {
    (0,_functions__WEBPACK_IMPORTED_MODULE_3__.removeAllChildren)(todoListNode);
    newProject.getTaskList.forEach((task) => {
      const taskNode = createTaskItemNode(task);
      todoListNode.appendChild(taskNode);
    });
    const addTaskNode = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.createAddTaskNode)();
    todoListNode.appendChild(addTaskNode);
    addTaskNode.addEventListener('click', () => {
      console.log('task node');
      const taskFormNode = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.createTaskForm)();
      todoListNode.removeChild(addTaskNode);
      todoListNode.appendChild(taskFormNode);
      // todoListNode.insertBefore(taskFormNode, addTaskNode);
      taskFormNode.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.submitter.id === 'cancel-button') {
          todoListNode.removeChild(taskFormNode);
        } else {
          const title = e.target[0].value;
          const date = e.target[1].value;
          const description = e.target[2].value;
          const task = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, date);
          newProject.addTask(task);
          const taskItemNode = createTaskItemNode(task);
          todoListNode.appendChild(taskItemNode);
          todoListNode.removeChild(taskFormNode);
        }
        todoListNode.appendChild(addTaskNode);
      });
    });
  });
  hideProjectForm();
}

projectFormNode.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.submitter.id === 'project-cancel') {
    hideProjectForm();
  } else {
    createNewProject(e.target[0].value);
  }
});

/**
 * Set up the page with a default today project
 */
createNewProject('Today');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLHVDQUF1QyxvQkFBb0Isc0JBQXNCLG1CQUFtQixtQkFBbUIs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QUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLDZEQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksXFxuaHRtbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuYnV0dG9uOmZvY3VzLXZpc2libGV7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1NTYzO1xcbiAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcbi50aXRsZS1zZWNvbmQge1xcbiAgICBjb2xvcjogI2VmNDQ0NDtcXG59XFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNhM2FmO1xcbiAgICBmbGV4OiAxIDEgNjAwcHg7XFxufVxcbiNwcm9qZWN0cy10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjZWY0NDQ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG4jYWRkLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5pbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjcyODA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4jcHJvamVjdC1pbnB1dCB7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBXaXRob3V0IHRoaXMsIGlucHV0IGJveCBleGNlZWRzIHNpemUgb2YgY29udGFpbmVyIGJlY2F1c2Ugb2YgdGhlIHBhZGRpbmcgKi9cXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgICBjb2xvcjogIzRiNTU2MztcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2YxZjVmOTtcXG59XFxuI3Byb2plY3QtaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0YjU1NjM7XFxufVxcbiNwcm9qZWN0LWFkZCxcXG4jcHJvamVjdC1jYW5jZWwge1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNhM2FmO1xcbn1cXG4jcHJvamVjdC1hZGQ6aG92ZXIsXFxuI3Byb2plY3QtY2FuY2VsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3MjgwO1xcbn0gXFxuI3Byb2plY3QtYWRkOmZvY3VzLXZpc2libGUsXFxuI3Byb2plY3QtY2FuY2VsOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jcHJvamVjdC1hZGQge1xcbiAgICBjb2xvcjogI2Y4ZmFmYztcXG59XFxuI3Byb2plY3QtY2FuY2Vse1xcbiAgICBjb2xvcjogI2VmNDQ0NDtcXG59XFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2lkZWJhci1saXN0IHtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjcyODA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweCA1cHggNXB4IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWY0NDQ0O1xcbn1cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1NTYzO1xcbn1cXG4ucHJvamVjdC1pdGVtOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kby1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMjRweDtcXG59XFxuLmFkZC10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiAjOWNhM2FmOyBcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG59XFxuLmFkZC10YXNrOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jdGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuLnJvdy10YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuI2R1ZS1kYXRlLFxcbiN0aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcbi50YXNrLWl0ZW0ge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM5Y2EzYWZkMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiAjNGI1NTYzO1xcbn1cXG4udGFzay1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG59XFxuI3RpdGxlIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgICBjb2xvcjogIzRiNTU2MztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjOWNhM2FmO1xcbn1cXG4jdGl0bGU6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzRiNTU2MzsgXFxufVxcbmlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl0sXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjOWNhM2FmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogIzRiNTU2MztcXG59XFxudGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbmlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl06Zm9jdXMtdmlzaWJsZSxcXG50ZXh0YXJlYTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjNGI1NTYzOyBcXG59XFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG4gICAgY29sb3I6ICNmMWY1Zjk7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZmxleDogMTtcXG59XFxuI2FkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlNDA0MDtcXG59XFxuI2NhbmNlbC1idXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOWNhM2FmO1xcbiAgICBjb2xvcjogIzljYTNhZjtcXG59XFxuI2NhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxufVxcblxcbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbiAgLmNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgXFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4gIC5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDsgXFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZiNzI4MFxcbiAgfVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4gIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGVlMDtcXG4gIH1cXG4gIFxcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmNDQ0NDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cXG4gIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA5cHg7XFxuICAgIHRvcDogNXB4O1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuLnRhc2stcm93IHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0IsRUFBRSw2RUFBNkU7SUFDckcsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5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LHlCQUF5QjtFQUMzQjs7RUFFQSw2REFBNkQ7RUFDN0Q7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQSxvQ0FBb0M7RUFDcEM7SUFDRSxjQUFjO0VBQ2hCOztFQUVBLGtDQUFrQztFQUNsQztJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0VBQzFCO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmh0bWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcbmJ1dHRvbjpmb2N1cy12aXNpYmxle1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTU2MztcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG4udGl0bGUtc2Vjb25kIHtcXG4gICAgY29sb3I6ICNlZjQ0NDQ7XFxufVxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXG4gICAgZmxleDogMSAxIDYwMHB4O1xcbn1cXG4jcHJvamVjdHMtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2VmNDQ0NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICAgIGdhcDogMTZweDtcXG59XFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Y2EzYWY7XFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3MjgwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuI3Byb2plY3QtaW5wdXQgeyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogV2l0aG91dCB0aGlzLCBpbnB1dCBib3ggZXhjZWVkcyBzaXplIG9mIGNvbnRhaW5lciBiZWNhdXNlIG9mIHRoZSBwYWRkaW5nICovXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgY29sb3I6ICM0YjU1NjM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWY1Zjk7XFxufVxcbiNwcm9qZWN0LWlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNGI1NTYzO1xcbn1cXG4jcHJvamVjdC1hZGQsXFxuI3Byb2plY3QtY2FuY2VsIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXG59XFxuI3Byb2plY3QtYWRkOmhvdmVyLFxcbiNwcm9qZWN0LWNhbmNlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNzI4MDtcXG59IFxcbiNwcm9qZWN0LWFkZDpmb2N1cy12aXNpYmxlLFxcbiNwcm9qZWN0LWNhbmNlbDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI3Byb2plY3QtYWRkIHtcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxufVxcbiNwcm9qZWN0LWNhbmNlbHtcXG4gICAgY29sb3I6ICNlZjQ0NDQ7XFxufVxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNpZGViYXItbGlzdCB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3MjgwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2VmNDQ0NDtcXG59XFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTU2MztcXG59XFxuLnByb2plY3QtaXRlbTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvZG8tbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxufVxcbi5hZGQtdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogIzljYTNhZjsgXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcbi5hZGQtdGFzazpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI3Rhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcbi5yb3ctdGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcbiNkdWUtZGF0ZSxcXG4jdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbn1cXG4udGFzay1pdGVtIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjOWNhM2FmZDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogIzRiNTU2MztcXG59XFxuLnRhc2staXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcbiN0aXRsZSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgY29sb3I6ICM0YjU1NjM7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzljYTNhZjtcXG59XFxuI3RpdGxlOmZvY3VzLXZpc2libGUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM0YjU1NjM7IFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzljYTNhZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICM0YjU1NjM7XFxufVxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdOmZvY3VzLXZpc2libGUsXFxudGV4dGFyZWE6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzRiNTU2MzsgXFxufVxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICAgIGNvbG9yOiAjZjFmNWY5O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXg6IDE7XFxufVxcbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZTQwNDA7XFxufVxcbiNjYW5jZWwtYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzljYTNhZjtcXG4gICAgY29sb3I6ICM5Y2EzYWY7XFxufVxcbiNjYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG5cXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7IFxcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YjcyODBcXG4gIH1cXG4gIFxcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RlZTA7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZjQ0NDQ7XFxuICB9XFxuICBcXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxuICAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcbiAgLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgbGVmdDogOXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbi50YXNrLXJvdyB7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmVtb3ZlQWxsQ2hpbGRyZW4gPSAobm9kZSkgPT4ge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuY29uc3QgY3JlYXRlQWRkVGFza05vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xuICBub2RlLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gIHJldHVybiBub2RlO1xufTtcbmNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgZm9ybSBlbGVtZW50XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWZvcm0nKTtcblxuICAvLyBDcmVhdGUgdGl0bGUgb2YgdGFzayBlbGVtZW50XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIFRhc2sgTmFtZScpO1xuXG4gIC8vIENyZWF0ZSBkZXNjcmlwdGlvbiBpbnB1dFxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBEZXNjcmlwdGlvbiBvZiBUYXNrIChPcHRpb25hbCknKVxuXG4gIC8vIENyZWF0ZSBkYXRlIGlucHV0XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRldGltZS1sb2NhbCcpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlLWRhdGUnKTtcblxuICAvLyBDcmVhdGUgcm93XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb3cuY2xhc3NMaXN0LmFkZCgncm93LXRhc2stZm9ybScpO1xuICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdzIuY2xhc3NMaXN0LmFkZCgncm93LXRhc2stZm9ybScpO1xuXG4gIC8vIENyZWF0ZSBzdWJtaXRcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stYnV0dG9uJyk7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCcpO1xuXG4gIC8vIENyZWF0ZSBjYW5jZWxcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbC1idXR0b24nKTtcbiAgY2FuY2VsLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gIHJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJvdy5hcHBlbmRDaGlsZChkYXRlKTtcbiAgcm93Mi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICByb3cyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocm93KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocm93Mik7XG4gIHJldHVybiBmb3JtO1xufTtcbmV4cG9ydCB7IHJlbW92ZUFsbENoaWxkcmVuLCBjcmVhdGVBZGRUYXNrTm9kZSwgY3JlYXRlVGFza0Zvcm0gfTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gIH1cblxuICBnZXQgZ2V0UHJvamVjdFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RUaXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9qZWN0VGl0bGVcbiAgICAgKi9cbiAgc2V0IHNldFByb2plY3RUaXRsZShwcm9qZWN0VGl0bGUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFza09iaikge1xuICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrT2JqKTtcbiAgfVxuXG4gIHNldCBzZXRUYXNrTGlzdCh0YXNrTGlzdCkge1xuICAgIHRoaXMuc2V0VGFza0xpc3QgPSB0YXNrTGlzdDtcbiAgfVxuXG4gIGdldCBnZXRUYXNrTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgPSAnbm9uZScsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxuXG4gIGdldCBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBnZXQgZ2V0Q29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgfVxuXG4gIHNldCBzZXRUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIHNldCBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgc2V0IHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHNldENvbXBsZXRlZChjb21wbGV0ZWQpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxufVxuLypcbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkID0gZmFsc2UpID0+ICh7XG4gIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCxcbn0pOyAqL1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZHJlbiwgY3JlYXRlQWRkVGFza05vZGUsIGNyZWF0ZVRhc2tGb3JtIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG4vKipcbiAqIEF0dGFjaCBhbGwgcHJvamVjdCB0aXRsZXMgdW5kZXIgdGhlIE15IFByb2plY3RzIHRpdGxlIHdpdGhpbiB0aGUgRE9NXG4gKi9cbmNvbnN0IG15UHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy10aXRsZScpO1xuXG5jb25zdCB0b2RvTGlzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG5cbmNvbnN0IGFkZE5ld1Byb2plY3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XG5cbmNvbnN0IGNhbmNlbE5ld1Byb2plY3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY2FuY2VsJyk7XG5cbmNvbnN0IHNpZGVCYXJMaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWxpc3QnKTtcblxuY29uc3QgcHJvamVjdEZvcm1Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RGb3JtTm9kZS5yZXNldCgpO1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29sJyk7XG4gIGFkZE5ld1Byb2plY3ROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LmFkZCgnY29sJyk7XG4gIGFkZE5ld1Byb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbn1cblxuY2FuY2VsTmV3UHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbmFkZE5ld1Byb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzaG93UHJvamVjdEZvcm0oKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSXRlbU5vZGUodGFzaykge1xuICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZVRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdy5jbGFzc0xpc3QuYWRkKCd0YXNrLXJvdycpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29uc3QgY2hlY2tNYXJrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja01hcmtJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIGNoZWNrTWFya0lucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gIH1cbiAgY2hlY2tNYXJrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICB0YXNrLnNldENvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrLnNldENvbXBsZXRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrTWFya0lucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHJvdy5hcHBlbmRDaGlsZCh0aXRsZVRhc2tOb2RlKTtcbiAgdGl0bGVUYXNrTm9kZS5pbm5lclRleHQgPSB0YXNrLmdldFRpdGxlO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZChyb3cpO1xuICB0YXNrTm9kZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgcmV0dXJuIHRhc2tOb2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIGNvbnN0IG5ld1Byb2plY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3ROb2RlLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5nZXRQcm9qZWN0VGl0bGU7XG4gIG5ld1Byb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICBwcm9qZWN0c0xpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgbXlQcm9qZWN0c1RpdGxlLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROb2RlKTtcbiAgbmV3UHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4odG9kb0xpc3ROb2RlKTtcbiAgICBuZXdQcm9qZWN0LmdldFRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tOb2RlID0gY3JlYXRlVGFza0l0ZW1Ob2RlKHRhc2spO1xuICAgICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKHRhc2tOb2RlKTtcbiAgICB9KTtcbiAgICBjb25zdCBhZGRUYXNrTm9kZSA9IGNyZWF0ZUFkZFRhc2tOb2RlKCk7XG4gICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKGFkZFRhc2tOb2RlKTtcbiAgICBhZGRUYXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd0YXNrIG5vZGUnKTtcbiAgICAgIGNvbnN0IHRhc2tGb3JtTm9kZSA9IGNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgICB0b2RvTGlzdE5vZGUucmVtb3ZlQ2hpbGQoYWRkVGFza05vZGUpO1xuICAgICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKHRhc2tGb3JtTm9kZSk7XG4gICAgICAvLyB0b2RvTGlzdE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tGb3JtTm9kZSwgYWRkVGFza05vZGUpO1xuICAgICAgdGFza0Zvcm1Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUuc3VibWl0dGVyLmlkID09PSAnY2FuY2VsLWJ1dHRvbicpIHtcbiAgICAgICAgICB0b2RvTGlzdE5vZGUucmVtb3ZlQ2hpbGQodGFza0Zvcm1Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBlLnRhcmdldFsxXS52YWx1ZTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGUudGFyZ2V0WzJdLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuICAgICAgICAgIG5ld1Byb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICBjb25zdCB0YXNrSXRlbU5vZGUgPSBjcmVhdGVUYXNrSXRlbU5vZGUodGFzayk7XG4gICAgICAgICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKHRhc2tJdGVtTm9kZSk7XG4gICAgICAgICAgdG9kb0xpc3ROb2RlLnJlbW92ZUNoaWxkKHRhc2tGb3JtTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKGFkZFRhc2tOb2RlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgaGlkZVByb2plY3RGb3JtKCk7XG59XG5cbnByb2plY3RGb3JtTm9kZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChlLnN1Ym1pdHRlci5pZCA9PT0gJ3Byb2plY3QtY2FuY2VsJykge1xuICAgIGhpZGVQcm9qZWN0Rm9ybSgpO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZU5ld1Byb2plY3QoZS50YXJnZXRbMF0udmFsdWUpO1xuICB9XG59KTtcblxuLyoqXG4gKiBTZXQgdXAgdGhlIHBhZ2Ugd2l0aCBhIGRlZmF1bHQgdG9kYXkgcHJvamVjdFxuICovXG5jcmVhdGVOZXdQcm9qZWN0KCdUb2RheScpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9