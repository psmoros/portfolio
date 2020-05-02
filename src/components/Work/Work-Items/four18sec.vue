<template>
  <!-- Component -->
  <div class="row">
    <!-- Title  -->
    <div class="row">
      <p>Work — N°001 : 418sec</p>
    </div>
    <!-- Body  -->
    <div class="row work-item-row">
      <!-- Carousel -->
      <div class="col-xl-6">
        <carousel
          :per-page="1"
          v-model="index"
          :paginationEnabled="enable"
          :paginationActiveColor="'#FFFFFF'"
          :paginationColor="'rgba(255,255,255,0.3)'"
        >
          <slide>
            <img
              class="d-block w-100"
              src="../../../assets/work/four18sec/huntr.jpg"
              alt="Second slide"
            >
          </slide>

          <slide>
            <img
              class="d-block w-100"
              src="../../../assets/work/four18sec/trustd.jpg"
              alt="Second slide"
            >
          </slide>
          <slide>
            <img
              class="d-block w-100"
              src="../../../assets/work/four18sec/mol-award.jpeg"
              alt="Second slide"
            >
          </slide>
        </carousel>
      </div>
      <!-- Description -->
      <div class="col-xl-6 description d-none d-xl-block">
        <div class="row">
          <div class="col">
            <p class="years">2020 – PRESENT</p>
            <p>
              Industry
              <br>Cybersecurity
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              ROLE
              <br>Full Stack Engineer and Founding Member
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              SLIDE DESCRIPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="index==0">HUNTR</p>
                <p key="1" v-if="index==1">TRUSTD</p>
                <p key="2" v-if="index== 2">Mayor of London Award</p>
              </transition>
            </p>
          </div>
        </div>

        <div class="row last-row">
          <div class="col">
            <div class="launch-project">
              <transition name="fade" mode="out-in">
                <p class="no-bottom-margin" key="0" v-if="index==0">Launch huntr</p>
                <p class="no-bottom-margin" key="1" v-if="index==1">Launch trustd</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile -->
      <div class="col description-mobile d-xl-none">
        <div class="row">
          <div class="mobile-col col">
            <p class="years">2020 – PRESENT</p>
            <p>
              Industry
              <br>Cybersecurity
            </p>
          </div>
        </div>
        <div class="row">
          <div class="mobile-col col">
            <p>
              ROLE
              <br>Full Stack Engineer and Founding Member
            </p>
          </div>
        </div>
        <div class="row">
          <div class="mobile-col col">
            <p>
              SLIDE DESCRIPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="index==0">HUNTR</p>
                <p key="1" v-if="index==1">TRUSTD</p>
                <p key="2" v-if="index== 2">Mayor of London Award</p>
              </transition>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="mobile-col col">
            <transition name="fade" mode="out-in">
              <p class="no-bottom-margin" key="0" v-if="index==0">Launch huntr</p>
              <p class="no-bottom-margin" key="1" v-if="index==1">Launch trustd</p>
            </transition>
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
      index: 0
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
  bottom: 65px;
}

p {
  color: white;
  font-family: "HelveticaNowDisplay-Bold";
  text-transform: uppercase;
}

.col{
padding: 0;
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
  padding-left: 4vw;
  margin-top: -6px;
}

.description-mobile {
  padding: 0;
  margin-top: 5vh;
}

.mobile-col{
  padding: 0;
}
</style>