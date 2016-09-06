import {
    SET_FUNCS, // 设置页面回调函数队列
} from "data/mutation-types"

// 把函数加入数组队列
export const pushFuncs = ({dispatch, state}, func) => {
    if (typeof func === 'function') {
        dispatch(SET_FUNCS, func);
    } else {
        console.error("[actions] pushFuncs => func 不是一个函数");
    }
}
