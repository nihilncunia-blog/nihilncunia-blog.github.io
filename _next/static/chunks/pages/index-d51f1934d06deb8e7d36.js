(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),i=n(4651),f=n(7426);var c={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,y=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,Z=f.useIntersection({rootMargin:"200px"}),w=r(Z,2),_=w[0],E=w[1],M=a.default.useCallback((function(e){_(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,_]);a.default.useEffect((function(){var e=E&&n&&u.isLocalURL(p),t="undefined"!==typeof b?b:o&&o.locale,r=c[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,E,b,n,o]);var C={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:f,scroll:i}))}(e,o,p,d,y,g,h,b)},onMouseEnter:function(e){u.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof b?b:o&&o.locale,P=o&&o.isLocaleDomain&&u.getDomainLocale(d,L,o&&o.locales,o&&o.domainLocales);C.href=P||u.addBasePath(u.addLocale(d,L,o&&o.defaultLocale))}return a.default.cloneElement(t,C)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,f=o.useRef(),c=o.useState(!1),l=r(c,2),s=l[0],p=l[1],d=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||s||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},6839:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(7294),o=n(3490),a=n(9808),u=n(3218),i=n(7272),f=n(1216);var c={name:"qu9742",styles:"margin-bottom:100px"},l=!0;t.default=function(e){var t=e.posts,n=e.notices,l=c;return(0,f.tZ)(r.Fragment,null,(0,f.tZ)(o.Z,{pageName:"\ud648",pageURL:"/"},(0,f.tZ)(a.Gx,null),(0,f.tZ)(a.MP,null),(0,f.tZ)("div",{id:"blog-index-page",css:l},(0,f.tZ)(i.xu,null,(0,f.tZ)(i.u2,{i:"f017",w:"500",f:"Free"},"\ucd5c\uadfc \uacf5\uc9c0\uc0ac\ud56d 3\uac74"),(0,f.tZ)(u.P,{bottom:"0"},"\ub2c8\ud790\ub85c\uadf8\uc640 \uad00\ub828\ub41c \uacf5\uc9c0\uc0ac\ud56d\uc785\ub2c8\ub2e4. \uc804\uccb4 \uacf5\uc9c0\uc0ac\ud56d \ubaa9\ub85d\uc740 ",(0,f.tZ)(u.A,{type:"blog",href:"/notice/page/1"},"\uc774 \ub9c1\ud06c"),"\ub97c \uc774\uc6a9\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.")),(0,f.tZ)("div",{id:"blog-notice-list"},n.map((function(e){var t=e.frontMatter,n=e.filePath;return(0,f.tZ)(i.oV,{key:n.replace(".mdx",""),type:"notice",frontMatter:t,filePath:n})}))),(0,f.tZ)(i.xu,{top:"100"},(0,f.tZ)(i.u2,{i:"f017",w:"500",f:"Free"},"\ucd5c\uadfc \ud3ec\uc2a4\ud2b8 5\uac74"),(0,f.tZ)(u.P,{bottom:"0"},"\ucd5c\uadfc\uc5d0 \uc791\uc131\ud55c \ud3ec\uc2a4\ud2b8 \ubaa9\ub85d\uc785\ub2c8\ub2e4. \uc804\uccb4 \ud3ec\uc2a4\ud2b8 \ubaa9\ub85d\uc740 ",(0,f.tZ)(u.A,{type:"blog",href:"/post/page/1"},"\uc774 \ub9c1\ud06c"),"\ub97c \uc774\uc6a9\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.")),(0,f.tZ)("div",{id:"blog-post-list"},t.map((function(e){var t=e.frontMatter,n=e.filePath;return(0,f.tZ)(i.oV,{key:n.replace(".mdx",""),type:"post",frontMatter:t,filePath:n})}))),(0,f.tZ)(a.uU,{pos:"bottom"}))))}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6839)}])},1664:function(e,t,n){e.exports=n(2167)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return s}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&u.test(e)},f=[],c=0;c<256;++c)f.push((c+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var s=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[672,888,774,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);