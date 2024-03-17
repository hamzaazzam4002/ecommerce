<template>
  <div class="flash-deals pt-16">
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      class="pb-9 px-5"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <img
            loading="lazy"
            :src="
              showenItem[item.title] ? showenItem[item.title] : item.thumbnail
            "
            class="w-100"
            style="height: 200px"
            alt=""
          />
          <v-card-text class="pl-0">
            {{ item.title
            }}{{
              item.description.split(" ").length <= 9
                ? item.description
                : item.description.split(" ").slice(0, 8).join(" ") + "..."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-2"
            size="x-small"
            density="combact"
          >
          </v-rating>
          <v-card-text class="pl-0 pt-0">
            <del>${{ item.price }}</del> From
            <span class="text-red" style="font-weight: 900; font-size: 16px">
              ${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}</span
            >
          </v-card-text>
          <v-btn-toggle v-model="showenItem[item.title]">
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
              ><img
                :src="pic"
                width="30"
                height="30"
                style="border-radius: 50%; border: 1px solid gray"
                alt=""
            /></v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="combact"
              class="py-2 px-7"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
              >Choose Options</v-btn
            >
          </div>
        </v-card>
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>
<style>
.flash-deals {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid blue;
    border-radius: 50%;
    background-color: white;
    top: 43%;
    &::after {
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 20px;
  }
}
</style>
// 15:10
