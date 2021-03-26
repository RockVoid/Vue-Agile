<template>
  <div class="container-fluid pd-0">
    <div class="row main">
      <div class="col-sm-6 p-4 preset">
        <h1>Welcome to Vue Agile SPA :)</h1>
        <h4>
          Here you can organizing your tasks of the day and enjoy the potential of
          Kanban!
        </h4>
        <h5>&copy; Project By Roque Costa</h5>
      </div>
      <div class="col-sm-6 p-4">
        <h2>Tasks</h2>
        <form @submit.prevent="addTask(task)">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Type a task..."
              v-model="task.description"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary"
                type="submit"
                :disabled="!task.description"
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <div>
          <Task
            v-for="t in tasksList"
            :key="t.id"
            :task="t"
            @toggleTask="toggleTask"
            @deleteTask="deleteTask"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      task: { checked: false },
    };
  },
  components: { Task },
  computed: {
    ...mapState(["tasksList"]),
  },
  methods: {
    ...mapActions(["addTask", "toggleTask", "deleteTask"]),

    addTask(task) {
      this.$store.dispatch("addTask", task);
      this.task = { checked: false };
    },
  },
};
</script>

<style scoped>
.main {
  background-color: #f5f6fa;
  height: calc(100vh - 50px);
}

.preset {
  color: #f5f6fa;
  background-color: #54a0ff;
}
</style>