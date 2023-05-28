"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[8299],{31481:function(t,e,s){var n=s(87537),a=s.n(n),r=s(23645),i=s.n(r)()(a());i.push([t.id,".clear-at-select[data-v-bfc4d14a]{display:flex;margin-bottom:10px;align-items:center}.clear-at-select__label[data-v-bfc4d14a]{margin-right:12px}.clear-at-select__select[data-v-bfc4d14a]{flex-grow:1}","",{version:3,sources:["webpack://./apps/user_status/src/components/ClearAtSelect.vue"],names:[],mappings:"AACA,kCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CAEA,yCACC,iBAAA,CAGD,0CACC,WAAA",sourcesContent:["\n.clear-at-select {\n\tdisplay: flex;\n\tmargin-bottom: 10px;\n\talign-items: center;\n\n\t&__label {\n\t\tmargin-right: 12px;\n\t}\n\n\t&__select {\n\t\tflex-grow: 1;\n\t}\n}\n"],sourceRoot:""}]),e.Z=i},54254:function(t,e,s){var n=s(87537),a=s.n(n),r=s(23645),i=s.n(r)()(a());i.push([t.id,".custom-input[data-v-59f118ca]{display:flex;width:100%}.custom-input__emoji-button[data-v-59f118ca]{min-height:36px;padding:0;border:2px solid var(--color-border-maxcontrast);border-right:none;border-radius:var(--border-radius) 0 0 var(--border-radius)}.custom-input__emoji-button[data-v-59f118ca]:hover{border-color:var(--color-primary-element)}.custom-input__container[data-v-59f118ca]{width:100%}.custom-input__container input[data-v-59f118ca]{width:100%;margin:0;border-radius:0 var(--border-radius) var(--border-radius) 0}","",{version:3,sources:["webpack://./apps/user_status/src/components/CustomMessageInput.vue"],names:[],mappings:"AACA,+BACC,YAAA,CACA,UAAA,CAEA,6CACC,eAAA,CACA,SAAA,CACA,gDAAA,CACA,iBAAA,CACA,2DAAA,CAEA,mDACC,yCAAA,CAIF,0CACC,UAAA,CAEA,gDACC,UAAA,CACA,QAAA,CACA,2DAAA",sourcesContent:["\n.custom-input {\n\tdisplay: flex;\n\twidth: 100%;\n\n\t&__emoji-button {\n\t\tmin-height: 36px;\n\t\tpadding: 0;\n\t\tborder: 2px solid var(--color-border-maxcontrast);\n\t\tborder-right: none;\n\t\tborder-radius: var(--border-radius) 0 0 var(--border-radius);\n\n\t\t&:hover {\n\t\t\tborder-color: var(--color-primary-element);\n\t\t}\n\t}\n\n\t&__container {\n\t\twidth: 100%;\n\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t\tmargin: 0;\n\t\t\tborder-radius: 0 var(--border-radius) var(--border-radius) 0;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),e.Z=i},38490:function(t,e,s){var n=s(87537),a=s.n(n),r=s(23645),i=s.n(r)()(a());i.push([t.id,".user-status-online-select__input[data-v-f8d7a000]{position:absolute;top:auto;left:-10000px;overflow:hidden;width:1px;height:1px}.user-status-online-select__label[data-v-f8d7a000]{position:relative;display:block;margin:8px;padding:8px;padding-left:40px;border:2px solid var(--color-main-background);border-radius:var(--border-radius-large);background-color:var(--color-background-hover);background-position:8px center;background-size:24px}.user-status-online-select__label span[data-v-f8d7a000],.user-status-online-select__label[data-v-f8d7a000]{cursor:pointer}.user-status-online-select__label span[data-v-f8d7a000]{position:absolute;top:calc(50% - 12px);left:8px;display:block;width:24px;height:24px}.user-status-online-select__input:checked+.user-status-online-select__label[data-v-f8d7a000],.user-status-online-select__input:focus+.user-status-online-select__label[data-v-f8d7a000],.user-status-online-select__label[data-v-f8d7a000]:hover{border-color:var(--color-primary)}.user-status-online-select__label[data-v-f8d7a000]:active{border-color:var(--color-border-dark)}.user-status-online-select__subline[data-v-f8d7a000]{display:block;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./apps/user_status/src/components/OnlineStatusSelect.vue"],names:[],mappings:"AAOC,mDACC,iBAAA,CACA,QAAA,CACA,aAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CAGD,mDACC,iBAAA,CACA,aAAA,CACA,UAhBc,CAiBd,WAjBc,CAkBd,iBAAA,CACA,6CAAA,CACA,wCAAA,CACA,8CAAA,CACA,8BAAA,CACA,oBAxBU,CA0BV,2GAEC,cAAA,CAGD,wDACC,iBAAA,CACA,oBAAA,CACA,QAjCa,CAkCb,aAAA,CACA,UApCS,CAqCT,WArCS,CAyCX,iPAGC,iCAAA,CAGD,0DACC,qCAAA,CAGD,qDACC,aAAA,CACA,+BAAA",sourcesContent:["\n@use 'sass:math';\n$icon-size: 24px;\n$label-padding: 8px;\n\n.user-status-online-select {\n\t// Inputs are here for keyboard navigation, they are not visually visible\n\t&__input {\n\t\tposition: absolute;\n\t\ttop: auto;\n\t\tleft: -10000px;\n\t\toverflow: hidden;\n\t\twidth: 1px;\n\t\theight: 1px;\n\t}\n\n\t&__label {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\tmargin: $label-padding;\n\t\tpadding: $label-padding;\n\t\tpadding-left: $icon-size + $label-padding * 2;\n\t\tborder: 2px solid var(--color-main-background);\n\t\tborder-radius: var(--border-radius-large);\n\t\tbackground-color: var(--color-background-hover);\n\t\tbackground-position: $label-padding center;\n\t\tbackground-size: $icon-size;\n\n\t\tspan,\n\t\t& {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\tspan {\n\t\t\tposition: absolute;\n\t\t\ttop: calc(50% - math.div($icon-size, 2));\n\t\t\tleft: $label-padding;\n\t\t\tdisplay: block;\n\t\t\twidth: $icon-size;\n\t\t\theight: $icon-size;\n\t\t}\n\t}\n\n\t&__input:checked + &__label,\n\t&__input:focus + &__label,\n\t&__label:hover {\n\t\tborder-color: var(--color-primary);\n\t}\n\n\t&__label:active {\n\t\tborder-color: var(--color-border-dark);\n\t}\n\n\t&__subline {\n\t\tdisplay: block;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n\n"],sourceRoot:""}]),e.Z=i},44671:function(t,e,s){var n=s(87537),a=s.n(n),r=s(23645),i=s.n(r)()(a());i.push([t.id,'.predefined-status[data-v-c2934592]{display:flex;flex-wrap:nowrap;justify-content:flex-start;flex-basis:100%;border-radius:var(--border-radius);align-items:center;min-height:44px}.predefined-status[data-v-c2934592]:hover,.predefined-status[data-v-c2934592]:focus{background-color:var(--color-background-hover)}.predefined-status[data-v-c2934592]:active{background-color:var(--color-background-dark)}.predefined-status__icon[data-v-c2934592]{flex-basis:40px;text-align:center}.predefined-status__message[data-v-c2934592]{font-weight:bold;padding:0 6px}.predefined-status__clear-at[data-v-c2934592]{opacity:.7}.predefined-status__clear-at[data-v-c2934592]::before{content:" – "}',"",{version:3,sources:["webpack://./PredefinedStatus.vue","webpack://./apps/user_status/src/components/PredefinedStatus.vue"],names:[],mappings:"AAAA,oCCCA,YACC,CAAA,gBACA,CAAA,0BACA,CAAA,eACA,CAAA,kCACA,CAAA,kBACA,CAAA,eACA,CAAA,oFAEA,8CAEC,CAAA,2CAGD,6CACC,CAAA,0CAGD,eACC,CAAA,iBACA,CAAA,6CAGD,gBACC,CAAA,aACA,CAAA,8CAGD,UACC,CAAA,sDAEA,aACC",sourcesContent:['.predefined-status{display:flex;flex-wrap:nowrap;justify-content:flex-start;flex-basis:100%;border-radius:var(--border-radius);align-items:center;min-height:44px}.predefined-status:hover,.predefined-status:focus{background-color:var(--color-background-hover)}.predefined-status:active{background-color:var(--color-background-dark)}.predefined-status__icon{flex-basis:40px;text-align:center}.predefined-status__message{font-weight:bold;padding:0 6px}.predefined-status__clear-at{opacity:.7}.predefined-status__clear-at::before{content:" – "}',"\n.predefined-status {\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\tjustify-content: flex-start;\n\tflex-basis: 100%;\n\tborder-radius: var(--border-radius);\n\talign-items: center;\n\tmin-height: 44px;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t&:active{\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&__icon {\n\t\tflex-basis: 40px;\n\t\ttext-align: center;\n\t}\n\n\t&__message {\n\t\tfont-weight: bold;\n\t\tpadding: 0 6px;\n\t}\n\n\t&__clear-at {\n\t\topacity: .7;\n\n\t\t&::before {\n\t\t\tcontent: ' – ';\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),e.Z=i},9169:function(t,e,s){var n=s(87537),a=s.n(n),r=s(23645),i=s.n(r)()(a());i.push([t.id,".predefined-statuses-list[data-v-fddcc16e]{display:flex;flex-direction:column;margin-bottom:10px}","",{version:3,sources:["webpack://./apps/user_status/src/components/PredefinedStatusesList.vue"],names:[],mappings:"AACA,2CACC,YAAA,CACA,qBAAA,CACA,kBAAA",sourcesContent:["\n.predefined-statuses-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 10px;\n}\n"],sourceRoot:""}]),e.Z=i},46608:function(t,e,s){var n=s(87537),a=s.n(n),r=s(23645),i=s.n(r)()(a());i.push([t.id,".set-status-modal[data-v-2e1411e2]{padding:8px 20px 20px 20px}.set-status-modal__header[data-v-2e1411e2]{text-align:center;font-weight:bold;margin:15px 0}.set-status-modal__online-status[data-v-2e1411e2]{display:grid;grid-template-columns:1fr 1fr}.set-status-modal__custom-input[data-v-2e1411e2]{display:flex;width:100%;margin-bottom:10px}.set-status-modal .status-buttons[data-v-2e1411e2]{display:flex;padding:3px;padding-left:0;gap:3px}@media only screen and (max-width: 500px){.set-status-modal__online-status[data-v-2e1411e2]{grid-template-columns:none !important}}","",{version:3,sources:["webpack://./apps/user_status/src/components/SetStatusModal.vue"],names:[],mappings:"AAEA,mCACC,0BAAA,CAEA,2CACC,iBAAA,CACA,gBAAA,CACA,aAAA,CAGD,kDACC,YAAA,CACA,6BAAA,CAGD,iDACC,YAAA,CACA,UAAA,CACA,kBAAA,CAGD,mDACC,YAAA,CACA,WAAA,CACA,cAAA,CACA,OAAA,CAIF,0CACC,kDACC,qCAAA,CAAA",sourcesContent:["\n\n.set-status-modal {\n\tpadding: 8px 20px 20px 20px;\n\n\t&__header {\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tmargin: 15px 0;\n\t}\n\n\t&__online-status {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n\n\t&__custom-input {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.status-buttons {\n\t\tdisplay: flex;\n\t\tpadding: 3px;\n\t\tpadding-left:0;\n\t\tgap: 3px;\n\t}\n}\n\n@media only screen and (max-width: 500px) {\n\t.set-status-modal__online-status {\n\t\tgrid-template-columns: none !important;\n\t}\n}\n\n"],sourceRoot:""}]),e.Z=i},38165:function(t,e,s){s.r(e),s.d(e,{default:function(){return it}});var n=s(64024),a=s(70110),r=s.n(a),i=s(10861),o=s.n(i),u=s(31352),l=s(84387),c=s(80351),d=s.n(c),A=s(64039),p=function(t){if(null===t)return(0,u.Iu)("user_status","Don't clear");if("end-of"===t.type)switch(t.time){case"day":return(0,u.Iu)("user_status","Today");case"week":return(0,u.Iu)("user_status","This week");default:return null}if("period"===t.type)return d().duration(1e3*t.time).humanize();if("_time"===t.type){var e=d()((0,A.n)()),s=d()(t.time,"X");return d().duration(e.diff(s)).humanize()}return null},f={name:"PredefinedStatus",filters:{clearAtFilter:p},props:{messageId:{type:String,required:!0},icon:{type:String,required:!0},message:{type:String,required:!0},clearAt:{type:Object,required:!1,default:null}},methods:{select:function(){this.$emit("select")}}},m=s(93379),C=s.n(m),b=s(7795),g=s.n(b),_=s(90569),v=s.n(_),h=s(3565),y=s.n(h),x=s(19216),S=s.n(x),k=s(44589),w=s.n(k),I=s(44671),$={};$.styleTagTransform=w(),$.setAttributes=y(),$.insert=v().bind(null,"head"),$.domAPI=g(),$.insertStyleElement=S(),C()(I.Z,$),I.Z&&I.Z.locals&&I.Z.locals;var B=s(51900),P=(0,B.Z)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"predefined-status",attrs:{tabindex:"0"},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.select.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.select.apply(null,arguments)}],click:t.select}},[e("span",{staticClass:"predefined-status__icon"},[t._v("\n\t\t"+t._s(t.icon)+"\n\t")]),t._v(" "),e("span",{staticClass:"predefined-status__message"},[t._v("\n\t\t"+t._s(t.message)+"\n\t")]),t._v(" "),e("span",{staticClass:"predefined-status__clear-at"},[t._v("\n\t\t"+t._s(t._f("clearAtFilter")(t.clearAt))+"\n\t")])])}),[],!1,null,"c2934592",null);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function D(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function O(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?D(Object(s),!0).forEach((function(e){j(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):D(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function j(t,e,s){return(e=function(t){var e=function(t,e){if("object"!==Z(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var n=s.call(t,"string");if("object"!==Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===Z(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var E={name:"PredefinedStatusesList",components:{PredefinedStatus:P.exports},computed:O(O({},(0,s(20629).rn)({predefinedStatuses:function(t){return t.predefinedStatuses.predefinedStatuses}})),{},{hasLoaded:function(){return this.predefinedStatuses.length>0}}),mounted:function(){this.$store.dispatch("loadAllPredefinedStatuses")},methods:{selectStatus:function(t){this.$emit("select-status",t)}}},M=s(9169),T={};T.styleTagTransform=w(),T.setAttributes=y(),T.insert=v().bind(null,"head"),T.domAPI=g(),T.insertStyleElement=S(),C()(M.Z,T),M.Z&&M.Z.locals&&M.Z.locals;var G=(0,B.Z)(E,(function(){var t=this,e=t._self._c;return t.hasLoaded?e("div",{staticClass:"predefined-statuses-list"},t._l(t.predefinedStatuses,(function(s){return e("PredefinedStatus",{key:s.id,attrs:{"message-id":s.id,icon:s.icon,message:s.message,"clear-at":s.clearAt},on:{select:function(e){return t.selectStatus(s)}}})})),1):e("div",{staticClass:"predefined-statuses-list"},[e("div",{staticClass:"icon icon-loading-small"})])}),[],!1,null,"fddcc16e",null).exports,q=s(21968),z=s.n(q),N={name:"CustomMessageInput",components:{NcButton:o(),NcEmojiPicker:z()},props:{icon:{type:String,default:"😀"},message:{type:String,required:!0,default:function(){return""}},disabled:{type:Boolean,default:!1}},emits:["change","submit","icon-selected"],computed:{visibleIcon:function(){return this.icon||"😀"}},methods:{focus:function(){this.$refs.input.focus()},onKeyup:function(t){this.$emit("change",t.target.value)},onChange:function(t){this.$emit("submit",t.target.value)},setIcon:function(t){this.$emit("select-icon",t)}}},R=s(54254),U={};U.styleTagTransform=w(),U.setAttributes=y(),U.insert=v().bind(null,"head"),U.domAPI=g(),U.insertStyleElement=S(),C()(R.Z,U),R.Z&&R.Z.locals&&R.Z.locals;var Y=(0,B.Z)(N,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-input"},[e("NcEmojiPicker",{attrs:{container:".custom-input"},on:{select:t.setIcon}},[e("NcButton",{staticClass:"custom-input__emoji-button",attrs:{type:"tertiary"}},[t._v("\n\t\t\t"+t._s(t.visibleIcon)+"\n\t\t")])],1),t._v(" "),e("div",{staticClass:"custom-input__container"},[e("label",{staticClass:"hidden-visually",attrs:{for:"user_status_message"}},[t._v("\n\t\t\t"+t._s(t.t("user_status","What is your status?"))+"\n\t\t")]),t._v(" "),e("input",{ref:"input",attrs:{id:"user_status_message",maxlength:"80",disabled:t.disabled,placeholder:t.$t("user_status","What is your status?"),type:"text"},domProps:{value:t.message},on:{change:t.onChange,keyup:t.onKeyup,paste:t.onKeyup}})])],1)}),[],!1,null,"59f118ca",null).exports,L=s(36456),W={name:"ClearAtSelect",components:{NcSelect:s.n(L)()},props:{clearAt:{type:Object,default:null}},data:function(){return{options:[{label:(0,u.Iu)("user_status","Don't clear"),clearAt:null},{label:(0,u.Iu)("user_status","30 minutes"),clearAt:{type:"period",time:1800}},{label:(0,u.Iu)("user_status","1 hour"),clearAt:{type:"period",time:3600}},{label:(0,u.Iu)("user_status","4 hours"),clearAt:{type:"period",time:14400}},{label:(0,u.Iu)("user_status","Today"),clearAt:{type:"end-of",time:"day"}},{label:(0,u.Iu)("user_status","This week"),clearAt:{type:"end-of",time:"week"}}]}},computed:{option:function(){return{clearAt:this.clearAt,label:p(this.clearAt)}}},methods:{select:function(t){t&&this.$emit("select-clear-at",t.clearAt)}}},F=s(31481),K={};K.styleTagTransform=w(),K.setAttributes=y(),K.insert=v().bind(null,"head"),K.domAPI=g(),K.insertStyleElement=S(),C()(F.Z,K),F.Z&&F.Z.locals&&F.Z.locals;var Q=(0,B.Z)(W,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"clear-at-select"},[e("label",{staticClass:"clear-at-select__label",attrs:{for:"clearStatus"}},[t._v("\n\t\t"+t._s(t.$t("user_status","Clear status after"))+"\n\t")]),t._v(" "),e("NcSelect",{staticClass:"clear-at-select__select",attrs:{"input-id":"clearStatus",options:t.options,value:t.option,clearable:!1,placement:"top"},on:{"option:selected":t.select}})],1)}),[],!1,null,"bfc4d14a",null).exports,X={name:"OnlineStatusSelect",props:{checked:{type:Boolean,default:!1},icon:{type:String,required:!0},type:{type:String,required:!0},label:{type:String,required:!0},subline:{type:String,default:null}},computed:{id:function(){return"user-status-online-status-".concat(this.type)}},methods:{onChange:function(){this.$emit("select",this.type)}}},V=s(38490),H={};H.styleTagTransform=w(),H.setAttributes=y(),H.insert=v().bind(null,"head"),H.domAPI=g(),H.insertStyleElement=S(),C()(V.Z,H),V.Z&&V.Z.locals&&V.Z.locals;var J=(0,B.Z)(X,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-status-online-select"},[e("input",{staticClass:"user-status-online-select__input",attrs:{id:t.id,type:"radio",name:"user-status-online"},domProps:{checked:t.checked},on:{change:t.onChange}}),t._v(" "),e("label",{staticClass:"user-status-online-select__label",attrs:{for:t.id}},[t._v("\n\t\t"+t._s(t.label)+"\n\t\t"),e("span",{class:t.icon,attrs:{role:"img"}}),t._v(" "),e("em",{staticClass:"user-status-online-select__subline"},[t._v(t._s(t.subline))])])])}),[],!1,null,"f8d7a000",null).exports,tt=s(25108);function et(t,e,s,n,a,r,i){try{var o=t[r](i),u=o.value}catch(t){return void s(t)}o.done?e(u):Promise.resolve(u).then(n,a)}function st(t){return function(){var e=this,s=arguments;return new Promise((function(n,a){var r=t.apply(e,s);function i(t){et(r,n,a,i,o,"next",t)}function o(t){et(r,n,a,i,o,"throw",t)}i(void 0)}))}}var nt={name:"SetStatusModal",components:{ClearAtSelect:Q,CustomMessageInput:Y,NcModal:r(),OnlineStatusSelect:J,PredefinedStatusesList:G,NcButton:o()},mixins:[l.Z],data:function(){return{clearAt:null,icon:null,message:"",messageId:"",isSavingStatus:!1,statuses:[{type:"online",label:(0,u.Iu)("user_status","Online"),icon:"icon-user-status-online"},{type:"away",label:(0,u.Iu)("user_status","Away"),icon:"icon-user-status-away"},{type:"dnd",label:(0,u.Iu)("user_status","Do not disturb"),subline:(0,u.Iu)("user_status","Mute all notifications"),icon:"icon-user-status-dnd"},{type:"invisible",label:(0,u.Iu)("user_status","Invisible"),subline:(0,u.Iu)("user_status","Appear offline"),icon:"icon-user-status-invisible"}]}},mounted:function(){this.messageId=this.$store.state.userStatus.messageId,this.icon=this.$store.state.userStatus.icon,this.message=this.$store.state.userStatus.message||"",null!==this.$store.state.userStatus.clearAt&&(this.clearAt={type:"_time",time:this.$store.state.userStatus.clearAt})},methods:{closeModal:function(){this.$emit("close")},setIcon:function(t){var e=this;this.messageId=null,this.icon=t,this.$nextTick((function(){e.$refs.customMessageInput.focus()}))},setMessage:function(t){this.messageId=null,this.message=t},setClearAt:function(t){this.clearAt=t},selectPredefinedMessage:function(t){this.messageId=t.id,this.clearAt=t.clearAt,this.icon=t.icon,this.message=t.message},saveStatus:function(){var t=this;return st(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isSavingStatus){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,t.isSavingStatus=!0,void 0===t.messageId||null===t.messageId){e.next=9;break}return e.next=7,t.$store.dispatch("setPredefinedMessage",{messageId:t.messageId,clearAt:t.clearAt});case 7:e.next=11;break;case 9:return e.next=11,t.$store.dispatch("setCustomMessage",{message:t.message,icon:t.icon,clearAt:t.clearAt});case 11:e.next=19;break;case 13:return e.prev=13,e.t0=e.catch(2),(0,n.x2)(t.$t("user_status","There was an error saving the status")),tt.debug(e.t0),t.isSavingStatus=!1,e.abrupt("return");case 19:t.isSavingStatus=!1,t.closeModal();case 21:case"end":return e.stop()}}),e,null,[[2,13]])})))()},clearStatus:function(){var t=this;return st(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isSavingStatus=!0,e.next=4,t.$store.dispatch("clearMessage");case 4:e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),(0,n.x2)(t.$t("user_status","There was an error clearing the status")),tt.debug(e.t0),t.isSavingStatus=!1,e.abrupt("return");case 12:t.isSavingStatus=!1,t.closeModal();case 14:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},at=s(46608),rt={};rt.styleTagTransform=w(),rt.setAttributes=y(),rt.insert=v().bind(null,"head"),rt.domAPI=g(),rt.insertStyleElement=S(),C()(at.Z,rt),at.Z&&at.Z.locals&&at.Z.locals;var it=(0,B.Z)(nt,(function(){var t=this,e=t._self._c;return e("NcModal",{attrs:{size:"normal",title:t.$t("user_status","Set status")},on:{close:t.closeModal}},[e("div",{staticClass:"set-status-modal"},[e("div",{staticClass:"set-status-modal__header"},[e("h2",[t._v(t._s(t.$t("user_status","Online status")))])]),t._v(" "),e("div",{staticClass:"set-status-modal__online-status"},t._l(t.statuses,(function(s){return e("OnlineStatusSelect",t._b({key:s.type,attrs:{checked:s.type===t.statusType},on:{select:t.changeStatus}},"OnlineStatusSelect",s,!1))})),1),t._v(" "),e("div",{staticClass:"set-status-modal__header"},[e("h2",[t._v(t._s(t.$t("user_status","Status message")))])]),t._v(" "),e("div",{staticClass:"set-status-modal__custom-input"},[e("CustomMessageInput",{ref:"customMessageInput",attrs:{icon:t.icon,message:t.message},on:{change:t.setMessage,submit:t.saveStatus,"select-icon":t.setIcon}})],1),t._v(" "),e("PredefinedStatusesList",{on:{"select-status":t.selectPredefinedMessage}}),t._v(" "),e("ClearAtSelect",{attrs:{"clear-at":t.clearAt},on:{"select-clear-at":t.setClearAt}}),t._v(" "),e("div",{staticClass:"status-buttons"},[e("NcButton",{attrs:{wide:!0,type:"tertiary",text:t.$t("user_status","Clear status message"),disabled:t.isSavingStatus},on:{click:t.clearStatus}},[t._v("\n\t\t\t\t"+t._s(t.$t("user_status","Clear status message"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{wide:!0,type:"primary",text:t.$t("user_status","Set status message"),disabled:t.isSavingStatus},on:{click:t.saveStatus}},[t._v("\n\t\t\t\t"+t._s(t.$t("user_status","Set status message"))+"\n\t\t\t")])],1)],1)])}),[],!1,null,"2e1411e2",null).exports}}]);
//# sourceMappingURL=user-status-modal-8299.js.map?v=b7313f47cc9877634666