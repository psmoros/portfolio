<template>
  <div class="container-fluid navigation">
    <div class="row navigation-row">
      <div class="col-2" style="padding-left:0;">
        <router-link
          to="/"
          class="logo item"
          :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
        >
          <p class="d-none d-lg-block">PAVLOS MOROS</p>
          <p class="d-lg-none">PAVLOS</p>
        </router-link>
      </div>
      <div class="col">
        <div class="central">
          <router-link
            class="central-item item"
            :class="{ 
        'item-black' : homePage , 'item-white' : notHome, 'story.hover' : homePage}"
            to="/"
          >INTRO</router-link>
          <router-link
            class="central-item item"
            :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
            to="/work"
          >WORK</router-link>
          <router-link
            @click="booksClicked"
            class="central-item item"
            :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
            to="/books"
          >BOOKS</router-link>
        </div>
      </div>
      <div class="col-2" style="padding-right:0 ;">
        <div class="contact">
          <p class="d-none d-lg-block">
            <a
              class="item"
              :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
              href="mailto:hi@pavlosmoros.com"
            >GET IN TOUCH</a>
          </p>
          <p class="d-lg-none item">
            <a
              class="item"
              :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
              href="mailto:hi@pavlosmoros.com"
            >CONTACT</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homePage: false,
      notHome: false,
      workPage: false,
      booksPage: false
    };
  },
  methods: {
    booksClicked() {
      this.$gtag.event("books-click", {
        event_category: "navigation",
        event_label: "Navigated to books page",
        value: 1
      });
    }
  },
  watch: {
    $route() {
      this.homePage = false;
      this.notHome = false;

      // react to route changes...
      if (this.$route.path == "/") {
        this.homePage = true;
        this.workPage = false;
        this.booksPage = false;
      } else if (this.$route.path == "/work") {
        this.notHome = true;
        this.workPage = true;
        this.booksPage = false;
      } else if (this.$route.path == "/books") {
        this.notHome = true;
        this.booksPage = true;
        this.workPage = false;
      }
    }
  },
  mounted() {
    if (this.$route.path == "/") {
      this.homePage = true;
    } else if (this.$route.path == "/work") {
      this.notHome = true;
    } else if (this.$route.path == "/books") {
      this.notHome = true;
    }
  }
};
</script>



<style>
/*  */
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 576px) {
  .navigation {
    font-size: 1rem;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 575px) {
  .navigation {
    font-size: 0.8rem;
  }
}
.white {
  color: white;
  transition: color 0.63s;
}

.black {
  color: black;
  transition: color 0.63s;
}

.central-item {
  padding: 0 1vw 0 1vw;
}

.item {
  color: transparent;
}
.row {
  width: 100%;
}

.item-white {
  color: white;
  transition: color 0.63s;
}
.item-white:link {
  color: white;
  text-decoration: none;
}

/* visited link */
.item-white:visited {
  color: white;
  text-decoration: none;
}

/* mouse over link */
.item-white:hover {
  color: white;
  text-decoration: none;
}

/* selected link */
.item-white:active {
  color: white;
  text-decoration: none;
}

.item-black {
  color: black;
  transition: color 0.63s;
}
.item-black:link {
  color: black;
  text-decoration: none;
}

/* visited link */
.item-black:visited {
  color: black;
  text-decoration: none;
}

/* mouse over link */
.item-black:hover {
  color: black;
  text-decoration: none;
}

/* selected link */
.item-black:active {
  color: black;
  text-decoration: none;
}
.central {
  text-align: center;
}

.contact {
  float: right;
}

.navigation {
  font-family: "HelveticaNowDisplay-Bold";
  margin-top: 4vh;
  padding-right: 0;
}

.logo {
  padding-left: 0;
}

.logo-text {
  display: inline;
}

.navigation-row {
  margin: 0 5vw 0 5vw;
}
</style>
