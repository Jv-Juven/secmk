<template>
    <!-- Swiper 的窗口  -->
    <div class="swiper-container swiper-body">
        <!-- Swiper 的容器 -->
        <div class="swiper-wrapper">
            <!-- Swiper 的单页 -->
            <!-- <div class="swiper-slide single-page">1</div>
            <div class="swiper-slide single-page">2</div>
            <div class="swiper-slide single-page">3</div> -->
            <page1 :funcs.sync="pagesFuncs"></page1>
            <page2 :funcs.sync="pagesFuncs"></page2>
            <page3 :funcs.sync="pagesFuncs"></page3>
            <page4 :funcs.sync="pagesFuncs"></page4>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Swiper from "swiper"
    import Page1 from "components/page1"
    import Page2 from "components/page2"
    import Page3 from "components/page3"
    import Page4 from "components/page4"
    export default {
        data() {
            return {
                pagesFuncs: []
            }
        },
        components: {
            Page1,
            Page2,
            Page3,
            Page4,
        },
        ready() {
            let _this = this;
            // 计算当前所有页面的总数
            let funcsLength = this.pagesFuncs.length;
            // 初始化Swiper
            let bodySwiper = new Swiper(".swiper-body", {
                // Optional parameters
                direction: 'vertical',
                loop: true,
                initialSlide: 0,
                speed: 300,
                spaceBetween: 30,
                // 回调函数
                onSlideChangeEnd(swiper) {
                    // 计算出当前页面的索引
                    let index = (swiper.activeIndex - 1) % funcsLength;
                    // 执行当前页面的函数
                    _this.pagesFuncs[index]();
                }
            });
        }
    }

</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
    .swiper-body {
        width: 100%;
        height: 100%;
    }
    .single-page {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }
</style>
