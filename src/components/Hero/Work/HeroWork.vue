<template>
  <div class="work">
    <h1 class="work-text">WORK</h1>
  </div>
</template>


<style>
.work-text {
  color: #96ffca;
  margin-left: 5vw;
  height: 100vh;
  /* width: 100%; */
  display: flex;
  align-items: center;
}

.work {
  position: absolute;
  top: 0;
}

@media screen and (min-width: 1199.98px) {
  .work-text {
    margin-top: -7%;
    font-size: 11rem;
  }
}
@media screen and (max-width: 1199.98px) {
  .work-text {
    margin-top: -12%;
    font-size: 9rem;
  }
}

@media screen and (max-width: 991.98px) {
  .work-text {
    margin-top: -12%;
    font-size: 8rem;
  }
}

@media screen and (max-width: 767.98px) {
  .work-text {
    margin-top: -12%;
    font-size: 6rem;
  }
}
@media screen and (max-width: 575.98px) {
  .work-text {
    margin-top: -10%;
    font-size: 4rem;
  }
}
</style>

