(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[33297,15071,87806],{989881:(e,t,n)=>{var r=n(247816),i=n(899291)(r);e.exports=i},121078:(e,t,n)=>{var r=n(862488),i=n(137285);e.exports=function e(t,n,o,a,s){var u=-1,c=t.length;for(o||(o=i),s||(s=[]);++u<c;){var l=t[u];n>0&&o(l)?n>1?e(l,n-1,o,a,s):r(s,l):a||(s[s.length]=l)}return s}},247816:(e,t,n)=>{var r=n(228483),i=n(3674);e.exports=function(e,t){return e&&r(e,t,i)}},297786:(e,t,n)=>{var r=n(671811),i=n(240327);e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])];return n&&n==o?e:void 0}},200013:e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},702958:(e,t,n)=>{var r=n(646384),i=n(690939);e.exports=function(e,t,n,o){var a=n.length,s=a,u=!o;if(null==e)return!s;for(e=Object(e);a--;){var c=n[a];if(u&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<s;){var l=(c=n[a])[0],p=e[l],d=c[1];if(u&&c[2]){if(void 0===p&&!(l in e))return!1}else{var f=new r;if(o)var g=o(p,d,l,e,t,f);if(!(void 0===g?i(d,p,3,o,f):g))return!1}}return!0}},267206:(e,t,n)=>{var r=n(191573),i=n(716432),o=n(406557),a=n(701469),s=n(139601);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?a(e)?i(e[0],e[1]):r(e):s(e)}},269199:(e,t,n)=>{var r=n(989881),i=n(498612);e.exports=function(e,t){var n=-1,o=i(e)?Array(e.length):[];return r(e,(function(e,r,i){o[++n]=t(e,r,i)})),o}},191573:(e,t,n)=>{var r=n(702958),i=n(301499),o=n(542634);e.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},716432:(e,t,n)=>{var r=n(690939),i=n(227361),o=n(379095),a=n(115403),s=n(689162),u=n(542634),c=n(240327);e.exports=function(e,t){return a(e)&&s(t)?u(c(e),t):function(n){var a=i(n,e);return void 0===a&&a===t?o(n,e):r(t,a,3)}}},882689:(e,t,n)=>{var r=n(829932),i=n(297786),o=n(267206),a=n(269199),s=n(571131),u=n(307518),c=n(285022),l=n(406557),p=n(701469);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return p(e)?function(t){return i(t,1===e.length?e[0]:e)}:e})):[l];var d=-1;t=r(t,u(o));var f=a(e,(function(e,n,i){return{criteria:r(t,(function(t){return t(e)})),index:++d,value:e}}));return s(f,(function(e,t){return c(e,t,n)}))}},840371:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},379152:(e,t,n)=>{var r=n(297786);e.exports=function(e){return function(t){return r(t,e)}}},571131:e=>{e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},671811:(e,t,n)=>{var r=n(701469),i=n(115403),o=n(555514),a=n(479833);e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(a(e))}},626393:(e,t,n)=>{var r=n(733448);e.exports=function(e,t){if(e!==t){var n=void 0!==e,i=null===e,o=e==e,a=r(e),s=void 0!==t,u=null===t,c=t==t,l=r(t);if(!u&&!l&&!a&&e>t||a&&s&&c&&!u&&!l||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!l&&e<t||l&&n&&o&&!i&&!a||u&&n&&o||!s&&o||!c)return-1}return 0}},285022:(e,t,n)=>{var r=n(626393);e.exports=function(e,t,n){for(var i=-1,o=e.criteria,a=t.criteria,s=o.length,u=n.length;++i<s;){var c=r(o[i],a[i]);if(c)return i>=u?c:c*("desc"==n[i]?-1:1)}return e.index-t.index}},899291:(e,t,n)=>{var r=n(498612);e.exports=function(e,t){return function(n,i){if(null==n)return n;if(!r(n))return e(n,i);for(var o=n.length,a=t?o:-1,s=Object(n);(t?a--:++a<o)&&!1!==i(s[a],a,s););return n}}},301499:(e,t,n)=>{var r=n(689162),i=n(3674);e.exports=function(e){for(var t=i(e),n=t.length;n--;){var o=t[n],a=e[o];t[n]=[o,a,r(a)]}return t}},900222:(e,t,n)=>{var r=n(671811),i=n(135694),o=n(701469),a=n(565776),s=n(541780),u=n(240327);e.exports=function(e,t,n){for(var c=-1,l=(t=r(t,e)).length,p=!1;++c<l;){var d=u(t[c]);if(!(p=null!=e&&n(e,d)))break;e=e[d]}return p||++c!=l?p:!!(l=null==e?0:e.length)&&s(l)&&a(d,l)&&(o(e)||i(e))}},137285:(e,t,n)=>{var r=n(562705),i=n(135694),o=n(701469),a=r?r.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||i(e)||!!(a&&e&&e[a])}},115403:(e,t,n)=>{var r=n(701469),i=n(733448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(a.test(e)||!o.test(e)||null!=t&&e in Object(t))}},689162:(e,t,n)=>{var r=n(513218);e.exports=function(e){return e==e&&!r(e)}},542634:e=>{e.exports=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}},624523:(e,t,n)=>{var r=n(288306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},555514:(e,t,n)=>{var r=n(624523),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)})),t}));e.exports=a},240327:(e,t,n)=>{var r=n(733448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},227361:(e,t,n)=>{var r=n(297786);e.exports=function(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}},379095:(e,t,n)=>{var r=n(200013),i=n(900222);e.exports=function(e,t){return null!=e&&i(e,t,r)}},288306:(e,t,n)=>{var r=n(883369);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},139601:(e,t,n)=>{var r=n(840371),i=n(379152),o=n(115403),a=n(240327);e.exports=function(e){return o(e)?r(a(e)):i(e)}},189734:(e,t,n)=>{var r=n(121078),i=n(882689),o=n(105976),a=n(816612),s=o((function(e,t){if(null==e)return[];var n=t.length;return n>1&&a(e,t[0],t[1])?t=[]:n>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),i(e,r(t,1),[])}));e.exports=s},615071:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(487462),i=n(263366),o=n(875068);n(45697);function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n(667294),u=n(973935);const c=!1;var l=n(500220),p="unmounted",d="exited",f="entering",g="entered",v="exiting",m=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=d,r.appearStatus=f):i=g:i=t.unmountOnExit||t.mountOnEnter?p:d,r.state={status:i},r.nextCallback=null,r}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===p?{status:d}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==g&&(t=f):n!==f&&n!==g||(t=v)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===f?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:p})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[u.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||c?this.safeSetState({status:g},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:f},(function(){t.props.onEntering(o,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:g},(function(){t.props.onEntered(o,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.findDOMNode(this);t&&!c?(this.props.onExit(r),this.safeSetState({status:v},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===p)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,i.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(l.Z.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function h(){}m.contextType=l.Z,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},m.UNMOUNTED=p,m.EXITED=d,m.ENTERING=f,m.ENTERED=g,m.EXITING=v;const _=m;var E=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=a(n.className,r):n.setAttribute("class",a(n.className&&n.className.baseVal||"",r)));var n,r}))},x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1];t.removeClasses(i,"exit"),t.addClass(i,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1]?"appear":"enter";t.addClass(i,o,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1]?"appear":"enter";t.removeClasses(i,o),t.addClass(i,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}(0,o.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(r+=" "+i),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,o=n.done;this.appliedClasses[t]={},r&&E(e,r),i&&E(e,i),o&&E(e,o)},n.render=function(){var e=this.props,t=(e.classNames,(0,i.Z)(e,["classNames"]));return s.createElement(_,(0,r.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);x.defaultProps={classNames:""},x.propTypes={};const b=x},500220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(667294).createContext(null)},918301:(e,t,n)=>{n.d(t,{CB:()=>f,y9:()=>d});var r=n(667294),i=n(121151),o=n(214494),a=n(898781),s=n(883119),u=n(785893);const c=({onConfirm:e})=>{const t=(0,a.ZP)(),[n,c]=(0,r.useState)(!1),l=()=>{c(!0),o.Z.create("ApiResource",{url:"/v3/users/email/verify/resend/"}).callCreate()};return(0,u.jsx)(i.ZP,{accessibilityModalLabel:t.bt("Подтвердите свой адрес электронной почты", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,heading:t.bt("Подтвердите свой адрес электронной почты", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,u.jsxs)(s.kC,{justifyContent:"end",gap:{row:2,column:0},children:[n?(0,u.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("Сообщение отправлено", "Email sent", "Button text for verification email being sent", undefined, true),disabled:n,onClick:l}):(0,u.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("Отправить еще раз", "Resend email", "Button text for resending email verification email", undefined, true),disabled:n,onClick:l}),(0,u.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"red",text:t.bt("Понятно", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true),onClick:e})]}),role:"alertdialog",children:(0,u.jsx)(s.xu,{padding:8,children:(0,u.jsx)(s.xv,{align:"center",size:"300",children:t.bt("Защитите свой аккаунт, подтвердив свой адрес электронной почты. Поищите в почтовом ящике, связанном с этим аккаунтом, письмо от нас, чтобы и дальше использовать Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})};var l=n(425288);const{Provider:p,useHook:d}=(0,l.Z)("EmailVerificationReminderModal");function f({children:e}){const[t,n]=(0,r.useState)(!1),i=(0,r.useMemo)((()=>({showEmailVerificationReminderModal:()=>{n(!0)}})),[]);return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(p,{value:i,children:e}),t&&(0,u.jsx)(c,{onConfirm:()=>{n(!1)}})]})}},55259:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(794230),i=n(619937);const o={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},a=e=>{let t={};return e&&(t={objectiveTypes:[e]}),t},s={overview:()=>"/",reporting:e=>{const t=e.objectiveType||null;delete e.objectiveType;const n={...e,...a(t)};return(0,r.Z)("/reporting/campaigns/",n)},reportingAdGroup:e=>{const{campaignId:t,objectiveType:n,showAllEntities:i,adGroupId:s,message:u}=e,c=s?{adGroupIds:[s]}:{},l={campaignIds:[t],...i?o:{},...a(n),...c,message:u};return(0,r.Z)("/reporting/adgroups/",l)},campaign:e=>{const{id:t,objectiveType:n}=e;return(0,r.Z)("/reporting/adgroups/",{campaignIds:[t],...a(n)})},editCampaign:e=>e.isAutomatedCampaign?s.editAutomated({campaignId:e.id,view:"campaign"}):s.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{const{id:t,objectiveType:n,showAllEntities:i,pinPromotionId:s,campaignId:u}=e;if("TEMPORARY_SHOPPING"===n||"CATALOG_SALES"===n)return(0,r.Z)("/reporting/productgroups/",{adGroupIds:[t],...a(n)});{const e=i?o:{},c=u?{campaignIds:[u]}:{},l=s?{pinPromotionIds:[s]}:{};return(0,r.Z)("/reporting/ads/",{adGroupIds:[t],...a(n),...e,...l,...c})}},editAdGroup:e=>e.isAutomatedCampaign?s.editAutomated({campaignId:e.id,view:"campaign"}):s.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{const{id:t,adFilter:n}=e,i=n?{adFilter:n}:{};return(0,r.Z)("/reporting/ads/",{pinPromotionIds:[t],...i})},editPinPromotion:e=>{const t=e.isCreatingPins?{isCreatingPins:!0}:{},n=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return s.editV2({adGroupId:e.adGroupId,view:"ad",...n,...t})},productGroup:e=>{const{id:t,name:n}=e;return(0,r.Z)("/reporting/productgroups/",{productGroupIds:[t],name:n})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",productgroups:()=>"/reporting/productgroups/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>s.pinPromotion(e),campaignMode:e=>(0,r.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:e=>{const{campaignId:t,objectiveType:n,partialCreate:i,catalogsFeedId:o,managedClientId:a,productGroupId:s}=e,u={};return t&&i&&(u.campaignId=t),n&&(u.objectiveType=n),"CATALOG_SALES"===n&&o&&(u.catalogsFeedId=o),s&&(u.productGroupId=s),a&&(u.managedClientId=a),(0,r.Z)("/ads/create/",u)},createAutomated:e=>(0,r.Z)("/automated/ads/create/",e),editV2:e=>(0,r.Z)("/ads/edit/",e),editAutomated:e=>(0,r.Z)("/automated/ads/edit/",e),editDraftCampaign:e=>(0,r.Z)("/ads/edit_draft/",{campaignId:e.campaignId,view:"campaign"}),duplicateCampaign:e=>(0,r.Z)("/ads/duplicate/",e),audiences:e=>(0,r.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{const{page:t,subSection:n,nextStepUrl:o}=e;switch(t){case i.kM.BILLING_HISTORY:return"/billing/history/";case i.kM.ORDER_LINES:return"/billing/order_lines/";case i.kM.PROMOTIONS:return"/billing/promotions/";case i.kM.DOCUMENTS:return"/billing/documents/";case i.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:const e={};return n&&(e.section=n),o&&(e.next_step_link_url=o),(0,r.Z)("/billing/",e)}},bulk:e=>{const{subSection:t,page:n,jobStarted:o}=e||{};switch(n){case i.fm.UPLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/upload_template/",{section:t});case i.fm.DOWNLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/download_template/",{section:t});case i.fm.HISTORY:return(0,r.Z)("/bulk_editor/history/",{section:t,job_started:o});case i.fm.RESOURCES:return(0,r.Z)("/bulk_editor/resources/",{section:t});default:return"/bulk_editor/"}},history:e=>(0,r.Z)("/history/",e),shopping:e=>s.reporting(a("TEMPORARY_SHOPPING")),pinterest_tag:e=>{const{page:t,subSection:n,platform:o}=e;switch(t){case i.qp.PINTEREST_EVENT_HISTORY:return"/conversions/event-history/";case i.qp.CONVERSION_HEALTH:return"/conversions/health/";case i.qp.PINTEREST_TAG:return(0,r.Z)("/conversions/tag/",{subPage:n,platform:o});case i.qp.PINTEREST_TAG_EVENTS:return"/conversions/tag-events/";case i.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case i.qp.CONVERSION_UPLOAD:return(0,r.Z)("/conversions/upload/",{subPage:n});case i.qp.UPLOAD_HISTORY:return(0,r.Z)("/conversions/history/",{subPage:n});case i.qp.PCA_UPLOAD_HISTORY:return(0,r.Z)("/conversions/pca_history/",{subPage:n});case i.qp.PCA_UPLOAD:return(0,r.Z)("/conversions/pca_upload/",{subPage:n});case i.qp.CONVERSIONS_API_MANAGER:return"/conversions/api_manager/";case i.qp.CONVERSIONS_API_MANUAL_SETUP_FLOW:return"/conversions/api_manual_setup/";case i.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case i.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";default:return"/conversions/tag/"}},"pin-builder":e=>(0,r.Z)("/pin-builder/",e),purchases:()=>s.reporting(a("PURCHASE")),awareness_reserved:()=>s.reporting(a("IMPRESSION")),engagement:()=>s.reporting(a("BILLABLE_ENGAGEMENT")),videos:()=>s.reporting(a("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>s.reporting(a("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>s.reporting(a("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>s.reporting(a("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,r.Z)("/reporting/preferences/",e),report_builder:e=>(0,r.Z)("/report-center/builder/",e),report_history:e=>(0,r.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,r.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,r.Z)("/report-center/download/",e),media_planner:()=>"/media_planner/",awareness:()=>s.reporting(a("AWARENESS")),traffic:()=>s.reporting(a("TRAFFIC")),app_installs:()=>s.reporting(a("APP_INSTALL")),catalog_sales:()=>s.reporting(a("CATALOG_SALES")),web_conversion:()=>s.reporting(a("WEB_CONVERSION")),video_view:()=>s.reporting(a("VIDEO_VIEW")),quick_promote:e=>(0,r.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,r.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source"},u=s}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/33297.ru_RU-e7b29262b8095c15.mjs.map