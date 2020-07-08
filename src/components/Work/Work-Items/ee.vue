<template>
  <!-- Component -->
  <div class="row work-item">
    <!-- Title  -->
    <div class="row">
      <p>Work — N°005 : endoscopy explorer</p>
    </div>
    <!-- Body  -->
    <div class="row">
      <!-- Carousel -->
      <div class="col-xl-6">
        <carousel
          :per-page="1"
          v-model="index"
          :paginationActiveColor="'#FFFFFF'"
          :paginationColor="'rgba(255,255,255,0.3)'"
        >
          <slide>
            <img class="d-block w-100" src="../../../assets/work/ee/queen.jpg">
          </slide>
          <slide>
            <img class="d-block w-100" src="../../../assets/work/ee/scaffold.jpg">
          </slide>

          <slide>
            <img class="d-block w-100" src="../../../assets/work/ee/branding.jpg">
          </slide>
          <slide>
            <img class="d-block w-100" src="../../../assets/work/ee/diagnosis.jpg">
          </slide>
          <slide>
            <img class="d-block w-100" src="../../../assets/work/ee/gscholar.jpg">
          </slide>
          <slide>
            <img class="d-block w-100" src="../../../assets/work/ee/team.jpg">
          </slide>
        </carousel>
      </div>
      <!-- Description -->
      <div class="col-xl-6 description d-none d-xl-block">
        <div class="row">
          <div class="col">
            <p class="years">{{years}}</p>
            <p>
              Industry
              <br>
              {{industry}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              ROLE
              <br>
              {{role}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              Stack
              <br>
              {{stack}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              SLIDE DESCRIPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="index==0">{{slides[index].description}}</p>
                <p key="1" v-if="index==1">{{slides[index].description}}</p>
                <p key="2" v-if="index== 2">{{slides[index].description}}</p>
                <p key="3" v-if="index==3">{{slides[index].description}}</p>
                <p key="4" v-if="index==4">{{slides[index].description}}</p>
                <p key="5" v-if="index==5">{{slides[index].description}}</p>
              </transition>
            </p>
          </div>
        </div>
      </div>
      <!-- Mobile -->
      <div class="col description-mobile d-xl-none">
        <div class="row">
          <div class="mobile-col col">
            <p class="years">{{years}}</p>
            <p>
              Industry
              <br>
              {{industry}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="mobile-col col">
            <p>
              ROLE
              <br>
              {{role}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              Stack
              <br>
              {{stack}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="mobile-col col">
            <p>
              SLIDE DESCRIPTION
              <br>
              <transition name="fade" mode="out-in">
                <p key="0" v-if="index==0">{{slides[index].description}}</p>
                <p key="1" v-if="index==1">{{slides[index].description}}</p>
                <p key="2" v-if="index== 2">{{slides[index].description}}</p>
                <p key="3" v-if="index==3">{{slides[index].description}}</p>
                <p key="4" v-if="index==4">{{slides[index].description}}</p>
                <p key="5" v-if="index==5">{{slides[index].description}}</p>
              </transition>
            </p>
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
      index: 0,
      years: "2018 – 2019",
      industry: "Healthcare",
      role: "Project Management",
      stack: "React Native, MongoDB",
      slides: [
        {
          description:
            "Complete robotic endoscope presented to her Majesty Queen Elizabeth II"
        },
        {
          description: "App Scaffold"
        },
        {
          description: "Branding Guidelines"
        },
        {
          description: "Acid Reflux disease diagnosis process"
        },
        {
          description: "Our Lead engineer’s publications"
        },
        {
          description: "Most meritorious project award"
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 575px) {
  .work-item {
    font-size: 0.8rem;
  }
}
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

.col {
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

.mobile-col {
  padding: 0;
}
</style>