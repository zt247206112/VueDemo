<template>
  <div class="home">
    <!-- 函数式组件 -->
    <my-Function-Buttom v-longpress="incrementPlusOne" :class="className" id="btn1">button</my-Function-Buttom>
    <!--slot插槽-->
    <todo-list :todos="todos">
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete">✓</span>
        <span>{{slotProps.todo.text}}</span>
      </template>
    </todo-list>
    <!--自定义vue指令-->
    <div>{{count}}</div>
  </div>
</template>

<script>
import myFunctionButtom from '../components/function_buttom'
import todoList from '../components/slot-scope/todoList'
import { _nextTick } from '../components/nextTick'
import jsPractice from '../components/jsPractice'
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
      },
      count: 0
    }
  },
  directives: {
    longpress: {
      bind: function (el, binding, vnode) {
        let timer = null;
        let start = function (e) {
          if (timer == null) {
            // 创建定时器 ( 2s之后执行长按功能函数 )
            timer = setInterval(function () {
              //执行长按功能函数
              binding.value();
            }, 200)
          }
        }
        let cancel = function (e) {
          if (e.type === 'click') {
            binding.value();
          }
          if (timer !== null) {
            clearTimeout(timer);
            timer = null;
          }
        }
        // 添加事件监听器
        el.addEventListener("mousedown", start);

        // 取消计时器
        el.addEventListener("click", cancel);
        el.addEventListener("mouseout", cancel);
      },
      inserted: function () { },
      update: function () { },
      componentUpdated: function () { },
      unbind: function () { }
    }
  },
  created () {
    // 测试nextTick
    _nextTick(() => {
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
      // console.log(p.name)
    },
    incrementPlusOne () {
      this.count++;
    }
  }
}
</script>
<style lang="less">
.btnname {
  color: red;
}
</style>
