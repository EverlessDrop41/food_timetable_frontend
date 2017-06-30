module.exports = function () {
  var App = require("./components/App.vue");
  var Vue = require("Vue");
  var jq = require("jquery");

  window.$ = jq;
  window.jQuery = jq;

  $(document).ready(function () {
    console.log("READY");
    new Vue({
      el: 'body',
      components: {
        "app": App,
        'my-component': {template: '<div>A custom component!</div>'}
      },
      data: {
        title: "FOOD"
      }
    });
  });
}
