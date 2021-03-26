import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let taskStorage = window.localStorage.getItem('taskList');
const state = { tasksList: taskStorage ? JSON.parse(taskStorage) : [] };

const actions = {
    addTask({ commit }, task) {
        task.id = (Math.random() + 1).toFixed(5);
        commit('addTask', task);
        commit('saveData');
    },

    toggleTask({ commit }, task) {
        commit('toggleTask', task);
        commit('saveData');
    },

    deleteTask({ commit }, task) {
        commit('deleteTask', task);
        commit('saveData');
    },

    checkAll({ commit, state }) {
        const allUndone = state.tasksList.filter(item => !item.checked);
        commit('toggleAll', allUndone);
        commit('saveData');
    },

    uncheckAll({ commit, state }) {
        const allDone = state.tasksList.filter(item => item.checked);
        commit('toggleAll', allDone);
        commit('saveData');
    },

    deleteAllDone({ commit, state }) {
        const tasksDone = state.tasksList.filter(item => item.checked);
        commit('deleteAllDone', tasksDone);
        commit('saveData');
    },
};

const getters = {
    undoneTasks(state) {
        return state.tasksList.filter(item => !item.checked);
    },

    doneTasks(state) {
        return state.tasksList.filter(item => item.checked);
    },
}

const mutations = {
    addTask(state, payload) {
        state.tasksList.push(payload);
    },

    toggleTask(state, payload) {
        state.tasksList.map(item => {
            if (item.id === payload.id) {
                item.checked = !item.checked;
            }
        });
    },

    toggleAll(state, payload) {
        state.tasksList.map(item => {
            if (payload.includes(item)) {
                item.checked = !item.checked;
            }
        })
    },

    deleteTask(state, taskToDel) {
        state.tasksList = state.tasksList.filter(item => item.id !== taskToDel.id);
    },

    deleteAllDone(state, payload) {
        state.tasksList = state.tasksList.filter(item => !payload.includes(item));
    },

    saveData(state) {
        window.localStorage.setItem('taskList', JSON.stringify(state.tasksList));
    }
};

const store = new Vuex.Store({ state, actions, mutations, getters });

export default store;