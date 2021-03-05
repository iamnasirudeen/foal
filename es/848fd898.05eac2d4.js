(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(263)),s={title:"E2E Testing and Authentication",sidebar_label:"E2E Testing & Auth"},i={unversionedId:"tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",id:"version-1.x/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",isDocsHomePage:!1,title:"E2E Testing and Authentication",description:"The last part of this tutorial explains how to write and run end-to-end tests. The purpose of these tests is not to verify that each feature of each component works, but to check that these components work properly together.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication.md",slug:"/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",permalink:"/es/docs/1.x/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication.md",version:"1.x",sidebar_label:"E2E Testing & Auth",sidebar:"someSidebar",previous:{title:"The Sign Up Page",permalink:"/es/docs/1.x/tutorials/multi-user-todo-list/7-the-signup-page"},next:{title:"Installation",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/1-installation"}},c=[],u={toc:c};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The last part of this tutorial explains how to write and run ",Object(a.b)("em",{parentName:"p"},"end-to-end")," tests. The purpose of these tests is not to verify that each feature of each component works, but to check that these components work properly together."),Object(a.b)("p",null,"The tests are located in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/e2e/")," directory. The command to run them in development is ",Object(a.b)("inlineCode",{parentName:"p"},"npm run e2e"),". E2E tests generally use the ",Object(a.b)("inlineCode",{parentName:"p"},"supertest")," library which provides a high-level abstraction for testing HTTP."),Object(a.b)("p",null,"Open ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," in ",Object(a.b)("inlineCode",{parentName:"p"},"src/e2e")," and replace its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok } from 'assert';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\nimport { User } from '../app/entities';\n\n// Define a group of tests.\ndescribe('The server', () => {\n\n  let app: any;\n\n  // Create the application and the connection to the database before running all the tests.\n  before(async () => {\n    // The connection uses the configuration defined in the file config/e2e.json.\n    // By default, the file has three connection options:\n    //  \"database\": \"./e2e_db.sqlite3\" -> Use a different database for running the tests.\n    // \"synchronize\": true ->  Auto create the database schema when the connection is established.\n    // \"dropSchema\": true -> Drop the schema when the connection is established (empty the database).\n    await createConnection();\n    app = createApp(AppController);\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => getConnection().close());\n\n  // Define a nested group of tests.\n  describe('on GET /api/todos requests', () => {\n\n    it('should return a 400 status if the user did not signed in.', () => {\n      return request(app)\n        .get('/api/todos')\n        .expect(400)\n        .expect({ code: 'invalid_request', description: 'Session cookie not found.' });\n    });\n\n    it('should return a 200 status if the user did signed in.', async () => {\n      // Create a new user in the empty database.\n      const user = new User();\n      user.email = 'john@foalts.org';\n      await user.setPassword('john_password');\n      await getConnection().manager.save(user);\n\n      // Log the user in.\n      let cookie = '';\n      await request(app)\n        .post('/auth/login')\n        // Set the body of the request\n        .send({ email: 'john@foalts.org', password: 'john_password' })\n        // The response should have the status 302 (redirection)\n        .expect(302)\n        .then(data => {\n          // The response should set the authentication cookie for the next requests.\n          ok(Array.isArray(data.header['set-cookie']));\n          // Save the cookie to be able to use it in further requests.\n          cookie = data.header['set-cookie'][0];\n        });\n\n      // Test the /api/todos endpoint when the user has logged in.\n      return request(app)\n        .get('/api/todos')\n        // Send the authentication cookie.\n        .set('Cookie', cookie)\n        .expect(200);\n    });\n\n  });\n\n});\n\n")),Object(a.b)("p",null,"Now run the tests."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm run e2e\n")),Object(a.b)("p",null,"The output should look like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"E2E tests output",src:n(363).default})),Object(a.b)("p",null,"Congratulations, you have reached the end of this tutorial!"))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),h=o,b=l["".concat(s,".").concat(h)]||l[h]||d[h]||a;return n?r.a.createElement(b,i(i({ref:t},u),{},{components:n})):r.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/e2e_output-9e64eb8bb5f440d42cd2716e4215dde4.png"}}]);