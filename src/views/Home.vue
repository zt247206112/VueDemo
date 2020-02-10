<template>
  <div class="home">
    <!-- 函数式组件 -->
    <my-Function-Buttom :class="className" id="btn1">button</my-Function-Buttom>
    <!--slot插槽-->
    <todo-list :todos="todos">
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete">✓</span>
        <span>{{slotProps.todo.text}}</span>
      </template>
    </todo-list>
  </div>
</template>

<script>
import myFunctionButtom from '../components/function_buttom'
import todoList from '../components/slot-scope/todoList'
import { _nextTick } from '../components/nextTick'
export default {
  name: 'home',
  components: {
    myFunctionButtom,
    todoList
  },
  data () {
    return {
      className: "btnname",
      todos: [
        {
          id: 0,
          text: 'ziwei0',
          isComplete: false
        },
        {
          text: 'ziwei1',
          id: 1,
          isComplete: true
        },
        {
          text: 'ziwei2',
          id: 2,
          isComplete: false
        },
        {
          text: 'ziwei3',
          id: 3,
          isComplete: false
        }
      ],
      obj: {
        name: '赵腾',
        age: 27
      }
    }
  },
  created () {
    // 测试nextTick
    console.log(1)
    _nextTick(() => {
      console.log(2)
    });
    this.init();
  },
  methods: {
    init () {
      this.proxy();
    },
    // 测试es6 proxy
    proxy () {
      const p = new Proxy(this.obj, {
        get (target, key, value) {
          return target[key]
        },
        set (target, key, value) {
          return target[key]
        }
      })
      console.log(p.name)
    }
  }
}
</script>
<style lang="less">
.btnname {
  color: red;
}
</style>
