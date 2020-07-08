<template>
  <div>
    <div class="intro">
      <div class="mygood">
        <div class="greeting">
          <div class="d-flex flex-row">
            <div class="col greet-col">
              <transition name="fade" mode="out-in">
                <component :is="greeting[activeLang].name"></component>
              </transition>
            </div>
          </div>
          <div class="d-flex flex-row">
            <div class="col" style="padding-left : 0;">
              <h1 class="text lower d-none d-md-block">AN ENTERPRISING HUMANIST.</h1>
              <h1 class="text lower d-md-none">
                AN ENTERPRISING
                <br>HUMANIST.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import English from "./Languages/English";
import French from "./Languages/French";
import Greek from "./Languages/Greek";
import Spanish from "./Languages/Spanish";
import Arabic from "./Languages/Arabic";
// import Russian from "./Languages/Russian";

export default {
  data() {
    return {
      activeLang: 0,
      greeting: [
        {
          name: "English"
        },
        {
          name: "French"
        },
        {
          name: "Arabic"
        },
        {
          name: "Greek"
        },
        {
          name: "Spanish"
        }
        // {
        //   name: "Russian"
        // }
      ]
    };
  },
  methods: {
    showMe() {
      this.interval = setInterval(() => {
        // Increment next active span, or reset if it is last span

        if (this.activeLang === this.greeting.length - 1) {
          this.activeLang = 0;
        } else {
          this.activeLang++;
        }
        // OPTIONAL: If isActive property still has to be changed, we can update it after active index has changed
        this.greeting = this.greeting.map((lang, index) => {
          lang.isActive = this.activeLang === index;
          return lang;
        });
      }, 3200);
    }
  },

  created() {
    this.showMe();
  },

  components: {
    English,
    French,
    Greek,
    Spanish,
    Arabic
    // Russian
  }
};
</script>


<style>
.intro {
  margin-left: 5vw;
  margin-right: 5vw;
  position: absolute;
  top: 0;
}

.mygood {
  height: 100vh;

  display: flex;
  align-items: center;
}

.text {
  margin: 0 0 5px 0;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 1199.98px) {
  .text {
    font-size: 3rem;
  }

  .greeting {
    display: inline-block;
    margin-top: -25vh;
  }
}

@media screen and (max-width: 1199.98px) {
  .text {
    font-size: 2.4rem;
  }

  .greeting {
    display: inline-block;
    margin-top: -25vh;
  }
}

@media screen and (max-width: 991.98px) {
  .text {
    font-size: 2rem;
  }

  .greeting {
    display: inline-block;
    margin-top: -21vh;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 575.98px) {
  .text {
    font-size: 1.4rem;
  }

  .greeting {
    display: inline-block;
    margin-top: -14vh;
  }
}

.greet-col {
  padding-left: 0;
}

h1 {
  text-transform: uppercase;
}

.upper {
  display: inline-block;
  color: black;
}

.lower {
  color: white;
}
</style>
