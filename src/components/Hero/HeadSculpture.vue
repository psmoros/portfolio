<template>
  <div class="helper">
    <div style="display: relative;">
      <div
        class="head"
        :class="{ 
        'ninety-to-0' : workToHome, 
        'zero-to-90' : homeToWork,

        'ninety-to-180' : workToBooks,
        'oneeighty-to-90' : booksToWork,

        'oneeighty-to-0' : booksToHome,
        'zero-to-180': homeToBooks,

        'home-static' : landHome,
        'work-static' : landWork,
        'books-static' : landBooks }"
      ></div>
      <img
        :class="{'shade-work' : workPage,
        'shade-home' : homePage ,
        'shade-books' :bookPage}"
        class="shade"
        src="../../assets/shade.png"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      landHome: false,
      landWork: false,
      landBooks: false,

      homeToWork: false,
      workToHome: false,

      workToBooks: false,
      booksToWork: false,

      homeToBooks: false,
      booksToHome: false,

      homePage: false,
      workPage: false,
      bookPage: false
    };
  },
  mounted() {
    console.log(this.$route.path);
    if (this.$route.path == "/") {
      this.landHome = true;
      this.homePage = true;
    } else if (this.$route.path == "/work") {
      this.landWork = true;
      this.workPage = true;
    } else if (this.$route.path == "/books") {
      this.landBooks = true;
      this.bookPage = true;
    }
    let one = new Image();
    let two = new Image();
    let three = new Image();
    let four = new Image();
    let five = new Image();
    let six = new Image();
    let seven = new Image();
    let eight = new Image();
    let nine = new Image();
    let ten = new Image();
    let eleven = new Image();
    let twelve = new Image();
    let thirteen = new Image();
    let fourteen = new Image();
    let fifteen = new Image();
    let sixteen = new Image();
    let seventeen = new Image();
    let eighteen = new Image();
    let nineteen = new Image();

    let two1 = new Image();
    let three1 = new Image();
    let four1 = new Image();
    let five1 = new Image();
    let six1 = new Image();
    let seven1 = new Image();
    let eight1 = new Image();
    let nine1 = new Image();
    let ten1 = new Image();
    let eleven1 = new Image();
    let twelve1 = new Image();
    let thirteen1 = new Image();
    let fourteen1 = new Image();
    let fifteen1 = new Image();
    let sixteen1 = new Image();

    one.src = "http://dt37vaxt3k0t5.cloudfront.net/151_Frame-1-min.png";
    two.src = "http://dt37vaxt3k0t5.cloudfront.net/147_Frame-5-min.png";
    three.src = "http://dt37vaxt3k0t5.cloudfront.net/143_Frame-9-min.png";
    four.src = "http://dt37vaxt3k0t5.cloudfront.net/139_Frame-13-min.png";
    five.src = "http://dt37vaxt3k0t5.cloudfront.net/135_Frame-17-min.png";
    six.src = "http://dt37vaxt3k0t5.cloudfront.net/131_Frame-21-min.png";
    seven.src = "http://dt37vaxt3k0t5.cloudfront.net/127_Frame-25-min.png";
    eight.src = "http://dt37vaxt3k0t5.cloudfront.net/123_Frame-29-min.png";
    nine.src = "http://dt37vaxt3k0t5.cloudfront.net/119_Frame-33-min.png";
    ten.src = "http://dt37vaxt3k0t5.cloudfront.net/115_Frame-37-min.png";
    eleven.src = "http://dt37vaxt3k0t5.cloudfront.net/111_Frame-41-min.png";
    twelve.src = "http://dt37vaxt3k0t5.cloudfront.net/107_Frame-45-min.png";
    thirteen.src = "http://dt37vaxt3k0t5.cloudfront.net/103_Frame-49-min.png";
    fourteen.src = "http://dt37vaxt3k0t5.cloudfront.net/99_Frame-53-min.png";
    fifteen.src = "http://dt37vaxt3k0t5.cloudfront.net/95_Frame-57-min.png";
    sixteen.src = "http://dt37vaxt3k0t5.cloudfront.net/91_Frame-61-min.png";
    seventeen.src = "http://dt37vaxt3k0t5.cloudfront.net/87_Frame-65-min.png";
    eighteen.src = "http://dt37vaxt3k0t5.cloudfront.net/83_Frame-69-min.png";
    nineteen.src = "http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png";

    two1.src = "http://dt37vaxt3k0t5.cloudfront.net/76_Frame-76-min.png";
    three1.src = "http://dt37vaxt3k0t5.cloudfront.net/73_Frame-79-min.png";
    four1.src = "http://dt37vaxt3k0t5.cloudfront.net/70_Frame-82-min.png";
    five1.src = "http://dt37vaxt3k0t5.cloudfront.net/67_Frame-85-min.png";
    six1.src = "http://dt37vaxt3k0t5.cloudfront.net/64_Frame-88-min.png";
    seven1.src = "http://dt37vaxt3k0t5.cloudfront.net/61_Frame-91-min.png";
    eight1.src = "http://dt37vaxt3k0t5.cloudfront.net/58_Frame-94-min.png";
    nine1.src = "http://dt37vaxt3k0t5.cloudfront.net/55_Frame-97-min.png";
    ten1.src = "http://dt37vaxt3k0t5.cloudfront.net/52_Frame-100-min.png";
    eleven1.src = "http://dt37vaxt3k0t5.cloudfront.net/49_Frame-103-min.png";
    twelve1.src = "http://dt37vaxt3k0t5.cloudfront.net/46_Frame-106-min.png";
    thirteen1.src = "http://dt37vaxt3k0t5.cloudfront.net/43_Frame-109-min.png";
    fourteen1.src = "http://dt37vaxt3k0t5.cloudfront.net/40_Frame-112-min.png";
    fifteen1.src = "http://dt37vaxt3k0t5.cloudfront.net/37_Frame-115-min.png";
    sixteen1.src = "http://dt37vaxt3k0t5.cloudfront.net/34_Frame-118-min.png";

    one.onload = () => {
      this.imgUrl = one.src;
    };
    two.onload = () => {
      this.imgUrl = two.src;
    };

    three.onload = () => {
      this.imgUrl = three.src;
    };

    four.onload = () => {
      this.imgUrl = four.src;
    };

    five.onload = () => {
      this.imgUrl = five.src;
    };

    six.onload = () => {
      this.imgUrl = six.src;
    };

    seven.onload = () => {
      this.imgUrl = seven.src;
    };

    eight.onload = () => {
      this.imgUrl = eight.src;
    };

    nine.onload = () => {
      this.imgUrl = nine.src;
    };
    ten.onload = () => {
      this.imgUrl = ten.src;
    };
    eleven.onload = () => {
      this.imgUrl = eleven.src;
    };

    twelve.onload = () => {
      this.imgUrl = twelve.src;
    };

    thirteen.onload = () => {
      this.imgUrl = thirteen.src;
    };

    fourteen.onload = () => {
      this.imgUrl = fourteen.src;
    };
    fifteen.onload = () => {
      this.imgUrl = fifteen.src;
    };
    sixteen.onload = () => {
      this.imgUrl = sixteen.src;
    };

    seventeen.onload = () => {
      this.imgUrl = seventeen.src;
    };

    eighteen.onload = () => {
      this.imgUrl = eighteen.src;
    };

    nineteen.onload = () => {
      this.imgUrl = nineteen.src;
    };

    two1.onload = () => {
      this.imgUrl = two1.src;
    };

    three1.onload = () => {
      this.imgUrl = three1.src;
    };

    four1.onload = () => {
      this.imgUrl = four1.src;
    };

    five1.onload = () => {
      this.imgUrl = five1.src;
    };

    six1.onload = () => {
      this.imgUrl = six1.src;
    };

    seven1.onload = () => {
      this.imgUrl = seven1.src;
    };

    eight1.onload = () => {
      this.imgUrl = eight1.src;
    };

    nine1.onload = () => {
      this.imgUrl = nine1.src;
    };
    ten1.onload = () => {
      this.imgUrl = ten1.src;
    };
    eleven1.onload = () => {
      this.imgUrl = eleven1.src;
    };

    twelve1.onload = () => {
      this.imgUrl = twelve1.src;
    };

    thirteen1.onload = () => {
      this.imgUrl = thirteen1.src;
    };

    fourteen1.onload = () => {
      this.imgUrl = fourteen1.src;
    };
    fifteen1.onload = () => {
      this.imgUrl = fifteen1.src;
    };
    sixteen1.onload = () => {
      this.imgUrl = sixteen1.src;
    };
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log("to:" + to.path + ", from:" + from.path);

      this.workToHome = false;
      this.homeToWork = false;
      this.workToBooks = false;
      this.booksToWork = false;
      this.homeToBooks = false;
      this.booksToHome = false;
      this.homePage = false;
      this.workPage = false;
      this.bookPage = false;

      if (from.path == "/" && to.path == "/work") {
        this.homeToWork = true;
      } else if (from.path == "/work" && to.path == "/") {
        this.workToHome = true;
      } else if (from.path == "/work" && to.path == "/books") {
        this.workToBooks = true;
      } else if (from.path == "/books" && to.path == "/work") {
        this.booksToWork = true;
      } else if (from.path == "/" && to.path == "/books") {
        this.homeToBooks = true;
      } else if (from.path == "/books" && to.path == "/") {
        this.booksToHome = true;
      }

      if (this.$route.path == "/") {
        this.homePage = true;
      } else if (this.$route.path == "/work") {
        this.workPage = true;
      } else if (this.$route.path == "/books") {
        this.bookPage = true;
      }
    }
  }
};
</script>

