(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{263:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(263)),o={title:"Simplified CLI Commands"},c={unversionedId:"upgrade-to-v2/cli-commands",id:"upgrade-to-v2/cli-commands",isDocsHomePage:!1,title:"Simplified CLI Commands",description:"Script and migration commands were tedious to use in version 1 of Foal. They were many different commands to use in a special order to make things work. In version 2, commands have been reduced, simplified and are now more intuitive.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/cli-commands.md",slug:"/upgrade-to-v2/cli-commands",permalink:"/es/docs/upgrade-to-v2/cli-commands",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/cli-commands.md",version:"current"},p=[{value:"Steps to upgrade",id:"steps-to-upgrade",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Script and migration commands were tedious to use in version 1 of Foal. They were many different commands to use in a special order to make things work. In version 2, commands have been reduced, simplified and are now more intuitive."),Object(i.b)("p",null,"In version 2, the application, scripts and migrations are built with one single command: ",Object(i.b)("inlineCode",{parentName:"p"},"npm run build"),"."),Object(i.b)("p",null,"If you are in development and want to start the build in watch mode, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"npm run develop"),". This will also start the server."),Object(i.b)("p",null,"If you're coding shell scripts, you can execute ",Object(i.b)("inlineCode",{parentName:"p"},"npm run develop")," in one terminal and ",Object(i.b)("inlineCode",{parentName:"p"},"foal run <my-script>")," in another. This will re-compile your scripts when you save them without the need of calling ",Object(i.b)("inlineCode",{parentName:"p"},"npm run build")," each time."),Object(i.b)("p",null,"Regarding migrations, you now have only three commands to use and you don't have to take care anymore of the build part or the emptying of the target directory of the build."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run makemigrations\nnpm run migrations\nnpm run revertmigration\n")),Object(i.b)("h2",{id:"steps-to-upgrade"},"Steps to upgrade"),Object(i.b)("p",null,"Here are the steps to upgrade to version 2:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Remove the files ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.migrations.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.scripts.json"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Replace the content of the file ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.app.json")," with this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/**/*.ts"\n  ],\n  "exclude": [\n    "src/e2e/*.ts",\n    "src/**/*.spec.ts",\n    "src/e2e.ts",\n    "src/test.ts"\n  ]\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Replace the commands of your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," with the ones below. You can also uninstall the ",Object(i.b)("inlineCode",{parentName:"p"},"copy")," package."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "build": "foal rmdir build && tsc -p tsconfig.app.json",\n    "start": "node ./build/index.js",\n    "develop": "npm run build && concurrently \\"tsc -p tsconfig.app.json -w\\" \\"supervisor -w ./build --no-restart-on error ./build/index.js\\"",\n\n    "build:test": "foal rmdir build && tsc -p tsconfig.test.json",\n    "start:test": "mocha --file ./build/test.js \\"./build/**/*.spec.js\\"",\n    "test": "npm run build:test && concurrently \\"tsc -p tsconfig.test.json -w\\" \\"mocha --file ./build/test.js -w \\\\\\"./build/**/*.spec.js\\\\\\"\\"",\n\n    "build:e2e": "foal rmdir build && tsc -p tsconfig.e2e.json",\n    "start:e2e": "mocha --file ./build/e2e.js \\"./build/e2e/**/*.js\\"",\n    "e2e": "npm run build:e2e && concurrently \\"tsc -p tsconfig.e2e.json -w\\" \\"mocha --file ./build/e2e.js -w \\\\\\"./build/e2e/**/*.js\\\\\\"\\"",\n\n    "lint": "eslint --ext ts src",\n    "lint:fix": "eslint --ext ts --fix src",\n\n    "makemigrations": "foal rmdir build && tsc -p tsconfig.app.json && npx typeorm migration:generate --name migration && tsc -p tsconfig.app.json",\n    "migrations": "npx typeorm migration:run",\n    "revertmigration": "npx typeorm migration:revert"\n  }\n}\n')))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: If your HTML templates are located in your ",Object(i.b)("inlineCode",{parentName:"em"},"src/")," directory you still will need the ",Object(i.b)("inlineCode",{parentName:"em"},"copy"),' package and to keep the `copy-cli \\"src/**/'),'.html\\" build',Object(i.b)("inlineCode",{parentName:"p"},"part in your"),"package.json`.*"),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Build, make and run migrations")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Version 1\nnpm run build:app\nnpm run migration:generate -- -n my_migration\nnpm run build:migrations\nnpm run migration:run\n\n# Version 2\nnpm run makemigrations\nnpm run migrations\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Build and run scripts in watch mode (development)")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Version 1\nnpm run build:scripts && foal run my-script\n\n# Version 2\n# In one terminal:\nnpm run develop\n\n# In another terminal:\nfoal run my-script\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Revert one migration")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Version 1\nnpm run migration:revert\n\n# Version 2\nnpm run revertmigration\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Build migrations, scripts and the app")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Version 1\nnpm run build:app\nnpm run build:scripts\nnpm run build:migrations\n\n# Version 2\nnpm run build\n")))}l.isMDXComponent=!0}}]);