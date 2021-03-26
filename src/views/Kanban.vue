<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <h2>Todo</h2>
        <div class="container-fluid">
          <Task
            v-for="t in undoneTasks"
            :key="t.id"
            :task="t"
            @toggleTask="toggleTask"
            @deleteTask="deleteTask"
          />
          <button class="btn btn-primary mt-2" @click="checkAll">
            Check All
          </button>
        </div>
      </div>
      <div class="col-sm-6">
        <h2>Done</h2>
        <div class="container-fluid">
          <Task
            v-for="t in doneTasks"
            :key="t.id"
            :task="t"
            @toggleTask="toggleTask"
            @deleteTask="deleteTask"
          />
          <button class="btn btn-warning mt-2" @click="uncheckAll">
            Uncheck All
          </button>
          <button class="btn btn-warning mt-2 ml-2" @click="deleteAllDone">
            Remove All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Task from "@/components/Task.vue";

export default {
  name: "kanban",
  components: { Task },
  computed: {
    ...mapGetters(["undoneTasks", "doneTasks"]),
  },
  methods: {
    ...mapActions([
      "toggleTask",
      "deleteTask",
      "checkAll",
      "uncheckAll",
      "deleteAllDone",
    ]),
  },
};
</script>
