(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[4],{138:function(e,t,a){e.exports={"favorite-action":"weather-details_favorite-action__24u0-","weather-data-container":"weather-details_weather-data-container__1GHlF",dark:"weather-details_dark__3rpdb",light:"weather-details_light__2_u4v","current-weather-data-display":"weather-details_current-weather-data-display__w00Lj",condition:"weather-details_condition__3YIGW",header:"weather-details_header__1ZWRt"}},140:function(e,t,a){"use strict";var c=a(41),n=a(0),r=a(142),i=a.n(r),s=a(143),o=a.n(s),l=a(14),u=a(44),j=a(2);t.a=function(e){var t=e.Temperature,a="dark"===Object(u.a)().currentTheme?l.c:l.d,r=Object(n.useState)(null),s=Object(c.a)(r,2),d=s[0],b=s[1];return Object(n.useEffect)((function(){var e=t.Unit,a=t.Value;b({Unit:e,Value:a})}),[t]),d&&Object(j.jsxs)("div",{className:i.a.root,children:[Object(j.jsxs)("p",{className:"is-size-5",children:[d.Value.toFixed(2)," ",Object(j.jsx)("span",{children:"\xb0"})]}),Object(j.jsx)(o.a,{checked:"C"===d.Unit,onChange:function(e,t){return function(e,t){t.stopPropagation(),b((function(e){return"C"===e.Unit?{Unit:"F",Value:1.8*e.Value+32}:{Unit:"C",Value:(e.Value-32)/1.8}}))}(0,t)},onColor:a,offColor:a,handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,uncheckedHandleIcon:Object(j.jsx)("span",{style:{position:"relative",left:"5px",color:"black"},children:"\u2109"}),checkedHandleIcon:Object(j.jsxs)("span",{style:{position:"relative",left:"5px",color:"black"},children:[" ","\u2103"]}),boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px\r 10px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"react-switch",id:"material-switch"})]})}},141:function(e,t,a){"use strict";t.a=function(e){var t;return e>20?t="warm":e>=15?t="mid":e>10?t="cold":e>0&&(t="ice"),t}},142:function(e,t,a){e.exports={root:"TemperatureDisplay_root__Hhdbz"}},145:function(e,t,a){"use strict";a(0);var c=a(159),n=a(160),r=a(146),i=a.n(r),s=a(32),o=a(2);t.a=function(e){var t=e.header,a=e.cardContent,r=e.cardFooter,l=e.bgClass,u=e.customCardClass,j=e.customStyle,d=e.onCardClick,b=void 0===d?null:d,h=Object(s.a)();return Object(o.jsxs)(c.a,{style:j,onClick:b||null,className:"".concat(i.a.card," ").concat(l," ").concat(null!==u&&void 0!==u?u:""),children:[Object(o.jsx)("div",{className:"".concat(i.a.header," ").concat(i.a[h.palette.type]),children:Object(o.jsx)("p",{children:t})}),Object(o.jsxs)("div",{className:i.a.item,children:[Object(o.jsx)(n.a,{children:a}),r]})]})}},146:function(e,t,a){e.exports={card:"custom-card_card__3m5Ss",header:"custom-card_header__2p7d6",light:"custom-card_light__3b7Ai",dark:"custom-card_dark__3-QbW",item:"custom-card_item__1JupF"}},147:function(e,t,a){"use strict";a(0);var c=a(148),n=a.n(c),r=a(70),i=a.n(r),s=a(37),o=a(161),l=a(138),u=a.n(l),j=a(38),d=a(2);t.a=function(e){var t=e.isItemInFavorite,a=e.currentCityKey,c=Object(j.b)();return Object(d.jsxs)("div",{className:u.a["favorite-action"],children:[t?Object(d.jsx)(i.a,{}):Object(d.jsx)(n.a,{}),Object(d.jsx)(o.a,{onClick:t?function(e){e.stopPropagation(),c(Object(s.m)(a))}:function(e){c(Object(s.a)())},variant:"contained",color:"primary",size:"small",className:"ml-3",children:t?"Remove from favourite":"Add to Favorite"})]})}},162:function(e,t,a){e.exports={root:"forecast_root__2ywH1"}},164:function(e,t,a){e.exports={form:"weatherForm_form__38Lel","search-container":"weatherForm_search-container__1pXqC"}},165:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(38),i=a(37),s=a(138),o=a.n(s),l=a(41),u=a(161),j=a(13),d=a(157),b=a.n(d),h=a(140),O=a(145),m=a(141),f=a(2),x=Object(j.a)({root:{fontSize:"0.8rem",textTransform:"lowercase"}})(u.a),p=function(e){var t=e.forecastData,a=b()(t.Date).format("dddd"),n=t.Temperature,r=n.Minimum,i=n.Maximum,s=Object(c.useState)("Day"),o=Object(l.a)(s,2),j=o[0],d=o[1],p=Object(c.useState)("Min"),v=Object(l.a)(p,2),_=v[0],y=v[1],g=t[j],w=Object(m.a)("Min"===_?r.Value:i.Value),N=Object(f.jsxs)("section",{className:"is-flex",children:[Object(f.jsx)("img",{src:"/weatherIcons/".concat(g.Icon,".png"),alt:"day or night icon"}),Object(f.jsxs)("section",{className:"has-text-centered",children:[Object(f.jsx)("p",{className:"has-text-weight-bold",children:g.IconPhrase}),Object(f.jsx)(x,{size:"small",onClick:function(e){return d((function(e){return"Day"===e?"Night":"Day"}))},variant:"contained",color:"secondary",children:j})]})]}),k=Object(f.jsxs)("section",{children:[Object(f.jsxs)("div",{className:"is-size-6 has-text-centered",children:[_," temperature"]}),Object(f.jsx)(h.a,{Temperature:"Min"===_?r:i})," ",Object(f.jsxs)(u.a,{onClick:function(){y((function(e){return"Min"===e?"Max":"Min"}))},size:"small",variant:"contained",color:"secondary",children:["Show ","Min"===_?"Max":"Min"," temperature"]})]});return Object(f.jsx)(O.a,{bgClass:w,header:a,cardContent:N,cardFooter:k})},v=a(162),_=a.n(v),y=function(){var e=Object(r.c)(i.e);return Object(f.jsx)("div",{className:_.a.root,children:e.map((function(e){return Object(f.jsx)(p,{forecastData:e},e.EpochDate)}))})},g=n.a.memo(y),w=a(163),N=a.n(w);var k=function(){var e=Object(r.c)(i.l),t=e.cityName,a=e.country,c=Object(r.c)(i.d),n=c.Temperature,s=c.WeatherIcon,l=c.WeatherText,u=Object(m.a)(n.Metric.Value);return Object(f.jsxs)("div",{className:"".concat(o.a["current-weather-data-display"]," ").concat(u),children:[Object(f.jsxs)("h2",{className:"is-size-3 is-size-5-mobile",children:[Object(f.jsx)(N.a,{}),t,", ",a]}),Object(f.jsxs)("section",{className:o.a.condition,children:[Object(f.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(f.jsx)("h2",{className:"is-size-2 is-size-6-mobile",children:l}),Object(f.jsx)("figure",{children:Object(f.jsx)("img",{src:"/weatherIcons/".concat(s,".png"),alt:"current weather icon"})})]}),Object(f.jsx)("h3",{children:Object(f.jsx)(h.a,{Temperature:n.Metric})})]})]})},C=a(147),T=a(32);var z=function(){var e=Object(T.a)(),t=Object(r.c)(i.l),a=t.Key,c=t.isSavedToFav;return Object(f.jsxs)("div",{className:"my-3 ".concat(o.a["weather-data-container"]," ").concat(o.a[e.palette.type]," "),children:[Object(f.jsx)(C.a,{currentCityKey:a,isItemInFavorite:c}),Object(f.jsx)("h2",{className:"is-size-3 is-size-5-mobile has-text-centered my-5 has-text-weight-semibold",children:"Current Weater:"}),Object(f.jsx)(k,{}),Object(f.jsx)("h2",{className:"is-size-3 is-size-5-mobile has-text-centered my-5 has-text-weight-semibold",children:"Upcoming 5 days Forecast:"}),Object(f.jsx)(g,{})]})},I=a(71),S=a(18),M=a.n(S),F=a(25),U=a(14),V=function(e,t){switch(t.type){case"INPUT_CHANGE":return Object(I.a)(Object(I.a)({},e),{},{value:t.value});case"INPUT_BLUR":return Object(I.a)(Object(I.a)({},e),{},{isTouched:!0});case"RESET":return{value:"",isTouched:!1};default:return Object(I.a)({},e)}};var E=function(e){var t=Object(c.useReducer)(V,{value:"",isTouched:!1}),a=Object(l.a)(t,2),n=a[0],r=a[1],i=e(n.value),s=!i&&n.isTouched;return{value:n.value,isTouched:n.isTouched,isInputValid:i,onChangeHandler:function(e){r({type:"INPUT_CHANGE",value:e.target.value})},onBlurHandler:function(e){r({type:"INPUT_BLUR"})},hasErrors:s,reset:function(){r({type:"RESET"})}}},H=a(164),D=a.n(H),L=a(189),P=a(191),B=a(52);var G=function(e){return/^[a-z]+$/i.test(e)},R=Object(j.a)((function(e){return{root:{"& label.Mui-focused":{color:"dark"===e.palette.type?"white":"black"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"dark"===e.palette.type?"white":"black"}}}}}))(L.a);var W=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(r.c)(i.f).status,o=Object(c.useState)([]),u=Object(l.a)(o,2),j=u[0],d=u[1],b=E((function(e){return e.trim().length>0})),h=b.value,O=b.onChangeHandler,m=b.onBlurHandler,x=Object(r.b)(),p=function(){return j.length>0};return Object(c.useEffect)((function(){var e=setTimeout(function(){var e=Object(F.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==h.length){e.next=2;break}return e.abrupt("return");case 2:if(G(h)){e.next=5;break}return x(Object(i.k)({message:"Please search in english letters only",type:"warning"})),e.abrupt("return");case 5:return x(Object(i.c)()),n(!1),x(Object(i.o)({status:!0,message:"Getting the cities for you.."})),e.prev=8,e.next=11,Object(B.a)("".concat(U.a,"/locations/v1/cities/autocomplete?apikey=").concat("xysMOmjVDLGQULBGF34P8poaSVK498hk","&q=").concat(h," "));case 11:if(0!==(t=e.sent).length){e.next=14;break}throw Error("Opps!.. we couldnt find the city you asked for. try a different one?");case 14:d(t),x(Object(i.n)()),n(!0),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(8),x(Object(i.n)()),x(Object(i.k)({message:e.t0.message,type:"error"}));case 23:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(){return e.apply(this,arguments)}}(),500);return function(){clearTimeout(e)}}),[h,x]),Object(f.jsxs)("form",{className:D.a.form,children:[Object(f.jsx)("label",{className:"is-size-4",children:"Search for city weather:"}),Object(f.jsx)(P.a,{onFocus:function(e){p()&&n(!0)},onBlur:m,loading:s,options:j,getOptionSelected:function(e,t){return e===t},onChange:function(e,t){return function(e){e&&x(Object(i.i)(e))}(t)},open:a,onOpen:function(e){p()&&n(!0)},onClose:function(e){return n(!1)},renderOption:function(e){return Object(f.jsxs)("span",{children:[e.LocalizedName,",",e.Country.LocalizedName]})},getOptionLabel:function(e){return e.LocalizedName},style:{width:"100%",margin:"1rem 0",zIndex:0},renderInput:function(e){return Object(f.jsx)(R,Object(I.a)(Object(I.a)({},e),{},{label:"For example :Tel Aviv",variant:"outlined",onChange:O}))}})]})},A=a(165),K=a.n(A),J=a(192),q=a(132),Q=a(187),X=a(188),Y=a(166),Z=a.n(Y);function $(e){e.severity;var t=n.a.useState(!0),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(r.b)(),u=Object(r.c)(i.b);return Object(f.jsx)(Q.a,{in:c,children:Object(f.jsx)(X.a,{in:i.b.length>0,timeout:500,children:Object(f.jsx)(J.a,{className:"my-2",severity:u.type,action:Object(f.jsx)(q.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){s(!1),o(Object(i.c)())},children:Object(f.jsx)(Z.a,{fontSize:"inherit"})}),children:u.message})})})}var ee=a(75);t.default=function(){var e=Object(r.c)(i.l),t=Object(r.b)(),a=Object(r.c)(i.b),n=Object(r.c)(i.f),s=n.status,o=n.message;return Object(c.useEffect)((function(){e||t(Object(i.j)())}),[t,e]),Object(f.jsx)("div",{className:K.a.bg,children:Object(f.jsxs)("div",{className:"section container",children:[Object(f.jsx)(W,{}),a&&Object(f.jsx)($,{}),s&&Object(f.jsx)(ee.a,{text:o}),e&&Object(f.jsx)(z,{})]})})}}}]);
//# sourceMappingURL=4.946761a2.chunk.js.map