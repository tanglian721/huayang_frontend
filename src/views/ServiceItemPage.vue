<template>
  <div class="service-items-page page-setting">
    <page-header />
    <!-- <bread-crumb /> -->
    <div class="row container mx-auto">
      <component class="col-xl-8 offset-xl-1 order-xl-2" :is="current" :service="current"/>
      <component
        class="col-xl-3 offset-xl-0"
        :is="menu"
        @toggleService="toggleService"
      />
    </div>
    <page-footer />
  </div>
</template>

<script>
// import BreadCrumb from "../components/BreadCrumb.vue";
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";

export default {
  components: {
    pageHeader,
    PageFooter,
    // BreadCrumb,
    PersonalServiceMenu: () =>
      import("../components/service/personalTaxService/personalServiceMenu"),
    EnterpriseServiceMenu: () =>
      import("../components/service/enterpriseService/enterpriseServiceMenu"),
    SINPMenu: () => import("../components/service/SINP/SINPMenu"),
    personalDefault: () =>
      import("../components/service/personalTaxService/defaultDisplay"),
    ForeignAssetsDeclaration: () =>
      import(
        "../components/service/personalTaxService/ForeignAssetsDeclaration"
      ),
    SelfemploymentTaxReturn: () =>
      import(
        "../components/service/personalTaxService/SelfemploymentTaxReturn"
      ),
    TaxReturnofNonresident: () =>
      import("../components/service/personalTaxService/TaxReturnofNonresident"),
    EnterpriseServiceDefault: () =>
      import(
        "../components/service/enterpriseService/enterpriseServiceDefault"
      ),
    startCompany: () =>
      import("../components/service/enterpriseService/startCompany"),
    companyTaxReturn: () =>
      import("../components/service/enterpriseService/companyTaxReturn"),
    applyForGST: () =>
      import("../components/service/enterpriseService/applyForGST"),
    annualAudit: () =>
      import("../components/service/enterpriseService/annualAudit"),
    FinancialSystemEstablishment: () =>
      import(
        "../components/service/enterpriseService/FinancialSystemEstablishment"
      ),
    payrollServices: () =>
      import("../components/service/enterpriseService/payrollServices"),
    consultingServices: () =>
      import("../components/service/enterpriseService/consultingServices"),
    financialPartner: () =>
      import("../components/service/enterpriseService/financialPartner"),
    SINPDefault: () => import("../components/service/SINP/SINPDefault"),
  },
  data() {
    return {
      current: "personalDefault",
      menu: "PersonalServiceMenu",
    };
  },
  props: {
    btn: {
      type: String,
    },
    service: {
      type: String,
    },
  },
  methods: {
    toggleService(data) {
      this.current = data;
    },
  },
  mounted() {
    const path = this.$router.history.current.params.pathMatch;
    console.log(path);
    switch (path) {
      case "PersonalTaxService":
        this.menu = "PersonalServiceMenu";
        this.current = "personalDefault";
        break;
      case "EnterpriseService":
        this.menu = "EnterpriseServiceMenu";
        this.current = "EnterpriseServiceDefault";
        break;
      case "SINP":
        this.menu = "SINPMenu";
        this.current = "SINPDefault";
        break;
      case "EnterpriseService/companyTaxReturn":
        this.menu = "EnterpriseServiceMenu";
        this.current = "companyTaxReturn";
        break;
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>