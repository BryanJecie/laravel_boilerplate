import Vue from 'vue'
import { money } from './../services/Money'

Vue.filter('money', (value, options) => {
    options = options || {}
    return money(value, options.places, options.symbol, options.thousand, options.decimal)
})
