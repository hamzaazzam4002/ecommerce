<template>
  <div class="home">
    <upperBanner />
    <TheFeatures />
    <TopOffers />
    <FlashDeals :products="flashDeals" />
  </div>
</template>

<script>
// @ is an alias to /src
import upperBanner from "@/components/global/home-page/upperBanner.vue";
import TheFeatures from "@/components/global/home-page/TheFeatures";
import TopOffers from "@/components/global/home-page/TopOffers";
import FlashDeals from "@/components/global/home-page/FlashDeals";
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    upperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
