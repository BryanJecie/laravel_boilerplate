import axios from "axios";
const ENDPOINT = '/api/employees'

// Default State
const getDefaultState = () => {
    return {
        employees: [],
        items: {},
    };
};

// State
const state = getDefaultState();

const getters = {
    getEmployees: (state) => state.employees,
    getItems: (state) => state.items,
};

const actions = {
    async loadEmployees({ commit }, params) {
        try {
            const resp = await axios.get(ENDPOINT, { params });
            commit('SET_EMPLOYEE', resp.data.data)
        } catch (error) {
            console.log(error)
        }
    },

    loadItems({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios.get(`${ENDPOINT}/items`, { params })
                .then(data => resolve(data.data))
                .catch(error => reject(error));
        });
    },

    onShow({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios.get(`${ENDPOINT}/show`, { params })
                .then(resp => resolve(resp.data))
                .catch(error => reject(error));
        });

    },
    onStore({ commit }, params) {

        return new Promise((resolve, reject) => {
            axios.post(ENDPOINT, params)
                .then(resp => resolve(resp))
                .catch(error => reject(error));
        });

    },

    onUpdate({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios.post(`${ENDPOINT}/update`, params)
                .then(resp => resolve(resp.data))
                .catch(error => reject(error));
        });

    },

    onDelete({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios.delete(ENDPOINT, { params })
                .then(resp => resolve(resp))
                .catch(error => reject(error));
        });
    }

};

const mutations = {
    SET_EMPLOYEE(state, params) {
        state.items = params
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
