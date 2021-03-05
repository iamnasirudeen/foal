(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(263)),i={title:"Gu\xeda de Actualizaci\xf3n a la Versi\xf3n 2",sidebar_label:"A v2"},c={unversionedId:"upgrade-to-v2/README",id:"upgrade-to-v2/README",isDocsHomePage:!1,title:"Gu\xeda de Actualizaci\xf3n a la Versi\xf3n 2",description:"This guide will take you step by step through the upgrade to version 2. If something is missing or incorrect, feel free to submit an issue or a PR on Github.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/README.md",slug:"/upgrade-to-v2/README",permalink:"/es/docs/upgrade-to-v2/README",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/README.md",version:"current",sidebar_label:"A v2",sidebar:"someSidebar",previous:{title:"Enviar a Producci\xf3n",permalink:"/es/docs/deployment-and-environments/ship-to-production"},next:{title:"Awesome Foal",permalink:"/es/docs/community/awesome-foal"}},l=[{value:"For all",id:"for-all",children:[]},{value:"By topic",id:"by-topic",children:[]},{value:"Common issue",id:"common-issue",children:[]},{value:"Rare cases",id:"rare-cases",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide will take you step by step through the upgrade to version 2. If something is missing or incorrect, feel free to submit an issue or a PR on Github."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Node versions"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"TS min version"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10.x, 12.x, 14.x"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4.0")))),Object(o.b)("h2",{id:"for-all"},"For all"),Object(o.b)("p",null,"Upgrade your versions of TypeScript and Node.JS if necessary."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/cli-commands"}),"New CLI commands")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/config-system"}),"New configuration system")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/application-creation"}),"Application creation")),Object(o.b)("h2",{id:"by-topic"},"By topic"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/validation-hooks"}),"Validation hooks")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/session-tokens"}),"Authentication with sessions (session tokens) and CSRF protection")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/openapi"}),"OpenAPI")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/service-and-app-initialization"}),"Service and application initialization")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/file-upload-and-download"}),"File upload and download")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/jwt-and-csrf"}),"JWT hooks and CSRF protection")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/mongodb"}),"Support of MongoDB")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/error-handling"}),"Error-handling and hook post functions")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/template-engine"}),"Template engine")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/custom-express-instance"}),"Custom Express instance")),Object(o.b)("h2",{id:"common-issue"},"Common issue"),Object(o.b)("p",null,"If you get unexpected errors when building the application, please check the following points:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have updated all your ",Object(o.b)("inlineCode",{parentName:"li"},"@foal/x")," packages."),Object(o.b)("li",{parentName:"ul"},"You have updated your ",Object(o.b)("inlineCode",{parentName:"li"},"typescript")," dependency to version 4.")),Object(o.b)("h2",{id:"rare-cases"},"Rare cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The following objects and functions have been removed: ",Object(o.b)("inlineCode",{parentName:"li"},"ObjectDoesNotExist"),", ",Object(o.b)("inlineCode",{parentName:"li"},"isObjectDoesNotExist"),", ",Object(o.b)("inlineCode",{parentName:"li"},"PermissionDenied"),", ",Object(o.b)("inlineCode",{parentName:"li"},"isPermissionDenied"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ValidationError"),", ",Object(o.b)("inlineCode",{parentName:"li"},"isValidationError"),", ",Object(o.b)("inlineCode",{parentName:"li"},"validate"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"legacy")," option has been removed from ",Object(o.b)("inlineCode",{parentName:"li"},"hashPassword")," and ",Object(o.b)("inlineCode",{parentName:"li"},"verifyPassword"),". If you used it, please submit an issue."),Object(o.b)("li",{parentName:"ul"},"The command ",Object(o.b)("inlineCode",{parentName:"li"},"foal g sub-app")," has been removed."),Object(o.b)("li",{parentName:"ul"},"The functions ",Object(o.b)("inlineCode",{parentName:"li"},"createService")," and ",Object(o.b)("inlineCode",{parentName:"li"},"createController")," do not accept a ",Object(o.b)("inlineCode",{parentName:"li"},"ServiceManager")," as second argument."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"@Hook")," decorator only accepts one function."),Object(o.b)("li",{parentName:"ul"},"The type ",Object(o.b)("inlineCode",{parentName:"li"},"ExpressApplication = any")," has been removed."),Object(o.b)("li",{parentName:"ul"},"The property ",Object(o.b)("inlineCode",{parentName:"li"},"req.foal.ctx")," does not exist anymore in post middlewares.")))}b.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);