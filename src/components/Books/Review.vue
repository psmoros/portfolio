<template>
  <div class="box">
    <h1 class="title">CSS Expand transition with Vue.js directive</h1>
    <p>
      You might now that it's impossible to do a transition from
      <code>height: 0;</code> to
      <code>height: auto;</code>.
    </p>
    <p>This is why you have to use JS to perform this transition. In this pen, I used JS only to set a fixed height on the element that will be expanded.</p>
    <div class="expand" v-expand="isExpanded">
      <p>
        I created a directive for Vue, driven by a simple boolean (
        <code>isExpanded</code>).
      </p>
      <p>
        The directive calculates the height of the
        <code>.expand</code> block and set it via the
        <code>style</code> attribute. It also adds the necessary class that triggers the transition.
      </p>
    </div>
    <div class="box-footer">
      <button @click="isExpanded = !isExpanded">{{ isExpanded ? 'Less' : 'More' }}</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return { isExpanded: false };
  },
  methods: {
    calcHeight() {
      const currentState = el.getAttribute("aria-expanded");

      el.classList.add("u-no-transition");
      el.removeAttribute("aria-expanded");
      el.style.height = null;
      el.style.height = this.$el.clientHeight + "px";
      console.log(el.style.height);

      el.setAttribute("aria-expanded", currentState);

      setTimeout(function() {
        el.classList.remove("u-no-transition");
      });
    }
  },
  directives: {
    expand: {
      // directive definition
      inserted: function(el, binding) {
        if (binding.value !== null) {
          this.calcHeight();
          el.classList.add("expand");
          el.setAttribute("aria-expanded", binding.value ? "true" : "false");
          this.calcHeight();
          window.addEventListener("resize", this.calcHeight);
        }
      },
      update: function(el, binding) {
        if (el.style.height && binding.value !== null) {
          el.setAttribute("aria-expanded", binding.value ? "true" : "false");
        }
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway");
.expand {
  overflow: hidden;
  -webkit-transition-property: height;
  transition-property: height;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.expand[aria-expanded="false"] {
  height: 0 !important;
  -webkit-transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.u-no-transition {
  -webkit-transition-duration: 0s !important;
  transition-duration: 0s !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 100%;
  padding: 12px;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  font-family: Raleway, sans-serif;
  color: #6a6969;
}

h1 {
  margin-top: 0;
  text-align: center;
  font-size: 1.8em;
}

p {
  margin-top: 0;
  margin-bottom: 0.5em;
}

code {
  padding: 0 5px 2px;
  border-radius: 4px;
  background-color: #dfdfdf;
  font-size: 0.9em;
}

button {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border-width: 0;
  border-radius: 3px;
  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
  font-family: inherit;
  font-size: 1.1em;
  color: #fff;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  cursor: pointer;
}
button:hover {
  box-shadow: 0 0 6px #ff9a44;
}
button:focus {
  outline: none;
  box-shadow: 0 0 20px #ff9a44;
}

.box {
  background-color: salmon;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  border-radius: 3px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.box-footer {
  padding-top: calc(24px - 0.5em);
  text-align: center;
}
</style>
