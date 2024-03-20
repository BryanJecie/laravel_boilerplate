import axios from "axios";
const ENDPOINT = '/api/deductions'

// Default State
const getDefaultState = () => {
  return {
    deductions: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getDeductions: (state) => state.deductions
};

const actions = {
  async loadItems({ commit }, params) {
    try {
      const resp = await axios.get(ENDPOINT, { params });
      commit('SET_DEDUCTIONS', resp.data.data)
    } catch (error) {
      console.log(error)
    }
  },

  createDeduction({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updateDeduction({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deleteDeduction({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },
};

const mutations = {
  SET_DEDUCTIONS(state, params) {
    state.deductions = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
