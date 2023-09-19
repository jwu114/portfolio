"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[170],{15316:function(A,j,t){t.r(j);var g=t(39502),T=t(25438),y=t(82816),O=t(23467),P=t(62375),C=t(51134),f=t(29429),v=t(11550),E=t(62435),m=t(86074);function h(){var p=(0,v.eL)(),l=p.texts;return(0,m.jsx)(v.dY,{children:(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(v.Dl,{demo:{id:"docs-projects-project-6-demo-0",inline:!0},previewerProps:{}})})})}j.default=h},39502:function(A,j,t){var g=t(97857),T=t.n(g),y=t(5574),O=t.n(y),P=t(11550),C=t(62435),f=t(51134),v=t(86074),E={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var i=this,s=[];return Object.entries(e.properties||{}).forEach(function(a){var n,r=O()(a,2),o=r[0],_=r[1];s.push("".concat(o).concat((n=e.required)!==null&&n!==void 0&&n.includes(o)?"":"?",": ").concat(_.type==="object"?"object":i.toString(_)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var i=this.getValidClassName(e.items);return i?"".concat(i,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var i=this,s=e.signature;if(!s)return"Function";var a="oneOf"in s?s.oneOf:[s];return a.map(function(n){return"".concat(n.isAsync?"async ":"","(").concat(n.arguments.map(function(r){return"".concat(r.key,": ").concat(i.toString(r))}).join(", "),") => ").concat(i.toString(n.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(i){return JSON.stringify(i)}).join(" | ")},oneOf:function(e){var i=this;return e.oneOf.map(function(s){return i.getValidClassName(s)||i.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},m=function(e){var i=useState(function(){return E.toString(e)}),s=_slicedToArray(i,2),a=s[0],n=s[1];return useEffect(function(){n(E.toString(e))},[e]),_jsx("code",{children:a})},h=function(e){var i,s=useRouteMeta(),a=s.frontmatter,n=useAtomAssets(),r=n.components,o=e.id||a.atomId,_=useIntl();if(!o)throw new Error("`id` properties if required for API component!");var u=r==null?void 0:r[o];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:u&&(i=u.propsConfig)!==null&&i!==void 0&&i.properties?Object.entries(u.propsConfig.properties).map(function(c){var d,M=_slicedToArray(c,2),x=M[0],b=M[1];return _jsxs("tr",{children:[_jsx("td",{children:x}),_jsx("td",{children:b.description||"--"}),_jsx("td",{children:_jsx(m,_objectSpread({},b))}),_jsx("td",{children:_jsx("code",{children:(d=u.propsConfig.required)!==null&&d!==void 0&&d.includes(x)?_.formatMessage({id:"api.component.required"}):JSON.stringify(b.default)||"--"})})]},x)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:o})})})})]})})},p=null},25438:function(A,j,t){var g=t(97857),T=t(62435),y=t(86074),O=function(f){return _jsx("span",_objectSpread({className:"dumi-default-badge"},f))},P=null},51134:function(A,j,t){var g=t(97857),T=t(5574),y=t(13769),O=t(93096),P=t(62435),C=t(86074),f=null,v=function(h){var p=h.children,l=_objectWithoutProperties(h,f),e=useRef(null),i=useState(!1),s=_slicedToArray(i,2),a=s[0],n=s[1],r=useState(!1),o=_slicedToArray(r,2),_=o[0],u=o[1];return useEffect(function(){var c=e.current;if(c){var d=throttle(function(){n(c.scrollLeft>0),u(c.scrollLeft<c.scrollWidth-c.offsetWidth)},100);return d(),c.addEventListener("scroll",d),window.addEventListener("resize",d),function(){c.removeEventListener("scroll",d),window.removeEventListener("resize",d)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":a||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},l),{},{children:p}))})})},E=null},29429:function(A,j,t){var g=t(97857),T=t(5574),y=t(19632),O=t(11131),P=t(62435),C=t(86074);function f(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(a).forEach(function(o,_){var u="".concat(n?"".concat(n,"-"):"").concat(_);switch(o==null?void 0:o.type){case"ul":{var c,d=((c=r[r.length-1])===null||c===void 0?void 0:c.children)||r,M=f(o.props.children||[],u);d.push.apply(d,_toConsumableArray(M));break}case"li":{var x=f(o.props.children,u);r.push({title:[].concat(o.props.children).filter(function(b){return b.type!=="ul"}),key:u,children:x,isLeaf:!x.length});break}default:}}),r}var v=function(n){var r=useState(f(n)),o=_slicedToArray(r,2),_=o[0],u=o[1];return useEffect(function(){u(f(n))},[n]),_},E=function(n){var r=n.isLeaf,o=n.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):o?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},m=function(n){var r=n.isLeaf,o=n.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):o?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},h=function(){return{height:0,opacity:0}},p=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},l=function(n){return{height:n?n.offsetHeight:0}},e=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},i={motionName:"ant-motion-collapse",onAppearStart:h,onEnterStart:h,onAppearActive:p,onEnterActive:p,onLeaveStart:l,onLeaveActive:h,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},s=function(a){var n=v(a.children),r=createRef(),o=function(u,c){var d=c.isLeaf;d||u.shiftKey||u.metaKey||u.ctrlKey||r.current.onNodeExpand(u,c)};return _jsx(Tree,{className:"dumi-default-tree",icon:E,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},i),{},{motionAppear:!1}),onClick:o,treeData:[{key:"0",title:a.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:m})}}}]);
