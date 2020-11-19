<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-7 col-sm-12" style="padding-left:0">
        <h4 style="color:white; margin-top:-4px">Thank you for scrolling that far.</h4>
        <p class="mb-3 newsletter-description">
          If you want to hear more from me,
          <span
            style="margin-left:3px"
          >I have a newsletter where I share my realisations.</span>
        </p>
        <vue-mailchimp-email-signup-form
          class="subscribe"
          :element-id="'first-email-signup-form'"
          :url="'https://pavlosmoros.us7.list-manage.com/subscribe/post?u=f410a12b8e408dfae40e1541e&amp;id=1cc16564ba'"
        />
      </div>
      <div class="col social" style="padding-left:0">
        <p style="cursor: not-allowed;">CV — PRINT RESPONSIBLY</p>
        <a
          href="https://www.linkedin.com/in/psmoros/"
          target="_blank"
          rel="noopener noreferrer"
        >LINKEDIN</a>
        <a href="https://github.com/psmoros" target="_blank" rel="noopener noreferrer">GITHUB</a>

        <a href="https://twitter.com/PavlosMoros" target="_blank" rel="noopener noreferrer">TWITTER</a>
        <a
          href="https://stackoverflow.com/users/7748112/pavlos-moros"
          target="_blank"
          rel="noopener noreferrer"
        >STACK OVERFLOW</a>
      </div>

      <div class="col">
        <img class="sign" src="../assets/signature.svg" alt>
        <div class="credits">
          <p>MADE BY YOURS TRULY</p>
          <p>LONDON 2020</p>
          <p>SCREW COPYRIGHTS</p>
          <p>
            STEAL MY CODE
            <a style="display:inline" href="http://github.com/psmoros/portfolio">HERE</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
div#first-email-signup-formmc_embed_signup_scroll {
  display: flex;
}

input#first-email-signup-formmce-EMAIL {
  background-color: transparent;
  border: none;
  border-bottom: white 1px solid;
  color: white;
  border-radius: 0px;
  padding-left: 0;
  font-family: HelveticaNowDisplay-Bold;
}

button#first-email-signup-formmc-embedded-subscribe {
  margin-left: 10px;
  border-radius: 14px;
  padding: 0px 15px;
  background-color: white;
  border: none;
  font-weight: 600;
  margin-top: 10px;
  font-family: HelveticaNowDisplay-Bold;
}
</style>


<style scoped>
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) {
  .sign {
    width: 11rem;
    top: -30px;
    right: 3rem;
  }

  .credits {
    font-size: 0.66rem;
  }

  .social {
    font-size: 0.66rem;
    display: none;
  }

  .newsletter-description {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 600px) and (max-width: 770px) {
  .sign {
    display: none;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .sign {
    width: 8rem;
    margin-top: 83px;
    right: 2rem;
  }
  .credits {
    font-size: 0.5rem;
  }

  .social {
    margin-top: 100px;
    font-size: 0.5rem;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .newsletter-description {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  input#first-email-signup-formmce-EMAIL {
    font-size: 0.1rem;
  }
}

a,
p {
  margin-bottom: 4px;
  color: white;
  font-family: "HelveticaNowDisplay-Bold";
  display: block;
}

.sign {
  position: absolute;
}

.row {
  margin: 0;
}

.col .col-3 {
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