<style >
.head {
  margin: -25vh 0 0 0;
  align-items: center;
  width: 400px;
}

.shade {
  margin-top: -11%;
  margin-left: 126px;
}

.shade-work {
  margin-left: 99px;
  transition: margin-left 0.63s;
}

.shade-home {
  margin-left: 126px;
  transition: margin-left 0.63s;
}

.shade-books {
  margin-left: 87px;
  transition: margin-left 0.63s;
}

.helper {
  position: absolute;
  align-items: center;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 400px;
  top: 0;
  right: 10vw;
  height: 100vh;
}

.zero-to-90 {
  animation: "animation-0-to-90" 630ms forwards normal 1;
}

.ninety-to-0 {
  animation: "animation-90-to-0" 630ms forwards normal 1;
}

.ninety-to-180 {
  animation: "animation-90-to-180" 630ms forwards normal 1;
}

.oneeighty-to-90 {
  animation: "animation-180-to-90" 630ms forwards normal 1;
}

.zero-to-180 {
  animation: "animation-0-to-180" 630ms forwards normal 1;
}

.oneeighty-to-0 {
  animation: "animation-180-to-0" 630ms forwards normal 1;
}

.home-static {
  content: url("http://dt37vaxt3k0t5.cloudfront.net/151_Frame-1-min.png");
}

