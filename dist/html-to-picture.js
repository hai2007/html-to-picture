/*!
 * Html to Picture - 把一个html变成图片。
 * git+https://github.com/hai2007/html-to-picture.git
 *
 * author 你好2007 < https://hai2007.github.io/SweetHome >
 *
 * version 0.2.0
 *
 * Copyright (c) 2022 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Thu Jun 30 2022 18:58:15 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  // 获取样式
  function getStyle (dom, name) {
    // 获取结点的全部样式
    var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle; // 如果没有指定属性名称，返回全部样式

    return typeof name === 'string' ? allStyle.getPropertyValue(name) : allStyle;
  }

  function elToTemplate(el) {
    var tagName = el.tagName.toLowerCase();
    var styleTemplate = "";
    var elStyles = getStyle(el);

    for (var index = 0; index < elStyles.length; index++) {
      var keyName = elStyles[index];
      styleTemplate += keyName + ":" + elStyles[keyName] + ";";
    }

    var template = "<" + tagName + " style='" + styleTemplate + "'>";

    for (var _index = 0; _index < el.childNodes.length; _index++) {
      if (el.childNodes[_index].nodeType == '3') {
        template += el.childNodes[_index].textContent;
      } else if (el.childNodes[_index].nodeType == '1') {
        template += elToTemplate(el.childNodes[_index]);
      }
    }

    template += "</" + tagName + ">";
    return template;
  }

  var HtmlToPicture = function HtmlToPicture(config) {
    return function (html, width, height) {
      if (typeof html != 'string') {
        if (!width) width = html.offsetWidth;
        if (!height) height = html.offsetHeight;
        html = elToTemplate(html);
      }

      var img = document.createElement('img');
      img.setAttribute('width', width);
      img.setAttribute('height', height);
      img.setAttribute('src', "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='".concat(width, "' height='").concat(height, "'><foreignObject width='").concat(width, "' height='").concat(height, "' ><body style='margin:0px;' xmlns='http://www.w3.org/1999/xhtml'>").concat(html, "</body></foreignObject></svg>"));
      document.getElementsByTagName('body')[0].appendChild(img);
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          // 准备画布
          var canvas = document.createElement('canvas');
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          var painter = canvas.getContext('2d'); // 绘制

          painter.drawImage(img, 0, 0);
          img.parentNode.removeChild(img);
          resolve(canvas.toDataURL());
        }, 100);
      });
    };
  }; // 判断当前环境，如果不是浏览器环境


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = HtmlToPicture;
  } // 浏览器环境下
  else {
    window.HtmlToPicture = HtmlToPicture;
  }

}());
