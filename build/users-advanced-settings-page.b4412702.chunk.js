"use strict";(self.webpackChunkstrapitutorial=self.webpackChunkstrapitutorial||[]).push([[9460],{98352:(W,T,t)=>{t.r(T),t.d(T,{default:()=>se});var e=t(67294),b=t(23724),u=t(97132),P=t(80831),n=t(68547),O=t(14087),S=t(185),g=t(67838),h=t(49066),A=t(29728),w=t(35961),B=t(7681),s=t(91216),d=t(82562),l=t(72735),p=t(11276),M=t(74571),X=t(85018),H=t(81912),c=t(89031);const Y=[{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,c.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,c.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,c.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var L=t(53209);const a=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),i=L.Ry().shape({email_confirmation_redirection:L.nK().when("email_confirmation",{is:!0,then:L.Z_().matches(a).required(),otherwise:L.Z_().nullable()}),email_reset_password:L.Z_(n.translatedErrors.string).matches(a,n.translatedErrors.regex).nullable()});var o=(m,f,v)=>new Promise((U,I)=>{var z=E=>{try{D(v.next(E))}catch(F){I(F)}},K=E=>{try{D(v.throw(E))}catch(F){I(F)}},D=E=>E.done?U(E.value):Promise.resolve(E.value).then(z,K);D((v=v.apply(m,f)).next())});const y=()=>o(void 0,null,function*(){const{data:m}=yield c.be.get((0,c.Gc)("advanced"));return m}),x=m=>c.be.put((0,c.Gc)("advanced"),m);var C=Object.defineProperty,G=Object.defineProperties,J=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,q=(m,f,v)=>f in m?C(m,f,{enumerable:!0,configurable:!0,writable:!0,value:v}):m[f]=v,k=(m,f)=>{for(var v in f||(f={}))V.call(f,v)&&q(m,v,f[v]);if($)for(var v of $(f))Q.call(f,v)&&q(m,v,f[v]);return m},ee=(m,f)=>G(m,J(f)),te=(m,f,v)=>new Promise((U,I)=>{var z=E=>{try{D(v.next(E))}catch(F){I(F)}},K=E=>{try{D(v.throw(E))}catch(F){I(F)}},D=E=>E.done?U(E.value):Promise.resolve(E.value).then(z,K);D((v=v.apply(m,f)).next())});const ie=()=>e.createElement(n.CheckPagePermissions,{permissions:H.Z.readAdvancedSettings},e.createElement(oe,null)),oe=()=>{const{formatMessage:m}=(0,u.useIntl)(),f=(0,n.useNotification)(),{lockApp:v,unlockApp:U}=(0,n.useOverlayBlocker)(),{notifyStatus:I}=(0,O.G)(),z=(0,b.useQueryClient)();(0,n.useFocusWhenNavigate)();const K=(0,e.useMemo)(()=>({update:H.Z.updateAdvancedSettings}),[]),{isLoading:D,allowedActions:{canUpdate:E}}=(0,n.useRBAC)(K),{status:F,data:ae}=(0,b.useQuery)("advanced",()=>y(),{onSuccess(){I(m({id:(0,c.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){f({type:"warning",message:{id:(0,c.OB)("notification.error"),defaultMessage:"An error occured"}})}}),le=D||F!=="success",ne=(0,b.useMutation)(j=>x(j),{onSuccess(){return te(this,null,function*(){yield z.invalidateQueries("advanced"),f({type:"success",message:{id:(0,c.OB)("notification.success.saved"),defaultMessage:"Saved"}}),U()})},onError(){f({type:"warning",message:{id:(0,c.OB)("notification.error"),defaultMessage:"An error occured"}}),U()},refetchActive:!0}),{isLoading:de}=ne,ce=j=>te(void 0,null,function*(){v();const N=j.email_confirmation?j.email_confirmation_redirection:"";yield ne.mutateAsync(ee(k({},j),{email_confirmation_redirection:N}))});return le?e.createElement(S.o,{"aria-busy":"true"},e.createElement(n.SettingsPageTitle,{name:m({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(g.T,{title:m({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(h.D,null,e.createElement(n.LoadingIndicatorPage,null))):e.createElement(S.o,{"aria-busy":de},e.createElement(n.SettingsPageTitle,{name:m({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(P.Formik,{onSubmit:ce,initialValues:ae.settings,validateOnChange:!1,validationSchema:i,enableReinitialize:!0},({errors:j,values:N,handleChange:re,isSubmitting:ue})=>e.createElement(n.Form,null,e.createElement(g.T,{title:m({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(A.z,{loading:ue,type:"submit",disabled:!E,startIcon:e.createElement(X.Z,null),size:"S"},m({id:"global.save",defaultMessage:"Save"}))}),e.createElement(h.D,null,e.createElement(w.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(B.K,{spacing:4},e.createElement(l.Z,{variant:"delta",as:"h2"},m({id:"global.settings",defaultMessage:"Settings"})),e.createElement(p.r,{gap:6},e.createElement(M.P,{col:6,s:12},e.createElement(s.P,{label:m({id:(0,c.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:N.default_role,hint:m({id:(0,c.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:R=>re({target:{name:"default_role",value:R}})},ae.roles.map(R=>e.createElement(d.W,{key:R.type,value:R.type},R.name)))),Y.map(R=>{let _=N[R.name];return _||(_=R.type==="bool"?!1:""),e.createElement(M.P,k({key:R.name},R.size),e.createElement(n.GenericInput,ee(k({},R),{value:_,error:j[R.name],disabled:R.name==="email_confirmation_redirection"&&N.email_confirmation===!1,onChange:re})))}))))))))},se=ie},46979:(W,T,t)=>{t.d(T,{Z:()=>S});var e=t(9669),b=t.n(e),u=t(68547),P=t.n(u),n=(g,h,A)=>new Promise((w,B)=>{var s=p=>{try{l(A.next(p))}catch(M){B(M)}},d=p=>{try{l(A.throw(p))}catch(M){B(M)}},l=p=>p.done?w(p.value):Promise.resolve(p.value).then(s,d);l((A=A.apply(g,h)).next())});const O=b().create({baseURL:""});O.interceptors.request.use(g=>n(void 0,null,function*(){return g.headers={Authorization:`Bearer ${u.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},g}),g=>{Promise.reject(g)}),O.interceptors.response.use(g=>g,g=>{var h;throw((h=g.response)==null?void 0:h.status)===401&&(u.auth.clearAppStorage(),window.location.reload()),g});const S=O},89031:(W,T,t)=>{t.d(T,{be:()=>e.Z,YX:()=>P,Gc:()=>S,OB:()=>g.Z});var e=t(46979),b=t(96486);const P=h=>Object.keys(h).reduce((A,w)=>{const B=h[w].controllers,s=Object.keys(B).reduce((d,l)=>((0,b.isEmpty)(B[l])||(d[l]=B[l]),d),{});return(0,b.isEmpty)(s)||(A[w]={controllers:s}),A},{});var n=t(31498);const S=h=>`/${n.Z}/${h}`;var g=t(84757)},49066:(W,T,t)=>{t.d(T,{D:()=>P});var e=t(67294),b=t(45697),u=t(35961);const P=({children:n})=>e.createElement(u.x,{paddingLeft:10,paddingRight:10},n);P.propTypes={children:b.node.isRequired}},67838:(W,T,t)=>{t.d(T,{A:()=>L,T:()=>Z});var e=t(67294),b=t(71893),u=t(45697),P=t(72735),n=t(35961),O=t(46273);const S=a=>{const r=(0,e.useRef)(null),[i,o]=(0,e.useState)(!0),y=([x])=>{o(x.isIntersecting)};return(0,e.useEffect)(()=>{const x=r.current,C=new IntersectionObserver(y,a);return x&&C.observe(r.current),()=>{x&&C.disconnect()}},[r,a]),[r,i]};var g=t(98402);const h=(a,r)=>{const i=(0,g.useCallbackRef)(r);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(i);return Array.isArray(a)?a.forEach(y=>{y.current&&o.observe(y.current)}):a.current&&o.observe(a.current),()=>{o.disconnect()}},[a,i])};var A=Object.defineProperty,w=Object.defineProperties,B=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(a,r,i)=>r in a?A(a,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[r]=i,M=(a,r)=>{for(var i in r||(r={}))d.call(r,i)&&p(a,i,r[i]);if(s)for(var i of s(r))l.call(r,i)&&p(a,i,r[i]);return a},X=(a,r)=>w(a,B(r)),H=(a,r)=>{var i={};for(var o in a)d.call(a,o)&&r.indexOf(o)<0&&(i[o]=a[o]);if(a!=null&&s)for(var o of s(a))r.indexOf(o)<0&&l.call(a,o)&&(i[o]=a[o]);return i};const c=()=>{const a=(0,e.useRef)(null),[r,i]=(0,e.useState)(null),[o,y]=S({root:null,rootMargin:"0px",threshold:0});return h(o,()=>{o.current&&i(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{a.current&&i(a.current.getBoundingClientRect())},[a]),{containerRef:o,isVisible:y,baseHeaderLayoutRef:a,headerSize:r}},Z=a=>{const{containerRef:r,isVisible:i,baseHeaderLayoutRef:o,headerSize:y}=c();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:y==null?void 0:y.height},ref:r},i&&e.createElement(L,M({ref:o},a))),!i&&e.createElement(L,X(M({},a),{sticky:!0,width:y==null?void 0:y.width})))};Z.displayName="HeaderLayout";const Y=(0,b.default)(n.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${a=>a.width}px;
  z-index: 4;
  box-shadow: ${({theme:a})=>a.shadows.tableShadow};
`,L=e.forwardRef((a,r)=>{var i=a,{navigationAction:o,primaryAction:y,secondaryAction:x,subtitle:C,title:G,sticky:J,width:$}=i,V=H(i,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const Q=typeof C=="string";return J?e.createElement(Y,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:$,"data-strapi-header-sticky":!0},e.createElement(O.k,{justifyContent:"space-between"},e.createElement(O.k,null,o&&e.createElement(n.x,{paddingRight:3},o),e.createElement(n.x,null,e.createElement(P.Z,M({variant:"beta",as:"h1"},V),G),Q?e.createElement(P.Z,{variant:"pi",textColor:"neutral600"},C):C),x?e.createElement(n.x,{paddingLeft:4},x):null),e.createElement(O.k,null,y?e.createElement(n.x,{paddingLeft:2},y):void 0))):e.createElement(n.x,{ref:r,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:o?6:8,background:"neutral100","data-strapi-header":!0},o?e.createElement(n.x,{paddingBottom:2},o):null,e.createElement(O.k,{justifyContent:"space-between"},e.createElement(O.k,null,e.createElement(P.Z,M({as:"h1",variant:"alpha"},V),G),x?e.createElement(n.x,{paddingLeft:4},x):null),y),Q?e.createElement(P.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},C):C)});L.displayName="BaseHeaderLayout",L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},L.propTypes={navigationAction:u.node,primaryAction:u.node,secondaryAction:u.node,sticky:u.bool,subtitle:u.oneOfType([u.string,u.node]),title:u.string.isRequired,width:u.number},Z.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},Z.propTypes={navigationAction:u.node,primaryAction:u.node,secondaryAction:u.node,subtitle:u.oneOfType([u.string,u.node]),title:u.string.isRequired}},185:(W,T,t)=>{t.d(T,{o:()=>B});var e=t(67294),b=t(45697),u=t(71893),P=Object.defineProperty,n=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,g=(s,d,l)=>d in s?P(s,d,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[d]=l,h=(s,d)=>{for(var l in d||(d={}))O.call(d,l)&&g(s,l,d[l]);if(n)for(var l of n(d))S.call(d,l)&&g(s,l,d[l]);return s},A=(s,d)=>{var l={};for(var p in s)O.call(s,p)&&d.indexOf(p)<0&&(l[p]=s[p]);if(s!=null&&n)for(var p of n(s))d.indexOf(p)<0&&S.call(s,p)&&(l[p]=s[p]);return l};const w=u.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,B=s=>{var d=s,{labelledBy:l}=d,p=A(d,["labelledBy"]);const M=l||"main-content-title";return e.createElement(w,h({"aria-labelledby":M,id:"main-content",tabIndex:-1},p))};B.defaultProps={labelledBy:void 0},B.propTypes={labelledBy:b.string}}}]);