.work-static {
  content: url("http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png");
}

.books-static {
  content: url("http://dt37vaxt3k0t5.cloudfront.net/34_Frame-118-min.png");
}

@keyframes animation-0-to-90 {
  0% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/151_Frame-1-min.png");
  }

  5.56% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/147_Frame-5-min.png");
  }
  11.11% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/143_Frame-9-min.png");
  }

  16.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/139_Frame-13-min.png");
  }

  22.22% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/135_Frame-17-min.png");
  }

  27.78% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/131_Frame-21-min.png");
  }

  33.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/127_Frame-25-min.png");
  }

  38.89% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/123_Frame-29-min.png");
  }

  44.44% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/119_Frame-33-min.png");
  }

  50% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/115_Frame-37-min.png");
  }

  55.56% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/111_Frame-41-min.png");
  }

  61.11% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/107_Frame-45-min.png");
  }

  66.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/103_Frame-49-min.png");
  }
  72.22% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/99_Frame-53-min.png");
  }
  77.78% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/95_Frame-57-min.png");
  }
  83.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/91_Frame-61-min.png");
  }
  88.89% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/87_Frame-65-min.png");
  }
  94.44% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/83_Frame-69-min.png");
  }
  100% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png");
  }
}

@keyframes animation-90-to-0 {
  0% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png");
  }

  5.56% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/83_Frame-69-min.png");
  }
  11.11% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/87_Frame-65-min.png");
  }

  16.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/91_Frame-61-min.png");
  }

  22.22% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/95_Frame-57-min.png");
  }

  27.78% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/99_Frame-53-min.png");
  }

  33.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/103_Frame-49-min.png");
  }

  38.89% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/107_Frame-45-min.png");
  }

  44.44% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/111_Frame-41-min.png");
  }

  50% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/115_Frame-37-min.png");
  }

  55.56% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/119_Frame-33-min.png");
  }

  61.11% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/123_Frame-29-min.png");
  }

  66.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/127_Frame-25-min.png");
  }
  72.22% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/131_Frame-21-min.png");
  }
  77.78% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/135_Frame-17-min.png");
  }
  83.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/139_Frame-13-min.png");
  }
  88.89% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/143_Frame-9-min.png");
  }
  94.44% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/147_Frame-5-min.png");
  }
  100% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/151_Frame-1-min.png");
  }
}

