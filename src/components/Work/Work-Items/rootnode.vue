<template>
  <!-- Component -->
  <div class="row">
    <!-- Title  -->
    <div class="row">
      <p>WORK — N°001 : ROOTNODE</p>
    </div>
    <!-- Body  -->
    <div class="row work-item-row">
      <!-- Carousel -->
      <div class="col-xl-6">
        <carousel
          class="carousel"
          :per-page="1"
          v-model="work1Current"
          :paginationEnabled="enable"
          :paginationActiveColor="'#FFFFFF'"
          :paginationColor="'rgba(255,255,255,0.3)'"
        >
          <slide>
            <div class="embed-responsive embed-responsive-16by9">
              <video class="d-block w-100" loop controls>
                <source src="../../../assets/work/rootnode/promo-mini.mp4" type="video/mp4">Your browser does not support the video tag.
              </video>
            </div>
          </slide>

          <slide>
            <video class="d-block w-100" loop controls>
              <source src="../../../assets/work/rootnode/experience.mp4" type="video/mp4">Your browser does not support the video tag.
            </video>
          </slide>
          <slide>
            <img
              class="d-block w-100"
              src="../../../assets/work/rootnode/team.jpg"
              alt="Second slide"
            >
          </slide>
          <slide>
            <img
              class="d-block w-100"
              src="../../../assets/work/rootnode/Deckv1.jpeg"
              alt="Second slide"
            >
          </slide>
        </carousel>
      </div>
      <!-- Description -->
      <div class="col-xl-6 fill-height-or-more description d-none d-xl-block">
        <div class="row">
          <div class="col">
            <p class="years">2017 – 2019</p>
            <p>
              INDUSTRY
              <br>SOFTWARE DEVELOPMENT
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              ROLE
              <br>FOUNDER & CEO
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              SLIDE CAPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="work1Current==0">PROMOTIONAL I MADE</p>
                <p key="1" v-if="work1Current==1">EXPERIENCE</p>
              </transition>
            </p>
          </div>
        </div>

        <div class="row last-row">
          <div class="col">
            <div class="launch-project">
              <transition name="fade" mode="out-in">
                <p class="no-bottom-margin" key="0" v-if="work1Current==0">PROMOTIONAL I MADE</p>
                <p class="no-bottom-margin" key="1" v-if="work1Current==1">EXPERIENCE</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="col description-mobile d-xl-none">
        <div class="row">
          <div class="col">
            <p class="years">2017 – 2019</p>
            <p>
              INDUSTRY
              <br>SOFTWARE DEVELOPMENT
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              ROLE
              <br>FOUNDER & CEO
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              SLIDE CAPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="work1Current==0">PROMOTIONAL I MADE</p>
                <p key="1" v-if="work1Current==1">EXPERIENCE</p>
              </transition>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="work1Current==0">PROMOTIONAL I MADE</p>
                <p key="1" v-if="work1Current==1">EXPERIENCE</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      work1Current: 0
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.row {
  margin: 0;
}
.carousel {
  /* box-shadow: 10px 10px 8px #888888; */
}

.work-item-row {
  margin-bottom: 400px;
}

.col-xl-6 {
  padding: 0;
}
.no-bottom-margin {
  margin-bottom: 0;
}

.indicators {
  height: 100px;
  width: 100px;
  background-color: white;
  position: absolute;
  bottom: -50px;
}
.last-row {
  position: absolute;
  bottom: 64px;
}

p {
  color: white;
  font-family: "HelveticaNowDisplay-Bold";
}

.carousel-inner {
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  /* background-color: black; */
  position: relative;
}

.launch-project {
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
}
.years {
  float: right;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-indicators {
  margin-bottom: -50px;
}

.description {
  padding-left: 3vw;
  margin-top: -6px;
}

.description-mobile {
  padding: 0;
  margin-top: 5vh;
}
</style>