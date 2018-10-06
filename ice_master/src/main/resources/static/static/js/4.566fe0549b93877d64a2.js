webpackJsonp([4],{"8tWy":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{ElForm:i("xrpo").a},data:function(){return{totalCount:0,list:[],listLoading:!1,listQuery:{pageNum:1,pageRow:50,userId:1},dialogStatus:"create",dialogFormVisible:!1,textMap:{update:"编辑",create:"编辑考勤"},tempArticle:{id:"",userName:"",startDate:"",endDate:"",remark:""},value:"",revise:!1,add:!1,addWidth:"120px",startDate:"",endDate:""}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.hasPerm("attendance:myList")&&(this.listLoading=!0,this.api({url:"/attendance/listMyAttendance",method:"post",params:this.listQuery}).then(function(e){t.listLoading=!1,t.list=e.list,t.totalCount=e.totalCount}))},handleSizeChange:function(t){this.listQuery.pageRow=t,this.handleFilter()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},getIndex:function(t){return(this.listQuery.pageNum-1)*this.listQuery.pageRow+t+1},showCreate:function(){this.tempArticle.userName="",this.tempArticle.remark="",this.dialogStatus="create",this.dialogFormVisible=!0},showUpdate:function(t){this.tempArticle.id=this.list[t].id,this.tempArticle.userName=this.list[t].userName,this.dialogStatus="update",this.dialogFormVisible=!0},createArticle:function(){var t=this;this.api({url:"/attendance/addAttendance",method:"post",data:this.tempArticle}).then(function(){t.getList(),t.dialogFormVisible=!1})},updateArticle:function(){var t=this;this.api({url:"/attendance/updateAttendance",method:"post",data:this.tempArticle}).then(function(){t.getList(),t.dialogFormVisible=!1})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",[i("el-form-item",[t.hasPerm("attendance:add")?i("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.showCreate}},[t._v("添加\n        ")]):t._e()],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"序号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{domProps:{textContent:t._s(t.getIndex(e.$index))}})]}}])}),t._v(" "),i("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"userName",label:"用户名"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"开始时间",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.beginDate))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"结束时间",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.endDate))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"创建时间",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),i("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"applyType",label:"申请类型"}}),t._v(" "),i("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"checkState",label:"状态"}}),t._v(" "),i("el-table-column",{staticStyle:{width:"60px"},attrs:{align:"center",prop:"remark",label:"备注"}}),t._v(" "),t.hasPerm("attendance:update")?i("el-table-column",{attrs:{align:"center",label:"管理",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:function(i){t.showUpdate(e.$index)}}},[t._v("修改")])]}}])}):t._e()],1),t._v(" "),i("el-pagination",{attrs:{"current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageRow,total:t.totalCount,"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"65%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{staticClass:"small-space",attrs:{model:t.tempArticle}},[i("el-form-item",{attrs:{label:"申请人：","label-width":t.addWidth}},[i("el-input",{model:{value:t.tempArticle.userName,callback:function(e){t.$set(t.tempArticle,"userName",e)},expression:"tempArticle.userName"}})],1),t._v(" "),i("el-row",{attrs:{type:"flex"}},[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"开始时间：","label-width":t.addWidth}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:""},model:{value:t.tempArticle.startDate,callback:function(e){t.$set(t.tempArticle,"startDate",e)},expression:"tempArticle.startDate"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"结束时间：","label-width":t.addWidth}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:""},model:{value:t.tempArticle.endDate,callback:function(e){t.$set(t.tempArticle,"endDate",e)},expression:"tempArticle.endDate"}})],1)],1)],1),t._v(" "),i("el-row",{attrs:{type:"flex"}},[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"理由：","label-width":t.addWidth}},[i("el-input",{model:{value:t.tempArticle.remark,callback:function(e){t.$set(t.tempArticle,"remark",e)},expression:"tempArticle.remark"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"理由：","label-width":t.addWidth}},[i("el-input",{model:{value:t.tempArticle.remark,callback:function(e){t.$set(t.tempArticle,"remark",e)},expression:"tempArticle.remark"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),"create"==t.dialogStatus?i("el-button",{attrs:{type:"success"},on:{click:t.createArticle}},[t._v("创 建")]):i("el-button",{attrs:{type:"primary"},on:{click:t.updateArticle}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]},n=i("VU/8")(a,l,!1,null,null,null);e.default=n.exports},xrpo:function(t,e,i){"use strict";var a={name:"ElForm",componentName:"ElForm",provide:function(){return{elForm:this}},props:{model:Object,rules:Object,labelPosition:String,labelWidth:String,labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:String},watch:{rules:function(){this.validate()}},data:function(){return{fields:[]}},created:function(){var t=this;this.$on("el.form.addField",function(e){e&&t.fields.push(e)}),this.$on("el.form.removeField",function(e){e.prop&&t.fields.splice(t.fields.indexOf(e),1)})},methods:{resetFields:function(){this.model&&this.fields.forEach(function(t){t.resetField()})},clearValidate:function(){this.fields.forEach(function(t){t.clearValidate()})},validate:function(t){var e=this;if(this.model){var i=void 0;"function"!=typeof t&&window.Promise&&(i=new window.Promise(function(e,i){t=function(t){t?e(t):i(t)}}));var a=!0,l=0;return 0===this.fields.length&&t&&t(!0),this.fields.forEach(function(i,n){i.validate("",function(i){i&&(a=!1),"function"==typeof t&&++l===e.fields.length&&t(a)})}),i||void 0}console.warn("[Element Warn][Form]model is required for validate to work!")},validateField:function(t,e){var i=this.fields.filter(function(e){return e.prop===t})[0];if(!i)throw new Error("must call validateField with valid prop string!");i.validate("",e)}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("form",{staticClass:"el-form",class:[this.labelPosition?"el-form--label-"+this.labelPosition:"",{"el-form--inline":this.inline}]},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")(a,l,!1,null,null,null);e.a=n.exports}});