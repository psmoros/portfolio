<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col social">
        <p style="cursor: not-allowed;">CV — PRINT RESPONSIBLY</p>
        <a
          href="https://www.linkedin.com/in/psmoros/"
          target="_blank"
          rel="noopener noreferrer"
        >LINKEDIN</a>
        <p style="cursor: not-allowed;">MEDIUM</p>
        <a href="https://github.com/psmoros" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a
          href="https://stackoverflow.com/users/7748112/pavlos-moros"
          target="_blank"
          rel="noopener noreferrer"
        >STACK OVERFLOW</a>
        <a
          href="https://www.instagram.com/popcrt/"
          target="_blank"
          rel="noopener noreferrer"
        >INSTAGRAM</a>
        <a
          href="https://www.quora.com/profile/Pavlo-Moros"
          target="_blank"
          rel="noopener noreferrer"
        >QUORA</a>
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
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 576px) {
  img {
    width: 11rem;
  }

  .credits {
    font-size: 0.66rem;
  }

  .social {
    font-size: 0.66rem;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 575px) {
  img {
    width: 8rem;
    margin-top: 10px;
  }
  .credits {
    font-size: 0.5rem;
  }

  .social {
    font-size: 0.5rem;
  }
}

a,
p {
  margin-bottom: 4px;
  color: white;
  font-family: "HelveticaNowDisplay-Bold";
  display: block;
}

img {
  position: absolute;
  right: 1rem;
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

  float: right;
  text-align: end;
}

.container-fluid {
  background-color: black;
  padding: 5vh 5vw 5vh 5vw;
}
</style>

