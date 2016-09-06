<template>
    <div class="swiper-slide single-page">0002</div>
</template>
<script type="text/javascript">
    import * as actions from 'data/actions'
    export default {
        vuex: {
            actions
        },
        ready() {
            // 页面函数队列
            this.pushFuncs(() => {
                console.log("002");
            });
        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
