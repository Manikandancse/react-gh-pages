(this.webpackJsonpRapidWifi=this.webpackJsonpRapidWifi||[]).push([[26],{644:function(e,a,t){"use strict";var n=t(162),r=t.n(n);a.a=r.a.create({baseURL:"http://thilagaraj.me/rapidwifi-api/webapi/"})},718:function(e,a,t){"use strict";t.r(a);var n=t(163),r=t(158),l=t(159),c=t(161),s=t(160),m=t(1),i=t.n(m),o=t(644),u=t(642),h=t(643),d=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).handleCancel=function(){l.props.history.push("/users")},l.handleSubmit=function(){var e=l.state,a=e.id,t=e.area_name,n=e.status;t&&n&&o.a.put("/modifyarea/".concat(a),{area_name:t,status:n,user_id:1}).then((function(e){l.props.history.push("/areas")})).catch((function(e){console.log("err",e),alert("Error try again")}))},l.handleUserChange=function(e){var a=e.target,t=a.name,r=a.value;l.setState(Object(n.a)({},t,r))},l.state={id:"",area_name:"",status:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;o.a.get("/listarea/".concat(a)).then((function(t){var n=t.data,r=n.area_name,l=n.status;e.setState({area_name:r,status:l,id:a})})).catch((function(e){console.log("err",e)}))}},{key:"render",value:function(){var e=this.state,a=e.area_name,t=e.status;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(u.wb,null,i.a.createElement(u.u,{xs:"12",md:"10"},i.a.createElement(u.j,null,i.a.createElement(u.n,null,"Customer Add",i.a.createElement("small",null," Form")),i.a.createElement(u.k,null,i.a.createElement(u.J,{action:"",method:"post",className:"form-horizontal"},i.a.createElement(u.K,{row:!0},i.a.createElement(u.u,{md:"3"},i.a.createElement(u.cb,{htmlFor:"area-name"},"Area Name")),i.a.createElement(u.u,{xs:"12",md:"9"},i.a.createElement(u.S,{type:"text",value:a,onChange:this.handleUserChange,id:"area-name",name:"area_name",placeholder:"Enter Area Name",autoComplete:"email"}))),i.a.createElement(u.K,{row:!0},i.a.createElement(u.u,{md:"3"},i.a.createElement(u.cb,{htmlFor:"status"},"Status")),i.a.createElement(u.u,{xs:"12",md:"9"},i.a.createElement(u.xb,{custom:!0,name:"status",onChange:this.handleUserChange,value:t,id:"status"},i.a.createElement("option",{value:""},"Please select Status"),i.a.createElement("option",{value:"1"},"Active"),i.a.createElement("option",{value:"0"},"In-Active")))))),i.a.createElement(u.l,null,i.a.createElement(u.f,{type:"reset",size:"sm",color:"danger",onClick:this.handleCancel},i.a.createElement(h.a,{name:"cil-ban"})," Cancel"),"\xa0",i.a.createElement(u.f,{type:"submit",size:"sm",color:"primary",onClick:this.handleSubmit},i.a.createElement(h.a,{name:"cil-scrubber"})," Update")))))))}}]),t}(m.Component);a.default=d}}]);
//# sourceMappingURL=26.27b76b3d.chunk.js.map