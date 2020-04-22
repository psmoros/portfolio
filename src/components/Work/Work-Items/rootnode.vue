<template>
  <!-- Component -->
  <div class="row work-item">
    <!-- Title  -->
    <div class="row">
      <p>Work — N°002 : rootnode</p>
    </div>
    <!-- Body  -->
    <div class="row">
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
            <video class="d-block w-100" loop controls>
              <source src="../../../assets/work/rootnode/promo-mini.mp4" type="video/mp4">Your browser does not support the video tag.
            </video>
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
      <div class="col-xl-6 description d-none d-xl-block">
        <div class="row">
          <div class="col">
            <p class="years">2017 – 2019</p>
            <p>
              Industry
              <br>Software Development
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              ROLE
              <br>Owner : Sales, Operations, Marketing, Business Development, Software Architecture, Design
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              SLIDE DESCRIPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="index==0">Promotional I made with AE</p>
                <p key="1" v-if="index==1">Our experience website</p>
                <p key="2" v-if="index== 2">Early team</p>
                <p key="3" v-if="index==3">Pitch deck</p>
                <p key="4" v-if="index==4">A Rated Visa Sponsor</p>
              </transition>
            </p>
          </div>
        </div>

        <div class="row last-row">
          <div class="col">
            <div class="launch-project">
              <transition name="fade" mode="out-in">
                <p class="no-bottom-margin" key="0" v-if="index==0">Launch website</p>
                <p class="no-bottom-margin" key="1" v-if="index==1">Launch experience website</p>
                <p class="no-bottom-margin" key="3" v-if="index==3">Download Deck</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile -->
      <div class="col description-mobile d-xl-none">
        <div class="row">
          <div class="mobile-col col">
            <p class="years">2017 – 2019</p>
            <p>
              Industry
              <br>Software Development
            </p>
          </div>
        </div>
        <div class="row">
          <div class="mobile-col col">
            <p>
              ROLE
              <br>Owner : Sales, Operations, Marketing, Business Development, Software Architecture, Design
            </p>
          </div>
        </div>
        <div class="row">
          <div class="mobile-col col">
            <p>
              SLIDE DESCRIPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="index==0">Promotional I made with AE</p>
                <p key="1" v-if="index==1">Our experience website</p>
                <p key="2" v-if="index== 2">Early team</p>
                <p key="3" v-if="index==3">Pitch deck</p>
                <p key="4" v-if="index==4">A Rated Visa Sponsor</p>
              </transition>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="mobile-col col">
            <transition name="fade" mode="out-in">
              <p class="no-bottom-margin" key="0" v-if="index==0">Launch website</p>
              <p class="no-bottom-margin" key="1" v-if="index==1">Launch experience website</p>
              <p class="no-bottom-margin" key="3" v-if="index==3">Download Deck</p>
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

.work-item {
  margin-top: 10vh;
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

.mobile-col {
  padding: 0;
}
</style>