import Vue from 'vue';


export default {
    install(Vue) {
        Vue.prototype.sayHello = function () {
            alert('hello!')
        }
    }
}
