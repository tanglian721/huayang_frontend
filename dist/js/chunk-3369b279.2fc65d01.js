(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3369b279"],{"00b2":function(e,t,s){"use strict";s.r(t);var c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"service-menu mt-5 pt-5"},[s("div",{staticClass:"service-select text-capitalize"},[s("div",{staticClass:"service-selection px-3 fs-6",class:e.Default,on:{click:e.toDefault}},[this.$store.getters.lan?s("div",[e._v("About Enterprise Service")]):s("div",[e._v("关于企业业务")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project1,on:{click:e.toService1}},[this.$store.getters.lan?s("div",[e._v("Start a company")]):s("div",[e._v("成立公司")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project2,on:{click:e.toService2}},[this.$store.getters.lan?s("div",[e._v("Company tax return")]):s("div",[e._v("公司税务申报")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project3,on:{click:e.toService3}},[this.$store.getters.lan?s("div",[e._v("Apply for GST")]):s("div",[e._v("申请GST")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project4,on:{click:e.toService4}},[this.$store.getters.lan?s("div",[e._v("Annual Audit")]):s("div",[e._v("年度审计")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project5,on:{click:e.toService5}},[this.$store.getters.lan?s("div",[e._v(" Financial system establishment and bookkeeping ")]):s("div",[e._v("财务系统建立及记账")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project6,on:{click:e.toService6}},[this.$store.getters.lan?s("div",[e._v("Payroll Services")]):s("div",[e._v("工资核算")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project7,on:{click:e.toService7}},[this.$store.getters.lan?s("div",[e._v("consulting service")]):s("div",[e._v("咨询服务")])]),s("div",{staticClass:"service-selection px-3 fs-6",class:e.project8,on:{click:e.toService8}},[this.$store.getters.lan?s("div",[e._v("financialPartner")]):s("div",[e._v("财务合作伙伴")])])])])},i=[],r={data:function(){return{Default:"selected",project1:"unselected",project2:"unselected",project3:"unselected",project4:"unselected",project5:"unselected",project6:"unselected",project7:"unselected",project8:"unselected",btn:""}},methods:{toDefault:function(){this.selectService("enterpriseServiceDefault")},toService1:function(){this.selectService("startCompany")},toService2:function(){this.selectService("companyTaxReturn")},toService3:function(){this.selectService("applyForGST")},toService4:function(){this.selectService("annualAudit")},toService5:function(){this.selectService("FinancialSystemEstablishment")},toService6:function(){this.selectService("payrollServices")},toService7:function(){this.selectService("consultingServices")},toService8:function(){this.selectService("financialPartner")},selectService:function(e){this.$emit("toggleService",e),this.btn=e}},watch:{btn:function(e){switch(e){case"enterpriseServiceDefault":this.Default="selected",this.project1="unselected",this.project2="unselected",this.project3="unselected",this.project4="unselected",this.project5="unselected",this.project6="unselected",this.project7="unselected",this.project8="unselected";break;case"startCompany":this.Default="unselected",this.project1="selected",this.project2="unselected",this.project3="unselected",this.project4="unselected",this.project5="unselected",this.project6="unselected",this.project7="unselected",this.project8="unselected";break;case"companyTaxReturn":this.Default="unselected",this.project1="unselected",this.project2="selected",this.project3="unselected",this.project4="unselected",this.project5="unselected",this.project6="unselected",this.project7="unselected",this.project8="unselected";break;case"applyForGST":this.Default="unselected",this.project1="unselected",this.project2="unselected",this.project3="selected",this.project4="unselected",this.project5="unselected",this.project6="unselected",this.project7="unselected",this.project8="unselected";break;case"annualAudit":this.Default="unselected",this.project1="unselected",this.project2="unselected",this.project3="unselected",this.project4="selected",this.project5="unselected",this.project6="unselected",this.project7="unselected",this.project8="unselected";break;case"FinancialSystemEstablishment":this.Default="unselected",this.project1="unselected",this.project2="unselected",this.project3="unselected",this.project4="unselected",this.project5="selected",this.project6="unselected",this.project7="unselected",this.project8="unselected";break;case"payrollServices":this.Default="unselected",this.project1="unselected",this.project2="unselected",this.project3="unselected",this.project4="unselected",this.project5="unselected",this.project6="selected",this.project7="unselected",this.project8="unselected";break;case"consultingServices":this.Default="unselected",this.project1="unselected",this.project2="unselected",this.project3="unselected",this.project4="unselected",this.project5="unselected",this.project6="unselected",this.project7="selected",this.project8="unselected";break;case"financialPartner":this.Default="unselected",this.project1="unselected",this.project2="unselected",this.project3="unselected",this.project4="unselected",this.project5="unselected",this.project6="unselected",this.project7="unselected",this.project8="selected";break;default:break}}},mounted:function(){var e=this.$router.history.current.params.pathMatch;"EnterpriseService/companyTaxReturn"==e&&(this.btn="companyTaxReturn")}},n=r,l=(s("a4e0"),s("2877")),o=Object(l["a"])(n,c,i,!1,null,"48d1abe8",null);t["default"]=o.exports},"12fc":function(e,t,s){},a4e0:function(e,t,s){"use strict";s("12fc")}}]);
//# sourceMappingURL=chunk-3369b279.2fc65d01.js.map