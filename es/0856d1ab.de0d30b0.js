(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{263:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(263)),i={title:"Nuxt.js"},c={unversionedId:"frontend-integration/nuxt.js",id:"frontend-integration/nuxt.js",isDocsHomePage:!1,title:"Nuxt.js",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/frontend-integration/nuxt.js.md",slug:"/frontend-integration/nuxt.js",permalink:"/es/docs/frontend-integration/nuxt.js",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/frontend-integration/nuxt.js.md",version:"current",sidebar:"someSidebar",previous:{title:"JSX Server-Side Rendering",permalink:"/es/docs/frontend-integration/jsx-server-side-rendering"},next:{title:"Almacenamiento Local y en el Cloud",permalink:"/es/docs/file-system/local-and-cloud-storage"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Set Up",id:"set-up",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nuxtjs.org/"}),"Nuxt.js")," is a frontend framework based on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://vuejs.org"}),"Vue.JS"),"."),Object(o.b)("p",null,"This document explains how to use it in conjunction with FoalTS. A sample source code can be found on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/master/samples/nuxt.js"}),"Github"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Create your frontend and backend projects in two different folders."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"foal createapp backend\nnpx create-nuxt-app frontend\n")),Object(o.b)("p",null,"When the CLI asks which server framework to choose, select ",Object(o.b)("em",{parentName:"p"},"None"),"."),Object(o.b)("h2",{id:"set-up"},"Set Up"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to your server directory and install ",Object(o.b)("inlineCode",{parentName:"p"},"nuxt"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install nuxt\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Then update your ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts")," file as follows:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Builder, Nuxt } from 'nuxt';\n// ...\n\n// Import and Set Nuxt.js options\nconst config = require('../../frontend/nuxt.config.js');\nconfig.dev = Config.get('settings.debug', 'boolean', true);\n\nasync function main() {\n  // Init Nuxt.js\n  const nuxt = new Nuxt(config);\n\n  // Build only in dev mode\n  if (config.dev) {\n    const builder = new Builder(nuxt);\n    await builder.build();\n  } else {\n    await nuxt.ready();\n  }\n\n  // ...\n\n  const app = await createApp(AppController, {\n    postMiddlewares: [\n      nuxt.render\n    ]\n  });\n\n  // ...\n}\n\nmain();\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Delete the file ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," in ",Object(o.b)("inlineCode",{parentName:"p"},"backend/public"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the file ",Object(o.b)("inlineCode",{parentName:"p"},"nuxt.config.js")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"frontend/")," directory and update its first lines as follows:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"module.exports = {\n  srcDir: '../frontend',\n  // ...\n}\n")))))}u.isMDXComponent=!0}}]);