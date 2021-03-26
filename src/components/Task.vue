<template>
  <div class="card">
      <div class="card-body">
          <h5 class="card-title">Task</h5>
          <p class="card-text" :class="task.checked ? 'done' : false">{{ task.description }}</p>
          <button class="btn btn-primary text" @click="$emit('toggleTask', task)">
              {{task.checked ? "Undo" : "Done"}}
          </button>
          <button class="btn btn-warning ml-2" @click="$emit('deleteTask', task)">Delete</button>
          <!-- "spinner-border text-primary" -->
      </div>
  </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        task: { type: Object, required: true }
    },
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
    color: #c1c1c1;
}
</style>