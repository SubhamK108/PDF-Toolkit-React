(this["webpackJsonppdf-toolkit"]=this["webpackJsonppdf-toolkit"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),c=n(16),r=n.n(c),i=n(8),a=n(3),l=(n(23),n(24),n(25),n(0)),d=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"PDF Encryptor"})})})},j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"PDF Toolkit"})}),Object(l.jsx)("div",{className:"tools",children:Object(l.jsx)("h1",{children:"Available Tools"})}),Object(l.jsxs)("div",{className:"tools-section",children:[Object(l.jsx)(i.b,{to:"/pdfmerger",children:Object(l.jsx)("button",{className:"button",children:"Merger"})}),Object(l.jsx)(i.b,{to:"/pdfencryptor",children:Object(l.jsx)("button",{className:"button",children:"Encryptor"})}),Object(l.jsx)(i.b,{to:"/pdfpagedeleter",children:Object(l.jsx)("button",{className:"button",children:"Page Deleter"})}),Object(l.jsx)(i.b,{to:"imagetopdf",children:Object(l.jsx)("button",{className:"button",children:"Image to PDF"})})]})]})},u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"Image To PDF"})})})},f=n(2),b=n(18),p=function(e){return Object(l.jsx)("div",{style:{marginBottom:35},children:(e.FileArray||[]).map((function(t){return Object(l.jsxs)("div",{className:"file-display",children:[Object(l.jsx)("p",{children:t.Data.name}),Object(l.jsx)("span",{onClick:function(n){return e.RemoveFile(t)},className:"icon solid fas fa-times-circle",title:"Remove File",style:{paddingLeft:20,cursor:"pointer"}}),e.FileArray.indexOf(t)>0?Object(l.jsx)("span",{onClick:function(n){return e.MoveFileUp(t)},className:"icon solid fas fa-arrow-circle-up",title:"Move File Up",style:{paddingLeft:10,cursor:"pointer"}}):"",e.FileArray.indexOf(t)<e.FileArray.length-1?Object(l.jsx)("span",{onClick:function(n){return e.MoveFileDown(t)},className:"icon solid fas fa-arrow-circle-down",title:"Move File Down",style:{paddingLeft:10,cursor:"pointer"}}):""]},t.Id)}))})},h=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{style:{fontSize:21},className:"sub-tools",children:e.UploadMessage}),Object(l.jsx)("div",{style:{marginTop:60},className:"loader",children:"Loading..."})]})},O=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{style:{fontSize:21},className:"sub-tools",children:e.UploadMessage}),Object(l.jsx)("h2",{style:{fontSize:21},className:"sub-tools",children:e.ErrorMessage})]})},g=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"sub-tools",children:Object(l.jsx)("h2",{style:{fontSize:21},children:e.SubmitMessage})}),Object(l.jsx)("div",{style:{marginTop:50},className:"loader",children:"Loading..."})]})},m=function(e){return Object(l.jsx)("div",{className:"sub-tools",children:Object(l.jsxs)("button",{onClick:function(t){return e.Submit()},className:"button-secondary",children:[Object(l.jsx)("i",{style:{background:"inherit"},className:"icon solid fas fa-check-circle"})," \xa0Submit"]})})},x=function(){var e={Pdfs:[],IsUploadInitiated:!1,IsUploadCompleted:!1,IsSubmitCompleted:!1,UploadMessage:"",ErrorMessage:"",SubmitMessage:"",Error:!1},t=20,n=20971520,s="application/pdf",c=Object(o.useState)(e),r=Object(b.a)(c,2),i=r[0],a=r[1],d=function(){a(e)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"sub-header",children:Object(l.jsx)("h1",{children:"PDF Merger"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{style:{fontSize:21},className:"sub-tools",children:"Upload your PDF files."}),Object(l.jsx)("h4",{className:"sub-tools",children:"Limit - 20 Files / 20 MB Each"})]}),Object(l.jsxs)("div",{className:"dropzone",children:[Object(l.jsx)("input",{onChange:function(e){return function(e){if(d(),a((function(e){return Object(f.a)(Object(f.a)({},e),{},{IsUploadInitiated:!0,UploadMessage:"Uploading your files... \u23f3"})})),e.length>t)a((function(e){return Object(f.a)(Object(f.a)({},e),{},{UploadMessage:"Upload failed! \u274c",ErrorMessage:"Max ".concat(t," PDF files allowed!"),Error:!0})}));else if(1!==e.length)if(0!==e.length){for(var o=function(t){if(e[t].size>n)return a((function(e){return Object(f.a)(Object(f.a)({},e),{},{UploadMessage:"Upload failed! \u274c",ErrorMessage:"Max 20 MB size allowed for each file!",Error:!0})})),{v:void 0};if(e[t].type!==s)return a((function(e){return Object(f.a)(Object(f.a)({},e),{},{UploadMessage:"Upload failed! \u274c",ErrorMessage:"You can only upload PDF files!",Error:!0})})),{v:void 0};var o={Id:Math.random()+Math.random(),Data:e[t]};a((function(e){return Object(f.a)(Object(f.a)({},e),{},{Pdfs:e.Pdfs.concat(o)})}))},c=0;c<e.length;c++){var r=o(c);if("object"===typeof r)return r.v}a((function(t){return Object(f.a)(Object(f.a)({},t),{},{UploadMessage:"".concat(e.length," PDF files uploaded. \u2705"),IsUploadCompleted:!0})}))}else d();else a((function(e){return Object(f.a)(Object(f.a)({},e),{},{UploadMessage:"",ErrorMessage:"Just 1 PDF file uploaded which is not enough! You have to upload at least 2 files. \ud83d\ude15",Error:!0})}))}(e.target.files)},type:"file",multiple:!0,accept:"application/pdf",title:""}),"Drag And Drop Files Or Click To Upload."]}),i.IsUploadInitiated?i.IsUploadCompleted||i.Error?Object(l.jsx)(O,{UploadMessage:i.UploadMessage,ErrorMessage:i.ErrorMessage}):Object(l.jsx)(h,{UploadMessage:i.UploadMessage}):"",i.IsUploadCompleted&&!i.Error?Object(l.jsx)(p,{FileArray:i.Pdfs,RemoveFile:function(e){var t=i.Pdfs.filter((function(t){return t.Id!==e.Id}));a((function(e){return Object(f.a)(Object(f.a)({},e),{},{Pdfs:t})})),i.Pdfs.length-1===1?a((function(e){return Object(f.a)(Object(f.a)({},e),{},{UploadMessage:"",ErrorMessage:"Not enough PDF files left! At least 2 files are needed. \ud83d\ude15",Error:!0})})):a((function(e){return Object(f.a)(Object(f.a)({},e),{},{UploadMessage:"".concat(i.Pdfs.length-1," PDF files are left. \u2705")})}))},MoveFileUp:function(e){var t=i.Pdfs.indexOf(e),n=i.Pdfs.filter((function(t){return t.Id!==e.Id}));n.splice(t-1,0,e),a((function(e){return Object(f.a)(Object(f.a)({},e),{},{Pdfs:n})}))},MoveFileDown:function(e){var t=i.Pdfs.indexOf(e),n=i.Pdfs.filter((function(t){return t.Id!==e.Id}));n.splice(t+1,0,e),a((function(e){return Object(f.a)(Object(f.a)({},e),{},{Pdfs:n})}))}}):"",!i.IsUploadCompleted||i.Error||i.IsSubmitCompleted?"":Object(l.jsx)(m,{Submit:function(){a((function(e){return Object(f.a)(Object(f.a)({},e),{},{SubmitMessage:"Merging ".concat(i.Pdfs.length," PDF files, please have patience... \u23f3"),IsSubmitCompleted:!0})}))}}),i.IsSubmitCompleted?Object(l.jsx)(g,{SubmitMessage:i.SubmitMessage}):""]})},v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"PDF Page Deleter"})})})},M=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",exact:!0,component:j}),Object(l.jsx)(a.a,{path:"/pdfmerger",exact:!0,component:x}),Object(l.jsx)(a.a,{path:"/pdfencryptor",exact:!0,component:d}),Object(l.jsx)(a.a,{path:"/pdfpagedeleter",exact:!0,component:v}),Object(l.jsx)(a.a,{path:"/imagetopdf",exact:!0,component:u})]})})})},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.e75c7f2a.chunk.js.map