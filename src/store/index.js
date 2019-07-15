import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:0,
        arr:[{ id: 1, text: "chenliu", done: true },
        { id: 2, text: "huanghe", done: false }]
    },
    mutations:{
        addcount(state,val){
            state.count += val;
        },
        reducecount(state,val){
            if(state.count>0){
                state.count -= val;
            }
        }
    },
    getters:{
        doneArr:state=>{
            console.log(state.arr)
            return state.arr.filter(item => item.done)
        }
    }
})

export default store;