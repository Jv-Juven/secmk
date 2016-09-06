/**
 * 页面的公共函数
 */

/**
 * 每个页面的初始化函数
 * @param  {[object]} container [Swiper实例]
 * @param  {[object]} swiper    [Swiper页面的swiper实例]
 * @param  {[object]} _this     [vue的实例]
 * @return {[null]}           [无返回值]
 */
exports.exec = (container, swiper, _this) => {
    // 页面函数队列长度
    let funcsLength = _this.pageCallFuncs.length;
    // 计算出当前页面的索引
    let index = container.loop ? (swiper.activeIndex - 1 + funcsLength) % funcsLength : (swiper.activeIndex + funcsLength) % funcsLength;
    // 执行当前页面的函数
    // console.log(swiper);
    _this.pageCallFuncs[index]();
}
