<template>
    <div class="shopinfo">
        <div class="title">商家信息</div>
        <div class="shopinfo-inner">
            <div class="shop-name">{{item.name}}（{{item.nameBranch}}）</div>
            <div class="shop-adr">{{item.adr}}</div>
            <div class="shop-adr-tips">
                <i></i>
                <span>离我最近</span>
            </div>
        </div>
        <div class="more">
            <a href="#">
                查看全部{{item.shopNum}}家适用分店
                <span></span>
            </a>
        </div>
        <div class="tel-shop">
            <a href="#">
                <i></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInnerInfo',
    data(){
        return {
            
        }
    },
    props:{
        item: Object
    }
}
</script>

<style scoped>
    .shopinfo{
        position: relative;
    }
    .title{
        padding: .95rem .9rem;
        font-size: 16rem;
        border-bottom: .5px solid rgba(0,0,0,.1)
    }
    .shopinfo-inner{
        padding: .95rem .9rem 0rem .9rem;
        border-bottom: .5px solid rgba(0,0,0,.1);
    }
    .shop-name{
        font-size: 16rem;
        font-weight: 600;
        color: #000;
    }
    .shop-adr{
        font-size: 13rem;
        margin: .54rem 0;
    }
    .shop-adr-tips i{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@83211d4);
        background-repeat: no-repeat;
        background-position: -75px -75px; 
        background-size: 8rem 8rem;
    }
    .shop-adr-tips span{
        position: relative;
        top: -.76rem;
        left: .8rem;
        color: #eb8706;
        font-size: 14rem;
    }
    .more{
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
        top: 1.2rem;
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
    .tel-shop{
        position: absolute;
        right: 1rem;
        top: 5rem;
        width:5rem;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        border-left: .5px solid rgba(0,0,0,.1)
    }
    .tel-shop a{
        width: 100%;
        height: 100%;
    }
    .tel-shop i{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@83211d4);
        background-repeat: no-repeat;
        background-position: -58px -32px; 
        background-size: 9rem 9rem;
    }
</style>
