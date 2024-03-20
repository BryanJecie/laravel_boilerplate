import axios from "axios";
const ENDPOINT = '/api/type-of-deductions'

// Default State
const getDefaultState = () => {
  return {
    type_of_deductions: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getTypeOfDeductions: (state) => state.type_of_deductions
};

const actions = {
  async loadItems({ commit }, params) {
    try {
      const resp = await axios.get(ENDPOINT, { params });
      commit('SET_TYPE_OF_DEDUCTIONS', resp.data.data)
    } catch (error) {
      console.log(error)
    }
  },

  createTypeOfDeduction({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updateTypeOfDeduction({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deleteTypeOfDeduction({ commit }, params) {
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
  SET_TYPE_OF_DEDUCTIONS(state, params) {
    state.type_of_deductions = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
