<template>
  <div class="container-fluid">
    <!-- Work Component Start  -->
    <four18sec></four18sec>
    <rootnode></rootnode>
    <spoonzy></spoonzy>
    <spiroplastic></spiroplastic>
    <ee></ee>
    <kronn></kronn>
    <fts></fts>
    <ecotop></ecotop>
    <cimentart></cimentart>
    <kcfa> </kcfa>
  </div>
</template>

<script>
import four18sec from "./Work-Items/four18sec";
import rootnode from "./Work-Items/rootnode";
import spoonzy from "./Work-Items/sponnzy";
import spiroplastic from "./Work-Items/spiroplastic";
import ee from "./Work-Items/ee";
import kronn from "./Work-Items/kronn";
import fts from "./Work-Items/fts";
import ecotop from "./Work-Items/ecotop";
import cimentart from "./Work-Items/cimentart";
import kcfa from "./Work-Items/kcfa"

export default {
  components: {
    four18sec,
    rootnode,
    spoonzy,
    spiroplastic,
    ee,
    kronn,
    fts,
    ecotop,
    cimentart,
    kcfa
  }
};
</script>

<style scoped>
.container-fluid {
  background-color: #0d2eb3;
  padding-bottom: 100px;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
  z-index: 5;
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
