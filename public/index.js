

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      reviews: [
        {
          text: "Vue.js is the best thing since sliced bread",
          rating: 5,
          reviewer: "Mary Poppins"
        },
        {
          text: "I love Vue.js",
          rating: 5,
          reviewer: "Pat Brown"
        },
        {
          text: "I don't love Vue.js",
          rating: 2,
          reviewer: "Anyonmous"
        }
      ],
      newReview: {text: "", rating: "", reviewer: ""}
    };
  },
  created: function() {},
  methods: {
    addReview: function() {
      if (this.newReview.text !== "") {
        console.log('adding the review...');
        this.reviews.push(this.newReview);
        this.newReview = {text: "", rating: "", reviewer: ""};
      }
    },
    removeReview: function(theReview) {
      console.log('in removing review');
      // console.log(theReview);
      // find the index of the particular review
      var index = this.reviews.indexOf(theReview);
      console.log(index);
      // remove that index from the array
      this.reviews.splice(index, 1);
    },
    isPositive: function(theReview) {
      var text = theReview.text;
      var text = "vuejs is bad"
      return text.indexOf('bad') === -1;
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

