<template>
  <!-- Component -->
  <div class="row work-item">
    <!-- Title  -->
    <div class="row">
      <p>Work — N°004 : spiroplastic</p>
    </div>
    <!-- Body  -->
    <div class="row">
      <!-- Carousel -->
      <div class="col-xl-6">
        <img
          class="d-block w-100"
          src="../../../assets/work/spiroplastic/spiroplastic.jpg"
          alt="Second slide"
        >
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
        <div class="row last-row">
          <div class="col">
            <div class="launch-project">
              <a
                :href="myref"
                target="_blank"
                rel="noopener noreferrer"
                class="no-bottom-margin"
              >{{link}}</a>
            </div>
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
            <a
              :href="myref"
              target="_blank"
              rel="noopener noreferrer"
              class="no-bottom-margin"
            >{{link}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      years: "2019",
      industry: "HEAVY INDUSTRY, CHEMICAL MANUFACTURING",
      role: "Project Management",
      stack: "React",
      link: "Visit spiroplastic",
      myref: "https://spiroplastic.com"
    };
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
  bottom: -5px;
}

p,
a {
  color: white;
  font-family: "HelveticaNowDisplay-Bold";
  text-transform: uppercase;
  text-decoration: none;
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