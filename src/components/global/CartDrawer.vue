<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, eum
        sint ullam molestiae odio nesciunt magnam ad architecto doloribus
        temporibus laborum illo natus minus nobis aut aliquid? Nisi, nam
        laboriosam?
      </p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
