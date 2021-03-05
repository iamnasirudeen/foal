(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(263)),i={title:"Soluci\xf3n de Problemas de Instalaci\xf3n"},l={unversionedId:"tutorials/simple-todo-list/installation-troubleshooting",id:"tutorials/simple-todo-list/installation-troubleshooting",isDocsHomePage:!1,title:"Soluci\xf3n de Problemas de Instalaci\xf3n",description:"Errores con node-gyp",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/installation-troubleshooting.md",slug:"/tutorials/simple-todo-list/installation-troubleshooting",permalink:"/es/docs/tutorials/simple-todo-list/installation-troubleshooting",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/installation-troubleshooting.md",version:"current"},c=[{value:"Errores con <code>node-gyp</code>",id:"errores-con-node-gyp",children:[]},{value:"\xbfOtro problema?",id:"\xbfotro-problema",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"errores-con-node-gyp"},"Errores con ",Object(a.b)("inlineCode",{parentName:"h2"},"node-gyp")),Object(a.b)("p",null,"Si est\xe1 en Windows y obtiene errores que mencionan ",Object(a.b)("inlineCode",{parentName:"p"},"gyp")," o ",Object(a.b)("inlineCode",{parentName:"p"},"node_gyp"),", probablemente sea porque esta ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nodejs/node-gyp"}),"biblioteca")," no tiene todas las dependencias que necesita."),Object(a.b)("p",null,"Intente ejecutar ",Object(a.b)("inlineCode",{parentName:"p"},"npm install --global windows-build-tools")," desde un PowerShell elevado o CMD.exe (ejecutado como administrador)."),Object(a.b)("p",null,"\xa1Si esto no resuelve su problema, por favor ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/issues/new"}),"env\xede una issue")," en Github con la salida de su terminal para que podamos ayudarle!"),Object(a.b)("h2",{id:"\xbfotro-problema"},"\xbfOtro problema?"),Object(a.b)("p",null,"Por favor, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/issues/new"}),"env\xede una issue")," en Github."))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);