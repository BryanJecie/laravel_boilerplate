import Vue from "vue";
import Vuex from "vuex";

import user from './modules/user.module'
import employee from './modules/employee.module'
import position from './modules/position.module'
import shiftSchedule from './modules/shiftSchedule.module'
import typeOfDeduction from './modules/typeOfDeduction.module'
import payrollPeriod from './modules/payrollPeriod.module'
import deduction from './modules/deduction.module'
import dailyTimeRecord from './modules/dailyTimeRecord.module'
import overtime from './modules/overtime.module'
import payroll from './modules/payroll.module'
import report from './modules/report.module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        employee,
        position,
        shiftSchedule,
        typeOfDeduction,
        payrollPeriod,
        deduction,
        dailyTimeRecord,
        overtime,
        payroll,
        report
    }
});
