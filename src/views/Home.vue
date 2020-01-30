<template>
  <div class="home">
    <!-- 函数式组件 -->
    <my-Function-Buttom :class="className" id="btn1">button</my-Function-Buttom>
  </div>
</template>

<script>
import myFunctionButtom from '../components/function_buttom'
export default {
  name: 'home',
  components: {
    myFunctionButtom
  },
  data () {
    return {
      className: "btnname"
    }
  }
}
</script>
<style lang="less">
.btnname {
  color: red;
}
</style>
