<template>
    <div class="recommend">
        <a href="#">
            <div class="title">[{{shop}}]相关推荐</div>
            <div 
                class="recommend-item"
                v-for="(item, index) of item"
                :key="index">
                <span class="icon"></span>
                <div class="inner">
                    <div class="inner-top">[{{item.adr}}]{{item.type}}</div>
                    <div class="inner-bottom">
                        <div class="price">
                            <span>{{item.price}}</span>
                            元
                        </div>
                        门市价:{{item.originPrice}}元
                        <span class="hassell">已售{{item.hasSell}}</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name:'ShopInnerRecommend',
    props:{
        item: Array,
        shop: String
    }
}
</script>

<style scoped>
    .title{
        padding: .95rem .9rem;
        font-size: 16rem;
        border-bottom: .5px solid rgba(0,0,0,.1);
    }
    a{
        color: #666;
        text-decoration: none;
    }
    .recommend-item{
        padding: .9rem .9rem;
        border-bottom: .5px solid rgba(0,0,0,.1);
        position: relative;
    }
    .icon{
        display: inline-block;
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        background-image: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@83211d4);
        background-repeat: no-repeat;
        background-size: 7rem 7rem;
        background-position: -69px -38px;
        width: 1.2rem;
        height: 1.2rem;
    }
    .inner{
        margin-left: 1.8rem;
    }
    .inner-top{
        font-size: 15rem;
        margin-bottom: .4rem;
    }
    .inner-bottom{
        position: relative;
    }
    .inner-bottom .price{
        color: #06c1ae;
        display: inline-block;
    }
    .inner-bottom .price span{
        font-size: 20rem;
        font-weight: 400;
    }
    .hassell{
        position: absolute;
        right: .9rem;
        bottom: 0.88rem;
    }
</style>
