"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7501],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3434:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Protection CSRF",id:"tuto-13-csrf",slug:"13-csrf"},c=void 0,u={unversionedId:"tutorials/real-world-example-with-react/tuto-13-csrf",id:"tutorials/real-world-example-with-react/tuto-13-csrf",title:"Protection CSRF",description:"Comme vous utilisez l'authentification avec des cookies, vous devez ajouter une protection CSRF \xe0 votre application. C'est tr\xe8s facile avec Foal, m\xeame lorsque vous construisez une SPA.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/13-csrf.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/13-csrf",permalink:"/fr/docs/tutorials/real-world-example-with-react/13-csrf",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/13-csrf.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Protection CSRF",id:"tuto-13-csrf",slug:"13-csrf"},sidebar:"someSidebar",previous:{title:"T\xe9l\xe9chargement d'Images",permalink:"/fr/docs/tutorials/real-world-example-with-react/12-file-upload"},next:{title:"Construction de Production",permalink:"/fr/docs/tutorials/real-world-example-with-react/14-production-build"}},s=[],p={toc:s};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Comme vous utilisez l'authentification avec des cookies, vous devez ajouter une protection CSRF \xe0 votre application. C'est tr\xe8s facile avec Foal, m\xeame lorsque vous construisez une SPA."),(0,a.kt)("p",null,"Ouvrez le fichier de configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"default.json")," et activez la protection CSRF."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n      "csrf": {\n        "enabled": true\n      }\n    },\n    ...\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"Maintenant, lorsque les sessions seront utilis\xe9es avec des cookies, le serveur enverra un jeton suppl\xe9mentaire au client dans un cookie nomm\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"XSRF-Token"),". Ce jeton devra \xeatre r\xe9cup\xe9r\xe9 par l'application frontend et renvoy\xe9 dans chaque requ\xeate POST, PATCH, PUT et DELETE avec l'en-t\xeate ",(0,a.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token"),". Si ce n'est pas le cas, le serveur renverra une erreur 403."),(0,a.kt)("p",null,"Si vous utilisez ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"axios")," comme biblioth\xe8que de requ\xeates, comme dans ce tutoriel, vous n'avez rien \xe0 faire. Tout est g\xe9r\xe9 en arri\xe8re-plan. "),(0,a.kt)("p",null,"Si vous red\xe9marrez votre serveur de d\xe9veloppement et ouvrez les outils de d\xe9veloppement de votre navigateur, vous verrez qu'axios inclut automatiquement le jeton pour vous lors de la cr\xe9ation d'un nouveau post."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"X-XSRF-Token header example",src:r(7576).Z,width:"1928",height:"116"})))}d.isMDXComponent=!0},7576:function(e,t,r){t.Z=r.p+"assets/images/csrf-a395cf4e61edfeaa39c97b11c168dc86.png"}}]);