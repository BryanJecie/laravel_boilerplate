import axios from "axios";
const ENDPOINT = '/api/payroll-periods'

// Default State
const getDefaultState = () => {
  return {
    payroll_periods: [],
  };
};

// State
const state = getDefaultState();

const getters = {
  getPayrollPeriods: (state) => state.payroll_periods
};

const actions = {
  async loadItems({ commit }, params) {
    try {
      const resp = await axios.get(ENDPOINT, { params });
      commit('SET_PAYROLL_PERIODS', resp.data.data)
    } catch (error) {
      console.log(error)
    }
  },

  createPayrollPeriod({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINT, params)
        .then((resp) => {
            resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  updatePayrollPeriod({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINT}/${params.id}`, params)
        .then((resp) => {
          resolve(resp);
        })
        .catch((error) => reject(error));
    });
  },

  deletePayrollPeriod({ commit }, params) {
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
  SET_PAYROLL_PERIODS(state, params) {
    state.payroll_periods = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
