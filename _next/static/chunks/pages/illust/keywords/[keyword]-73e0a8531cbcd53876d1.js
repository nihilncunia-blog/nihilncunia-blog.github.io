(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),i=n(4651),c=n(7426);var f={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,y=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),k=r(w,2),_=k[0],C=k[1],E=a.default.useCallback((function(e){_(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,_]);a.default.useEffect((function(){var e=C&&n&&u.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=f[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,C,b,n,o]);var L={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,y,g,h,b)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(p,Z,o&&o.locales,o&&o.domainLocales);L.href=M||u.addBasePath(u.addLocale(p,Z,o&&o.defaultLocale))}return a.default.cloneElement(t,L)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=o.useRef(),f=o.useState(!1),l=r(f,2),s=l[0],d=l[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=n(7294),a=n(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},5469:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(7294),o=n(3490),a=n(3218),u=n(7272),i=n(3750),c=n(1216);var f={name:"qu9742",styles:"margin-bottom:100px"},l=!0;t.default=function(e){var t=e.PostsPages,n=e.keyword,l=(0,r.useState)(0),s=l[0],d=l[1],p=(0,i.Z)(t),v=(0,r.useCallback)((function(){0!==s&&d(s-1)}),[s]),y=(0,r.useCallback)((function(){s!==t.length-1&&d(s+1)}),[s]),g=(0,r.useCallback)((function(){0!==s&&d(0)}),[s]),h=(0,r.useCallback)((function(){s!==t.length-1&&d(t.length-1)}),[s]),b=f,m={pageName:'"'.concat(n,'" \uad00\ub828 \uc77c\ub7ec\uc2a4\ud2b8'),pageURL:"/illust/keywords/".concat(n)};return(0,c.tZ)(r.Fragment,null,(0,c.tZ)(o.Z,m,(0,c.tZ)("div",{id:"blog-keyword-page",css:b},(0,c.tZ)(u.xu,{top:"100"},(0,c.tZ)(u.u2,{i:"f002",w:"900",f:"Free"},"\u201c ",n," \u201d \ud0a4\uc6cc\ub4dc \uad00\ub828 \uc77c\ub7ec\uc2a4\ud2b8 ",p,"\uc7a5"),(0,c.tZ)(a.P,{bottom:"0"},"\ub2e4\ub978 \ud0a4\uc6cc\ub4dc\ub4e4\uc744 \ubcf4\ub824\uba74 \uc0c1\ub2e8 \uc11c\ube0c \uba54\ub274\uc5d0\uc11c \ud0a4\uc6cc\ub4dc \ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uc138\uc694.")),(0,c.tZ)("div",{id:"blog-post-list"},t[s].map((function(e){var t=e.frontMatter,n=e.filePath;return(0,c.tZ)(u.oV,{key:n.replace(".mdx",""),type:"illust",frontMatter:t,filePath:n})}))),(0,c.tZ)(u._3,{prev:v,next:y,first:g,last:h,current:s,total:t.length}))))}},3750:function(e,t){"use strict";t.Z=function(e){for(var t=0,n=0;n<=e.length-1;n++)t+=e[n].length;return t}},4946:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/illust/keywords/[keyword]",function(){return n(5469)}])},1664:function(e,t,n){e.exports=n(2167)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return s}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&u.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var s=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[672,888,774,179],(function(){return t=4946,e(e.s=t);var t}));var t=e.O();_N_E=t}]);