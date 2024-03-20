import 'alpinejs'

window.$ = window.jQuery = require('jquery');
window.Swal = require('sweetalert2');

// CoreUI
require('@coreui/coreui');

// Boilerplate
require('@js/bootstrap');
require('@js/plugins');

import Vue from 'vue'
import vSelect from "vue-select";

import $ from "jquery";
window.$ = window.jQuery = $;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// momentJS
import moment from 'moment'
moment.locale('en');
Vue.prototype.moment = moment;

// import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-select/dist/vue-select.css";

// import "jquery-confirm";
import store from '@js/store';
import '@js/filters';

// Load Pages here
Vue.component("v-select", vSelect);
const files = require.context('./views', true, /\.js$/i)
files.keys().map(key => {
    return key.split('/').pop().split('.')[0], files(key).default
})

const app = new Vue({
    el: '#app',
    store,
    created() {
        store.dispatch("user/loadUser");
    },
});
