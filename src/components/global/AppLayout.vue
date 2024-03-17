/* eslint-disable */
<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <v-main style="padding-top: 89px">
        <slot></slot>
      </v-main>
      <AppNav />
      <FixedNav />
      <AppFooter />
    </v-layout>
  </div>
</template>
<script>
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
export default {
  components: {
    AppNav,
    FixedNav,
    AppFooter,
    CartDrawer,
  },
};
</script>
