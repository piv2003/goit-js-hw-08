!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,u,f,a,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,a=setTimeout(O,t),d?g(e):f}function I(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=b();if(I(e))return x(e);a=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function x(e){return a=void 0,m&&r?g(e):(r=i=void 0,f)}function h(){var e=b(),n=I(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return j(l);if(s)return a=setTimeout(O,t),g(l)}return void 0===a&&(a=setTimeout(O,t)),f}return t=S(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},h.flush=function(){return void 0===a?f:x(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",I={},O={form:document.querySelector(".feedback-form"),emailInput:document.querySelector(".feedback-form input"),textInput:document.querySelector(".feedback-form textarea")};O.form.addEventListener("input",e(t)((function(){I.email=O.emailInput.value,I.message=O.textInput.value,localStorage.setItem(j,JSON.stringify(I))}),500)),O.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(j))),O.form.reset(),localStorage.removeItem(j)})),function(){var e=JSON.parse(localStorage.getItem(j));if(!e)return;O.emailInput.value=e.email,O.textInput.value=e.message}()}();
//# sourceMappingURL=03-feedback.e30ffc0d.js.map