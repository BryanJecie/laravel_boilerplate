import axios from "axios";
const ENDPOINT = '/api/reports'

// Default State
const getDefaultState = () => {
    return {
        dashboardItem: {},
    };
};

// State
const state = getDefaultState();

const getters = {
    getDashboardItem: (state) => state.dashboardItem
};

const actions = {
    async loadDashboardItems({ commit }, params) {
        try {
            const resp = await axios.get(`${ENDPOINT}/dashboard-items`, { params });
            commit('SET_DASHBOARD_ITEM', resp.data.data)
        } catch (error) {
            console.log(error)
        }
    },

    getMonthlyAttendance({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios.get(`${ENDPOINT}/monthly-attendance`, { params })
                .then(resp => resolve(resp.data.data))
                .catch(error => reject(error))
        })

    },
};

const mutations = {
    SET_DASHBOARD_ITEM(state, params) {
        state.dashboardItem = params
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
