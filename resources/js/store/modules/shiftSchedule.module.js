import axios from "axios";
const ENDPOINT = '/api/employees/shift-schedules'

// Default State
const getDefaultState = () => {
  return {
    shiftSchedules: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getShiftSchedules: (state) => state.shiftSchedules,
};

const actions = {
  async loadItems({ commit }, params) {
    try {
        const resp = await axios.get(ENDPOINT, { params });
        commit('SET_SHIFT_SCHEDULE', resp.data.data)
    } catch (error) {
        console.log(error)
    }
  },

  createShiftSchedule({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updateShiftSchedule({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deleteShiftSchedule({ commit }, params) {
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
  SET_SHIFT_SCHEDULE(state, params) {
    state.shiftSchedules = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