@keyframes animation-90-to-180 {
  0% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png");
  }
  6.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/76_Frame-76-min.png");
  }
  13.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/73_Frame-79-min.png");
  }
  20% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/70_Frame-82-min.png");
  }
  26.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/67_Frame-85-min.png");
  }
  33.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/64_Frame-88-min.png");
  }
  40% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/61_Frame-91-min.png");
  }
  46.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/58_Frame-94-min.png");
  }
  53.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/55_Frame-97-min.png");
  }
  60% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/52_Frame-100-min.png");
  }
  66.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/49_Frame-103-min.png");
  }
  73.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/46_Frame-106-min.png");
  }
  80% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/43_Frame-109-min.png");
  }
  86.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/40_Frame-112-min.png");
  }
  93.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/37_Frame-115-min.png");
  }

  100% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/34_Frame-118-min.png");
  }
}

@keyframes animation-180-to-90 {
  0% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/34_Frame-118-min.png");
  }
  6.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/37_Frame-115-min.png");
  }
  13.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/40_Frame-112-min.png");
  }
  20% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/43_Frame-109-min.png");
  }
  26.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/46_Frame-106-min.png");
  }
  33.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/49_Frame-103-min.png");
  }
  40% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/52_Frame-100-min.png");
  }
  46.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/55_Frame-97-min.png");
  }
  53.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/58_Frame-94-min.png");
  }
  60% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/61_Frame-91-min.png");
  }
  66.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/64_Frame-88-min.png");
  }
  73.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/67_Frame-85-min.png");
  }
  80% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/70_Frame-82-min.png");
  }
  86.67% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/73_Frame-79-min.png");
  }
  93.33% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/76_Frame-76-min.png");
  }
  100% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png");
  }
}

@keyframes animation-0-to-180 {
  0% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/151_Frame-1-min.png");
  }
  6.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/143_Frame-9-min.png");
  }
  12.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/135_Frame-17-min.png");
  }
  18.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/127_Frame-25-min.png");
  }
  25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/119_Frame-33-min.png");
  }
  31.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/111_Frame-41-min.png");
  }
  37.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/103_Frame-49-min.png");
  }
  43.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/95_Frame-57-min.png");
  }
  50% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/87_Frame-65-min.png");
  }
  56.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png");
  }
  62.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/70_Frame-82-min.png");
  }
  68.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/64_Frame-88-min.png");
  }
  75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/58_Frame-94-min.png");
  }
  81.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/52_Frame-100-min.png");
  }
  87.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/46_Frame-106-min.png");
  }
  93.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/40_Frame-112-min.png");
  }
  100% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/34_Frame-118-min.png");
  }
}

@keyframes animation-180-to-0 {
  0% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/34_Frame-118-min.png");
  }
  6.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/40_Frame-112-min.png");
  }
  12.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/46_Frame-106-min.png");
  }
  18.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/52_Frame-100-min.png");
  }
  25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/58_Frame-94-min.png");
  }
  31.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/64_Frame-88-min.png");
  }
  37.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/70_Frame-82-min.png");
  }
  43.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png");
  }
  50% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/87_Frame-65-min.png");
  }
  56.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/95_Frame-57-min.png");
  }
  62.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/103_Frame-49-min.png");
  }
  68.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/111_Frame-41-min.png");
  }
  75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/119_Frame-33-min.png");
  }
  81.25% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/127_Frame-25-min.png");
  }
  87.5% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/135_Frame-17-min.png");
  }
  93.75% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/143_Frame-9-min.png");
  }
  100% {
    content: url("http://dt37vaxt3k0t5.cloudfront.net/151_Frame-1-min.png");
  }
}
</style>
