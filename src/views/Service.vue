<template>
  <div class="service-page page-setting">
    <page-header />
    <div class="about-service pb-md-5">
      <h1 class="about-title container-sm text-center py-5">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.servicepage_about.title.eng }}
        </div>
        <div v-else>{{ this.$store.state.servicepage_about.title.chi }}</div>
      </h1>
      <div class="about-content container-sm fs-5 text-center text-md-start">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.servicepage_about.content.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.servicepage_about.content.chi }}
        </div>
      </div>
    </div>
    <service-item />
    <page-footer />
  </div>
</template>

<script>
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ServiceItem from "../components/service/serviceItem.vue";
export default {
  components: { pageHeader, PageFooter, ServiceItem },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

</style>