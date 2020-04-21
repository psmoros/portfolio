<template>
  <div class="hero-main">
    <transition name="fade" mode="out-in">
      <component :is="currentPage"></component>
    </transition>
  </div>
</template>

<script>
import HeroWork from "./Work/HeroWork";
import IntroHeader from "./Intro/IntroHeader";
import HeroBooks from "./Books/HeroBooks";

export default {
  data() {
    return { currentPage: null };
  },
  components: { workPage: HeroWork, homePage: IntroHeader, booksPage: HeroBooks },
  watch: {
    $route() {
      // react to route changes...
      if (this.$route.path == "/") {
        this.currentPage = "home-page";
      } else if (this.$route.path == "/work") {
        this.currentPage = "work-page";
      } else if (this.$route.path == "/books") {
        this.currentPage = "books-page";
      }
    }
  },
  created() {
    if (this.$route.path == "/") {
      this.currentPage = "home-page";
    } else if (this.$route.path == "/work") {
      this.currentPage = "work-page";
    } else if (this.$route.path == "/books") {
      this.currentPage = "books-page";
    }
  }
};
</script>


<style>
.hero-main {
  font-family: "HelveticaNowDisplay-Bold";
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.33s ease;
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
