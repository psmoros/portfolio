<template>
  <div class="helper">
    <div style="display: relative;">
      <img class="head" alt="Vue logo" :src="activeSrc">

      <!-- <img
        :class="{'shade-work' : workPage,
        'shade-home' : homePage ,
        'shade-books' :bookPage}"
        class="shade"
        src="../../assets/shade.png"
      >-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homePage: false,
      workPage: false,
      bookPage: false,
      activeSrc: null,
      frames: [
        "http://dt37vaxt3k0t5.cloudfront.net/151_Frame-1-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/147_Frame-5-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/143_Frame-9-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/139_Frame-13-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/135_Frame-17-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/131_Frame-21-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/127_Frame-25-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/123_Frame-29-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/119_Frame-33-min.png",
        "http://dt37vaxt3k0t5.cloudfront.net/115_Frame-37-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/111_Frame-41-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/107_Frame-45-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/103_Frame-49-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/99_Frame-53-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/95_Frame-57-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/91_Frame-61-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/87_Frame-65-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/83_Frame-69-min.png",
        "http://dt37vaxt3k0t5.cloudfront.net/79_Frame-73-min.png",
        // 0 to 90, lastFrame = 18

        "http://dt37vaxt3k0t5.cloudfront.net/76_Frame-76-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/73_Frame-79-min.png",
        "http://dt37vaxt3k0t5.cloudfront.net/70_Frame-82-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/67_Frame-85-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/64_Frame-88-min.png",
        "http://dt37vaxt3k0t5.cloudfront.net/61_Frame-91-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/58_Frame-94-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/55_Frame-97-min.png",
        "http://dt37vaxt3k0t5.cloudfront.net/52_Frame-100-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/49_Frame-103-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/46_Frame-106-min.png",
        "http://dt37vaxt3k0t5.cloudfront.net/43_Frame-109-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/40_Frame-112-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/37_Frame-115-min.png",

        "http://dt37vaxt3k0t5.cloudfront.net/34_Frame-118-min.png"
        // 90 to 180, lastFrame = 33
      ],
      frameIndex: 0,
      timeoutIds: []
    };
  },
  created() {
    for (let step = 0; step < this.frames.length; step++) {
      new Image().src = this.frames[step];
    }

    console.log(this.$route.path);
    if (this.$route.path == "/") {
      this.activeSrc = this.frames[0];
    } else if (this.$route.path == "/work") {
      this.activeSrc = this.frames[18];
      this.frameIndex = 18;
    } else if (this.$route.path == "/books") {
      this.activeSrc = this.frames[33];
      this.frameIndex = 33;
    }
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log("to:" + to.path + ", from:" + from.path);

      if (from.path == "/" && to.path == "/work") {
        this.clearTos(18, 19);
      } else if (from.path == "/work" && to.path == "/") {
        this.clearTos(0, 19);
      } else if (from.path == "/work" && to.path == "/books") {
        this.clearTos(33, 15);
      } else if (from.path == "/books" && to.path == "/work") {
        this.clearTos(18, 15);
      } else if (from.path == "/" && to.path == "/books") {
        this.clearTos(33, 34);
      } else if (from.path == "/books" && to.path == "/") {
        this.clearTos(0, 34);
      }

      // if (this.$route.path == "/") {
      //   this.homePage = true;
      // } else if (this.$route.path == "/work") {
      //   this.workPage = true;
      // } else if (this.$route.path == "/books") {
      //   this.bookPage = true;
      // }
    }
  },

  methods: {
    clearTos(end, count) {
      var i;
      for (i = 0; i < this.timeoutIds.length; i++) {
        console.log(this.timeoutIds[i]);
        clearTimeout(this.timeoutIds[i]);
        console.log("cleared " + i);
      }
      this.timeoutIds = [];
      this.animate(end, count);
    },

    animate(end, count) {
      //forwards
      if (this.frameIndex < end) {
        this.timeoutIds.push(
          setTimeout(() => {
            this.activeSrc = this.frames[this.frameIndex];
            // if (this.frameIndex < end) {
            this.frameIndex++;
            this.animate(end, count);
            // }
          }, 630 / parseInt(count))
        );
      }
      //backwards
      else
        this.timeoutIds.push(
          setTimeout(() => {
            this.activeSrc = this.frames[this.frameIndex];
            if (this.frameIndex > end) {
              this.frameIndex--;
              this.animate(end, count);
            }
          }, 630 / parseInt(count))
        );
    }
  }
};
</script>

<style >
.head {
  align-items: center;
}
@media screen and (min-width: 1699.98px) {
  .head {
    margin-right: 10vw;
  }
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 1199.98px) {
  .head {
    margin-top: -19vh;
    width: 390px;
  }

  .shade-work {
    margin-left: 97px;
    transition: margin-left 0.63s;
  }

  .shade-home {
    margin-left: 124px;
    transition: margin-left 0.63s;
  }

  .shade-books {
    margin-left: 82px;
    transition: margin-left 0.63s;
  }
}

@media screen and (max-width: 1199.98px) {
  .head {
    width: 340px;
    /* margin-top: -40vh; */
    /* margin-right: -20px; */
    margin-top: -17vh;
  }
}

@media screen and (max-width: 991.98px) {
  .head {
    width: 300px;
    /* margin-top: -40vh; */
    /* margin-right: -20px; */
    margin-top: -14vh;
  }
}

@media screen and (max-width: 767.98px) {
  .head {
    width: 280px;
    /* margin-top: -40vh; */
    /* margin-right: -20px; */
    margin-top: -8vh;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 575.98px) {
  .head {
    width: 190px;
    /* margin-top: -40vh; */
    /* margin-right: -20px; */
    margin-top: -4vh;
  }
  /* 

  .shade {

    position: absolute;
    right: 42px;
    transition: right 0.63s;
    width: 110px;
  }

  .shade-work {
    right: 58px;
    transition: right 0.63s;
  }

  .shade-books {
    right: 67px;
    transition: right 0.63s;
  } */
  /* 
  .helper {
    height: 50vh;
  } */
}

.shade {
  margin-top: -22%;
}

/* .shade-work {
  margin-left: 97px;
  transition: margin-left 0.63s;
}

.shade-home {
  margin-left: 124px;
  transition: margin-left 0.63s;
}

.shade-books {
  margin-left: 82px;
  transition: margin-left 0.63s;
} */

.helper {
  position: absolute;
  align-items: center;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: auto;
  top: 0;
  right: 0;
  height: 100vh;
}
</style>
