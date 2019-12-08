<template>
    <div class="shopLimit">
        <div class="title">购买须知</div>
        <div class="limit-item">
            <div class="limit-title">有效期</div>
            <div class="limit-inner">{{item.useTime}}</div>
        </div>
        <div class="limit-item">
            <div class="limit-title">使用规则</div>
            <div class="limit-inner">
                <ul>
                    <li 
                        v-for="(item, index) of item.useLimit"
                        :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInnerLimit',
    props: {
        item: Object
    }    
}
</script>

<style scoped>
    .title{
        padding: .95rem .9rem;
        font-size: 16rem;
        border-bottom: .5px solid rgba(0,0,0,.1);
    }
    .limit-title{
        color: #f90;
        padding: .9rem .9rem;
        font-size: 15rem;
    }
    ul{
        padding: 0 0 0 1.5rem;
        margin: 0;
        font-size: 15rem;
    }
    .limit-inner{
        padding: .5rem .9rem .5rem 1.72rem;
        font-size: 15rem;
        line-height: 1.95rem;
    }
</style>
