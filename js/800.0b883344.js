"use strict";(self["webpackChunkvue_w7"]=self["webpackChunkvue_w7"]||[]).push([[800],{6800:function(e,t,o){o.r(t),o.d(t,{default:function(){return se}});var n=o(6252),a=o(3577),s=o(9963);const i={class:"container py-4"},l=(0,n._)("h2",null,"優惠券",-1),p={class:"text-end"},d={class:"table table-hover mt-3 align-middle"},c=(0,n._)("thead",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",{class:"text-center"},"折扣"),(0,n._)("th",{class:"text-center"},"期限"),(0,n._)("th",{class:"text-center"},"啟用"),(0,n._)("th",{class:"text-center"},"編輯")],-1),u={class:"text-center"},h={class:"text-center"},r={class:"text-center"},m={class:"form-check form-switch d-flex justify-content-center"},_=["id","onUpdate:modelValue","onChange"],g=["for"],b={key:0},w={key:1},f={class:"text-center"},y=["onClick"],v=["onClick"];function T(e,t,o,T,k,C){const M=(0,n.up)("v-loading"),x=(0,n.up)("pagination"),D=(0,n.up)("coupon-modal"),$=(0,n.up)("del-modal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(M,{active:this.isLoading,loader:"dots","z-index":1e3},null,8,["active"]),(0,n._)("div",i,[l,(0,n._)("div",p,[(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=e=>C.openModal("new"))}," + 新增優惠券 ")]),(0,n._)("table",d,[c,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.coupons,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,a.zw)(e.title),1),(0,n._)("td",u,(0,a.zw)(e.percent/10)+" 折",1),(0,n._)("td",h," ~ "+(0,a.zw)(new Date(1e3*e.due_date).toLocaleDateString()),1),(0,n._)("td",r,[(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{class:"form-check-input me-1",type:"checkbox",role:"switch",id:e.id,"onUpdate:modelValue":t=>e.is_enabled=t,"true-value":1,"false-value":0,onChange:t=>C.updateIsEnabled(e)},null,40,_),[[s.e8,e.is_enabled]]),(0,n._)("label",{class:"form-check-label",for:e.id},[e.is_enabled?((0,n.wg)(),(0,n.iD)("span",b,"啟用")):((0,n.wg)(),(0,n.iD)("span",w,"不啟用"))],8,g)])]),(0,n._)("td",f,[(0,n._)("button",{type:"button",class:"btn btn-primary me-1",onClick:t=>C.openModal("edit",e)}," 編輯 ",8,y),(0,n._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>C.openModal("del",e)}," 刪除 ",8,v)])])))),128))])]),(0,n.Wm)(x,{pagination:k.pagination,onGetData:C.getCoupons},null,8,["pagination","onGetData"]),(0,n.Wm)(D,{coupon:k.couponTemp,"is-new":k.isNew,onUpdateCoupon:C.updateCoupon,ref:"couponModal"},null,8,["coupon","is-new","onUpdateCoupon"]),(0,n.Wm)($,{item:k.couponTemp,onDelItem:C.delCoupon,ref:"delModal"},null,8,["item","onDelItem"])])],64)}var k=o(7424),C=o.n(k),M=o(1407);const x={class:"modal",tabindex:"-1",ref:"modal"},D={class:"modal-dialog"},$={class:"modal-content"},S={class:"modal-header bg-dark"},L={class:"modal-title text-white"},U={key:0},N={key:1},V=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),I={class:"modal-body"},z={class:"mb-3"},W=(0,n._)("label",{for:"title",class:"form-label"},"名稱",-1),Z={class:"mb-3"},E=(0,n._)("label",{for:"code",class:"form-label"},"優惠碼",-1),G={class:"mb-3"},H=(0,n._)("label",{for:"percent",class:"form-label"},"折扣",-1),Y={class:"mb-3"},j=(0,n._)("label",{for:"due_date",class:"form-label"},"期限",-1),K={class:"form-check form-switch"},O=["for"],P={key:0},q={key:1},A={class:"modal-footer"},B=(0,n._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),F={key:0},J={key:1};function Q(e,t,o,a,i,l){return(0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("div",D,[(0,n._)("div",$,[(0,n._)("div",S,[(0,n._)("h5",L,[o.isNew?((0,n.wg)(),(0,n.iD)("span",U,"新增優惠券")):((0,n.wg)(),(0,n.iD)("span",N,"編輯優惠券"))]),V]),(0,n._)("div",I,[(0,n._)("div",z,[W,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入優惠券名稱","onUpdate:modelValue":t[0]||(t[0]=e=>i.couponTemp.title=e)},null,512),[[s.nr,i.couponTemp.title]])]),(0,n._)("div",Z,[E,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[1]||(t[1]=e=>i.couponTemp.code=e)},null,512),[[s.nr,i.couponTemp.code]])]),(0,n._)("div",G,[H,(0,n.wy)((0,n._)("input",{type:"number",min:"0",max:"100",class:"form-control",id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[2]||(t[2]=e=>i.couponTemp.percent=e)},null,512),[[s.nr,i.couponTemp.percent]])]),(0,n._)("div",Y,[j,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[3]||(t[3]=e=>i.due_date=e)},null,512),[[s.nr,i.due_date]])]),(0,n._)("div",K,[(0,n.wy)((0,n._)("input",{class:"form-check-input me-1",type:"checkbox",role:"switch",id:"couponTemp.id","onUpdate:modelValue":t[4]||(t[4]=e=>i.couponTemp.is_enabled=e),"true-value":1,"false-value":0},null,512),[[s.e8,i.couponTemp.is_enabled]]),(0,n._)("label",{class:"form-check-label",for:i.couponTemp.id},[i.couponTemp.is_enabled?((0,n.wg)(),(0,n.iD)("span",P,"啟用")):((0,n.wg)(),(0,n.iD)("span",q,"不啟用"))],8,O)])]),(0,n._)("div",A,[B,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>l.updateCoupon&&l.updateCoupon(...e))},[o.isNew?((0,n.wg)(),(0,n.iD)("span",F,"新增")):((0,n.wg)(),(0,n.iD)("span",J,"儲存"))])])])])],512)}var R={props:["coupon","isNew"],data(){return{couponTemp:{is_enabled:0},due_date:"",modal:{}}},watch:{coupon(){this.couponTemp=this.coupon,this.due_date=new Date(1e3*this.couponTemp.due_date).toISOString().split("T")[0]},due_date(){this.couponTemp.due_date=new Date(this.due_date).getTime()/1e3}},methods:{updateCoupon(){console.log(this.couponTemp),this.$emit("update-coupon",this.couponTemp)}},mounted(){this.modal=this.$refs.modal}},X=o(3744);const ee=(0,X.Z)(R,[["render",Q]]);var te=ee,oe=o(5331),ne={components:{Pagination:M.Z,CouponModal:te,DelModal:oe.Z},data(){return{coupons:[],pagination:{},couponTemp:{is_enabled:0},due_date:"",couponModal:{},delModal:{},isNew:!0,isLoading:!1}},watch:{due_date(){this.couponTemp.due_date=new Date(this.due_date).getTime()/1e3}},methods:{getCoupons(e=1){const t=`https://vue3-course-api.hexschool.io/v2/api/yunei/admin/coupons?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{this.isLoading=!1,this.coupons=e.data.coupons,this.pagination=e.data.pagination})).catch((e=>{this.$httpMessageState(e.response,e.response.data.message),this.isLoading=!1}))},openModal(e,t){"new"===e?(this.isNew=!0,this.couponTemp={is_enabled:0,due_date:(new Date).getTime()/1e3},this.couponModal.show()):"edit"===e?(this.isNew=!1,this.couponTemp={...t},this.couponModal.show()):"del"===e&&(this.couponTemp={...t},this.delModal.show())},updateCoupon(){let e=`https://vue3-course-api.hexschool.io/v2/api/yunei/admin/coupon/${this.couponTemp.id}`,t="put",o=`更新 ${this.couponTemp.title} 優惠券`;this.isNew&&(e="https://vue3-course-api.hexschool.io/v2/api/yunei/admin/coupon",t="post",o=`新增 ${this.couponTemp.title} 優惠券`),this.$http[t](e,{data:this.couponTemp}).then((e=>{this.getCoupons(this.pagination.current_page),this.couponModal.hide(),this.$httpMessageState(e,o)})).catch((e=>{this.$httpMessageState(e.response,e.response.data.message)}))},updateIsEnabled(e){this.couponTemp={...e};const t=`https://vue3-course-api.hexschool.io/v2/api/yunei/admin/coupon/${this.couponTemp.id}`;this.isLoading=!0,this.$http.put(t,{data:this.couponTemp}).then((e=>{this.isLoading=!1,this.$httpMessageState(e,`更新 ${this.couponTemp.title} 優惠券`)})).catch((e=>{this.isLoading=!1,this.$httpMessageState(e.response,e.response.data.message),this.getCoupons(this.pagination.current_page)}))},delCoupon(e){const t=`https://vue3-course-api.hexschool.io/v2/api/yunei/admin/coupon/${this.couponTemp.id}`;this.$http.delete(t,{data:e}).then((e=>{this.$httpMessageState(e,`刪除 ${this.couponTemp.title} 優惠券`),this.delModal.hide(),this.getCoupons(this.pagination.current_page),console.log(e.data)})).catch((e=>{this.$httpMessageState(e.response,e.response.data.message),this.delModal.hide()}))}},mounted(){this.getCoupons(),this.couponModal=new(C())(this.$refs.couponModal.modal),this.delModal=new(C())(this.$refs.delModal.modal)}};const ae=(0,X.Z)(ne,[["render",T]]);var se=ae}}]);
//# sourceMappingURL=800.0b883344.js.map