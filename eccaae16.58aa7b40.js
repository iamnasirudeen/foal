(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{252:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(263)),i=a(267),o=a(268),c={title:"Upload and Download Files",sidebar_label:"Upload & Download Files"},b={unversionedId:"file-system/upload-and-download-files",id:"file-system/upload-and-download-files",isDocsHomePage:!1,title:"Upload and Download Files",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/file-system/upload-and-download-files.md",slug:"/file-system/upload-and-download-files",permalink:"/docs/file-system/upload-and-download-files",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/file-system/upload-and-download-files.md",version:"current",sidebar_label:"Upload & Download Files",sidebar:"someSidebar",previous:{title:"Local and Cloud Storage",permalink:"/docs/file-system/local-and-cloud-storage"},next:{title:"Build and Start the App",permalink:"/docs/development-environment/build-and-start-the-app"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"File Uploads",id:"file-uploads",children:[{value:"Using Buffers",id:"using-buffers",children:[]},{value:"Using Local or Cloud Storage (streaming)",id:"using-local-or-cloud-storage-streaming",children:[]},{value:"Accessing File Metadata",id:"accessing-file-metadata",children:[]},{value:"Adding Fields",id:"adding-fields",children:[]},{value:"Specifying File Limits",id:"specifying-file-limits",children:[]}]},{value:"File Downloads",id:"file-downloads",children:[]},{value:"Usage with a Database",id:"usage-with-a-database",children:[]},{value:"Static Files",id:"static-files",children:[{value:"Static directory",id:"static-directory",children:[]},{value:"Virtual prefix path",id:"virtual-prefix-path",children:[]}]}],d={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(l.b)("p",null,"Files can be uploaded and downloaded using ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/file-system/local-and-cloud-storage"}),"FoalTS file system"),". It allows you to use different types of file storage such as the local file system or cloud storage."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"First install the package."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @foal/storage\n")),Object(l.b)("p",null,"Then specify in your configuration the file storage to be used and its settings. In this example, we will use the local file system with the ",Object(l.b)("inlineCode",{parentName:"p"},"uploaded")," directory (you must create it at the root of your project)."),Object(l.b)(i.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),Object(l.b)(o.a,{value:"json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),Object(l.b)(o.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),Object(l.b)("h2",{id:"file-uploads"},"File Uploads"),Object(l.b)("p",null,"Files can be uploaded using ",Object(l.b)("inlineCode",{parentName:"p"},"multipart/form-data")," requests. The ",Object(l.b)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook parses the request body, validates the submitted fields and files and save them in streaming to your local or Cloud storage. It also provides the ability to create file buffers if you wish."),Object(l.b)("h3",{id:"using-buffers"},"Using Buffers"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n      images: { required: false, multiple: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { buffer } = ctx.request.body.files.profile;\n    const files = ctx.request.body.files.images;\n    for (const file of files) {\n      // Do something with file.buffer\n    }\n  }\n\n}\n")),Object(l.b)("p",null,"The names of the file fields must be provided in the ",Object(l.b)("inlineCode",{parentName:"p"},"files")," parameter of the hook. Uploaded files which are not listed here are simply ignored."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"required")," parameter tells the hook if it should return a ",Object(l.b)("inlineCode",{parentName:"p"},"400 - BAD REQUEST")," error if no file has been uploaded for the given field. In this case, the controller method is not executed."),Object(l.b)("p",null,"When the upload is successful, the request body object is set with the buffer files."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value of ",Object(l.b)("inlineCode",{parentName:"th"},"multiple")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Files uploaded"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value in the request object"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")," (default)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"null"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"At least one"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A buffer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An empty array")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"At least one"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of buffers")))),Object(l.b)("h3",{id:"using-local-or-cloud-storage-streaming"},"Using Local or Cloud Storage (streaming)"),Object(l.b)("p",null,"Instead of using buffers, you can also choose to save directly the file to your local or Cloud storage. To do this, you need to add the name of the target directory in your hook options. The value returned in the ",Object(l.b)("inlineCode",{parentName:"p"},"ctx")," is an object containing the relative path of the file."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"With the previous configuration, this path is relative to the ",Object(l.b)("inlineCode",{parentName:"p"},"uploaded")," directory. Note that must create the ",Object(l.b)("inlineCode",{parentName:"p"},"uploaded/images")," and ",Object(l.b)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," directories before you can upload a file.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n  }\n\n}\n")),Object(l.b)("h3",{id:"accessing-file-metadata"},"Accessing File Metadata"),Object(l.b)("p",null,"When uploading files, the browser sends additional metadata. This can be accessed in the controller method."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const file = ctx.request.body.files.profile;\n// file.mimeType, ...\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"encoding")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Encoding type of the file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"filename")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string\\|undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the file on the user's computer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"mimeType")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mime type of the file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"path")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path where the file has been saved. If the ",Object(l.b)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"buffer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Buffer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Buffer containing the entire file. If the ",Object(l.b)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))),Object(l.b)("h3",{id:"adding-fields"},"Adding Fields"),Object(l.b)("p",null,"Multipart requests can also contain non-binary fields such as a string. These fields are validated and parsed by the hook."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    fields: {\n      description: { type: 'string' }\n    },\n    files: {\n      profile: { required: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    const { description } = ctx.request.body.fields;\n  }\n\n}\n")),Object(l.b)("h3",{id:"specifying-file-limits"},"Specifying File Limits"),Object(l.b)("p",null,"Optional settings can be provided in the configuration to limit the size or number of files uploaded."),Object(l.b)(i.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  multipartRequests:\n    fileSizeLimit: 1024\n    fileNumberLimit: 4\n"))),Object(l.b)(o.a,{value:"json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "multipartRequests": {\n      "fileSizeLimit": 1024,\n      "fileNumberLimit": 4,\n    }\n  }\n}\n'))),Object(l.b)(o.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  settings: {\n    multipartRequests: {\n      fileSizeLimit: 1024,\n      fileNumberLimit: 4,\n    }\n  }\n}\n")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fileSizeLimit"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum file size (in bytes).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fileNumberLimit"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of files (useful for ",Object(l.b)("inlineCode",{parentName:"td"},"multiple")," file fields).")))),Object(l.b)("h2",{id:"file-downloads"},"File Downloads"),Object(l.b)("p",null,"Files can be downloaded using the method ",Object(l.b)("inlineCode",{parentName:"p"},"createHttpResponse")," of the ",Object(l.b)("inlineCode",{parentName:"p"},"Disk")," service. The returned object is optimized for downloading a (large) file in streaming."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass ApiController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg');\n  }\n\n  @Get('/download2')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg', {\n      forceDownload: true,\n      filename: 'avatar.jpg'\n    });\n  }\n\n}\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"forceDownload"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"It indicates whether the response should include the ",Object(l.b)("inlineCode",{parentName:"td"},"Content-Disposition: attachment")," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"filename"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the path (",Object(l.b)("inlineCode",{parentName:"td"},"foo.jpg")," in the example).")))),Object(l.b)("h2",{id:"usage-with-a-database"},"Usage with a Database"),Object(l.b)("p",null,"This example shows how to attach a profile picture to a user and how to retrieve and update it."),Object(l.b)("p",null,"Create a new directory ",Object(l.b)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," at the root of your project."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"user.entity.ts")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  BaseEntity, Column, Entity, PrimaryGeneratedColumn\n} from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  profile: string;\n\n}\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"app.controller.ts")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, dependency, Get, HttpResponseNotFound, HttpResponseRedirect, HttpResponseOK, Post, render } from '@foal/core';\nimport { Disk, ValidateMultipartFormDataBody } from '@foal/storage';\n\nimport { User } from './entities';\n\n// @JWTRequired OR @UseSessions\n// OR a custom hook that sets Context.user.\nexport class AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  async uploadProfilePicture(ctx: Context<User>) {\n    const user = ctx.user;\n    if (user.profile) {\n      await this.disk.delete(user.profile);\n    }\n\n    user.profile = ctx.request.body.files.profile.path;\n    await user.save();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Get('/profile')\n  async downloadProfilePicture(ctx: Context<User>) {\n    const { profile } = ctx.user;\n\n    if (!profile) {\n      return new HttpResponseNotFound();\n    }\n\n    return this.disk.createHttpResponse(profile);\n  }\n\n  @Get('/')\n  index() {\n    return render('./templates/index.html');\n  }\n\n}\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"templates/index.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n<body>\n  <img src="/profile">\n  <form action="/profile" method="post" enctype="multipart/form-data">\n      <input type="file" name="profile">\n      <input type="submit" value="Upload image" name="submit">\n  </form>\n</body>\n</html>\n')),Object(l.b)("h2",{id:"static-files"},"Static Files"),Object(l.b)("p",null,"Static files, such as HTML, CSS, images, and JavaScript, are served by default from the ",Object(l.b)("inlineCode",{parentName:"p"},"public")," directory."),Object(l.b)("h3",{id:"static-directory"},"Static directory"),Object(l.b)("p",null,"If necessary, this directory can be modified using the configuration key ",Object(l.b)("inlineCode",{parentName:"p"},"settings.staticPath"),"."),Object(l.b)(i.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  staticPath: assets\n"))),Object(l.b)(o.a,{value:"json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "staticPath": "assets"\n  }\n}\n'))),Object(l.b)(o.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    staticPath: "assets"\n  }\n}\n')))),Object(l.b)("h3",{id:"virtual-prefix-path"},"Virtual prefix path"),Object(l.b)("p",null,"In case you need to add a virtual prefix path to your static files, you can do so with the ",Object(l.b)("inlineCode",{parentName:"p"},"staticPathPrefix")," configuration key."),Object(l.b)(i.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  staticPathPrefix: /static\n"))),Object(l.b)(o.a,{value:"json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "staticPathPrefix": "/static"\n  }\n}\n'))),Object(l.b)(o.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    staticPathPrefix: "/static"\n  }\n}\n')))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Example"),"\n| Static file | URL path with no prefix | URL path with the prefix ",Object(l.b)("inlineCode",{parentName:"p"},"/static "),"|\n| --- | --- | --- |\n| index.html | ",Object(l.b)("inlineCode",{parentName:"p"},"/")," and ",Object(l.b)("inlineCode",{parentName:"p"},"/index.html")," | ",Object(l.b)("inlineCode",{parentName:"p"},"/static")," and ",Object(l.b)("inlineCode",{parentName:"p"},"/static/index.html")," |\n| styles.css | ",Object(l.b)("inlineCode",{parentName:"p"},"/styles.css")," | ",Object(l.b)("inlineCode",{parentName:"p"},"/static/styles.css")," |\n| app.js | ",Object(l.b)("inlineCode",{parentName:"p"},"/app.js")," | ",Object(l.b)("inlineCode",{parentName:"p"},"/static/app.js")," |"))}p.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||l;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},264:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},265:function(e,t,a){"use strict";var n=a(0),r=a(266);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},266:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},267:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(265),i=a(264),o=a(56),c=a.n(o),b=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(l.a)(),f=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(n.useState)(o),g=O[0],h=O[1],y=n.Children.toArray(e.children);if(null!=p){var N=f[p];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&h(N)}var v=function(e){h(e),null!=p&&j(p,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},268:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);