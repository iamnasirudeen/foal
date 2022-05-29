"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9090],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},437:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={title:"Application Creation"},c=void 0,u={unversionedId:"upgrade-to-v2/application-creation",id:"upgrade-to-v2/application-creation",title:"Application Creation",description:"Starting from version 2, the createApp function returns a promise. Open src/index.ts and update the code as follows:",source:"@site/docs/upgrade-to-v2/application-creation.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/application-creation",permalink:"/docs/upgrade-to-v2/application-creation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/application-creation.md",tags:[],version:"current",frontMatter:{title:"Application Creation"}},l=[],s={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starting from version 2, the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," function returns a promise. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," and update the code as follows:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Version 1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function main() {\n  // ...\n  const app = createApp(AppController);\n  // ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Version 2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function main() {\n  // ...\n  const app = await createApp(AppController);\n  // ...\n}\n")))}f.isMDXComponent=!0}}]);