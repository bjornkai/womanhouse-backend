(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(65)},36:function(e,t,n){},37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),l=(n(36),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=(n(37),n(7)),p=n(14),d=n(6),g=n.n(d),f=n(10),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={fullName:"",email:"",originalPassword:"",message:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("https://womanhousetheband.herokuapp.com/api/signup",this.state,{withCredentials:!0}).then(function(e){var n=e.data.userDoc;t.props.onUserChange(n)}).catch(function(e){e.response&&e.response.data&&(console.error("API response",e.response.data),t.setState({message:e.response.data}))})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement("section",null,r.a.createElement("h2",null," You are signed up! "),r.a.createElement("p",null," Welcome! Your email is: ",r.a.createElement("b",null," ",this.props.currentUser.email," "))):r.a.createElement("section",null,r.a.createElement("h2",null," Sign Up "),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Full Name "),r.a.createElement("input",{value:this.state.fullName,onChange:function(t){return e.genericSync(t)},type:"text",name:"fullName",placeholder:"Tony Stark"}),r.a.createElement("label",null," Email "),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"womanhouse@gmail.com"}),r.a.createElement("label",null," Password "),r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"*******"}),r.a.createElement("button",null," Sign Up ")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={email:"",originalPassword:"",message:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("https://womanhousetheband.herokuapp.com/api/login",this.state,{withCredentials:!0}).then(function(e){console.log("Login Page",e.data);var n=e.data.userDoc;t.props.onUserChange(n)}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"LoginPage"},r.a.createElement("h2",{id:"header"},"Log In"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Email:  "),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"womanhouse@gmail.com"}),r.a.createElement("label",null," Password: "),r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"}),r.a.createElement("button",null,"Log In")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"HomePage"},r.a.createElement("h2",null,"Home Page"),r.a.createElement("p",null,"five-piece band from Miami"))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"",date:"",location:"",price:"",isSubmitSuccessful:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"syncSpecs",value:function(e,t){var n=this.state.specs;n[t]=e.target.value,this.setState({specs:n})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("https://womanhousetheband.herokuapp.com/api/shows",this.state,{withCredentials:!0}).then(function(e){console.log("Add show",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("Add show ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?this.state.isSubmitSuccessful?r.a.createElement(p.a,{to:"/show-list"}):r.a.createElement("section",null,r.a.createElement("h2",null,"Add a Show"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Name: "),r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.genericSync(t)},type:"text",name:"name",placeholder:"name of show"}),r.a.createElement("label",null," Date: "),r.a.createElement("input",{value:this.state.date,onChange:function(t){return e.genericSync(t)},type:"text",name:"date",placeholder:"date of show"}),r.a.createElement("label",null," Location: "),r.a.createElement("input",{value:this.state.location,onChange:function(t){return e.genericSync(t)},type:"text",name:"location",placeholder:"location of the show"}),r.a.createElement("label",null," Price: "),r.a.createElement("input",{value:this.state.price,onChange:function(t){return e.genericSync(t)},type:"text",name:"price",placeholder:"price of the tickets"}),r.a.createElement("button",null," Save "))):r.a.createElement(p.a,{to:"/login-page"})}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={showsArray:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://womanhousetheband.herokuapp.com/api/shows",{withCredentials:!0}).then(function(t){e.setState({showsArray:t.data})}).catch(function(e){console.log("Show List ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this.state.showsArray;return r.a.createElement("section",{id:"shows-list"},r.a.createElement("h1",{id:"header"}," Shows "),e.map(function(e){return r.a.createElement("li",{key:e._id},e.name," at ",e.location,r.a.createElement("p",null," ",e.price," "),r.a.createElement(m.b,{to:"show-details/".concat(e._id)},"edit this show here "))}))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:"",author:"",lyrics:"",isSubmitSuccessful:!1},console.log(n.props),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"syncSpecs",value:function(e,t){var n=this.state.specs;n[t]=e.target.value,this.setState({specs:n})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("https://womanhousetheband.herokuapp.com/api/songs",this.state,{withCredentials:!0}).then(function(e){console.log("Add song",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("Add song ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?this.state.isSubmitSuccessful?r.a.createElement(p.a,{to:"/song-list"}):r.a.createElement("section",null,r.a.createElement("h2",null,"Add a Song"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Title: "),r.a.createElement("input",{value:this.state.title,onChange:function(t){return e.genericSync(t)},type:"text",name:"title",placeholder:"name of song"}),r.a.createElement("label",null," Author: "),r.a.createElement("input",{value:this.state.author,onChange:function(t){return e.genericSync(t)},type:"text",name:"author",placeholder:"name of author"}),r.a.createElement("label",null," Lyrics: "),r.a.createElement("input",{value:this.state.lyrics,onChange:function(t){return e.genericSync(t)},type:"text",name:"lyrics",placeholder:"lyrics of song"}),r.a.createElement("button",null," Save "))):r.a.createElement(p.a,{to:"/login-page"})}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={songsArray:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://womanhousetheband.herokuapp.com/api/songs",{withCredentials:!0}).then(function(t){console.log("Song List",t.data),e.setState({songsArray:t.data})}).catch(function(e){console.log("Song List ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this.state.songsArray;return r.a.createElement("section",null,r.a.createElement("h1",{id:"header"}," Songs "),e.map(function(e){return r.a.createElement("li",{key:e._id},e.title," lyrics written by ",e.author,r.a.createElement("p",{id:"song-display"}," ",e.lyrics," "))}))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={image:"",description:"",isSubmitSuccessful:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"uploadImage",value:function(e){var t=this,n=e.target.files,a=new FormData;a.append("fileSubmission",n[0]),g.a.post("https://womanhousetheband.herokuapp.com/api/upload-file",a,{withCredentials:!0}).then(function(e){t.setState({image:e.data.fileUrl})}).catch(function(e){console.log("Upload Image ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"syncSpec",value:function(e,t){var n=this.state.specs;n[t]=e.target.value,this.setState({specs:n})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("https://womanhousetheband.herokuapp.com/api/gallery",this.state,{withCredentials:!0}).then(function(e){t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("Add image ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?this.state.isSubmitSuccessful?r.a.createElement(p.a,{to:"/gallery"}):r.a.createElement("section",null,r.a.createElement("h2",null," Add an image "),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{onChange:function(t){return e.uploadImage(t)},type:"file"}),r.a.createElement("br",null),r.a.createElement("img",{width:"200",src:this.state.image,alt:""}),r.a.createElement("input",{value:this.state.description,onChange:function(t){return e.genericSync(t)},type:"text",name:"description",placeholder:"description of image"}),r.a.createElement("button",null," Save "))):r.a.createElement(p.a,{to:"/login-page"})}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={galleryArray:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://womanhousetheband.herokuapp.com/api/gallery",{withCredentials:!0}).then(function(t){return e.setState({galleryArray:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.galleryArray;return r.a.createElement("section",null,r.a.createElement("h1",null," Gallery "),e.map(function(e){return r.a.createElement("li",{key:e._id},e.image,r.a.createElement("img",{width:"100",src:e.image,alt:e.description}))}))}}]),t}(a.Component),C=function(e){function t(e){var n;Object(l.a)(this,t);var a=(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).props.theShow,r=a._id,o=a.name,c=a.date,i=a.location,h=a.price;return n.state={_id:r,name:o,date:c,location:i,price:h,redirect:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"syncSpecs",value:function(e,t){var n=this.state.specs;n[t]=e.target.value,this.setState({specs:n})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.put("https://womanhousetheband.herokuapp.com"+"/api/shows/".concat(this.props.theShow._id),this.state,{withCredentials:!0}).then(function(e){t.setState({redirect:!0})}).catch(function(e){console.log("Update Show ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.date,o=t.location,c=t.price;return this.state.redirect?r.a.createElement(p.a,{to:"/show-list"}):r.a.createElement("section",null,r.a.createElement("h2",{id:"header"},"Edit ",n,"  "),r.a.createElement("form",{id:"form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Name: "),r.a.createElement("input",{value:n,onChange:function(t){return e.genericSync(t)},type:"text",name:"name"}),r.a.createElement("label",null," Date: "),r.a.createElement("input",{value:a,onChange:function(t){return e.genericSync(t)},type:"text",name:"date"}),r.a.createElement("label",null," Location: "),r.a.createElement("input",{value:o,onChange:function(t){return e.genericSync(t)},type:"text",name:"location"}),r.a.createElement("label",null," Price: "),r.a.createElement("input",{value:c,onChange:function(t){return e.genericSync(t)},type:"text",name:"price"}),r.a.createElement("button",null," Save ")))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={showEdit:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;g.a.get("https://womanhousetheband.herokuapp.com"+"/api/shows/".concat(t.showId)).then(function(t){console.log(t.data),e.setState(t.data)}).catch(function(e){return console.log(e)})}},{key:"showEditForm",value:function(){this.setState({showEdit:!0})}},{key:"deleteShow",value:function(e){var t=this;g.a.delete("https://womanhousetheband.herokuapp.com"+"/api/shows/".concat(e)).then(function(e){t.props.history.push("/show-list")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return console.log("ShowDetails",this.state),r.a.createElement("section",null,r.a.createElement(C,{theShow:this.state}),r.a.createElement(m.b,{to:"/show-list"},"Go to shows page "))}}]),t}(a.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"NotFound"},r.a.createElement("h2",null,"404 Not Found"),r.a.createElement("p",null,"Sorry, the page you are looking for doesn't exist."))}}]),t}(a.Component),A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={currentUser:null},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://womanhousetheband.herokuapp.com/api/checkuser",{withCredentials:!0}).then(function(t){var n=t.data.userDoc;e.syncCurrentUser(n)}).catch(function(e){console.log("Check User ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"syncCurrentUser",value:function(e){this.setState({currentUser:e})}},{key:"logoutClick",value:function(){var e=this;g.a.delete("https://womanhousetheband.herokuapp.com/api/logout",{withCredentials:!0}).then(function(){e.syncCurrentUser(null)}).catch(function(e){console.log("Logout ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",{id:"womanhouse-header"}," womanhouse "),r.a.createElement("nav",{id:"nav-bar"},this.state.currentUser?r.a.createElement("span",null,r.a.createElement(m.c,{to:"/"}," Home "),r.a.createElement(m.c,{to:"/add-show"}," Add a Show"),r.a.createElement(m.c,{to:"/add-song"}," Add a Song"),r.a.createElement(m.c,{to:"/add-image"}," Add to Gallery"),r.a.createElement(m.c,{to:"/show-list"}," Update Show List"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null," ",this.state.currentUser.email," "),r.a.createElement("button",{onClick:function(){return e.logoutClick()}},"Log Out")):r.a.createElement("span",null,r.a.createElement(m.c,{to:"/show-list"}," Shows "),r.a.createElement(m.c,{to:"/song-list"}," Songs "),r.a.createElement(m.c,{to:"/gallery"}," Gallery "),r.a.createElement(m.c,{to:"/login-page"}," Login ")))),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:y}),r.a.createElement(p.b,{path:"/signup-page",render:function(){return r.a.createElement(b,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(p.b,{path:"/login-page",render:function(){return r.a.createElement(E,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(p.b,{path:"/add-show",render:function(){return r.a.createElement(v,{currentUser:e.state.currentUser})}}),r.a.createElement(p.b,{path:"/show-list",component:S}),r.a.createElement(p.b,{path:"/show-details/:showId",component:U}),r.a.createElement(p.b,{path:"/add-song",render:function(){return r.a.createElement(w,{currentUser:e.state.currentUser})}}),r.a.createElement(p.b,{path:"/song-list",component:O}),r.a.createElement(p.b,{path:"/add-image",render:function(){return r.a.createElement(j,{currentUser:e.state.currentUser})}}),r.a.createElement(p.b,{path:"/gallery",component:k}),r.a.createElement(p.b,{component:R})),r.a.createElement("footer",null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.7abd20d9.chunk.js.map