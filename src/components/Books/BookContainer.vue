<template>
  <div class="container-fluid">
    <!-- option bar -->
    <div class="row option-bar">
      <div class="col">
        <p @click="onlyFavs = !onlyFavs" class="fav-only">ONLY SHOW FAVORITES</p>
      </div>
      <div class="col">
        <input type="text" v-model="search" placeholder="SEARCH">
      </div>
      <div class="col-3">
        <p class="count">{{filteredBooks.length}} Results</p>
      </div>
    </div>
    <!-- Body -->
    <div v-for="(book, index) in filteredBooks" :key="index">
      <div class="row book-row">
        <!-- description column -->
        <div class="col-5">
          <div class="row">
            <!-- fav icon -->
            <div v-if="book.fav" class="col-0">
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
                <p class="book-count">BOOK — N°00{{index+1}}</p>
              </div>
              <!-- title -->
              <div class="row">
                <p class="book-title">{{book.title}}</p>
              </div>
              <!-- author -->
              <div class="row">
                <p class="book-author">{{book.author}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- book content -->
        <div class="col">
          <!-- fav quote -->
          <div class="row content-row">
            <div class="col">
              <p>FAVORITE QUOTE</p>
              <p>{{book.favQuote}}</p>
            </div>
          </div>
          <!-- review -->
          <div class="row content-row">
            <div class="col">
              <p>REVIEW</p>
              <SmoothReflow>
                <p class="review" key="0" v-if="!book.long" v-html="collapsedText(book.review)"></p>
                <p class="review" key="1" v-if="book.long" v-html="book.review"></p>
                <button
                  class="my-btn"
                  @click="book.long =!book.long"
                >[{{books[index].long ? '-' : '+'}}]</button>
              </SmoothReflow>
            </div>
          </div>
          <!-- genre -->
          <div class="row">
            <div class="col">
              <div class="genre" v-for="(g, i) in book.genre" :key="i">
                <p class="genre">{{book.genre[i] | appendGenres(i) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit.js";

export default {
  data() {
    return {
      // books: [
      //   {
      //     title: "LOVE, POVERTY AND WAR",
      //     author: "CHISTOPHER HITCHENS",
      //     favQuote:
      //       "In a time when both rights and reason are under several kinds of open and covert attack, the life and writing of Thomas Paine will always be part of the arsenal on which we shall need to depend.",
      //     review:
      //       "It's hardly surprising to find the object of this commentary that coined the idiom <em>Human Rights </em>amongst the Atlantic Monthly Press's 10 Books that Changed the World amongst the bible, the quran, plato's republic, darwin's origin of species, marx's das kapital, smith's wealth of nations, makiaveli's prince and clausewitch's on war. Being a political descendant of the founding father, Hitchens provides a stark and approachable account of this work's context and impact. This makes for an essential for anyone with aspirations to stand for human dignity.",
      //     genre: ["PHILOSOPHY", "ETHICS", "TREATISE"],
      //     long: false
      //   }
      // ],
      books: [],
      search: "",
      onlyFavs: false
    };
  },

  methods: {
    collapsedText(review) {
      const res = review.toString().slice(0, 280);
      return res.concat("...");
    }
  },

  // filters: {
  //   striphtml: function(value) {
  //     var div = document.createElement("div");
  //     div.innerHTML = value;
  //     var text = div.textContent || div.innerText || "";
  //     return text;
  //   }
  // },
  computed: {
    filteredBooks() {
      return this.books.filter(books => {
        if (
          !this.onlyFavs &&
          (books.author.toUpperCase().match(this.search.toUpperCase()) ||
            books.title.toUpperCase().match(this.search.toUpperCase()))
        ) {
          return true;
        } else if (
          books.fav &&
          (books.author.toUpperCase().match(this.search.toUpperCase()) ||
            books.title.toUpperCase().match(this.search.toUpperCase()))
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
    db.collection("books")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().title,
            author: doc.data().author,
            favQuote: doc.data().favQuote,
            review: doc.data().review,
            genre: doc.data().genre,
            long: doc.data().long,
            fav: doc.data().fav
          };
          this.books.push(data);
        });
      });
  }
};
</script>

<style scoped>
/* .long-enter-active,
.long-leave-active {
  transition-property: height;
}

.long-enter,
.long-leave-to {
  height: 0;
} */
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
  font-size: 1.6rem;
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
}

input::placeholder {
  color: white;
}

.col-0 {
  margin-left: -31px;
  margin-right: 5px;
  margin-top: 2.7px;
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
.col-5 {
  padding: 0;
}

.option-bar {
  margin-bottom: 5vh;
}

.count {
  color: #fff55a;
  font-size: 1.6rem;
  float: right;
}

.col {
  padding: 0;
}
</style>