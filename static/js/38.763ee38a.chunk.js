(this.webpackJsonpRapidWifi=this.webpackJsonpRapidWifi||[]).push([[38],{644:function(e,t,a){"use strict";var n=a(162),r=a.n(n);t.a=r.a.create({baseURL:"https://thilagaraj.me/rapidwifi-api/webapi/"})},719:function(e,t,a){"use strict";a.r(t);var n=a(158),r=a(159),s=a(161),c=a(160),i=a(1),l=a.n(i),u=a(642),o=a(644),d=function(e){switch(e){case"1":return"success";case"0":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},m=["area_name","area_id","status","action"],f=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleDelete=function(e){window.confirm("Are you sure want to delete?")&&o.a.delete("/deletearea/".concat(e),{data:{user_id:e}}).then((function(t){var a=r.state.usersData.filter((function(t){return t.id!==e}));r.setState({usersData:a})})).catch((function(e){console.log("err",e)}))},r.state={usersData:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;o.a.get("/listarea").then((function(t){var a=t.data.results;e.setState({usersData:a})})).catch((function(e){console.log("err",e)}))}},{key:"render",value:function(){var e=this,t=this.state.usersData;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Suspense,{fallback:l.a.createElement("div",null,"Loading...")}),l.a.createElement(u.wb,null,l.a.createElement(u.u,null,l.a.createElement(u.j,null,l.a.createElement(u.n,null,"Area List",l.a.createElement("div",{className:"card-header-actions"},l.a.createElement("span",{rel:"noreferrer noopener",style:{cursor:"pointer"},onClick:function(){e.props.history.push("/payments/add")},className:"card-header-action"},l.a.createElement("small",{className:"text-muted"},"Add")))),l.a.createElement(u.k,null,l.a.createElement(u.y,{items:t,fields:m,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return l.a.createElement("td",null,l.a.createElement(u.b,{color:d(e.status)},function(e){return"1"===e?"Active":"In-Active"}(e.status)))},action:function(t){return l.a.createElement("td",null,l.a.createElement(u.f,{size:"sm",shape:"pill",onClick:function(a){return function(e,t){e.history.push("/areas/edit/".concat(t))}(e.props,t.id)},color:"success"},"Edit"),l.a.createElement(u.f,{size:"sm",shape:"pill",onClick:function(a){return e.handleDelete(t.id)},color:"danger"},"Delete"))}}}))))))}}]),a}(i.Component);t.default=f}}]);
//# sourceMappingURL=38.763ee38a.chunk.js.map