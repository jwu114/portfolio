"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[905],{49941:function(T,j,t){t.r(j);var g=t(39502),A=t(25438),y=t(82816),O=t(23467),P=t(62375),C=t(51134),m=t(29429),h=t(11550),x=t(62435),l=t(86074);function p(){var v=(0,h.eL)(),u=v.texts;return(0,l.jsx)(h.dY,{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.Dl,{demo:{id:"docs-projects-demo-0",inline:!0},previewerProps:{}}),(0,l.jsx)("div",{className:"markdown",children:(0,l.jsxs)("h3",{id:"demo",children:[(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#demo",children:(0,l.jsx)("span",{className:"icon icon-link"})}),"Demo"]})}),(0,l.jsx)(h.Dl,{demo:{id:"docs-projects-demo-1",inline:!0},previewerProps:{}}),(0,l.jsx)("div",{className:"markdown",children:(0,l.jsxs)("h3",{id:"techniques",children:[(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#techniques",children:(0,l.jsx)("span",{className:"icon icon-link"})}),"Techniques"]})}),(0,l.jsx)(h.Dl,{demo:{id:"docs-projects-demo-2",inline:!0},previewerProps:{}})]})})}j.default=p},39502:function(T,j,t){var g=t(97857),A=t.n(g),y=t(5574),O=t.n(y),P=t(11550),C=t(62435),m=t(51134),h=t(86074),x={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var o=this,s=[];return Object.entries(e.properties||{}).forEach(function(a){var n,r=O()(a,2),i=r[0],_=r[1];s.push("".concat(i).concat((n=e.required)!==null&&n!==void 0&&n.includes(i)?"":"?",": ").concat(_.type==="object"?"object":o.toString(_)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var o=this.getValidClassName(e.items);return o?"".concat(o,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var o=this,s=e.signature;if(!s)return"Function";var a="oneOf"in s?s.oneOf:[s];return a.map(function(n){return"".concat(n.isAsync?"async ":"","(").concat(n.arguments.map(function(r){return"".concat(r.key,": ").concat(o.toString(r))}).join(", "),") => ").concat(o.toString(n.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(o){return JSON.stringify(o)}).join(" | ")},oneOf:function(e){var o=this;return e.oneOf.map(function(s){return o.getValidClassName(s)||o.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},l=function(e){var o=useState(function(){return x.toString(e)}),s=_slicedToArray(o,2),a=s[0],n=s[1];return useEffect(function(){n(x.toString(e))},[e]),_jsx("code",{children:a})},p=function(e){var o,s=useRouteMeta(),a=s.frontmatter,n=useAtomAssets(),r=n.components,i=e.id||a.atomId,_=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var d=r==null?void 0:r[i];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:d&&(o=d.propsConfig)!==null&&o!==void 0&&o.properties?Object.entries(d.propsConfig.properties).map(function(c){var f,M=_slicedToArray(c,2),E=M[0],b=M[1];return _jsxs("tr",{children:[_jsx("td",{children:E}),_jsx("td",{children:b.description||"--"}),_jsx("td",{children:_jsx(l,_objectSpread({},b))}),_jsx("td",{children:_jsx("code",{children:(f=d.propsConfig.required)!==null&&f!==void 0&&f.includes(E)?_.formatMessage({id:"api.component.required"}):JSON.stringify(b.default)||"--"})})]},E)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i})})})})]})})},v=null},25438:function(T,j,t){var g=t(97857),A=t(62435),y=t(86074),O=function(m){return _jsx("span",_objectSpread({className:"dumi-default-badge"},m))},P=null},51134:function(T,j,t){var g=t(97857),A=t(5574),y=t(13769),O=t(93096),P=t(62435),C=t(86074),m=null,h=function(p){var v=p.children,u=_objectWithoutProperties(p,m),e=useRef(null),o=useState(!1),s=_slicedToArray(o,2),a=s[0],n=s[1],r=useState(!1),i=_slicedToArray(r,2),_=i[0],d=i[1];return useEffect(function(){var c=e.current;if(c){var f=throttle(function(){n(c.scrollLeft>0),d(c.scrollLeft<c.scrollWidth-c.offsetWidth)},100);return f(),c.addEventListener("scroll",f),window.addEventListener("resize",f),function(){c.removeEventListener("scroll",f),window.removeEventListener("resize",f)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":a||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},u),{},{children:v}))})})},x=null},29429:function(T,j,t){var g=t(97857),A=t(5574),y=t(19632),O=t(11131),P=t(62435),C=t(86074);function m(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(a).forEach(function(i,_){var d="".concat(n?"".concat(n,"-"):"").concat(_);switch(i==null?void 0:i.type){case"ul":{var c,f=((c=r[r.length-1])===null||c===void 0?void 0:c.children)||r,M=m(i.props.children||[],d);f.push.apply(f,_toConsumableArray(M));break}case"li":{var E=m(i.props.children,d);r.push({title:[].concat(i.props.children).filter(function(b){return b.type!=="ul"}),key:d,children:E,isLeaf:!E.length});break}default:}}),r}var h=function(n){var r=useState(m(n)),i=_slicedToArray(r,2),_=i[0],d=i[1];return useEffect(function(){d(m(n))},[n]),_},x=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},l=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):i?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},p=function(){return{height:0,opacity:0}},v=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},u=function(n){return{height:n?n.offsetHeight:0}},e=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},o={motionName:"ant-motion-collapse",onAppearStart:p,onEnterStart:p,onAppearActive:v,onEnterActive:v,onLeaveStart:u,onLeaveActive:p,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},s=function(a){var n=h(a.children),r=createRef(),i=function(d,c){var f=c.isLeaf;f||d.shiftKey||d.metaKey||d.ctrlKey||r.current.onNodeExpand(d,c)};return _jsx(Tree,{className:"dumi-default-tree",icon:x,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},o),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:a.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:l})}}}]);
