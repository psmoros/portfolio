<template>
  <div>
    <siema
    class="siema-class"
      ref="siema"
      :loop="false"
      :easing="'cubic-bezier(0.52, 0.01, 0.16, 1'"
      :duration="630"
      :draggable="false"
      :start-index="firstSlide"
    >
      <div class="slide">
        <img class="slide-img" src="../../assets/horizon-intro.jpg" alt>
  
      </div>

      <div class="slide">
        <img class="slide-img" src="../../assets/horizon-who.jpg" alt>
      </div>

      <div class="slide">
        <img class="slide-img" src="../../assets/horizon-what.jpg" alt>
      </div>
    </siema>
  </div>
</template>

<script>
import { Siema } from "v-siema";

export default {
  data() {
    return {
      firstSlide: null
    };
  },
  components: {
    siema: Siema
  },
  watch: {
    $route(to) {
      // react to route changes...

      if (to.path == "/work") {
        this.$refs.siema.goTo(1);
      } else if (to.path == "/") {
        this.$refs.siema.goTo(0);
      } else if (to.path == "/books") {
        this.$refs.siema.goTo(2);
      }
    }
  },
  created() {
    if (this.$route.path == "/") {
      this.firstSlide = 0;
    } else if (this.$route.path == "/work") {
      this.firstSlide = 1;
    } else if (this.$route.path == "/books") {
      this.firstSlide = 2;
    }
  }
};
</script>

<style>

.slide-img {
  width: 100vw;
  height: 100vh;
}



</style>
