import axios from "axios";
const API_USER = '/api/user'

// Default State
const getDefaultState = () => {
    return {
        users: [],
        profile: null,
        completedPercent: 0,
        user: null
    };
};

// State
const state = getDefaultState();

const getters = {
    getUser: (state) => state.user
};

const actions = {
    async loadUser({ commit }) {
        try {
            const resp = await axios.get(API_USER);
            commit('SET_USER', resp.data)
        } catch (error) {
            console.log(error)
        }
    }
};

const mutations = {
    SET_USER(state, params) {
        state.user = params
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
