<template>
    <!-- Swiper 的窗口  -->
    <div class="swiper-container swiper-body">
        <!-- Swiper 的容器 -->
        <div class="swiper-wrapper">
            <!-- Swiper 的单页 -->
            <div class="swiper-slide single-page">1</div>
            <div class="swiper-slide single-page">2</div>
            <div class="swiper-slide single-page">3</div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Swiper from "swiper"
    export default {
        data() {
            return {}
        },
        ready() {
            console.log(Swiper);
            // 初始化Swiper
            let bodySwiper = new Swiper(".swiper-body", {
                // Optional parameters
                direction: 'vertical',
                loop: true,
                initialSlide: 0,
                speed: 300,
                spaceBetween: 30,

                // If we need pagination
                // pagination: '.swiper-pagination',

                // Navigation arrows
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',

                // And if we need scrollbar
                // scrollbar: '.swiper-scrollbar',
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
