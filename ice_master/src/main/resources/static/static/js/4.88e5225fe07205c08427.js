webpackJsonp([4],{"8tWy":function(t,e,l){"use strict";function a(t){if(""==t)return null;var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+":"+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}Object.defineProperty(e,"__esModule",{value:!0});var i={components:{ElForm:l("xrpo").a},data:function(){return{totalCount:0,list:[],listLoading:!1,listQuery:{pageNum:1,pageRow:50,userId:1},dialogStatus:"create",dialogFormVisible:!1,textMap:{update:"编辑",create:"编辑考勤"},tempArticle:{userName:"",startDate:"",endDate:"",remark:"",value4:1},value:"",revise:!1,add:!1,addWidth:"120px",startDate:"",endDate:"",options:[{value:1,label:"请假"},{value:2,label:"加班"},{value:3,label:"出差"}],value4:""}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.hasPerm("attendance:myList")&&(console.log(this.listQuery),this.listLoading=!0,this.api({url:"/attendance/listMyAttendance",method:"post",params:this.listQuery}).then(function(e){t.listLoading=!1,t.list=e.list,t.totalCount=e.totalCount}))},handleSizeChange:function(t){this.listQuery.pageRow=t,this.handleFilter()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},getIndex:function(t){return(this.listQuery.pageNum-1)*this.listQuery.pageRow+t+1},showCreate:function(){this.tempArticle.userName="",this.tempArticle.remark="",this.dialogStatus="create",this.dialogFormVisible=!0},showUpdate:function(t){this.tempArticle.id=this.list[t].id,this.tempArticle.userName=this.list[t].userName,this.dialogStatus="update",this.dialogFormVisible=!0},createArticle:function(){var t=this,e={userName:this.tempArticle.userName,startDate:a(this.tempArticle.startDate),endDate:a(this.tempArticle.endDate),remark:this.tempArticle.remark,value:this.tempArticle.value4};console.log(e),this.api({url:"/attendance/addAttendance",method:"post",data:e}).then(function(){t.getList(),t.dialogFormVisible=!1})},updateArticle:function(){var t=this;this.api({url:"/attendance/updateAttendance",method:"post",data:this.tempArticle}).then(function(){t.getList(),t.dialogFormVisible=!1})}}},n={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("div",{staticClass:"filter-container"},[l("el-form",[l("el-form-item",[t.hasPerm("attendance:add")?l("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.showCreate}},[t._v("添加\n        ")]):t._e()],1)],1)],1),t._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",label:"序号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",{domProps:{textContent:t._s(t.getIndex(e.$index))}})]}}])}),t._v(" "),l("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"userName",label:"用户名"}}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:"开始时间",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.startDate))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:"结束时间",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.endDate))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:"创建时间",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),l("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"applyType",label:"申请类型"}}),t._v(" "),l("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"checkState",label:"状态"}}),t._v(" "),l("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"remark",label:"备注"}}),t._v(" "),t.hasPerm("attendance:update")?l("el-table-column",{attrs:{align:"center",label:"管理",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:function(l){t.showUpdate(e.$index)}}},[t._v("修改")])]}}])}):t._e()],1),t._v(" "),l("el-pagination",{attrs:{"current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageRow,total:t.totalCount,"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),l("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"65%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[l("el-form",{staticClass:"small-space",attrs:{model:t.tempArticle}},[l("el-form-item",{attrs:{label:"申请人：","label-width":t.addWidth}},[l("el-input",{model:{value:t.tempArticle.userName,callback:function(e){t.$set(t.tempArticle,"userName",e)},expression:"tempArticle.userName"}})],1),t._v(" "),l("el-row",{attrs:{type:"flex"}},[l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{label:"开始时间：","label-width":t.addWidth}},[l("el-date-picker",{attrs:{type:"datetime",placeholder:""},model:{value:t.tempArticle.startDate,callback:function(e){t.$set(t.tempArticle,"startDate",e)},expression:"tempArticle.startDate"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{label:"结束时间：","label-width":t.addWidth}},[l("el-date-picker",{attrs:{type:"datetime",placeholder:""},model:{value:t.tempArticle.endDate,callback:function(e){t.$set(t.tempArticle,"endDate",e)},expression:"tempArticle.endDate"}})],1)],1)],1),t._v(" "),l("el-row",{attrs:{type:"flex"}},[l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{label:"理由：","label-width":t.addWidth}},[l("el-input",{model:{value:t.tempArticle.remark,callback:function(e){t.$set(t.tempArticle,"remark",e)},expression:"tempArticle.remark"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.tempArticle.value4,callback:function(e){t.$set(t.tempArticle,"value4",e)},expression:"tempArticle.value4"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),"create"==t.dialogStatus?l("el-button",{attrs:{type:"success"},on:{click:t.createArticle}},[t._v("创 建")]):l("el-button",{attrs:{type:"primary"},on:{click:t.updateArticle}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]},r=l("VU/8")(i,n,!1,null,null,null);e.default=r.exports},xrpo:function(t,e,l){"use strict";var a={name:"ElForm",componentName:"ElForm",provide:function(){return{elForm:this}},props:{model:Object,rules:Object,labelPosition:String,labelWidth:String,labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:String},watch:{rules:function(){this.validate()}},data:function(){return{fields:[]}},created:function(){var t=this;this.$on("el.form.addField",function(e){e&&t.fields.push(e)}),this.$on("el.form.removeField",function(e){e.prop&&t.fields.splice(t.fields.indexOf(e),1)})},methods:{resetFields:function(){this.model&&this.fields.forEach(function(t){t.resetField()})},clearValidate:function(){this.fields.forEach(function(t){t.clearValidate()})},validate:function(t){var e=this;if(this.model){var l=void 0;"function"!=typeof t&&window.Promise&&(l=new window.Promise(function(e,l){t=function(t){t?e(t):l(t)}}));var a=!0,i=0;return 0===this.fields.length&&t&&t(!0),this.fields.forEach(function(l,n){l.validate("",function(l){l&&(a=!1),"function"==typeof t&&++i===e.fields.length&&t(a)})}),l||void 0}console.warn("[Element Warn][Form]model is required for validate to work!")},validateField:function(t,e){var l=this.fields.filter(function(e){return e.prop===t})[0];if(!l)throw new Error("must call validateField with valid prop string!");l.validate("",e)}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("form",{staticClass:"el-form",class:[this.labelPosition?"el-form--label-"+this.labelPosition:"",{"el-form--inline":this.inline}]},[this._t("default")],2)},staticRenderFns:[]},n=l("VU/8")(a,i,!1,null,null,null);e.a=n.exports}});