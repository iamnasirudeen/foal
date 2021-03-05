(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(263)),i={title:"Introduction",slug:"/"},l={unversionedId:"README",id:"README",isDocsHomePage:!1,title:"Introduction",description:"License: MIT",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/README.md",slug:"/",permalink:"/fr/docs/",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/README.md",version:"current",sidebar:"someSidebar",next:{title:"Installation",permalink:"/fr/docs/tutorials/simple-todo-list/1-installation"}},s=[{value:"Qu&#39;est-ce que Foal ?",id:"quest-ce-que-foal-",children:[]},{value:"Politique de D\xe9veloppement",id:"politique-de-d\xe9veloppement",children:[{value:"Des Milliers de Tests",id:"des-milliers-de-tests",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Stabilit\xe9 du Produit",id:"stabilit\xe9-du-produit",children:[]}]},{value:"D\xe9marrer",id:"d\xe9marrer",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/node-%3E%3D10-brightgreen.svg",alt:"node version"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"})),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/actions"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"}))),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"}))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Status"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Fin de vie"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.x"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Actuelle"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.x"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Maintenance"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2021-05-31")))),Object(o.b)("h2",{id:"quest-ce-que-foal-"},"Qu'est-ce que Foal ?"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Foal")," (ou ",Object(o.b)("em",{parentName:"p"},"FoalTS"),") est un framework Node.JS pour cr\xe9er des applications web."),Object(o.b)("p",null,"Il fournit un ensemble de composants pr\xeats \xe0 l'emploi pour que vous n'ayez pas \xe0 r\xe9inventer la roue \xe0 chaque fois. En un seul endroit, vous disposez d'un environnement complet pour cr\xe9er des applications web. Celui-ci comprend une interface de commandes (CLI), des outils de test, des utilitaires pour le front, des scripts, une authentification avanc\xe9e, un ORM, des environnements de d\xe9ploiement, une API GraphQL et Swagger, des utilitaires AWS, etc. Vous n'avez plus besoin de vous perdre sur npm pour rechercher des paquets et les faire fonctionner ensemble. Tout est fourni."),Object(o.b)("p",null,"Mais tout en offrant toutes ces fonctionnalit\xe9s, le framework reste simple. La complexit\xe9 et les abstractions inutiles sont mises de c\xf4t\xe9 pour fournir la syntaxe la plus intuitive et la plus expressive. Nous pensons qu'un code concis et \xe9l\xe9gant est la meilleure fa\xe7on de d\xe9velopper une application et de la maintenir dans le futur. Cela vous permet \xe9galement de passer plus de temps \xe0 coder plut\xf4t qu'\xe0 essayer de comprendre le fonctionnement du framework."),Object(o.b)("p",null,"Enfin, le framework est enti\xe8rement \xe9crit en TypeScript. Ce langage vous offre la v\xe9rification du typage statique en plus des derni\xe8res fonctionnalit\xe9s d'ECMAScript. Cela vous permet de d\xe9tecter la plupart des erreurs d'\xe9tourderie lors de la compilation et d'am\xe9liorer la qualit\xe9 de votre code. Il vous offre \xe9galement l'autocompl\xe9tion et une API bien document\xe9e."),Object(o.b)("h2",{id:"politique-de-d\xe9veloppement"},"Politique de D\xe9veloppement"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Pour les contributeurs seulement."))),Object(o.b)("h3",{id:"des-milliers-de-tests"},"Des Milliers de Tests"),Object(o.b)("p",null,"Tester FoalTS est mis sur une priorit\xe9 tr\xe8s \xe9lev\xe9e. Il est primordial pour nous de fournir un produit fiable. En d\xe9cembre 2020, le framework est couvert par plus de 2100 tests."),Object(o.b)("h3",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"Les nouvelles fonctionnalit\xe9s, quelles qu'elles soient, sont inutiles si elles ne sont pas bien document\xe9es. Le maintien d'une documentation compl\xe8te et de qualit\xe9 est cl\xe9 pour le framework. Si vous pensez que quelque chose manque ou n'est pas clair, n'h\xe9sitez pas \xe0 ouvrir une issue sur Github !"),Object(o.b)("h3",{id:"stabilit\xe9-du-produit"},"Stabilit\xe9 du Produit"),Object(o.b)("p",null,"Une grande attention est accord\xe9e \xe0 la stabilit\xe9 du produit. Vous pouvez en savoir plus en consultant notre ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#dependency-policy"}),"politique de d\xe9pendance"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#semantic-versioning"}),"nos r\xe8gles de versionnement s\xe9mantique")," et ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"}),"notre politique de support \xe0 long terme"),"."),Object(o.b)("h2",{id:"d\xe9marrer"},"D\xe9marrer"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"> npm install -g @foal/cli\n> foal createapp my-app\n> cd my-app\n> npm run develop\n")),Object(o.b)("p",null,"Le serveur de d\xe9veloppement est lanc\xe9 ! Allez sur ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3001")," et trouvez notre page d'accueil !"),Object(o.b)("p",null,"\ud83d\udc49 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./tutorials/simple-todo-list/1-installation"}),"Continuer avec le tutoriel")," \ud83c\udf31"))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);