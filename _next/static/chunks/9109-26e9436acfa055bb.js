(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9109],{48738:function(t,r){"use strict";r.byteLength=function(t){var r=s(t),e=r[0],n=r[1];return(e+n)*3/4-n},r.toByteArray=function(t){var r,e,i=s(t),f=i[0],u=i[1],h=new o((f+u)*3/4-u),a=0,p=u>0?f-4:f;for(e=0;e<p;e+=4)r=n[t.charCodeAt(e)]<<18|n[t.charCodeAt(e+1)]<<12|n[t.charCodeAt(e+2)]<<6|n[t.charCodeAt(e+3)],h[a++]=r>>16&255,h[a++]=r>>8&255,h[a++]=255&r;return 2===u&&(r=n[t.charCodeAt(e)]<<2|n[t.charCodeAt(e+1)]>>4,h[a++]=255&r),1===u&&(r=n[t.charCodeAt(e)]<<10|n[t.charCodeAt(e+1)]<<4|n[t.charCodeAt(e+2)]>>2,h[a++]=r>>8&255,h[a++]=255&r),h},r.fromByteArray=function(t){for(var r,n=t.length,o=n%3,i=[],f=0,u=n-o;f<u;f+=16383)i.push(function(t,r,n){for(var o,i=[],f=r;f<n;f+=3)i.push(e[(o=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]))>>18&63]+e[o>>12&63]+e[o>>6&63]+e[63&o]);return i.join("")}(t,f,f+16383>u?u:f+16383));return 1===o?i.push(e[(r=t[n-1])>>2]+e[r<<4&63]+"=="):2===o&&i.push(e[(r=(t[n-2]<<8)+t[n-1])>>10]+e[r>>4&63]+e[r<<2&63]+"="),i.join("")};for(var e=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,u=i.length;f<u;++f)e[f]=i[f],n[i.charCodeAt(f)]=f;function s(t){var r=t.length;if(r%4>0)throw Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");-1===e&&(e=r);var n=e===r?0:4-e%4;return[e,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},9109:function(t,r,e){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var n=e(48738),o=e(6868),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function f(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,u.prototype),r}function u(t,r,e){if("number"==typeof t){if("string"==typeof r)throw TypeError('The "string" argument must be of type string. Received type number');return a(t)}return s(t,r,e)}function s(t,r,e){if("string"==typeof t)return function(t,r){if(("string"!=typeof r||""===r)&&(r="utf8"),!u.isEncoding(r))throw TypeError("Unknown encoding: "+r);var e=0|y(t,r),n=f(e),o=n.write(t,r);return o!==e&&(n=n.slice(0,o)),n}(t,r);if(ArrayBuffer.isView(t))return function(t){if(O(t,Uint8Array)){var r=new Uint8Array(t);return c(r.buffer,r.byteOffset,r.byteLength)}return p(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(O(t,ArrayBuffer)||t&&O(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(O(t,SharedArrayBuffer)||t&&O(t.buffer,SharedArrayBuffer)))return c(t,r,e);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,r,e);var o=function(t){if(u.isBuffer(t)){var r,e=0|l(t.length),n=f(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||(r=t.length)!=r?f(0):p(t):"Buffer"===t.type&&Array.isArray(t.data)?p(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),r,e);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return h(t),f(t<0?0:0|l(t))}function p(t){for(var r=t.length<0?0:0|l(t.length),e=f(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function c(t,r,e){var n;if(r<0||t.byteLength<r)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e),u.prototype),n}function l(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function y(t,r){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||O(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===e)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return I(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return T(t).length;default:if(o)return n?-1:I(t).length;r=(""+r).toLowerCase(),o=!0}}function g(t,r,e){var o,i,f=!1;if((void 0===r||r<0)&&(r=0),r>this.length||((void 0===e||e>this.length)&&(e=this.length),e<=0||(e>>>=0)<=(r>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=R[t[i]];return o}(this,r,e);case"utf8":case"utf-8":return w(this,r,e);case"ascii":return function(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}(this,r,e);case"latin1":case"binary":return function(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}(this,r,e);case"base64":return o=r,i=e,0===o&&i===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,r,e);default:if(f)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),f=!0}}function d(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function v(t,r,e,n,o){var i;if(0===t.length)return -1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),(i=e=+e)!=i&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return -1;e=t.length-1}else if(e<0){if(!o)return -1;e=0}if("string"==typeof r&&(r=u.from(r,n)),u.isBuffer(r))return 0===r.length?-1:b(t,r,e,n,o);if("number"==typeof r)return(r&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):b(t,[r],e,n,o);throw TypeError("val must be string, number or Buffer")}function b(t,r,e,n,o){var i,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return -1;f=2,u/=2,s/=2,e/=2}function h(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(o){var a=-1;for(i=e;i<u;i++)if(h(t,i)===h(r,-1===a?0:i-a)){if(-1===a&&(a=i),i-a+1===s)return a*f}else -1!==a&&(i-=i-a),a=-1}else for(e+s>u&&(e=u-s),i=e;i>=0;i--){for(var p=!0,c=0;c<s;c++)if(h(t,i+c)!==h(r,c)){p=!1;break}if(p)return i}return -1}function w(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,f,u,s,h=t[o],a=null,p=h>239?4:h>223?3:h>191?2:1;if(o+p<=e)switch(p){case 1:h<128&&(a=h);break;case 2:(192&(i=t[o+1]))==128&&(s=(31&h)<<6|63&i)>127&&(a=s);break;case 3:i=t[o+1],f=t[o+2],(192&i)==128&&(192&f)==128&&(s=(15&h)<<12|(63&i)<<6|63&f)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:i=t[o+1],f=t[o+2],u=t[o+3],(192&i)==128&&(192&f)==128&&(192&u)==128&&(s=(15&h)<<18|(63&i)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(a=s)}null===a?(a=65533,p=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),o+=p}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}function m(t,r,e){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+r>e)throw RangeError("Trying to access beyond buffer length")}function E(t,r,e,n,o,i){if(!u.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw RangeError('"value" argument is out of bounds');if(e+n>t.length)throw RangeError("Index out of range")}function A(t,r,e,n,o,i){if(e+n>t.length||e<0)throw RangeError("Index out of range")}function B(t,r,e,n,i){return r=+r,e>>>=0,i||A(t,r,e,4,34028234663852886e22,-34028234663852886e22),o.write(t,r,e,n,23,4),e+4}function U(t,r,e,n,i){return r=+r,e>>>=0,i||A(t,r,e,8,17976931348623157e292,-17976931348623157e292),o.write(t,r,e,n,52,8),e+8}r.lW=u,r.h2=50,u.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,r,e){return s(t,r,e)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,r,e){return(h(t),t<=0)?f(t):void 0!==r?"string"==typeof e?f(t).fill(r,e):f(t).fill(r):f(t)},u.allocUnsafe=function(t){return a(t)},u.allocUnsafeSlow=function(t){return a(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,r){if(O(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),O(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(t)||!u.isBuffer(r))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,r){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);if(void 0===r)for(e=0,r=0;e<t.length;++e)r+=t[e].length;var e,n=u.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var i=t[e];if(O(i,Uint8Array))o+i.length>n.length?u.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(u.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},u.byteLength=y,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)d(this,r,r+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)d(this,r,r+3),d(this,r+1,r+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)d(this,r,r+7),d(this,r+1,r+6),d(this,r+2,r+5),d(this,r+3,r+4);return this},u.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?w(this,0,t):g.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",e=r.h2;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},i&&(u.prototype[i]=u.prototype.inspect),u.prototype.compare=function(t,r,e,n,o){if(O(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return -1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,f=e-r,s=Math.min(i,f),h=this.slice(n,o),a=t.slice(r,e),p=0;p<s;++p)if(h[p]!==a[p]){i=h[p],f=a[p];break}return i<f?-1:f<i?1:0},u.prototype.includes=function(t,r,e){return -1!==this.indexOf(t,r,e)},u.prototype.indexOf=function(t,r,e){return v(this,t,r,e,!0)},u.prototype.lastIndexOf=function(t,r,e){return v(this,t,r,e,!1)},u.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else if(isFinite(r))r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,f,u,s,h,a,p,c=this.length-r;if((void 0===e||e>c)&&(e=c),t.length>0&&(e<0||r<0)||r>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var l=!1;;)switch(n){case"hex":return function(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;n>i/2&&(n=i/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(u!=u)break;t[e+f]=u}return f}(this,t,r,e);case"utf8":case"utf-8":return o=r,i=e,C(I(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return f=r,u=e,C(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(t),this,f,u);case"base64":return s=r,h=e,C(T(t),this,s,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a=r,p=e,C(function(t,r){for(var e,n,o=[],i=0;i<t.length&&!((r-=2)<0);++i)n=(e=t.charCodeAt(i))>>8,o.push(e%256),o.push(n);return o}(t,this.length-a),this,a,p);default:if(l)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),l=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n=this.subarray(t,r);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},u.prototype.readUint8=u.prototype.readUInt8=function(t,r){return t>>>=0,r||m(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,r){return t>>>=0,r||m(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,r){return t>>>=0,r||m(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,r){return t>>>=0,r||m(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,r){return t>>>=0,r||m(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},u.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},u.prototype.readInt8=function(t,r){return(t>>>=0,r||m(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},u.prototype.readInt16LE=function(t,r){t>>>=0,r||m(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},u.prototype.readInt16BE=function(t,r){t>>>=0,r||m(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},u.prototype.readInt32LE=function(t,r){return t>>>=0,r||m(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,r){return t>>>=0,r||m(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,r){return t>>>=0,r||m(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,r){return t>>>=0,r||m(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,r){return t>>>=0,r||m(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,r){return t>>>=0,r||m(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r>>>=0,e>>>=0,!n){var o=Math.pow(2,8*e)-1;E(this,t,r,e,o,0)}var i=1,f=0;for(this[r]=255&t;++f<e&&(i*=256);)this[r+f]=t/i&255;return r+e},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r>>>=0,e>>>=0,!n){var o=Math.pow(2,8*e)-1;E(this,t,r,e,o,0)}var i=e-1,f=1;for(this[r+i]=255&t;--i>=0&&(f*=256);)this[r+i]=t/f&255;return r+e},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,1,255,0),this[r]=255&t,r+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},u.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);E(this,t,r,e,o-1,-o)}var i=0,f=1,u=0;for(this[r]=255&t;++i<e&&(f*=256);)t<0&&0===u&&0!==this[r+i-1]&&(u=1),this[r+i]=(t/f>>0)-u&255;return r+e},u.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var o=Math.pow(2,8*e-1);E(this,t,r,e,o-1,-o)}var i=e-1,f=1,u=0;for(this[r+i]=255&t;--i>=0&&(f*=256);)t<0&&0===u&&0!==this[r+i+1]&&(u=1),this[r+i]=(t/f>>0)-u&255;return r+e},u.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},u.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},u.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},u.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},u.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},u.prototype.writeFloatLE=function(t,r,e){return B(this,t,r,!0,e)},u.prototype.writeFloatBE=function(t,r,e){return B(this,t,r,!1,e)},u.prototype.writeDoubleLE=function(t,r,e){return U(this,t,r,!0,e)},u.prototype.writeDoubleBE=function(t,r,e){return U(this,t,r,!1,e)},u.prototype.copy=function(t,r,e,n){if(!u.isBuffer(t))throw TypeError("argument should be a Buffer");if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e||0===t.length||0===this.length)return 0;if(r<0)throw RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o=n-e;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(r,e,n):Uint8Array.prototype.set.call(t,this.subarray(e,n),r),o},u.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(r<0||this.length<r||this.length<e)throw RangeError("Out of range index");if(e<=r)return this;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=u.isBuffer(t)?t:u.from(t,n),s=f.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<e-r;++o)this[o+r]=f[o%s]}return this};var L=/[^+/0-9A-Za-z-_]/g;function I(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!o){if(e>56319||f+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=(o-55296<<10|e-56320)+65536}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}else throw Error("Invalid code point")}return i}function T(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(L,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function C(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length)&&!(o>=t.length);++o)r[o+e]=t[o];return o}function O(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}var R=function(){for(var t="0123456789abcdef",r=Array(256),e=0;e<16;++e)for(var n=16*e,o=0;o<16;++o)r[n+o]=t[e]+t[o];return r}()},6868:function(t,r){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */r.read=function(t,r,e,n,o){var i,f,u=8*o-n-1,s=(1<<u)-1,h=s>>1,a=-7,p=e?o-1:0,c=e?-1:1,l=t[r+p];for(p+=c,i=l&(1<<-a)-1,l>>=-a,a+=u;a>0;i=256*i+t[r+p],p+=c,a-=8);for(f=i&(1<<-a)-1,i>>=-a,a+=n;a>0;f=256*f+t[r+p],p+=c,a-=8);if(0===i)i=1-h;else{if(i===s)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),i-=h}return(l?-1:1)*f*Math.pow(2,i-n)},r.write=function(t,r,e,n,o,i){var f,u,s,h=8*i-o-1,a=(1<<h)-1,p=a>>1,c=23===o?5960464477539062e-23:0,l=n?0:i-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(isNaN(r=Math.abs(r))||r===1/0?(u=isNaN(r)?1:0,f=a):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),f+p>=1?r+=c/s:r+=c*Math.pow(2,1-p),r*s>=2&&(f++,s/=2),f+p>=a?(u=0,f=a):f+p>=1?(u=(r*s-1)*Math.pow(2,o),f+=p):(u=r*Math.pow(2,p-1)*Math.pow(2,o),f=0));o>=8;t[e+l]=255&u,l+=y,u/=256,o-=8);for(f=f<<o|u,h+=o;h>0;t[e+l]=255&f,l+=y,f/=256,h-=8);t[e+l-y]|=128*g}}}]);