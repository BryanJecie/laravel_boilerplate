import axios from "axios";
const ENDPOINT = '/api/daily-time-records'

// Default State
const getDefaultState = () => {
  return {
    dailyTimeRecords: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getDailyTimeRecords: (state) => state.dailyTimeRecords
};

const actions = {
  async loadItems({ commit }, params) {
    try {
      const resp = await axios.get(ENDPOINT, { params });
      commit('SET_DAILY_TIME_RECORDS', resp.data.data)
    } catch (error) {
      console.log(error)
    }
  },

  createDailyTimeRecord({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updateDailyTimeRecord({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deleteDailyTimeRecord({ commit }, params) {
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
  SET_DAILY_TIME_RECORDS(state, params) {
    state.dailyTimeRecords = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
