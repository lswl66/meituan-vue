<template>
    <div class="shopinner-buy">
        <div class="buy-price buy-item">
            <div class="buy-price-left">
                <span class="buy-price-num">{{item.price}}</span>元
                <span class="buy-price-origin">{{item.originPrice}}</span>
            </div>
            <div class="buy-price-right">
                <a href="#">立即抢购</a>
            </div>
        </div>
        <div class="buy-tip buy-item">
            <span></span>{{item.newuser}}
        </div>
        <div class="buy-agreement buy-item">
            <div 
            class="buy-agreement-item agreement1"
            v-if="item.agree1">
                <i></i>{{item.agree1}}
            </div>
            <div 
            class="buy-agreement-item agreement2"
            v-if="item.agree2">
                <i></i>{{item.agree2}}
            </div>
            <div 
            class="buy-agreement-item has-sell"
            v-if="item.hasSell">
                <i></i>已售{{item.hasSell}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInnerBuy',
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
    .shopinner-buy{
        background-color: #fff;
    }
    .buy-price{
        padding: .9rem .9rem;
        position: relative;
    }
    .buy-price div{
        display: inline-block;

    }
    .buy-price-left{
        color: #06c1ae;
        position: relative;
        top: .1rem;
        margin: .15rem 0;
    }
    .buy-price-num{
        font-size: 33rem;
        font-weight: 700;
    }
    .buy-price-origin{
        color: #999;
        margin-left: .2rem;
    }
    .buy-price-right{
        position: absolute;
        right: .9rem;
        top: .95rem;
    }
    .buy-price-right a{
        display: inline-block;
        width: 10rem;
        height: 2.8rem;
        line-height: 2.8rem;
        text-align: center;
        border-radius: .3rem;
        color: #fff;
        background-color: #f90;
        font-size: 20rem;
        padding: .3rem .4rem;
        text-decoration: none;
    }
    .buy-tip{
        font-size: 14rem;
        padding-left: .9rem;
        height: 4rem;
        line-height: 4rem;
        border-top: .5px solid rgba(0, 0, 0, .1);
        border-bottom: .5px solid rgba(0, 0, 0, .1);
    }
    .buy-tip span{
        background: #f90;
        display: inline-block;
        width: 1.35rem;
        height: 1.35rem;
        border-radius: .18rem;
        position: relative;
        top: .39rem;
        margin-right: .3rem;
    }
    .buy-agreement{
        width: 97%;
        padding-left: 3%;
        padding-top: 1.4rem;
        padding-bottom: 2.2rem;
        font-size: 13rem;
        color: #6bbd00;
    }
    .buy-agreement-item{
        display: inline-block;
        width: 49%;
    }
    .buy-agreement-item i{
        display: inline-block;
        width: 2.2rem;
        height: 2.2rem;
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@83211d4);
        background-repeat: no-repeat;
        background-size: 10rem 10rem; 
        position: relative;
        top: 0.52rem;
        margin-right: .3rem;
    }
    .agreement1 i{
        background-position: -22px -92px;
    }
    .agreement2 i{
        background-position: -46px -93px;
    }
    .has-sell{
        color: #666;
    }
    .has-sell i{
        background-position: -70px -92px;
    }
</style>
