<template>
  <div class="books">
    <h1 class="books-text">BOOKS</h1>
  </div>
</template>


<style>
.books-text {
  font-size: 12rem;
  color: #fff55a;
  margin-left: 5vw;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
}

.books {
  margin-left: -9px;
  position: absolute;
  top: 0;
}

@media screen and (min-width: 1199.98px) {
  .books-text {
    margin-top: -7%;
    font-size: 11rem;
  }

  .books {
    margin-left: -9px;
  }
}
@media screen and (max-width: 1199.98px) {
  .books-text {
    margin-top: -10%;
    font-size: 9rem;
  }

  .books {
    margin-left: -8px;
  }
}

@media screen and (max-width: 991.98px) {
  .books-text {
    margin-top: -10%;
    font-size: 8rem;
  }

  .books {
    margin-left: -6px;
  }
}

@media screen and (max-width: 767.98px) {
  .books-text {
    margin-top: -10%;
    font-size: 6rem;
  }

  .books {
    margin-left: -2px;
  }
}
@media screen and (max-width: 575.98px) {
  .books-text {
    margin-top: -10%;
    font-size: 3.8rem;
  }

  .books {
    margin-left: -2px;
  }
}
</style>
