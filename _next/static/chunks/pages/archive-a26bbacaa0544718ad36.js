(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),i=n(4651),c=n(7426);var f={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),l=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),p=l.href,d=l.as,v=e.children,y=e.replace,h=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),_=r(w,2),E=_[0],C=_[1],L=a.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);a.default.useEffect((function(){var e=C&&n&&u.isLocalURL(p),t="undefined"!==typeof m?m:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&s(o,p,d,{locale:t})}),[d,p,C,m,n,o]);var M={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,o,p,d,y,h,g,m)},onMouseEnter:function(e){u.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof m?m:o&&o.locale,Z=o&&o.isLocaleDomain&&u.getDomainLocale(d,R,o&&o.locales,o&&o.domainLocales);M.href=Z||u.addBasePath(u.addLocale(d,R,o&&o.defaultLocale))}return a.default.cloneElement(t,M)};t.default=l},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=o.useRef(),f=o.useState(!1),s=r(f,2),l=s[0],p=s[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!u&&!l){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),[d,l]};var o=n(7294),a=n(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},6139:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var r=n(7294),o=n(4586),a=n(3490),u=n(7272),i=n(3218),c=n(1216);var f={name:"rs5978",styles:"&>div{margin:30px 0;&:nth-of-type(1){margin-top:100px;}&:nth-last-of-type(1){margin-bottom:100px;}}"},s=!0;t.default=function(e){var t=e.archivePosts,n=f;return(0,c.tZ)(r.Fragment,null,(0,c.tZ)(a.Z,{pageName:"\ud3ec\uc2a4\ud2b8 \uc544\uce74\uc774\ube0c",pageURL:"/archive"},(0,c.tZ)("div",{id:"blog-archive-page"},(0,c.tZ)(u.xu,{top:"100",bottom:"100"},(0,c.tZ)(u.u2,{w:"900",f:"Free",i:"f187"},"\ud3ec\uc2a4\ud2b8 \uc544\uce74\uc774\ube0c"),(0,c.tZ)(i.P,{bottom:"0"},"\uc774 \ud398\uc774\uc9c0\ub294 \uc6d4 \ubcc4\ub85c \uc791\uc131\ub41c \ud3ec\uc2a4\ud2b8\ub97c \uacf5\uc9c0, \uc77c\ub7ec\uc2a4\ud2b8 \uad6c\ubd84\ud558\uc9c0 \uc54a\uace0 \uc804\ubd80 \ubaa8\uc544\uc11c \ubcf4\uc5ec\uc8fc\ub294 \ud3ec\uc2a4\ud2b8 \uc544\uce74\uc774\ube0c\uc785\ub2c8\ub2e4.")),(0,c.tZ)("div",{id:"archive-item-list",css:n},t.map((function(e){var t=e.posts,n=e.yearMonth;return(0,c.tZ)(u.x5,{posts:t,yearMonth:n,key:(0,o.Z)()})}))))))}},9398:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive",function(){return n(6139)}])},1664:function(e,t,n){e.exports=n(2167)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return l}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&u.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var l=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return s(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[672,888,774,179],(function(){return t=9398,e(e.s=t);var t}));var t=e.O();_N_E=t}]);