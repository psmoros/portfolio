<template>
  <div id="app">
    <div class="foreground-wrapper">
      <app-nav class="nav"></app-nav>
      <hero class="hero"></hero>
    </div>
    <div class="hero-background">
      <background></background>
    </div>
    <head-sculpture></head-sculpture>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeadSculpture from "./components/Hero/HeadSculpture";
import Background from "./components/Hero/Background";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    HeadSculpture,
    Background,
    "app-nav": Nav,
    hero: Hero,
    "app-footer": Footer
  }
};
</script>

<style scoped>
.nav {
    position: relative;
  z-index: 3;
}

.hero {
  /* position: absolute;
  top: 0; */
  position: relative;
  z-index: 2;
  width: 100vw;
  height: 100vh;
}

.foreground-wrapper {
  position: absolute;
  top: 0;
}
.hero-background {
  position: relative;
  z-index: -10;
  /* 
  display: none; */
}

@font-face {
  font-family: "HelveticaNowDisplay-Bold";
  src: url(./assets/HelveticaNowDisplay-Bold.ttf);
  font-weight: bold;
}
</style>

