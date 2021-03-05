(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(263)),s={title:"CSRF Protection"},i={unversionedId:"security/csrf-protection",id:"version-1.x/security/csrf-protection",isDocsHomePage:!1,title:"CSRF Protection",description:"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated.",source:"@site/versioned_docs/version-1.x/security/csrf-protection.md",slug:"/security/csrf-protection",permalink:"/es/docs/1.x/security/csrf-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/security/csrf-protection.md",version:"1.x",sidebar:"someSidebar",previous:{title:"HTTP Headers Protection",permalink:"/es/docs/1.x/security/http-headers-protection"},next:{title:"XSS Protection",permalink:"/es/docs/1.x/security/xss-protection"}},c=[{value:"SameSite Cookie Attribute",id:"samesite-cookie-attribute",children:[{value:"Authentication with Session Tokens",id:"authentication-with-session-tokens",children:[]},{value:"Authentication with JSON Web Tokens",id:"authentication-with-json-web-tokens",children:[]}]},{value:"Using CSRF Tokens",id:"using-csrf-tokens",children:[{value:"Regular Web Applications",id:"regular-web-applications",children:[]},{value:"SPA + API",id:"spa--api",children:[]},{value:"Disable the CSRF protection",id:"disable-the-csrf-protection",children:[]},{value:"Advanced",id:"advanced",children:[]}]}],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"Source: ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md"}),"OWASP")))),Object(a.b)("p",null,"There are several ways to defend yourself against a CSRF attack. The better approach is to use both the ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite")," cookie directive and a token-based technique to have an in-depth protection."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: CSRF protection only makes sense if your authentication system is based on cookies. This is why there is no example for "),"Mobile+API",Object(a.b)("em",{parentName:"p"}," applications.")),Object(a.b)("h2",{id:"samesite-cookie-attribute"},"SameSite Cookie Attribute"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite")," attribute is a new cookie directive to mitigate the risk of CSRF attacks. As of July 2019, SameSite attribute is on browsers used by 86,57% of Internet users."),Object(a.b)("h3",{id:"authentication-with-session-tokens"},"Authentication with Session Tokens"),Object(a.b)("p",null,"If you use session tokens with the ",Object(a.b)("inlineCode",{parentName:"p"},"setSessionCookie"),", you can directly define the cookie directives in the configuration."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with config/default.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "cookie": {\n        "sameSite": "lax"\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  session:\n    cookie:\n      sameSite: lax\n")),Object(a.b)("h3",{id:"authentication-with-json-web-tokens"},"Authentication with JSON Web Tokens"),Object(a.b)("p",null,"If you use JSON Web Tokens, then you have to specify the directive manually when sending the token to the browser."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"return new HttpResponseOK()\n  .setCookie('auth', token, {\n    // ...\n    sameSite: 'lax'\n  })\n")),Object(a.b)("h2",{id:"using-csrf-tokens"},"Using CSRF Tokens"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install @foal/csrf\n")),Object(a.b)("p",null,"In addition to the ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite")," directive it is strongly recommended to use a token-based mitigation technique to provide a robust defense."),Object(a.b)("p",null,"Here is the principle:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The server generates a token (stateless or stateful) and sends it to the browser (in the HTML page or in a separate cookie). An attacker performing a CSRF attack is not able to guess or read this token."),Object(a.b)("li",{parentName:"ol"},'In each subsequent POST, PUT, PATH or DELETE request, the client must include this token in a specific header, in the body of the request or in the URL parameters to prove the "origin" of the request.'),Object(a.b)("li",{parentName:"ol"},"If the CSRF token is not present or is incorrect, the server returns an error 403 - FORBIDDEN with the message ",Object(a.b)("inlineCode",{parentName:"li"},"Bad csrf token."),".")),Object(a.b)("p",null,"FoalTS token-based protection provides a hook and a function to set up the defense."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"getCsrfToken")," generates or reads the CSRF token."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@CsrfTokenRequired")," verifies the CSRF token when receiving requests and returns a 403 error if it is missing or incorrect.")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@CsrfTokenRequired")," expects the CSRF token to be include in the request in either:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the request body with the name ",Object(a.b)("inlineCode",{parentName:"li"},"_csrf"),","),Object(a.b)("li",{parentName:"ul"},"the request query with the name ",Object(a.b)("inlineCode",{parentName:"li"},"_csrf"),","),Object(a.b)("li",{parentName:"ul"},"or in one of these headers: ",Object(a.b)("inlineCode",{parentName:"li"},"CSRF-Token"),", ",Object(a.b)("inlineCode",{parentName:"li"},"XSRF-Token"),", ",Object(a.b)("inlineCode",{parentName:"li"},"X-CSRF-Token")," or ",Object(a.b)("inlineCode",{parentName:"li"},"X-XSRF-Token"),".")),Object(a.b)("h3",{id:"regular-web-applications"},"Regular Web Applications"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Regular Web Applications")," use ",Object(a.b)("em",{parentName:"p"},"Server-Side Rendering")," to generate their HTML pages. "),Object(a.b)("h4",{id:"stateful-csrf-token-session-based"},"Stateful CSRF token (Session-based)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Generate the token on login")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseOK, Post, setSessionCookie } from '@foal/core';\n\nclass AuthController {\n  // ...\n\n  @Post('/login')\n  async login() {\n    // ...\n    const session = await this.store.createAndSaveSessionFromUser(\n      user,\n      // Generate the CSRF token and keep it in the session\n      { csrfToken: true }\n    );\n\n    const response = new HttpResponseOK();\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n}\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Include the token in each rendered page.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, TokenRequired, render } from '@foal/core';\nimport { TypoORMStore } from '@foal/typeorm';\nimport { getCsrfToken } from '@foal/csrf';\n \n@TokenRequired({\n  cookie: true,\n  redirectTo: '/login',\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\nclass PageController {\n  @Get('/home')\n  async home(ctx: Context) {\n    return render(\n      './templates/home.html',\n      // Retreive the token from the session\n      // and include it in the rendered page\n      { csrfToken: await getCsrfToken(ctx.session) }\n    );\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Home.html (example with a form)")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<html>\n  <head></head>\n  <body>\n    <form action="POST">\n      <input style="display: none" name="_csrf" value="{{ csrfToken }}">\n      \x3c!--\n        OR if you use EJS:\n        <input style="display: none" name="_csrf" value="<%= csrfToken %>">\n      --\x3e\n      <input name="foobar">\n      <button type="submit">Submit</button>\n    </form>\n  </body>\n</html>\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"home.html (example with JavaScript)")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<html>\n  <head>\n    <meta name="csrf-token" content="{{ csrfToken }}">\n    \x3c!--\n      OR if you use EJS:\n      <meta name="csrf-token" content="<%= csrfToken %>">\n    --\x3e\n  </head>\n  <body>\n    ...\n    <script type="text/javascript">\n      var csrf_token = document\n        .querySelector("meta[name=\'csrf-token\']")\n        .getAttribute("content");\n      // Add the token in a header (ex: CSRF-TOKEN) when making request\n    <\/script>\n  </body>\n</html>\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Post, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\n@CsrfTokenRequired()\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),Object(a.b)("h4",{id:"stateless-csrf-token-double-submit-cookie-technique"},"Stateless CSRF token (Double Submit Cookie Technique)"),Object(a.b)("p",null,"If you want to use stateless CSRF tokens, you need to provide a base64-encoded secret in either:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"a configuration file"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  csrf:\n    secret: xxx\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"or in a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_CSRF_SECRET=xxx\n")))),Object(a.b)("p",null,"You can generate such a secret with the CLI command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Generate a token and send it in a cookie when rendering a page.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, HttpResponseOK } from '@foal/core';\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n\nclass PageController {\n  @Get('/home')\n  async home(ctx: Context) {\n    // Normally in an HTML template\n    const response = new HttpResponseOK();\n    // Include a random CSRF token in the cookie\n    setCsrfCookie(response, await getCsrfToken());\n    return response;\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"home.html (example with JavaScript)")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<html>\n  <head>\n  </head>\n  <body>\n    ...\n    <script type="text/javascript">\n      var csrf_token = // use a library to get the cookie value from document.cookie\n      // Add the token in a header (ex: CSRF-TOKEN) when making request\n    <\/script>\n  </body>\n</html>\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseCreated, Post } from '@foal/core';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@CsrfTokenRequired({ doubleSubmitCookie: true })\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),Object(a.b)("h3",{id:"spa--api"},"SPA + API"),Object(a.b)("p",null,"In ",Object(a.b)("em",{parentName:"p"},"Single-Page Application + API")," architecture, the frontend application is static and the pages are rendered in the browser."),Object(a.b)("p",null,"First set the configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.csrf.cookie.maxAge")," to a very large number (for example one year)."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with config/default.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "csrf": {\n      "cookie": {\n        "maxAge": 31536000\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  csrf:\n    cookie:\n      maxAge: 31536000 # One year\n")),Object(a.b)("h4",{id:"stateful-csrf-token-session-based-1"},"Stateful CSRF token (Session-based)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Generate the token and send it in a cookie on login.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n// ...\nclass AuthController {\n    // ...\n\n    @Post('/login')\n    async login() {\n      // ...\n      const session = await this.store.createAndSaveSessionFromUser(\n        user,\n        // Generate the CSRF token and keep it in the session\n        { csrfToken: true }\n      );\n\n      const response = new HttpResponseOK();\n      setSessionCookie(response, session.getToken());\n      // Retreive the token from the session\n      // and send it in a cookie\n      setCsrfCookie(response, await getCsrfToken(session));\n      return response;\n    }\n  }\n")),Object(a.b)("p",null,"Your frontend application then must retreive the token from the cookie named ",Object(a.b)("inlineCode",{parentName:"p"},"csrfToken")," and send it on each subsequent POST, PUT, PATCH or DELETE request (for example using the header ",Object(a.b)("inlineCode",{parentName:"p"},"CSRF-Token"),")."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseCreated, Post, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore, // Or another store: RedisStore, MongoDBStore, etc.\n})\n@CsrfTokenRequired()\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),Object(a.b)("h4",{id:"stateless-csrf-token-double-submit-cookie-technique-1"},"Stateless CSRF token (Double Submit Cookie Technique)"),Object(a.b)("p",null,"If you want to use stateless CSRF tokens, you need to provide a base64-encoded secret in either:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"a configuration file"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  csrf:\n    secret: xxx\n    cookie:\n      maxAge: 31536000 # One year\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"or in a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_CSRF_SECRET=xxx\n")))),Object(a.b)("p",null,"You can generate such a secret with the CLI command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Generate a token and send it in a cookie on login.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseOK, Post } from '@foal/core';\nimport { getCsrfToken, setCsrfCookie } from '@foal/csrf';\n\nclass AuthController {\n  @Post('/login')\n  async login() {\n    const response = new HttpResponseOK();\n    setCsrfCookie(response, await getCsrfToken());\n    return response;\n  }\n}\n")),Object(a.b)("p",null,"Your frontend application then must retreive the token from the cookie named ",Object(a.b)("inlineCode",{parentName:"p"},"csrfToken")," and send it on each subsequent POST, PUT, PATCH or DELETE request (for example using the header ",Object(a.b)("inlineCode",{parentName:"p"},"CSRF-Token"),")."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Check the CSRF token on each subsequent POST, PUT, PATCH and DELETE request.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseCreated, Post } from '@foal/core';\nimport { CsrfTokenRequired } from '@foal/csrf';\n\n@CsrfTokenRequired({ doubleSubmitCookie: true })\nclass ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),Object(a.b)("h3",{id:"disable-the-csrf-protection"},"Disable the CSRF protection"),Object(a.b)("p",null,"The CSRF hook ",Object(a.b)("inlineCode",{parentName:"p"},"@CsrfTokenRequired")," can be disabled on a specific environment using the configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.csrf.enabled"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with ",Object(a.b)("inlineCode",{parentName:"em"},"config/test.json"))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "csrf": {\n      "enabled": false\n    }\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with ",Object(a.b)("inlineCode",{parentName:"em"},"config/test.yml"))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  csrf:\n    enabled: false\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with environment variable")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_CSRF_ENABLED=false\n")),Object(a.b)("h3",{id:"advanced"},"Advanced"),Object(a.b)("p",null,"The directives of the cookie written by ",Object(a.b)("inlineCode",{parentName:"p"},"setCsrfCookie")," can be override in the configuration."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  csrf:\n    cookie:\n      name: my-custom-name\n      domain: example.com\n      path: /foo # default: /\n      sameSite: lax\n      secure: true\n      maxAge: 10000\n")))}b.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);