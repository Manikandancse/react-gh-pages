(this.webpackJsonpRapidWifi=this.webpackJsonpRapidWifi||[]).push([[39],{644:function(e,a,t){"use strict";var n=t(162),l=t.n(n);a.a=l.a.create({baseURL:"http://thilagaraj.me/rapidwifi-api/webapi/"})},709:function(e,a,t){"use strict";t.r(a);var n=t(163),l=t(158),r=t(159),c=t(161),m=t(160),i=t(1),s=t.n(i),o=t(642),u=t(643),h=t(644),d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).handleCancel=function(){r.props.history.push("/plans")},r.handleSubmit=function(){var e=r.state,a=e.plan_id,t=e.plan_amount,n=e.status,l=e.instllation_charge,c=e.router_charge;if(!(a&&t&&n&&l&&c))return alert("please fill the all details"),!1;h.a.post("/addplan",{plan_id:a,plan_amount:t,instllation_charge:l,router_charge:c,status:n,user_id:1}).then((function(e){r.props.history.push("/plans")})).catch((function(e){alert("Error Try again",e)}))},r.handleUserChange=function(e){var a=e.target,t=a.name,l=a.value;r.setState(Object(n.a)({},t,l))},r.state={plan_id:"P00",plan_amount:499,instllation_charge:2e3,router_charge:1e3,status:1},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.plan_id,t=e.plan_amount,n=e.status,l=e.instllation_charge,r=e.router_charge;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.wb,null,s.a.createElement(o.u,{xs:"12",md:"10"},s.a.createElement(o.j,null,s.a.createElement(o.n,null,"Plan Add",s.a.createElement("small",null," Form")),s.a.createElement(o.k,null,s.a.createElement(o.J,{action:"",method:"post",className:"form-horizontal"},s.a.createElement(o.K,{row:!0},s.a.createElement(o.u,{md:"3"},s.a.createElement(o.cb,{htmlFor:"plan-id"},"Plan Id")),s.a.createElement(o.u,{xs:"12",md:"9"},s.a.createElement(o.S,{type:"text",value:a,onChange:this.handleUserChange,id:"plan-id",name:"plan_id",placeholder:"Enter Plan Id"}))),s.a.createElement(o.K,{row:!0},s.a.createElement(o.u,{md:"3"},s.a.createElement(o.cb,{htmlFor:"plan-amount"},"Plan Amount")),s.a.createElement(o.u,{xs:"12",md:"9"},s.a.createElement(o.S,{type:"number",value:t,onChange:this.handleUserChange,id:"plan-amount",name:"plan_amount",placeholder:"Enter Plan"}))),s.a.createElement(o.K,{row:!0},s.a.createElement(o.u,{md:"3"},s.a.createElement(o.cb,{htmlFor:"instllation-charge"},"Instllation Charge")),s.a.createElement(o.u,{xs:"12",md:"9"},s.a.createElement(o.S,{type:"text",value:l,onChange:this.handleUserChange,id:"instllation-charge",name:"instllation_charge",placeholder:"Instllation Charge"}))),s.a.createElement(o.K,{row:!0},s.a.createElement(o.u,{md:"3"},s.a.createElement(o.cb,{htmlFor:"router-charge"},"Router Charge")),s.a.createElement(o.u,{xs:"12",md:"9"},s.a.createElement(o.S,{type:"text",value:r,onChange:this.handleUserChange,id:"router-charge",name:"router_charge",placeholder:"Router Charge"}))),s.a.createElement(o.K,{row:!0},s.a.createElement(o.u,{md:"3"},s.a.createElement(o.cb,{htmlFor:"status"},"Status")),s.a.createElement(o.u,{xs:"12",md:"9"},s.a.createElement(o.xb,{custom:!0,name:"status",onChange:this.handleUserChange,value:n,id:"status"},s.a.createElement("option",{value:""},"Please select Status"),s.a.createElement("option",{value:"1"},"Active"),s.a.createElement("option",{value:"0"},"In-Active")))))),s.a.createElement(o.l,null,s.a.createElement(o.f,{type:"reset",size:"sm",color:"danger",onClick:this.handleCancel},s.a.createElement(u.a,{name:"cil-ban"})," Cancel"),"\xa0",s.a.createElement(o.f,{type:"submit",size:"sm",color:"primary",onClick:this.handleSubmit},s.a.createElement(u.a,{name:"cil-scrubber"})," Add"))))))}}]),t}(i.Component);a.default=d}}]);
//# sourceMappingURL=39.5dd5a1c2.chunk.js.map