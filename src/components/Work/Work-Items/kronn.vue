<template>
  <!-- Component -->
  <div class="row work-item">
    <!-- Title  -->
    <div class="row">
      <p>Work — N°006 : kronn</p>
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
            <img class="d-block w-100" src="../../../assets/work/kronn/website.jpg">
          </slide>

          <slide>
            <img class="d-block w-100" src="../../../assets/work/kronn/office.jpg">
          </slide>
          <slide>
            <img class="d-block w-100" src="../../../assets/work/kronn/unsec.jpg">
          </slide>
          <slide>
            <img class="d-block w-100" src="../../../assets/work/kronn/cap.jpg">
          </slide>
          <slide>
            <img class="d-block w-100" src="../../../assets/work/kronn/tv.jpg">
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
      industry: "fintech",
      role: "Product Management",
      stack: "React",
      slides: [
        {
          description: "the kronn.net landing page"
        },
        {
          description: "The Seoul-based team"
        },
        {
          description:
            "the Secretary-General of the United Nations posing with a representative"
        },
        {
          description: "Our coin's ($KREX) $38.3M capitalisation"
        },
        {
          description:
            "Interview for the national Korean tv Seoul Broadcasting Service"
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