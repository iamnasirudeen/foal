(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{263:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},264:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},265:function(e,t,n){"use strict";var a=n(0),r=n(266);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},266:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},267:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(265),o=n(264),l=n(56),s=n.n(l),c=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,p=e.groupId,u=e.className,m=Object(i.a)(),f=m.tabGroupChoices,j=m.setTabGroupChoices,h=Object(a.useState)(l),O=h[0],g=h[1],y=a.Children.toArray(e.children);if(null!=p){var v=f[p];null!=v&&v!==O&&b.some((function(e){return e.value===v}))&&g(v)}var N=function(e){g(e),null!=p&&j(p,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},u)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},268:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(263)),o=n(267),l=n(268),s={title:"Local and Cloud Storage",sidebar_label:"Local & Cloud Storage"},c={unversionedId:"file-system/local-and-cloud-storage",id:"file-system/local-and-cloud-storage",isDocsHomePage:!1,title:"Local and Cloud Storage",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/file-system/local-and-cloud-storage.md",slug:"/file-system/local-and-cloud-storage",permalink:"/docs/file-system/local-and-cloud-storage",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/file-system/local-and-cloud-storage.md",version:"current",sidebar_label:"Local & Cloud Storage",sidebar:"someSidebar",previous:{title:"Nuxt.js",permalink:"/docs/frontend-integration/nuxt.js"},next:{title:"Upload and Download Files",permalink:"/docs/file-system/upload-and-download-files"}},d=[{value:"Configuration",id:"configuration",children:[{value:"Local storage",id:"local-storage",children:[]},{value:"AWS S3",id:"aws-s3",children:[]},{value:"DigitalOcean",id:"digitalocean",children:[]}]},{value:"Read, Write and Delete Files",id:"read-write-and-delete-files",children:[{value:"Read files",id:"read-files",children:[]},{value:"Write files",id:"write-files",children:[]},{value:"Delete files",id:"delete-files",children:[]},{value:"Create an HttpResponse",id:"create-an-httpresponse",children:[]}]},{value:"Using a Specific Storage",id:"using-a-specific-storage",children:[]},{value:"Implementing a Disk",id:"implementing-a-disk",children:[]}],b={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(i.b)("p",null,"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production."),Object(i.b)("p",null,"For example, when coding the application locally, you can use the file system of your operating system. Then, when deploying the application to staging or production, you can change the configuration to use AWS S3. Regardless of the storage chosen in the background, the code remains the same. Only the configuration changes."),Object(i.b)("p",null,"Using FoalTS' file system has many other advantages as well:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It can generate a unique random name when saving a new file (with the ability to add an extension if necessary)."),Object(i.b)("li",{parentName:"ul"},"File contents can be managed using buffers or streams."),Object(i.b)("li",{parentName:"ul"},"Stream errors are correctly handled to avoid crashing the server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Not found")," errors are unified with a single ",Object(i.b)("inlineCode",{parentName:"li"},"FileDoesNotExist")," error."),Object(i.b)("li",{parentName:"ul"},"FoalTS' file system can generate an ",Object(i.b)("inlineCode",{parentName:"li"},"HttpResponse"),"  to correctly download (large) files to the browser.")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"First install the package."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/storage\n")),Object(i.b)("p",null,"Next, you will need to provide the name of the storage to be used with the configuration key ",Object(i.b)("inlineCode",{parentName:"p"},"setings.disk.driver"),". In the case of the local filesystem, this is ",Object(i.b)("inlineCode",{parentName:"p"},"local"),". In other cases, an additional package must be installed. Then the name to be provided is the name of the package."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: local\n")),Object(i.b)("h3",{id:"local-storage"},"Local storage"),Object(i.b)("p",null,"The name of the directory where the files are located is specified with the configuration key ",Object(i.b)("inlineCode",{parentName:"p"},"settings.disk.local.directory"),"."),Object(i.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),Object(i.b)(l.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),Object(i.b)("h3",{id:"aws-s3"},"AWS S3"),Object(i.b)("p",null,"AWS storage requires the installation of an additional package."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/aws-s3\n")),Object(i.b)("p",null,"The bucket name is specified with the ",Object(i.b)("inlineCode",{parentName:"p"},"settings.disk.s3.bucket")," configuration key."),Object(i.b)("p",null,"AWS credentials are specified with the configuration keys ",Object(i.b)("inlineCode",{parentName:"p"},"settings.aws.accessKeyId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"settings.aws.secretAccessKey"),"  or using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html"}),"AWS traditional techniques"),"."),Object(i.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  aws:\n    accessKeyId: xxx\n    secretAccessKey: yyy\n  disk:\n    driver: '@foal/aws-s3'\n    s3:\n      bucket: 'uploaded'\n"))),Object(i.b)(l.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "aws": {\n      "accessKeyId": "xxx",\n      "secretAccessKey": "yyy"\n    },\n    "disk": {\n      "driver": "@foal/aws-s3",\n      "s3": {\n        "bucket": "uploaded"\n      }\n    }\n  }\n}\n'))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    aws: {\n      accessKeyId: "xxx",\n      secretAccessKey: "yyy"\n    },\n    disk: {\n      driver: "@foal/aws-s3",\n      s3: {\n        bucket: "uploaded"\n      }\n    }\n  }\n}\n')))),Object(i.b)("h3",{id:"digitalocean"},"DigitalOcean"),Object(i.b)("p",null,"DigitalOcean Spaces are compatible with AWS S3 API, so you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"@foal/aws-s3")," package to connect to this storage."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/aws-s3\n")),Object(i.b)("p",null,"The only difference is the configuration key ",Object(i.b)("inlineCode",{parentName:"p"},"settings.aws.endpoint"),", which is mandatory and requires the value ",Object(i.b)("inlineCode",{parentName:"p"},"${REGION}.digitaloceanspaces.com"),"."),Object(i.b)("h2",{id:"read-write-and-delete-files"},"Read, Write and Delete Files"),Object(i.b)("p",null,"FoalTS file system is accessible via the ",Object(i.b)("inlineCode",{parentName:"p"},"Disk")," service. It contains all the methods for reading, writing and deleting files."),Object(i.b)("h3",{id:"read-files"},"Read files"),Object(i.b)("p",null,"Files can be read using the asynchronous ",Object(i.b)("inlineCode",{parentName:"p"},"read")," method. It returns the size of the file as well as its contents in the form of a buffer or a readable stream. If the file does not exist, a ",Object(i.b)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error is rejected."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async readFile() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'buffer');\n\n    // ...\n  }\n\n  async readFile2() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'stream');\n\n    // ...\n  }\n\n} \n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To check whether an error is an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"FileDoesNotExist"),", you can call the ",Object(i.b)("inlineCode",{parentName:"p"},"isFileDoesNotExist")," function. Using ",Object(i.b)("inlineCode",{parentName:"p"},"error instanceof FileDoesNotExist")," may not work if you have multiple nested packages because of the way ",Object(i.b)("em",{parentName:"p"},"npm")," handles its dependencies.")),Object(i.b)("p",null,"--"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you only need to read the file size and not its content, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"readSize")," method."),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const size = await this.disk.readSize('avatars/xxx.jpg');\n"))),Object(i.b)("h3",{id:"write-files"},"Write files"),Object(i.b)("p",null,"Files can be saved using the asynchronous ",Object(i.b)("inlineCode",{parentName:"p"},"write")," method. This method accepts a buffer or a readable stream. If no name is provided, it is automatically generated and used to save the file in the given directory. In this case, a file extension can also be provided to the method."),Object(i.b)("p",null,"Once the file is successfully written, its path is returned so that it can be retrieved later."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Readable } from 'stream';\n\nimport { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async createFile(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content);\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY='\n\n    // ...\n  }\n\n  async createFile2(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      extension: 'jpg'\n    });\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY=.jpg'\n\n    // ...\n  }\n\n  async createFile3(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      name: 'profile.jpg'\n    });\n    // path === 'avatars/profile.jpg'\n\n    // ...\n  }\n\n} \n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Backslashes ",Object(i.b)("inlineCode",{parentName:"p"},"\\")," and slashes ",Object(i.b)("inlineCode",{parentName:"p"},"/")," at the end of the directory name are not supported. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"avatars/img_60")," is valid but ",Object(i.b)("inlineCode",{parentName:"p"},"avatars\\img_60")," and ",Object(i.b)("inlineCode",{parentName:"p"},"avatars/img_60/")," both invalid.")),Object(i.b)("h3",{id:"delete-files"},"Delete files"),Object(i.b)("p",null,"Files can be deleted using the asynchronous ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," method. Depending on the file storage, the method may or may not reject a ",Object(i.b)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error if the file is not found."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async deleteFile(content: Buffer|Readable) {\n    await this.disk.delete('avatars/profile.jpg');\n\n    // ...\n  }\n\n} \n")),Object(i.b)("h3",{id:"create-an-httpresponse"},"Create an HttpResponse"),Object(i.b)("p",null,"The service also provides a special method ",Object(i.b)("inlineCode",{parentName:"p"},"createHttpResponse")," for creating an ",Object(i.b)("inlineCode",{parentName:"p"},"HttpResponse"),". The returned object is optimized for downloading a (large) file in streaming."),Object(i.b)("p",null,"The documentation can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/file-system/upload-and-download-files#file-downloads"}),"here"),"."),Object(i.b)("h2",{id:"using-a-specific-storage"},"Using a Specific Storage"),Object(i.b)("p",null,"In rare cases, you may wish to access multiple storages in your application. Each of them has its own ",Object(i.b)("em",{parentName:"p"},"disk")," that you can inject and use in your controllers and services."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get } from '@foal/core';\nimport { LocalDisk } from '@foal/storage';\nimport { S3Disk } from '@foal/aws-s3';\n\nclass ApiController {\n\n  @dependency\n  local: LocalDisk;\n\n  @dependency\n  s3: S3Disk;\n\n  // ...\n\n}\n")),Object(i.b)("h2",{id:"implementing-a-disk"},"Implementing a Disk"),Object(i.b)("p",null,"If FoalTS does not support your favorite Cloud provider, you can also implement your own ",Object(i.b)("em",{parentName:"p"},"disk")," by extending the ",Object(i.b)("inlineCode",{parentName:"p"},"Disk")," class. "),Object(i.b)("p",null,"If you want to use it through the ",Object(i.b)("inlineCode",{parentName:"p"},"Disk")," service, you need to specify its path in the configuration (or to publish it as an npm package and specify the package name). The name of the exported class should be ",Object(i.b)("inlineCode",{parentName:"p"},"ConcreteDisk"),"."),Object(i.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: './app/services/my-disk.service'\n"))),Object(i.b)(l.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "./app/services/my-disk.service",\n    }\n  }\n}\n'))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    disk: {\n      driver: "./app/services/my-disk.service",\n    }\n  }\n}\n')))))}p.isMDXComponent=!0}}]);