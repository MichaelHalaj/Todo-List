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
const Task = (title, description, dueDate, priority) => ({
  title, description, dueDate, priority,
});

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

  container.appendChild(checkMarkInput);
  container.appendChild(checkmark);
  taskNode.appendChild(container);
  row.appendChild(titleTaskNode);
  titleTaskNode.innerText = task.title;
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
          const task = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])(title, description, date, 'none');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLHVDQUF1QyxvQkFBb0Isc0JBQXNCLG1CQUFtQixtQkFBbUIs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QUNMLHdCQUF3Qiw2REFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcbmJ1dHRvbjpmb2N1cy12aXNpYmxle1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTU2MztcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG4udGl0bGUtc2Vjb25kIHtcXG4gICAgY29sb3I6ICNlZjQ0NDQ7XFxufVxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXG4gICAgZmxleDogMSAxIDYwMHB4O1xcbn1cXG4jcHJvamVjdHMtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2VmNDQ0NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICAgIGdhcDogMTZweDtcXG59XFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Y2EzYWY7XFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3MjgwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuI3Byb2plY3QtaW5wdXQgeyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogV2l0aG91dCB0aGlzLCBpbnB1dCBib3ggZXhjZWVkcyBzaXplIG9mIGNvbnRhaW5lciBiZWNhdXNlIG9mIHRoZSBwYWRkaW5nICovXFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgY29sb3I6ICM0YjU1NjM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWY1Zjk7XFxufVxcbiNwcm9qZWN0LWlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNGI1NTYzO1xcbn1cXG4jcHJvamVjdC1hZGQsXFxuI3Byb2plY3QtY2FuY2VsIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXG59XFxuI3Byb2plY3QtYWRkOmhvdmVyLFxcbiNwcm9qZWN0LWNhbmNlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNzI4MDtcXG59IFxcbiNwcm9qZWN0LWFkZDpmb2N1cy12aXNpYmxlLFxcbiNwcm9qZWN0LWNhbmNlbDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI3Byb2plY3QtYWRkIHtcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxufVxcbiNwcm9qZWN0LWNhbmNlbHtcXG4gICAgY29sb3I6ICNlZjQ0NDQ7XFxufVxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNpZGViYXItbGlzdCB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3MjgwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2VmNDQ0NDtcXG59XFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTU2MztcXG59XFxuLnByb2plY3QtaXRlbTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvZG8tbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxufVxcbi5hZGQtdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogIzljYTNhZjsgXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcbi5hZGQtdGFzazpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI3Rhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcbi5yb3ctdGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcbiNkdWUtZGF0ZSxcXG4jdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbn1cXG4udGFzay1pdGVtIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjOWNhM2FmZDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogIzRiNTU2MztcXG59XFxuLnRhc2staXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcbiN0aXRsZSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgY29sb3I6ICM0YjU1NjM7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzljYTNhZjtcXG59XFxuI3RpdGxlOmZvY3VzLXZpc2libGUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM0YjU1NjM7IFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzljYTNhZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICM0YjU1NjM7XFxufVxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdOmZvY3VzLXZpc2libGUsXFxudGV4dGFyZWE6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzRiNTU2MzsgXFxufVxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICAgIGNvbG9yOiAjZjFmNWY5O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXg6IDE7XFxufVxcbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZTQwNDA7XFxufVxcbiNjYW5jZWwtYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzljYTNhZjtcXG4gICAgY29sb3I6ICM5Y2EzYWY7XFxufVxcbiNjYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG5cXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7IFxcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YjcyODBcXG4gIH1cXG4gIFxcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RlZTA7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZjQ0NDQ7XFxuICB9XFxuICBcXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxuICAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcbiAgLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgbGVmdDogOXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbi50YXNrLXJvdyB7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJ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dXJjZXNDb250ZW50XCI6W1wiYm9keSxcXG5odG1sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5idXR0b246Zm9jdXMtdmlzaWJsZXtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjU1NjM7XFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuLnRpdGxlLXNlY29uZCB7XFxuICAgIGNvbG9yOiAjZWY0NDQ0O1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Y2EzYWY7XFxuICAgIGZsZXg6IDEgMSA2MDBweDtcXG59XFxuI3Byb2plY3RzLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICNlZjQ0NDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcbiAgICBnYXA6IDE2cHg7XFxufVxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNhM2FmO1xcbiAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNzI4MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbiNwcm9qZWN0LWlucHV0IHsgXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFdpdGhvdXQgdGhpcywgaW5wdXQgYm94IGV4Y2VlZHMgc2l6ZSBvZiBjb250YWluZXIgYmVjYXVzZSBvZiB0aGUgcGFkZGluZyAqL1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGNvbG9yOiAjNGI1NTYzO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjFmNWY5O1xcbn1cXG4jcHJvamVjdC1pbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRiNTU2MztcXG59XFxuI3Byb2plY3QtYWRkLFxcbiNwcm9qZWN0LWNhbmNlbCB7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Y2EzYWY7XFxufVxcbiNwcm9qZWN0LWFkZDpob3ZlcixcXG4jcHJvamVjdC1jYW5jZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjcyODA7XFxufSBcXG4jcHJvamVjdC1hZGQ6Zm9jdXMtdmlzaWJsZSxcXG4jcHJvamVjdC1jYW5jZWw6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbiNwcm9qZWN0LWFkZCB7XFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcbn1cXG4jcHJvamVjdC1jYW5jZWx7XFxuICAgIGNvbG9yOiAjZWY0NDQ0O1xcbn1cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zaWRlYmFyLWxpc3Qge1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNzI4MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci13aWR0aDogNXB4IDVweCA1cHggNXB4O1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlZjQ0NDQ7XFxufVxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjU1NjM7XFxufVxcbi5wcm9qZWN0LWl0ZW06Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi50b2RvLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbn1cXG4uYWRkLXRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICM5Y2EzYWY7IFxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbn1cXG4uYWRkLXRhc2s6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbiN0YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG4ucm93LXRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG4jZHVlLWRhdGUsXFxuI3RpdGxlIHtcXG4gICAgZmxleDogMTtcXG59XFxuLnRhc2staXRlbSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzljYTNhZmQwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3I6ICM0YjU1NjM7XFxufVxcbi50YXNrLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbn1cXG4jdGl0bGUge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGNvbG9yOiAjNGI1NTYzO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM5Y2EzYWY7XFxufVxcbiN0aXRsZTpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjNGI1NTYzOyBcXG59XFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM5Y2EzYWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiAjNGI1NTYzO1xcbn1cXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTpmb2N1cy12aXNpYmxlLFxcbnRleHRhcmVhOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM0YjU1NjM7IFxcbn1cXG4jYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbiAgICBjb2xvcjogI2YxZjVmOTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG4jYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U0MDQwO1xcbn1cXG4jY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5Y2EzYWY7XFxuICAgIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG4jY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG59XFxuXFxuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNvbnRhaW5lcikgKi9cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuICAuY29udGFpbmVyIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICBcXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbiAgLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwOyBcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI3MjgwXFxuICB9XFxuICBcXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZWUwO1xcbiAgfVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY0NDQ0O1xcbiAgfVxcbiAgXFxuICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xcbiAgLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4gIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGxlZnQ6IDlweDtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4udGFzay1yb3cge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJlbW92ZUFsbENoaWxkcmVuID0gKG5vZGUpID0+IHtcbiAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgfVxufTtcbmNvbnN0IGNyZWF0ZUFkZFRhc2tOb2RlID0gKCkgPT4ge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgbm9kZS5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuICByZXR1cm4gbm9kZTtcbn07XG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgLy8gQ3JlYXRlIGZvcm0gZWxlbWVudFxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1mb3JtJyk7XG5cbiAgLy8gQ3JlYXRlIHRpdGxlIG9mIHRhc2sgZWxlbWVudFxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMzAnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBUYXNrIE5hbWUnKTtcblxuICAvLyBDcmVhdGUgZGVzY3JpcHRpb24gaW5wdXRcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgRGVzY3JpcHRpb24gb2YgVGFzayAoT3B0aW9uYWwpJylcblxuICAvLyBDcmVhdGUgZGF0ZSBpbnB1dFxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZXRpbWUtbG9jYWwnKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZS1kYXRlJyk7XG5cbiAgLy8gQ3JlYXRlIHJvd1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm93LmNsYXNzTGlzdC5hZGQoJ3Jvdy10YXNrLWZvcm0nKTtcbiAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb3cyLmNsYXNzTGlzdC5hZGQoJ3Jvdy10YXNrLWZvcm0nKTtcblxuICAvLyBDcmVhdGUgc3VibWl0XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLWJ1dHRvbicpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQnKTtcblxuICAvLyBDcmVhdGUgY2FuY2VsXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwtYnV0dG9uJyk7XG4gIGNhbmNlbC5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICByb3cuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICByb3cuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIHJvdzIuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgcm93Mi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHJvdyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBmb3JtLmFwcGVuZENoaWxkKHJvdzIpO1xuICByZXR1cm4gZm9ybTtcbn07XG5leHBvcnQgeyByZW1vdmVBbGxDaGlsZHJlbiwgY3JlYXRlQWRkVGFza05vZGUsIGNyZWF0ZVRhc2tGb3JtIH07XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlKSB7XG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICB9XG5cbiAgZ2V0IGdldFByb2plY3RUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gIH1cblxuICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvamVjdFRpdGxlXG4gICAgICovXG4gIHNldCBzZXRQcm9qZWN0VGl0bGUocHJvamVjdFRpdGxlKSB7XG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gIH1cblxuICBhZGRUYXNrKHRhc2tPYmopIHtcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFza09iaik7XG4gIH1cblxuICBzZXQgc2V0VGFza0xpc3QodGFza0xpc3QpIHtcbiAgICB0aGlzLnNldFRhc2tMaXN0ID0gdGFza0xpc3Q7XG4gIH1cblxuICBnZXQgZ2V0VGFza0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4gKHtcbiAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZHJlbiwgY3JlYXRlQWRkVGFza05vZGUsIGNyZWF0ZVRhc2tGb3JtIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG4vKipcbiAqIEF0dGFjaCBhbGwgcHJvamVjdCB0aXRsZXMgdW5kZXIgdGhlIE15IFByb2plY3RzIHRpdGxlIHdpdGhpbiB0aGUgRE9NXG4gKi9cbmNvbnN0IG15UHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy10aXRsZScpO1xuXG5jb25zdCB0b2RvTGlzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG5cbmNvbnN0IGFkZE5ld1Byb2plY3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XG5cbmNvbnN0IGNhbmNlbE5ld1Byb2plY3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY2FuY2VsJyk7XG5cbmNvbnN0IHNpZGVCYXJMaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWxpc3QnKTtcblxuY29uc3QgcHJvamVjdEZvcm1Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RGb3JtTm9kZS5yZXNldCgpO1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29sJyk7XG4gIGFkZE5ld1Byb2plY3ROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICBwcm9qZWN0Rm9ybU5vZGUuY2xhc3NMaXN0LmFkZCgnY29sJyk7XG4gIGFkZE5ld1Byb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbn1cblxuY2FuY2VsTmV3UHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbmFkZE5ld1Byb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzaG93UHJvamVjdEZvcm0oKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSXRlbU5vZGUodGFzaykge1xuICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZVRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdy5jbGFzc0xpc3QuYWRkKCd0YXNrLXJvdycpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29uc3QgY2hlY2tNYXJrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja01hcmtJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrTWFya0lucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHJvdy5hcHBlbmRDaGlsZCh0aXRsZVRhc2tOb2RlKTtcbiAgdGl0bGVUYXNrTm9kZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICB0YXNrTm9kZS5hcHBlbmRDaGlsZChyb3cpO1xuICB0YXNrTm9kZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgcmV0dXJuIHRhc2tOb2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIGNvbnN0IG5ld1Byb2plY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3ROb2RlLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5nZXRQcm9qZWN0VGl0bGU7XG4gIG5ld1Byb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICBwcm9qZWN0c0xpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgbXlQcm9qZWN0c1RpdGxlLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROb2RlKTtcbiAgbmV3UHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4odG9kb0xpc3ROb2RlKTtcbiAgICBuZXdQcm9qZWN0LmdldFRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tOb2RlID0gY3JlYXRlVGFza0l0ZW1Ob2RlKHRhc2spO1xuICAgICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKHRhc2tOb2RlKTtcbiAgICB9KTtcbiAgICBjb25zdCBhZGRUYXNrTm9kZSA9IGNyZWF0ZUFkZFRhc2tOb2RlKCk7XG4gICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKGFkZFRhc2tOb2RlKTtcbiAgICBhZGRUYXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd0YXNrIG5vZGUnKTtcbiAgICAgIGNvbnN0IHRhc2tGb3JtTm9kZSA9IGNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgICB0b2RvTGlzdE5vZGUucmVtb3ZlQ2hpbGQoYWRkVGFza05vZGUpO1xuICAgICAgdG9kb0xpc3ROb2RlLmFwcGVuZENoaWxkKHRhc2tGb3JtTm9kZSk7XG4gICAgICAvLyB0b2RvTGlzdE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tGb3JtTm9kZSwgYWRkVGFza05vZGUpO1xuICAgICAgdGFza0Zvcm1Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUuc3VibWl0dGVyLmlkID09PSAnY2FuY2VsLWJ1dHRvbicpIHtcbiAgICAgICAgICB0b2RvTGlzdE5vZGUucmVtb3ZlQ2hpbGQodGFza0Zvcm1Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBlLnRhcmdldFsxXS52YWx1ZTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGUudGFyZ2V0WzJdLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgJ25vbmUnKTtcbiAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gICAgICAgICAgY29uc3QgdGFza0l0ZW1Ob2RlID0gY3JlYXRlVGFza0l0ZW1Ob2RlKHRhc2spO1xuICAgICAgICAgIHRvZG9MaXN0Tm9kZS5hcHBlbmRDaGlsZCh0YXNrSXRlbU5vZGUpO1xuICAgICAgICAgIHRvZG9MaXN0Tm9kZS5yZW1vdmVDaGlsZCh0YXNrRm9ybU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9MaXN0Tm9kZS5hcHBlbmRDaGlsZChhZGRUYXNrTm9kZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xufVxuXG5wcm9qZWN0Rm9ybU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS5zdWJtaXR0ZXIuaWQgPT09ICdwcm9qZWN0LWNhbmNlbCcpIHtcbiAgICBoaWRlUHJvamVjdEZvcm0oKTtcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KGUudGFyZ2V0WzBdLnZhbHVlKTtcbiAgfVxufSk7XG5cbi8qKlxuICogU2V0IHVwIHRoZSBwYWdlIHdpdGggYSBkZWZhdWx0IHRvZGF5IHByb2plY3RcbiAqL1xuY3JlYXRlTmV3UHJvamVjdCgnVG9kYXknKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==