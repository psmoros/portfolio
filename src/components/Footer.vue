<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col social">
        <p>CV — PRINT RESPONSIBLY</p>
        <p>LINKEDIN</p>
        <p>MEDIUM</p>
        <p>GITHUB</p>
        <p>STACK OVERFLOW</p>
        <p>INSTAGRAM</p>
        <p>QUORA</p>
      </div>
      <div class="col">
        <img class="sign" src="../assets/signature.svg" alt>
        <div class="credits">
          <p>MADE BY YOURS TRULY</p>
          <p>CITY OF LONDON 2020</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.social {
  font-size: 0.66rem;
}
p {
  margin-bottom: 4px;
  color: white;
  font-family: "HelveticaNowDisplay-Bold";
}

img {
  position: absolute;
  right: 1rem;
  width: 11rem;
}

.row {
  margin: 0;
}

.col {
  padding: 0;
}

.credits {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.66rem;
  float: right;
  text-align: end;
}

.container-fluid {
  background-color: black;
  padding: 5vh 5vw 5vh 5vw;
}
</style>

