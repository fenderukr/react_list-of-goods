(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),c=s(1),o=s(5),a=s(6),u=s(9),l=s(7),b=s(8),h=(s(14),s(2)),j=s.n(h),d=(s(15),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function O(t,e){var s=e.sortType,r=e.isReversed,i=Object(b.a)(t);switch(s){case n.ALPHABET:i.sort();break;case n.LENGTH:i.sort((function(t,e){return t.length-e.length}))}return r&&i.reverse(),i}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:n.NONE},t.reverse=function(){t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{isReversed:!t.isReversed})}))},t.sortByAlph=function(){t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{sortType:n.ALPHABET})}))},t.sortByLength=function(){t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{sortType:n.LENGTH})}))},t.reset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(a.a)(s,[{key:"render",value:function(){var t=!this.state.isReversed&&this.state.sortType===n.NONE;return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:this.state.sortType===n.ALPHABET?"button is-info":"button is-info is-light",onClick:this.sortByAlph,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:this.state.sortType===n.LENGTH?"button is-success":"button is-success is-light",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:this.state.isReversed?"button is-warning":"button is-warning is-light",onClick:this.reverse,children:"Reverse"}),!t&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(d.jsx)("ul",{children:Object(d.jsx)("ul",{children:O(p,this.state).map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(j.a.Component);i.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0f053c49.chunk.js.map