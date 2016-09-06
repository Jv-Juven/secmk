import {
    SET_FUNCS
} from 'data/mutation-types'

const state = {
    pageFuncs: []
}

const mutations = {
    [SET_FUNCS] (state, func) {
        Array.prototype.push.call(state.pageFuncs, func);
    }
}

export default {
    state,
    mutations,
}
