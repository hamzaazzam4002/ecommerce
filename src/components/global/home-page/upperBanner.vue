<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span>The Best In World</span>UHD Televisions</h3>
              <p class="hint">Sale Up To 70% Off On Selected Items</p>
              <v-btn
                variant="outlined"
                class="py-3 px-10"
                density="combact"
                style="
                  border-radius: 30px;
                  text-transform: none;
                  margin-top: 20px;
                "
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style>
.banner {
  .parent {
    height: 480px;
    background-image: url(@/assets/images/banner-bg.jpg);
    background-size: cover;
  }
  .cont {
    color: white;
    padding: 40px 0 0 100px;
    h3 {
      font-size: 50px;
      font-weight: 900;
      span {
        color: rgb(15, 193, 224);
      }
      .hint {
        margin: 20px 0;
      }
    }
  }
}
</style>
