<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <slot :todo="todo">
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array
    }
  }
}
</script>