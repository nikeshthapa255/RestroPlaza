(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a(84)},53:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(24),r=a.n(o),l=(a(53),a(19)),i=a(47),c=a(8),m=a(9),u=a(12),h=a(10),d=a(6),p=a(11),g=a(20),E=a(18),b=a(85),f=a(86),v=a(87),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(E.a)({},n,a))}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+JSON.stringify(this.state)),e.preventDefault(),this.props.login(this.state.username,this.state.password),this.setState({username:"",password:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(b.a,null,s.a.createElement("h1",null,"Login")),s.a.createElement(b.a,null,s.a.createElement(f.a,{onSubmit:this.handleSubmit},s.a.createElement(v.a,null,s.a.createElement("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleChange})),s.a.createElement(v.a,null,s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"password"})),s.a.createElement(v.a,null,s.a.createElement("input",{type:"submit",className:"text-primary"})))))}}]),t}(n.Component),y=a(88),N=a(89),O=a(90),j=a(91),C=a(92),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={isOpen:!1},a.toggleNavbar=a.toggleNavbar.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"toggleNavbar",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return s.a.createElement(y.a,{dark:!0,expand:"md",color:"dark"},s.a.createElement("div",{className:"container"},s.a.createElement(N.a,{onClick:this.toggleNavbar,className:"mx-1"}),s.a.createElement(l.b,{className:"text-danger mr-auto",to:"/home"},s.a.createElement("span",{className:"fa fa-cutlery fa-lg"})),s.a.createElement(O.a,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(j.a,{navbar:!0},s.a.createElement(C.a,null,s.a.createElement(l.c,{to:"/login",className:"nav-link "},s.a.createElement("span",{className:"fa fa-sign-in fa-lg text-primary"},"Login"))),s.a.createElement(C.a,null,s.a.createElement(l.c,{className:"nav-link",to:"/aboutus"},s.a.createElement("span",{className:"fa fa-info fa-lg text-primary"}," About Us"))),s.a.createElement(C.a,null,s.a.createElement(l.c,{className:"nav-link",to:"/createUser"},s.a.createElement("span",{className:"fa fa-plus text-primary","aria-hidden":"true"},"  Restaurant"))))),this.props.isLogin?s.a.createElement("button",{className:"btn btn-danger",onClick:this.props.logout},s.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"},"Logout")):s.a.createElement(s.a.Fragment,null)))}}]),t}(s.a.Component),R=a(93),S=function(){return s.a.createElement("div",{className:"container"},s.a.createElement(R.a,null,s.a.createElement("h1",null,"About Us"),s.a.createElement("p",{className:"lead"},"This is a management site for Restaurants, you can simply login your restaurant and manage its details and menu"),s.a.createElement("hr",{className:"my-2"}),s.a.createElement("p",{className:"lead"},s.a.createElement("h4",null,"For more information"),s.a.createElement("strong",null,s.a.createElement("a",{href:"https://github.com/nikeshthapa255"},"GitHub")),s.a.createElement("br",null),s.a.createElement("strong",null,s.a.createElement("a",{href:"mailto: nikeshthapa255@gmail.com"},"Email link")))))},x="https://restroplaza.herokuapp.com",I="https://restroplaza.herokuapp.com/",D=I+"restaurant/",M=I+"login/",F=function(e){return D+e.toString()+"/dish/"},L=a(22),q=a.n(L),T=function(e,t){q.a.post(D,e,{headers:{"content-type":"application/json",authorization:"Token "+t}}).then(function(e){alert("Resturant Enrolled"+JSON.stringify(e))}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})},U=function(e,t){console.log("Token "+e),q.a.get("https://restroplaza.herokuapp.com/restaurantByToken/",{headers:{"content-type":"application/json",authorization:"Token "+e}}).then(function(e){return console.log(e.data),t(e.data),e.data}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})},z=function(e){q()({method:"get",url:D,headers:{"content-type":"application/json"}}).then(function(t){return console.log(t.data),e(t.data),t.data}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})},J=a(94),A=a(95),V=a(96),P=a(97),B=a(98),G=a(99),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement(J.a,{className:"col-4 col-md-2"},s.a.createElement(A.a,{top:!0,width:"100%",height:"150",src:this.props.image,alt:"Ower Image"}),s.a.createElement(V.a,null,s.a.createElement(P.a,null,this.props.title),s.a.createElement(B.a,null,this.props.subtitle),s.a.createElement(G.a,null,this.props.text)))}}]),t}(n.Component),W=a(102),K=a(100),Q=a(101),X=function(e){var t=["p-3 bg-primary my-2 rounded","p-3 bg-secondary my-2 rounded","p-3 bg-success my-2 rounded","p-3 bg-danger my-2 rounded","p-3 bg-warning my-2 rounded","p-3 bg-info my-2 rounded"],a=t.length,n=0,o=e.dishes.map(function(e){return n+=1,s.a.createElement(K.a,{className:t[n%a]+" col-12 col-md-6 "},s.a.createElement(Q.a,null,s.a.createElement(W.a,null,s.a.createElement(W.a,{left:!0,className:"mx-1"},s.a.createElement(W.a,{object:!0,src:x+e.dishImage,width:"100",height:"100",alt:"Dish Image"})),s.a.createElement(W.a,{body:!0},s.a.createElement(W.a,{heading:!0},e.dishName),e.description))))});return s.a.createElement("div",{className:"row"},o)},Y=a(109),Z=a(103),$=a(104),_=a(105),ee=a(106),te=a(107),ae=a(108),ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleImageChange=function(e){a.setState({dishImage:e.target.files[0]})},a.state={modal:!1,description:"",dishImage:null,dishName:""},a.toggle=a.toggle.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleImageChange=a.handleImageChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(E.a)({},n,a))}},{key:"createData",value:function(){var e=new FormData;return e.append("dishImage",this.state.dishImage,this.state.dishImage.name),e.append("dishName",this.state.dishName),e.append("description",this.state.description),e.append("owner",this.props.MainRestro.id),e}},{key:"handleSubmit",value:function(e){var t,a,n;e.preventDefault(),t=this.props.MainRestro.id,a=this.createData(),n=this.props.token,console.log("ID-"+t),console.log("dish url "+F(t)),q.a.post(F(t),a,{headers:{"content-type":"application/json",authorization:"Token "+n}}).then(function(e){console.log("Dish got it"+JSON.stringify(e))}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}),this.toggle()}},{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return console.log(this.props.MainRestro.id),s.a.createElement("div",{className:"col-6 col-md-2 ml-auto"},s.a.createElement("button",{className:"btn btn-dark ",onClick:this.toggle},s.a.createElement("i",{className:"fa fa-plus text-danger","aria-hidden":"true"})),s.a.createElement(Y.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},s.a.createElement(Z.a,{toggle:this.toggle},"Enter Dish Elements"),s.a.createElement($.a,null,s.a.createElement(f.a,{onSubmit:this.handleSubmit},s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"dishName"},"Dish Name"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"text",value:this.state.dishName,name:"dishName",id:"dishName",onChange:this.handleChange,placeholder:"Dish Name"}))),s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"description"},"Description"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"textarea",value:this.state.description,name:"description",id:"description",onChange:this.handleChange,placeholder:"Description of dish",rows:"5"}))),s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"dishImage"},"Vision"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"file",name:"dishImage",id:"dishImage",onChange:this.handleImageChange,placeholder:"Dish Image"}))),s.a.createElement("input",{type:"submit",className:"text-primary"}))),s.a.createElement(ae.a,null,s.a.createElement("strong",null,"Congratulations on your new Dish"))))}}]),t}(n.Component),se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return z(e.props.saveRestros)}},"CLick to elements"),s.a.createElement("button",{className:"btn btn-info",onClick:function(){return console.log(e.props.restaurants)}},"Click to show elements"),s.a.createElement("div",{className:"jumbotron"},this.props.isLogin?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"display-3"},"Welcome"),s.a.createElement("div",{className:"lead"},s.a.createElement(W.a,null,s.a.createElement(W.a,{left:!0,className:"mx-3"},s.a.createElement(W.a,{object:!0,src:x+this.props.MainRestro.image,width:"100",height:"100",alt:"Owner Restro"})),s.a.createElement(W.a,{body:!0},s.a.createElement("div",{className:"row"},s.a.createElement(W.a,{heading:!0,className:"col-3"},this.props.MainRestro.restaurantName),s.a.createElement(ne,{MainRestro:this.props.MainRestro,token:this.props.token})),this.props.MainRestro.vision)),s.a.createElement(X,{dishes:this.props.MainRestro.dish}))):s.a.createElement("h1",{className:"display-3"},"Please enter your login credentials"),s.a.createElement("hr",{className:"my-2"})),s.a.createElement("div",{className:"row"},this.props.restaurants.map(function(e){return s.a.createElement(H,{key:e.id,image:x+e.image,subtitle:"Owner",title:e.resturantName,text:e.vision})})))}}]),t}(n.Component),oe=function(){return s.a.createElement("div",{className:"col-12"},s.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),s.a.createElement("p",null,"Loading . . ."))},re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleImageChange=function(e){a.setState({image:e.target.files[0]})},a.state={username:"",password:"",email:"",restaurantName:"",vision:"",id:-1,image:null,isSubmited:!1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleImageChange=a.handleImageChange.bind(Object(d.a)(a)),a.createData=a.createData.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(E.a)({},n,a))}},{key:"createData",value:function(){var e=new FormData;return e.append("image",this.state.image,this.state.image.name),e.append("restaurantName",this.state.restaurantName),e.append("vision",this.state.vision),e.append("user",this.state.id),e}},{key:"handleSubmit",value:function(e){var t,a,n,s,o,r,l,i=this;this.setState({isSubmited:!0}),e.preventDefault(),alert("A name was submitted: "+JSON.stringify(this.state)),t=this.state.username,a=this.state.password,n=this.state.email,s=function(e){return i.setState({id:e}),i.createData()},o=function(e){return i.props.login(i.state.username,i.state.password,e)},r=this.props.isLogin,l=this.props.token,q.a.post("https://restroplaza.herokuapp.com/user/",{username:t,password:a,email:n},{headers:{"content-type":"application/json"}}).then(function(e){r?T(s(e.data.id),l):o(s(e.data.id))}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})}},{key:"componentDidMount",value:function(){z(this.props.saveRestro)}},{key:"render",value:function(){return-1===this.state.id&&this.state.isSubmited?s.a.createElement(oe,null):s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",{className:"display-3 my-5"},"Register your restaurant ",s.a.createElement("span",{className:"fa fa-cutlery fa-lg"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement(f.a,{onSubmit:this.handleSubmit},s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"username"},"Username"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"text",value:this.state.username,name:"username",id:"username",onChange:this.handleChange,placeholder:"Username"}))),s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"password"},"Password"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"password",value:this.state.password,name:"password",id:"password",onChange:this.handleChange,placeholder:"Password"}))),s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"email"},"Email"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"email",value:this.state.email,name:"email",id:"email",onChange:this.handleChange,placeholder:"Email"}))),s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"restaurantName"},"Restaurant Name"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"text",value:this.state.restaurantName,name:"restaurantName",id:"restaurantName",onChange:this.handleChange,placeholder:"Restaurant Name"}))),s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"vision"},"Vision"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"textarea",value:this.state.vision,name:"vision",id:"vision",onChange:this.handleChange,placeholder:"Vision For Restaurant",rows:"5"}))),s.a.createElement(v.a,{className:"row"},s.a.createElement(_.a,{md:2,htmlFor:"image"},"Vision"),s.a.createElement(ee.a,{md:10},s.a.createElement(te.a,{type:"file",name:"image",id:"image",onChange:this.handleImageChange,placeholder:"Image"}))),s.a.createElement("input",{type:"submit",className:"text-primary"}))))))}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).setMainRestro=function(e){a.setState({MainRestro:e,isLogin:!0})},a.state={token:a.getCookie("token"),restaurants:[],isLogin:!1,MainRestro:null},a.setCookie=a.setCookie.bind(Object(d.a)(a)),a.getCookie=a.getCookie.bind(Object(d.a)(a)),a.saveRestros=a.saveRestros.bind(Object(d.a)(a)),a.logOut=a.logOut.bind(Object(d.a)(a)),a.logIn=a.logIn.bind(Object(d.a)(a)),a.logInFor1=a.logInFor1.bind(Object(d.a)(a)),a.setToken=a.setToken.bind(Object(d.a)(a)),a.setMainRestro=a.setMainRestro.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"setCookie",value:function(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var s="expires="+n.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}},{key:"getCookie",value:function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var s=a[n];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}},{key:"saveRestros",value:function(e){this.setState({restaurants:Object(i.a)(e)})}},{key:"logIn",value:function(e,t){!function(e,t,a,n,s,o){console.log(e+","+t),q.a.post(M,{username:e,password:t},{headers:{"content-type":"application/json"}}).then(function(e){return a("token",e.data.token,10),n(e.data.token),z(s),U(e.data.token,o),console.log(e.data.token),e.data}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})}(e,t,this.setCookie,this.setToken,this.saveRestros,this.setMainRestro)}},{key:"logInFor1",value:function(e,t,a){!function(e,t,a,n,s){console.log(e+","+t),q.a.post(M,{username:e,password:t},{headers:{"content-type":"application/json"}}).then(function(e){return a("token",e.data.token,10),n(e.data.token),T(s,e.data.token),console.log(e.data.token),e.data}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})}(e,t,this.setCookie,this.setToken,a)}},{key:"setToken",value:function(e){this.setState({token:e})}},{key:"logOut",value:function(){this.setCookie("token","",.1),this.setState({isLogin:!1,token:"",MainRestro:null})}},{key:"componentDidMount",value:function(){z(this.saveRestros),!this.state.isLogin&&this.state.token&&U(this.state.token,this.setMainRestro)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(w,{logout:this.logOut,isLogin:this.state.isLogin}),s.a.createElement(g.d,null,s.a.createElement(g.b,{exact:!0,path:"/home",component:function(){return s.a.createElement(se,{MainRestro:e.state.MainRestro,saveRestros:e.saveRestros,restaurants:e.state.restaurants,token:e.state.token,isLogin:e.state.isLogin})}}),s.a.createElement(g.b,{exact:!0,path:"/login",component:function(){return s.a.createElement(k,{login:e.logIn})}}),s.a.createElement(g.b,{exact:!0,path:"/aboutus",component:S}),s.a.createElement(g.b,{exact:!0,path:"/createUser",component:function(){return s.a.createElement(re,{login:e.logInFor1,token:e.state.token,isLogin:e.state.isLogin,saveRestros:e.saveRestros})}}),s.a.createElement(g.a,{to:"/home"})))}}]),t}(n.Component);var ie=function(e){return s.a.createElement(l.a,null,s.a.createElement("div",null,s.a.createElement("h1",null,"Ntc React app"),s.a.createElement(le,null)))};a(82),a(83);r.a.render(s.a.createElement(ie,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.59134b04.chunk.js.map