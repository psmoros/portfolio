<template>
  <div class="container-fluid">
    <!-- option bar -->
    <div class="row option-bar">
      <div class="col-3">
        <div @click="onlyFavs = !onlyFavs; favsClicked" class="fav-only">
          <p class="fav-only d-none d-md-block">ONLY SHOW FAVORITES</p>
          <p class="fav-only d-md-none">ONLY FAVORITES</p>
        </div>
      </div>
      <div class="col">
        <input
          class="myinput"
          type="text"
          v-model="search"
          placeholder="Find by genre, title, author"
        >
      </div>
      <div class="col-3">
        <p v-if="filteredBooks.length>1" class="count">{{filteredBooks.length}} RESULTS</p>
        <p v-if="filteredBooks.length===1" class="count">1 RESULT</p>
        <p v-if="filteredBooks.length===0" class="count">NO RESULTS...</p>
      </div>
    </div>
    <!-- Body -->

    <!-- <div>{{books}}</div> -->
    <div v-for="(book, index) in filteredBooks" :key="index">
      <div class="row book-row">
        <!-- description column -->
        <div class="col-5 book-col">
          <div class="row">
            <!-- fav icon -->
            <div v-if="book.Fav === 'Yes'" class="col-0 d-none d-md-block">
              <svg
                class="bi bi-bookmark-fill"
                width="1.6rem"
                height="1.6rem"
                viewBox="0 0 16 16"
                fill="#fff55a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <!-- description -->
            <div class="col book-col">
              <!-- book count -->
              <div class="row">
                <p v-if="index<9" class="book-count">BOOK — N°00{{index+1}}</p>
                <p v-if="index<99 && index>=9" class="book-count">BOOK — N°0{{index+1}}</p>
                <p v-if="index>=99" class="book-count">BOOK — N°{{index+1}}</p>
                <!-- fav mobile -->
                <div v-if="book.Fav === 'Yes'" class="col-0 d-md-none">
                  <svg
                    class="bi bi-bookmark-fill"
                    width="0.8rem"
                    height="0.8rem"
                    viewBox="0 0 16 16"
                    fill="#fff55a"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <!-- title -->
              <div class="row">
                <p class="book-title">{{book.Title}}</p>
              </div>
              <!-- author -->
              <div class="row">
                <p class="book-author">{{book.Author}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- book content -->
        <div class="col">
          <!-- fav quote -->
          <div v-if="book.FavQuote !== ''" class="row content-row">
            <div class="col">
              <p>FAVORITE QUOTE</p>
              <p>{{book.FavQuote}}</p>
            </div>
          </div>
          <!-- review -->
          <div v-if="book.Why !== ''" class="row content-row">
            <div class="col">
              <p>PURPOSE</p>
              <p>{{book.Why}}</p>
              <!-- <SmoothReflow>
                <p class="review" key="0" v-if="!book.long" v-html="collapsedText(book.review)"></p>
                <p class="review" key="1" v-if="book.long" v-html="book.review"></p>
                <button
                  class="my-btn"
                  @click="book.long =!book.long"
                  v-if="book.review.length > 280"
                >[{{filteredBooks[index].long ? '-' : '+'}}]</button>
              </SmoothReflow>-->
            </div>
          </div>
          <div v-if="book.What !== ''" class="row content-row">
            <div class="col">
              <p>LEARNINGS</p>
              <p v-html="book.What"/>
            </div>
          </div>
          <!-- genre -->
          <div class="row">
            <div class="col">
              <p class="genre">{{book.Genre}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import db from "../firebaseInit.js";
import bookData from "../bookData.js";
// import _ from "lodash";

// import PostService from "../../PostService.js";

export default {
  data() {
    return {
      books: [],
      search: "",
      onlyFavs: false
    };
  },

  methods: {
    collapsedText(review) {
      if (review.toString().length > 280) {
        const res = review.toString().slice(0, 280);

        return res.concat("...");
      }
      return review;
    },
    compare(a, b) {
      console.log("a.title = " + a.Title + ", b.title = " + b.Title);

      if (a.Title < b.Title) {
        console.log(-1);
        return -1;
      }
      if (a.Title > b.Title) {
        console.log(1);
        return 1;
      }
      console.log(0);
      return 0;
    },
    sort() {
      console.log("called sort");
      this.books = this.books.sort(this.compare);
    },

    favsClicked() {
      this.$gtag.event("favs-click", {
        event_category: "books",
        event_label: "Only favs clicked",
        value: 1
      });
    }
  },

  computed: {
    filteredBooks() {
      return bookData.filter(bookData => {
        if (
          !this.onlyFavs &&
          (bookData.Author.toUpperCase().match(this.search.toUpperCase()) ||
            bookData.Title.toUpperCase().match(this.search.toUpperCase()) ||
            bookData.Genre.toUpperCase().match(this.search.toUpperCase()))
        ) {
          return true;
        } else if (
          bookData.Fav === "Yes" &&
          (bookData.Author.toUpperCase().match(this.search.toUpperCase()) ||
            bookData.Title.toUpperCase().match(this.search.toUpperCase()) ||
            bookData.Genre.toUpperCase().match(this.search.toUpperCase()))
        ) {
          return true;
        }
        return false;
      });
    }
  },

  filters: {
    appendGenres: function(value, index) {
      if (index > 0) {
        return " – " + value;
      }
      return value;
    }
  },

  created() {
    bookData = bookData.sort(this.compare);
  }
};
</script>

<style scoped>
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 1199.98px) {
  .count {
    font-size: 1.6rem;
  }
  .book-title {
    font-size: 1.6rem;
  }

  .col-0 {
    margin-left: -31px;
    margin-right: 5px;
    margin-top: 2.7px;
  }
}

@media screen and (max-width: 1199.98px) {
  .book-title {
    font-size: 1.2rem;
    margin: 5px 0 5px 0;
  }

  .count {
    font-size: 1.2rem;
  }

  .book-row {
    font-size: 0.9rem;
  }

  .col-0 {
    margin-left: -31px;
    margin-right: 5px;
    margin-top: 1.5px;
  }

  .option-bar {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 991.98px) {
  .book-title {
    font-size: 1rem;
    margin: 5px 0 5px 0;
  }

  .count {
    font-size: 1rem;
  }

  .book-row {
    font-size: 0.8rem;
  }

  .col-0 {
    margin-left: -31px;
    margin-right: 5px;
    margin-top: 1.5px;
  }

  .option-bar {
    font-size: 0.8rem;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 767.98px) {
  .book-title {
    font-size: 0.8rem;
    margin: 5px 0 5px 0;
    color: #fff55a;
  }

  .count {
    font-size: 0.8rem;
  }

  .book-row {
    font-size: 0.625rem;
  }

  .col-0 {
    margin-left: 5px;

    margin-top: 0px;
  }

  .myinput {
    margin-top: -2px;
  }

  .option-bar {
    font-size: 0.625rem;
  }
}

.container-fluid {
  background-color: #f34e32;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
  z-index: 5;
  min-height: 40vh;
}

.review {
  display: inline;
}

.my-btn {
  display: inline;
  /* margin-left: 10px; */
  color: #fff55a;
  border: none;
  background-color: transparent;
  padding-right: 3px;
}

.my-btn:focus {
  outline: none;
}

.my-btn :hover {
  cursor: pointer;
}

.fav-only {
  cursor: pointer;
  display: inline;
  margin-top: 1.9px;
}

p {
  color: white;
  font-family: "HelveticaNowDisplay-Bold";
  margin: 0;
}
input,
select,
textarea {
  color: white;
  background-color: transparent;
  font-family: "HelveticaNowDisplay-Bold";
  border: none;
  text-transform: uppercase;
}

.book-title {
  text-transform: uppercase;
}

.book-row {
  padding-bottom: 7vh;
}

textarea:focus,
input:focus {
  color: white;
  outline: none;
}

.genre {
  display: inline;
  text-transform: uppercase;
}

input::placeholder {
  color: white;
}

.book-count {
  margin-bottom: 0px;
}
.row {
  margin: 0;
}
.book-author {
  text-transform: uppercase;
}

.content-row {
  margin-bottom: 15px;
}

.col,
.col-2,
.col-3 {
  padding: 0;
}

.myinput {
  width: 100%;
}

.book-col {
  padding: 0 10px 0 0;
}

.option-bar {
  margin-bottom: 5vh;
}

.count {
  color: #fff55a;
  margin-top: -2px;
  float: right;
}
</style>