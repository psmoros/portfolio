<template>
  <div class="container-fluid">
    <!-- Work 1  -->
    <div class="row">
      <div class="row">
        <p>WORK — N°001 : ROOTNODE</p>
      </div>
      <div class="row">
        <div class="col">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            data-interval="false"
            touch
          >
            <ol @click="exposeSlide" class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <video class="d-block w-100" loop controls>
                  <source src="../assets/work/rootnode/promo-mini.mp4" type="video/mp4">Your browser does not support the video tag.
                </video>
              </div>
              <div class="carousel-item">
                <video class="d-block w-100" loop controls>
                  <source src="../assets/work/rootnode/experience.mp4" type="video/mp4">Your browser does not support the video tag.
                </video>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../assets/work/rootnode/team.jpg"
                  alt="Second slide"
                >
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../assets/work/rootnode/Deckv1.jpeg"
                  alt="Third slide"
                >
              </div>
            </div>
            <!-- <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>-->
          </div>
        </div>
        <div class="col fill-height-or-more description">
          <div class="row">
            <div class="col">
              <p class="years">2017-2019</p>
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
                <br>TEAM SMILING
              </p>
            </div>
          </div>
          <button @click="exposeSlide">Current Slide</button>
          <div class="row last-row">
            <div class="col">
              <p class="launch-project">VISIT WEBSITE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    exposeSlide() {
      console.log(
        this.$el.querySelector(".active").getAttribute("data-slide-to")
      );
      this.$refs.carousel.on("slide.bs.carousel", () => {
        console.log("hi");
      });
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
}

.col,
.col-10 {
  padding: 0;
}

.last-row {
  position: absolute;
  bottom: 0;
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

.container-fluid {
  background-color: #0c2db3;
  padding-bottom: 100px;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
  z-index: 5;
}
</style>
