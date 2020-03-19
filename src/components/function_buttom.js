
export default {
  functional: true,
  render: function(createElement, context) {
    return createElement("button", context.data, context.children)
  }
}