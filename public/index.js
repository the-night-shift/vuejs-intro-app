

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
      ]
    };
  },
  created: function() {},
  methods: {},
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

