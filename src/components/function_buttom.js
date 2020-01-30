// import Vue from 'vue'
// Vue.component("my-function-button", {
//   functional: true,
//   render: function(createElement, context) {
//     return createElement("button", context.data, context.children)
//   }
// })

export default {
  functional: true,
  render: function(createElement, context) {
    console.log('ztttt', context)
    return createElement("button", context.data, context.children)
  }
}