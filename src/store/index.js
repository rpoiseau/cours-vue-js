import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        age: 0
    },
    mutations: {
        SET_AGE: (state, value) => {
            state.age = value;
        }
    }
});