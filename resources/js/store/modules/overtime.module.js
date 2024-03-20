import axios from "axios";
const ENDPOINT = '/api/employees/overtimes'

// Default State
const getDefaultState = () => {
  return {
    overtimes: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getOvertimes: (state) => state.overtimes
};

const actions = {
  async loadItems({ commit }, params) {
    try {
      const resp = await axios.get(ENDPOINT, { params });
      commit('SET_OVERTIMES', resp.data.data)
    } catch (error) {
      console.log(error)
    }
  },

  createOvertime({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updateOvertime({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deleteOvertime({ commit }, params) {
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
  SET_OVERTIMES(state, params) {
    state.overtimes = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
