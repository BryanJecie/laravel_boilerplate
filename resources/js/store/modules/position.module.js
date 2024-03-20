import axios from "axios";
const ENDPOINT = '/api/positions'

// Default State
const getDefaultState = () => {
  return {
    positions: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getPositions: (state) => state.positions
};

const actions = {
  async loadItems({ commit }, params) {
    try {
      const resp = await axios.get(ENDPOINT, { params });
      commit('SET_POSITIONS', resp.data.data)
    } catch (error) {
      console.log(error)
    }
  },

  createPosition({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updatePosition({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deletePosition({ commit }, params) {
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
  SET_POSITIONS(state, params) {
    state.positions = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
