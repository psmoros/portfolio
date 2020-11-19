<template>
  <div>
    <div class="beliefs container-fluid">
      <div class="row beliefs-row">
        <div class="belief col">
          <div class="row">
            <p>BELIEF — N°001</p>
          </div>
          <div class="row belief-title">
            <p>
              EVERYTHING IS
              <br class="break">LEARNABLE
            </p>
          </div>
          <div class="row belief-description">
            <p>No talented person survives their hard working competiton and no shortcomming survives dedication. Only effort ignites qualities and turns them into accomplishments.</p>
          </div>
        </div>
        <div class="belief col">
          <div class="row">
            <p>BELIEF — N°002</p>
          </div>
          <div class="row belief-title">
            <p>
              ONLY THE FREE
              <br class="break">PROSPER
            </p>
          </div>
          <div class="row belief-description">
            <p>Being free means having choice and choice is the quantity and quality of competing alternatives. Only the individuals that fish from a wide horizon of good options – in ideas, careers, products, whatever– flourish.</p>
          </div>
        </div>
        <div class="belief col">
          <div class="row">
            <p>BELIEF — N°003</p>
          </div>
          <div class="row belief-title">
            <p>REASON IS NON-NEGOTIABLE</p>
          </div>
          <div class="row belief-description">
            <p>Only reason can be entrusted with leading us to objective truths. Faith, authority and gut feeling are generators of delusions. In decision making and understanding, reason’s rule is non-negotiable.</p>
          </div>
        </div>
        <div class="belief col">
          <div class="row">
            <p>BELIEF — N°004</p>
          </div>
          <div class="row belief-title">
            <p>COMPETITION IS FOR LOSERS</p>
          </div>
          <div class="row belief-description">
            <p>Everyone is unique. If discovered, that uniqueness grants its beneficiary an unfair advantage in some very specific trade. If pursued, this trade secures its practitioner with a monopoly where only win-wins are possible.</p>
          </div>
        </div>

        <div class="belief last-belief col">
          <div class="last-row row">
            <p>BELIEF — N°005</p>
          </div>
          <div class="row last-row belief-title">
            <p>GROWING MEANS CHANGING</p>
          </div>
          <div class="last-row row belief-description">
            <p>I look for arguments counter to my confortable conclusions so that I may get closer to the truth and be sensitive to the suffering of those beyond myself and my friends. Only an open, undogmatic mind is geared for growth.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
@media screen and (max-width: 1199.98px) {
  .beliefs {
    display: none;
  }
}

@media screen and (min-width: 2018.98px) {
  .break {
    display: none;
  }
}

.beliefs-row {
  margin: 0;
}

.beliefs {
  padding: 0;
  position: absolute;
  /* display: none; */
  /* background-color: blueviolet; */
}
.beliefs-row {
  color: black;
  /* margin-top: 59vh; */
  padding-right: 5vw;
  padding-left: 5vw;
}

.last-belief {
  padding: 0;
}

.last-row {
  margin-left: 0;
}

.belief-title {
  font-size: 1.5rem;
  color: white;
}

.belief-description {
  /* text-align: justify; */
}
</style>

