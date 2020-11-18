<template>
  <div class="intro-padding">
    <div class="mobile-beliefs container-fluid">
      <div class="row mobile-beliefs-row">
        <div class="mobile-belief col-sm-12">
          <div class="row">
            <p class="count">BELIEF — N°001</p>
          </div>
          <div class="row mobile-belief-title">
            <p>EVERYTHING IS LEARNABLE</p>
          </div>
          <div class="row mobile-belief-description">
            <p>No talented person survives their hard working competiton and no shortcomming survives dedication. Only effort ignites qualities and turns them into accomplishments.</p>
          </div>
        </div>
        <div class="mobile-belief col-sm-12">
          <div class="row">
            <p class="count">BELIEF — N°002</p>
          </div>
          <div class="row mobile-belief-title">
            <p>ONLY THE FREE PROSPER</p>
          </div>
          <div class="row mobile-belief-description">
            <p>Being free means having choice and choice is the quantity and quality of competing alternatives. Only the individuals that fish from a wide horizon of good options – in ideas, careers, products, whatever– flourish.</p>
          </div>
        </div>
        <div class="mobile-belief col-sm-12">
          <div class="row">
            <p class="count">BELIEF — N°003</p>
          </div>
          <div class="row mobile-belief-title">
            <p>REASON IS NON-NEGOTIABLE</p>
          </div>
          <div class="row mobile-belief-description">
            <p>Only reason can be entrusted with leading us to objective truths. Faith, authority and gut feeling are generators of delusions. In decision making and understanding, reason’s rule is non-negotiable.</p>
          </div>
        </div>
        <div class="mobile-belief col-sm-12">
          <div class="row">
            <p class="count">BELIEF — N°004</p>
          </div>
          <div class="row mobile-belief-title">
            <p>COMPETITION IS FOR LOSERS</p>
          </div>
          <div class="row mobile-belief-description">
            <p>Everyone is unique. If discovered, that uniqueness grants its beneficiary an unfair advantage in some very specific trade. If pursued, this trade can secure its practitioner with a monopoly where only win-wins are possible.</p>
          </div>
        </div>

        <div class="mobile-belief col-sm-12">
          <div class="row">
            <p class="count">BELIEF — N°005</p>
          </div>
          <div class="row mobile-belief-title">
            <p>GROWING MEANS CHANGING</p>
          </div>
          <div class="row mobile-belief-description">
            <p>I look for arguments counter to my confortable conclusions so that I may get closer to the truth and be sensitive to the suffering of those beyond myself and my friends. Only an open, undogmatic mind is geared for growth.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-sm-block"></div>
  </div>
</template>

// <script>
// import Beliefs from "./Beliefs.vue";
// export default {
//   components: {
//     Beliefs
//   }
// };
//
</script>


<style scoped>
/* padding bottom  */
@media screen and (min-height: 1020.98px) {
  .d-sm-block {
    height: 30px;
  }
}
@media screen and (max-height: 1020.98px) {
  .d-sm-block {
    height: 100px;
  }
}

@media screen and (max-height: 857.98px) {
  .d-sm-block {
    height: 150px;
  }
}

@media screen and (max-height: 715px) {
  .d-sm-block {
    height: 200px;
  }
}

/* padding bottom end */

@media screen and (min-width: 1199.98px) {
  .mobile-beliefs {
    display: none;
  }
}

@media screen and (max-width: 1199.98px) {
  .mobile-belief-title {
    font-size: 1.5rem;
  }

  .intro-padding {
    font-size: 1rem;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 575.98px) {
  .mobile-belief-title {
    font-size: 1rem;
  }

  .intro-padding {
    font-size: 0.8rem;
  }
}

.intro-padding {
  width: 100%;
  background-color: #fdcc06;
  font-family: "HelveticaNowDisplay-Bold";
}

.mobile-beliefs-row {
  margin: 0;
}

.col-sm-12 {
  padding: 0 0 50px 0;
}

.mobile-beliefs {
  padding: 0;
  /* position: absolute; */
  /* display: none; */
  /* background-color: blueviolet; */
}
.mobile-beliefs-row {
  color: black;
  padding-right: 5vw;
  padding-left: 5vw;
}

.last-mobile-belief {
  padding: 0;
}
.row {
  margin-left: 0;
}

.count {
  margin-bottom: 3px;
}

.last-row {
  margin-left: 0;
}

.mobile-belief-title {
  color: white;
  margin-bottom: 0;
}

.mobile-belief-description {
  /* text-align: justify; */
}
</style>
