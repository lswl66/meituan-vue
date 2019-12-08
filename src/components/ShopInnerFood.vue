<template>
    <div class="foodInner">
        <div class="title">套餐</div>
        <div class="tag">
            <span class="left">{{item.type}}</span>
            <span class="middle">{{item.user}} 位</span>
            <span class="right">{{item.price}}元</span>
        </div>
        <div class="remarks">备注</div>
        <div class="tips">
            <ul>
                <li 
                    v-for="(item,index) of item.tip"
                    :key="index"
                    >{{item}}</li>
            </ul>
        </div>
        <div class="more">
            <a href="#">
                查看图文详情
                <span></span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInnerFood',
    props:{
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
    .tag span{
        display: inline-block;
        padding: .9rem 0.9rem;
        font-size: 15rem;
    }
    .left{
        width: 45%;
    }
    .middle{
        width: 21%;
        border-left: .5px solid rgba(0,0,0,.1);
        border-right: .5px solid rgba(0,0,0,.1);
    }
    .right{
        width: 11%;
    }
    .remarks{
        text-align: center;
        font-size: 15rem;
        padding: .6rem 0;
        background-color: #f7f7f7;
        color: #222;
        border-top: .5px solid rgba(0,0,0,.1);
        border-bottom: .5px solid #ddd8ce;
    }
    .tips ul{
        padding-left: 3rem;
        font-size: 15rem;
    }
    .more{
        border-top: .5px solid rgba(0,0,0,.1);
        padding: .9rem .9rem;
        font-size: 15rem;
        position: relative;
    }
    .more span{
        display: inline-block;
        width: .6rem;
        height: .6rem;
        position: absolute;
        right: 1.9rem;
        top: 1.34rem;
        border-bottom: 2px solid #06c1ae;
        border-left: 2px solid #06c1ae;
        transform: rotate(-135deg);
    }
    .more a{
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #06c1ae;
        text-decoration: none;
    }
</style>
