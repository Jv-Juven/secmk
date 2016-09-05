<template>
    <div class="swiper-slide single-page">0002</div>
</template>
<script type="text/javascript">
    export default {
        props: {
            funcs: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        created() {
            // 页面函数队列
            Array.prototype.push.call(this.funcs, () => {
                console.log("002");
            })
        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
