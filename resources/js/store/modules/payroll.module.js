import axios from "axios";
const ENDPOINT = '/api/payrolls'

// Default State
const getDefaultState = () => {
  return {
    payrolls: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getPayrolls: (state) => state.payrolls
};

const actions = {
  async loadItems({ commit }, params) {
    try {
      const resp = await axios.get(ENDPOINT, { params });
      commit('SET_PAYROLLS', resp.data.data)
    } catch (error) {
      console.log(error)
    }
  },

  createPayroll({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updatePayroll({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deletePayroll({ commit }, params) {
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
  SET_PAYROLLS(state, params) {
    state.payrolls = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
