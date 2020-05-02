<template>
  <div class="container-fluid navigation">
    <div class="row navigation-row">
      <div class="col-2" style="padding-left:0;">
        <div class="logo" :class="{ 
        'black' : homePage , 'white' : notHome}">
          <p>PAVLOS <span class="d-none d-sm-block"> MOROS</span></p>
        </div>
      </div>
      <div class="col">
        <div class="central">
          <router-link
            class="central-item"
            :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
            to="/"
          >INTRO</router-link>
          <router-link
            class="central-item"
            :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
            to="/work"
          >WORK</router-link>
          <router-link
            class="central-item"
            :class="{ 
        'item-black' : homePage , 'item-white' : notHome}"
            to="/books"
          >BOOKS</router-link>
        </div>
      </div>
      <div class="col-2 " style="padding-right:0 ;">
        <div class="contact" style :class="{ 
        'black' : homePage , 'white' : notHome}">
          <p class="d-none d-sm-block">GET IN TOUCH</p>
          <p class="d-block d-sm-none">CONTACT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { homePage: false, notHome: false };
  },
  watch: {
    $route() {
      this.homePage = false;
      this.notHome = false;

      // react to route changes...
      if (this.$route.path == "/") {
        this.homePage = true;
      } else if (this.$route.path == "/work") {
        this.notHome = true;
      } else if (this.$route.path == "/books") {
        this.notHome = true;
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

.navigation-row {
  margin: 0 5vw 0 5vw;
}
</style>

