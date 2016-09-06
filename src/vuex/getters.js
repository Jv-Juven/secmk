import store from './store'

const pages = store.state.pages; // pages 应与 store.modules 中的名字相同

// 各个页面的回调函数
export const pageCallFuncs = () => {
    return pages.pageFuncs;
}
