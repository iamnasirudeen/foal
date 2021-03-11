(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(265)),i={title:"La P\xe1gina de Inscripci\xf3n"},s={unversionedId:"tutorials/multi-user-todo-list/7-the-signup-page",id:"tutorials/multi-user-todo-list/7-the-signup-page",isDocsHomePage:!1,title:"La P\xe1gina de Inscripci\xf3n",description:"La p\xe1gina de registro, que se sirve en el AppController, realiza una petici\xf3n POST /signup cuando se pulsa el bot\xf3n Create an account.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/7-the-signup-page.md",slug:"/tutorials/multi-user-todo-list/7-the-signup-page",permalink:"/es/docs/tutorials/multi-user-todo-list/7-the-signup-page",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/7-the-signup-page.md",version:"current",sidebar:"someSidebar",previous:{title:"Tareas & Propriedad",permalink:"/es/docs/tutorials/multi-user-todo-list/6-todos-and-ownership"},next:{title:"Pruebas E2E & Autenticaci\xf3n",permalink:"/es/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication"}},u=[],c={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"La p\xe1gina de registro, que se sirve en el ",Object(a.b)("inlineCode",{parentName:"p"},"AppController"),", realiza una petici\xf3n ",Object(a.b)("inlineCode",{parentName:"p"},"POST /signup")," cuando se pulsa el bot\xf3n ",Object(a.b)("inlineCode",{parentName:"p"},"Create an account"),"."),Object(a.b)("p",null,"Cree un nuevo controlador para manejar esta ruta."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate controller signup --register\n")),Object(a.b)("p",null,"Abra el nuevo archivo y sustituya su contenido."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { Context, HttpResponseRedirect, Post, Session, ValidateBody } from '@foal/core';\nimport { isCommon } from '@foal/password';\n\n// App\nimport { User } from '../entities';\n\nexport class SignupController {\n\n  @Post()\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      email: { type: 'string', format: 'email' },\n      password: { type: 'string' }\n    },\n    required: [ 'email', 'password' ],\n    type: 'object',\n  })\n  async signup(ctx: Context<User, Session>) {\n    // Check that the password is not too common.\n    if (await isCommon(ctx.request.body.password)) {\n      ctx.session.set('error', 'Password too common.', { flash: true });\n      return new HttpResponseRedirect('/signup');\n    }\n\n    // Check that no user has already signed up with this email.\n    let user = await User.findOne({ email: ctx.request.body.email });\n    if (user) {\n      ctx.session.set('error', 'Email already taken.', { flash: true });\n      return new HttpResponseRedirect('/signup');\n    }\n\n    // Create the user.\n    user = new User();\n    user.email = ctx.request.body.email;\n    await user.setPassword(ctx.request.body.password);\n    await user.save();\n\n    // Log the user in.\n    ctx.session.setUser(user);\n\n    // Redirect the user to her/his to-do list.\n    return new HttpResponseRedirect('/');\n  }\n\n}\n\n")),Object(a.b)("p",null,"Ahora puede crear nuevos usuarios con la p\xe1gina de registro."))}p.isMDXComponent=!0},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);