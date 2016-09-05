<template>
    <div class="swiper-slide single-page">0003</div>
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
                console.log("003");
            })
        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
