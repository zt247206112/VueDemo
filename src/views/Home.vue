<template>
  <div class="home">
    <!-- 函数式组件 -->
    <my-Function-Buttom @click="incrementPlusOne" v-longpress="incrementPlusOne" :class="className" id="btn1">button</my-Function-Buttom>
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
          // 如果是点击事件，不启动计时器，直接返回
          if (e.type === 'click'){
            return
          }
          if (timer == null){
            // 创建定时器 ( 2s之后执行长按功能函数 )
            timer = setInterval(function () {
              //执行长按功能函数
              binding.value()
            }, 200)
          }
        }
        let cancel = function () {
          if (timer !== null){
            clearTimeout(timer)
            timer = null
          }
        }
        // 添加事件监听器
        el.addEventListener("mousedown", start);

        // 取消计时器
        el.addEventListener("click", cancel);
        el.addEventListener("mouseout", cancel);
      },
      inserted: function () {
        console.log('inserted')
      },
      update: function () {
        console.log('update')
      },
      componentUpdated: function () {
        console.log('componentUpdated')
      },
      unbind: function () {
        console.log('unbind')
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
