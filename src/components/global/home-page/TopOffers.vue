<template>
  <div class="top-offers bg-grey-lighten-4 pt-9">
    <v-container fluid>
      <v-row>
        <v-col cols="4" class="py-0 pr-6" style="height: 350px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 8px"
            >
              <img
                src="@/assets/images/playstations.webp"
                :style="`width: 100%; height: 100% cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              /></div
          ></v-hover>
        </v-col>
        <v-col cols="4" class="py-0 pl-6" style="height: 350px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 8px"
            >
              <img
                src="@/assets/images/headset.webp"
                :style="`width: 100%; height: 100% cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              /></div
          ></v-hover>
        </v-col>
        <v-col cols="4" class="py-0 pl-6" style="height: 350px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 8px"
            >
              <img
                src="@/assets/images/chairs.webp"
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              /></div
          ></v-hover>
        </v-col>
        <v-col cold="6" class="mt-5 pr-6 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 8px"
            >
              <img
                src="@/assets/images/iphones.webp"
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              /></div
          ></v-hover>
        </v-col>
        <v-col cold="6" class="mt-5 pl-6 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 8px"
            >
              <img
                src="@/assets/images/laptops.webp"
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              /></div
          ></v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
// 18:52
