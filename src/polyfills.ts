/**
 * 这个文件包含Angular需要的兼容脚本, 在app之前加载, 文件分为两部分.
 *   1. Browser polyfills, 这些脚本在ZoneJS之前被加载，并由浏览器进行排序.
 *   2. Application imports, 这些文件在ZoneJS之后被引用, 在主应用之前被加载.

/***** BROWSER POLYFILLS *****/

/** IE9, IE10, IE11需要下面的所有兼容脚本. **/
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';

/** IE10, IE11需要下面的兼容脚本使NgClass支持SVG **/
import 'classlist.js';

/** IE10, IE11, Firefox需要下面的兼容脚本支持Angular动画 **/
import 'web-animations-js';

/** 常用浏览器都需要下面的兼容脚本 **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/***** Angular ZoneJS *****/

import 'zone.js/dist/zone';

/***** APPLICATION IMPORTS *****/

/** 日期, 货币, 小数, 百分比等管道, 除Chrome, Firefox, Edge, IE11 and Safari 10之外的所有浏览器 **/
import 'intl';
import 'intl/locale-data/jsonp/zh';
import 'core-js/es7/array';

if (typeof SVGElement.prototype.contains === 'undefined') {
  SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
}
