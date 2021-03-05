(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(263)),c={title:"Rendu c\xf4t\xe9 serveur (SSR) JSX"},i={unversionedId:"frontend-integration/jsx-server-side-rendering",id:"frontend-integration/jsx-server-side-rendering",isDocsHomePage:!1,title:"Rendu c\xf4t\xe9 serveur (SSR) JSX",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/frontend-integration/jsx-server-side-rendering.md",slug:"/frontend-integration/jsx-server-side-rendering",permalink:"/fr/docs/frontend-integration/jsx-server-side-rendering",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/frontend-integration/jsx-server-side-rendering.md",version:"current",sidebar:"someSidebar",previous:{title:"Angular, React & Vue",permalink:"/fr/docs/frontend-integration/angular-react-vue"},next:{title:"Nuxt.js",permalink:"/fr/docs/frontend-integration/nuxt.js"}},l=[{value:"Compile JSX Files",id:"compile-jsx-files",children:[]},{value:"Example with React",id:"example-with-react",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(a.b)("p",null,"--"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are interested in SSR without JSX, then you might take a look at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/common/templating"}),'the "templating" page'),".")),Object(a.b)("h2",{id:"compile-jsx-files"},"Compile JSX Files"),Object(a.b)("p",null,"The TypeScript compiler supports JSX."),Object(a.b)("p",null,"To enable this feature, update the ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    ...\n    "jsx": "react",\n  },\n  "include": [\n    "src/**/*.ts"\n    "src/**/*.tsx"\n  ]\n}\n\n')),Object(a.b)("p",null,"Then, add the file extension ",Object(a.b)("inlineCode",{parentName:"p"},"tsx")," in every ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.*.json"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with ",Object(a.b)("inlineCode",{parentName:"em"},"tsconfig.app.json"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/**/*.ts",\n    "src/**/*.tsx"\n  ],\n  "exclude": [\n    "src/e2e/*.ts",\n    "src/**/*.spec.ts",\n    "src/e2e.ts",\n    "src/test.ts"\n  ]\n}\n')),Object(a.b)("p",null,"Every file using JSX must now have the extension ",Object(a.b)("inlineCode",{parentName:"p"},".tsx"),"."),Object(a.b)("h2",{id:"example-with-react"},"Example with React"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install react react-dom @types/react-dom\n")),Object(a.b)("p",null,"This example shows how to use JSX SSR with React. It assumes that ",Object(a.b)("inlineCode",{parentName:"p"},"templates")," directory is in the root, next to ",Object(a.b)("inlineCode",{parentName:"p"},"src"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"view.controller.tsx")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, render } from '@foal/core';\nimport * as React from 'react';\nimport * as ReactDOMServer from 'react-dom/server';\n\nexport class ViewController {\n\n  @Get('/')\n  async index() {\n    const content = ReactDOMServer.renderToString(<div>Hello world!</div>);\n\n    return render('./templates/index.html', {\n      content,\n    });\n  }\n\n}\n\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"./templates/index.html")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n')))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);