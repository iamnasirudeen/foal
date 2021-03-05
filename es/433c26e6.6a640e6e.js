(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),i=(n(0),n(263)),r={title:"Configuration"},c={unversionedId:"deployment-and-environments/configuration",id:"version-1.x/deployment-and-environments/configuration",isDocsHomePage:!1,title:"Configuration",description:"In FoalTS, configuration refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port.",source:"@site/versioned_docs/version-1.x/deployment-and-environments/configuration.md",slug:"/deployment-and-environments/configuration",permalink:"/es/docs/1.x/deployment-and-environments/configuration",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/deployment-and-environments/configuration.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Limit Repeated Requests",permalink:"/es/docs/1.x/cookbook/limit-repeated-requests"},next:{title:"Ship to Production",permalink:"/es/docs/1.x/deployment-and-environments/ship-to-production"}},l=[{value:"Architecture of a Configuration File",id:"architecture-of-a-configuration-file",children:[]},{value:"Accessing Configuration Values",id:"accessing-configuration-values",children:[{value:"The <code>Config.get2</code> method",id:"the-configget2-method",children:[]},{value:"The <code>Config.getOrThrow</code> method",id:"the-configgetorthrow-method",children:[]},{value:"The deprecated <code>Config.get</code> method",id:"the-deprecated-configget-method",children:[]}]},{value:"Configuration &amp; FoalTS Components",id:"configuration--foalts-components",children:[]},{value:"Precedence of the Configuration",id:"precedence-of-the-configuration",children:[]},{value:"Database Configuration (TypeORM)",id:"database-configuration-typeorm",children:[]},{value:"Advanced",id:"advanced",children:[{value:"Using <code>Config</code> as a Service",id:"using-config-as-a-service",children:[]}]}],b={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In FoalTS, ",Object(i.b)("em",{parentName:"p"},"configuration")," refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port."),Object(i.b)("p",null,"The framework encourages a ",Object(i.b)("strong",{parentName:"p"},"strict separation between configuration and code")," and allows you to define your configuration in environment variables, in an ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file or in files in the ",Object(i.b)("inlineCode",{parentName:"p"},"config/")," directory. You can choose one of these techniques or use them all simultaneously."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Config directory structure")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"|- config/\n| |- e2e.json\n| |- default.json\n| |- development.json\n| |- production.json\n| |- ...\n| '- test.json\n|- src/\n'- .env\n")),Object(i.b)("h2",{id:"architecture-of-a-configuration-file"},"Architecture of a Configuration File"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example of ",Object(i.b)("inlineCode",{parentName:"em"},".env")," file")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"DATABASE_USERNAME=postgres\nDATABASE_PASSWORD=password\nSETTINGS_CSRF_SECRET=YKvV281Z8nbkPowDLkMTTIrg\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example of a file in the ",Object(i.b)("inlineCode",{parentName:"em"},"config/")," directory")),Object(i.b)("p",null,"Both formats, JSON and YAML, are supported. Choose the one that suits you the best."),Object(i.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="JSON" %}'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "port": 3001,\n  "settings": {\n    "csrf": false,\n    "debug": false,\n    "loggerFormat": "tiny",\n    "staticPath": "public/",\n    "session": {\n      "cookie": {\n        "path": "/"\n      },\n      "secret": "my-secret"\n    }\n  },\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n')),Object(i.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="YAML" %}'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"port: 3001\n\nsettings:\n  csrf: false\n  debug: false\n  loggerFormat: tiny\n  staticPath: public/\n  session:\n    cookie:\n      path: /\n    secret: my-secret\n\ndatabase:\n  database: './db.sqlite3'\n")),Object(i.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"YAML support")),Object(i.b)("p",{parentName:"blockquote"},"The use of YAML for configuration requires the installation of the package ",Object(i.b)("inlineCode",{parentName:"p"},"yamljs"),"."),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install yamljs\n")),Object(i.b)("p",{parentName:"blockquote"},"When creating a new project, you can also add the flag ",Object(i.b)("inlineCode",{parentName:"p"},"--yaml")," to have all the configuration directly generated in YAML."),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"foal createapp my-app --yaml\n")),Object(i.b)("p",{parentName:"blockquote"},"The extension of the YAML files must be ",Object(i.b)("inlineCode",{parentName:"p"},".yml"),".")),Object(i.b)("h2",{id:"accessing-configuration-values"},"Accessing Configuration Values"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Config")," class provides two static methods for accessing configuration values: ",Object(i.b)("inlineCode",{parentName:"p"},"get2")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getOrThrow"),". Use of ",Object(i.b)("inlineCode",{parentName:"p"},"Config.get")," is also possible, but is deprecated."),Object(i.b)("h3",{id:"the-configget2-method"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"Config.get2")," method"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Available since v1.7")),Object(i.b)("p",null,"This function takes the configuration key as parameter."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Config } from '@foal/core';\n\nconst secret = Config.get2('settings.jwt.secretOrPublicKey');\n")),Object(i.b)("p",null,"In this example, FoalTS will try to retrieve the configuration value via:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the environment variable ",Object(i.b)("inlineCode",{parentName:"li"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY"),","),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("inlineCode",{parentName:"li"},".env")," file with the variable ",Object(i.b)("inlineCode",{parentName:"li"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY"),","),Object(i.b)("li",{parentName:"ul"},"the JSON file ",Object(i.b)("inlineCode",{parentName:"li"},"config/development.json")," with the path ",Object(i.b)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),","),Object(i.b)("li",{parentName:"ul"},"the YAML file ",Object(i.b)("inlineCode",{parentName:"li"},"config/development.yml")," with the path ",Object(i.b)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),","),Object(i.b)("li",{parentName:"ul"},"the JSON file ",Object(i.b)("inlineCode",{parentName:"li"},"config/default.json")," with the path ",Object(i.b)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),","),Object(i.b)("li",{parentName:"ul"},"or the YAML file ",Object(i.b)("inlineCode",{parentName:"li"},"config/default.yml")," with the path ",Object(i.b)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),".")),Object(i.b)("p",null,"If no value is found, the method returns ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set, Foal will look at ",Object(i.b)("inlineCode",{parentName:"p"},"${NODE_ENV}.json")," (resp. ",Object(i.b)("inlineCode",{parentName:"p"},"${NODE_ENV}.yml"),") instead of ",Object(i.b)("inlineCode",{parentName:"p"},"development.json")," (resp. ",Object(i.b)("inlineCode",{parentName:"p"},"development.yml"),")."),Object(i.b)("h4",{id:"specifying-a-type"},"Specifying a type"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Config } from '@foal/core';\n\nconst foobar = Config.get2('settings.foobar', 'boolean|string');\n// foobar is of type boolean|string|undefined\n")),Object(i.b)("p",null,"The method also accepts a second optional parameter to define the type of the returned value. When it is set, Foal checks that the configuration value has the correct type and if it does not, it throws a ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigTypeError"),". In case the value is provided via an environment variable or the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file, the method will try to convert it to the desired type (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'"true"')," becomes ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"). If it does not succeed, a ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigTypeError")," is also thrown."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Allowed types"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean","|","string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number","|","string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")))),Object(i.b)("h4",{id:"specifying-a-default-value"},"Specifying a default value"),Object(i.b)("p",null,"The third optional parameter of the method allows you to define a default value if none is found in the configuration."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const foobar = Config.get2('settings.foobar', 'boolean', false);\n// foobar is of type boolean\n")),Object(i.b)("h3",{id:"the-configgetorthrow-method"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"Config.getOrThrow")," method"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Available since v1.7")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const foobar = Config.getOrThrow('settings.foobar', 'boolean');\n// foobar is of type boolean\n")),Object(i.b)("p",null,"This method has the same behavior as ",Object(i.b)("inlineCode",{parentName:"p"},"Config.get2")," except that it does not accept a default value. If no value is found in the configuration files or in an environment variable, the method will throw a ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigNotFoundError"),"."),Object(i.b)("h3",{id:"the-deprecated-configget-method"},"The deprecated ",Object(i.b)("inlineCode",{parentName:"h3"},"Config.get")," method"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Deprecated since v1.7")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Config } from '@foal/core';\n\nconst debug = Config.get('settings.debug');\n")),Object(i.b)("h4",{id:"type-coercion-and-type-variable"},"Type coercion and type variable"),Object(i.b)("p",null,"You can force the TypeScript type returned by the variable this way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const debug = Config.get<boolean>('settings.debug');\n")),Object(i.b)("p",null,"But this is considered unsafe because the method does not check whether the returned value is of the desired type."),Object(i.b)("p",null,"The method always attempts to convert values to a boolean or a number, regardless of the TypeScript type provided.. The value ",Object(i.b)("inlineCode",{parentName:"p"},'"36"')," will always be returned as ",Object(i.b)("inlineCode",{parentName:"p"},"36"),"."),Object(i.b)("h4",{id:"specifying-a-default-value-1"},"Specifying a default value"),Object(i.b)("p",null,"A default variable can be provided as second argument of the method."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const debug = Config.get('settings.debug', false);\n")),Object(i.b)("h2",{id:"configuration--foalts-components"},"Configuration & FoalTS Components"),Object(i.b)("p",null,"As mentioned before, FoalTS encourages a strict separation between configuration and code. This is why most FoalTS components (services, controller, hooks) retreive their configuration directly from the config files or environment variables. They use the namespace ",Object(i.b)("inlineCode",{parentName:"p"},"settings")," for this purpose."),Object(i.b)("p",null,"For example, FoalTS uses the configuration key ",Object(i.b)("inlineCode",{parentName:"p"},"settings.debug")," to determine if error tracebacks should be returned in the ",Object(i.b)("em",{parentName:"p"},"INTERNAL SERVER ERROR")," responses."),Object(i.b)("p",null,"You should not create new configuration keys in the ",Object(i.b)("inlineCode",{parentName:"p"},"settings")," namespace as this may conflict with future versions of the framework."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"default.yml (default)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"port: 3001\n\nsettings:\n  // You should not define your own configuration keys in this section.\n  // Use only those specified in the documentation.\n  debug: true\n\n// Custom configuration\nmy_custom_config:\n  config1: 'foobar'\n\n// Custom configuration\nmy_custom_config2:\n  age: 32\n\n")),Object(i.b)("h2",{id:"precedence-of-the-configuration"},"Precedence of the Configuration"),Object(i.b)("p",null,"Configuration specified in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file overrides the one defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"config/")," directory files. And configuration specified in environment variables overrides the one defined in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Use case")),Object(i.b)("p",{parentName:"blockquote"},"PaaS providers often require that web applications be served on a specific port (",Object(i.b)("inlineCode",{parentName:"p"},"8080"),", ",Object(i.b)("inlineCode",{parentName:"p"},"80"),", etc.) that may be different from the one you use locally. Usually, the value of this port is specified in an environment variable named ",Object(i.b)("inlineCode",{parentName:"p"},"PORT"),". With FoalTS configuration system, the port is automatically replaced when your project is deployed and the application works as expected.")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"config/")," directory files also have a precedence system inside the directory. If your node environment is ",Object(i.b)("inlineCode",{parentName:"p"},"production")," (defined with the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"NODE_ENV"),"), then the ",Object(i.b)("inlineCode",{parentName:"p"},"production.json")," file (if it exists) overrides the file ",Object(i.b)("inlineCode",{parentName:"p"},"default.json"),"."),Object(i.b)("h2",{id:"database-configuration-typeorm"},"Database Configuration (TypeORM)"),Object(i.b)("p",null,"TypeORM uses a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://typeorm.io/#/using-ormconfig"}),"different system")," for its configuration based on the file ",Object(i.b)("inlineCode",{parentName:"p"},"ormconfig.js")," located at the root of the project directory."),Object(i.b)("p",null,"You can however customize the ",Object(i.b)("inlineCode",{parentName:"p"},"ormconfig.js")," file to make it work with FoalTS configuration system."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ormconfig.js (example)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'sqlite',\n  database: Config.get('database.database'),\n  dropSchema: Config.get('database.dropSchema', false),\n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n  synchronize: Config.get('database.synchronize', false)\n}\n\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"default.yml (example)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"port: 3001\n\nsettings:\n  ...\n\ndatabase:\n  database: './db.sqlite3'\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"test.yml (example)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"database:\n  database: './test_db.sqlite3'\n  dropSchema: true\n  synchronize: true\n")),Object(i.b)("h2",{id:"advanced"},"Advanced"),Object(i.b)("h3",{id:"using-config-as-a-service"},"Using ",Object(i.b)("inlineCode",{parentName:"h3"},"Config")," as a Service"),Object(i.b)("p",null,"In order to mock the configuration during the tests, you can also use ",Object(i.b)("inlineCode",{parentName:"p"},"Config")," as a service. This is particularly useful for testing reusable components (hook, service) whose behavior varies according to the configuration."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"app.controller.ts (example)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-TypeScript"}),"import { Config, dependency, Get } from '@foal/core';\n\nexport class AppController {\n  @dependency\n  config: Config;\n\n  @Get('/')\n  get() {\n    const debug = this.config.get<boolean>('debug');\n    // Do something.\n  }\n\n}\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"app.controller.spec.ts (example)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createController, ConfigMock } from '@foal/core';\n\nimport { AppController } from './app.controller';\n\ndescribe('AppController', () => {\n\n  let config: ConfigMock;\n  let controller: AppController;\n\n  before(() => {\n    config = new ConfigMock();\n    controller = createController(AppController, { config });\n  });\n\n  beforeEach(() => config.reset());\n\n  it('should do something (debug=true).', () => {\n    config.set(debug, true);\n    // ...\n  })\n\n  it('should do another something (debug=false).', () => {\n    config.set(debug, false);\n    // ...\n  })\n\n})\n")))}s.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);