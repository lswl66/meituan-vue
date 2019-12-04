<template>
    <div class="shop-details">
        <div class="header">
            <div class="header-item toback-btn">
                <img src="../images/write-toback.png">
            </div>
            <div class="header-item header-title">团购详情</div>
            <div class="header-item header-icon">
                <a href="#" class="header-collect">
                    <i></i>
                    收藏
                </a>
                <a href="#" class="header-nav">
                    <i></i>
                    导航
                </a>
            </div>
        </div>
        <div class="banner">
            <img src="http://s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@83211d4">
            <a href="#" class="btn-toapp"></a>
            <a href="#" class="btn-todownload"></a>
        </div>
        <div class="deal">
            <a href="#" class="food-image">
                <img :src="img">
                <div class="food-desc">
                    <div class="food-desc-title">{{desctitle}}</div>
                    <span>{{descinner}}</span>
                </div>
                <div class="food-image-shadow"></div>
            </a>
        </div>
        <div class="shop-details-inner">
            <div class="shop-details-item">
                <ShopInnerBuy :item="buyInner"></ShopInnerBuy>
            </div>
            <div class="shop-details-item">
                <ShopInnerComment :item="commentIntro"></ShopInnerComment>
            </div>
            <div class="shop-details-item">
                <ShopInnerInfo :item="shopInfo"></ShopInnerInfo>
            </div>
            <div class="shop-details-item">
                <ShopInnerFood :item="shopFood"></ShopInnerFood>
            </div>
            <div class="shop-details-item">
                <ShopInnerLimit :item="shopLimit"></ShopInnerLimit>
            </div>
        </div>
    </div>
</template>

<script>
import ShopInnerBuy from '../components/ShopInnerBuy.vue'
import ShopInnerComment from '../components/ShopInnerComment.vue'
import ShopInnerInfo from '../components/ShopInnerInfo.vue'
import ShopInnerFood from '../components/ShopInnerFood.vue'
import ShopInnerLimit from '../components/ShopInnerLimit.vue'

export default {
    name: 'ShopDetails',
    components: {
        ShopInnerBuy,
        ShopInnerComment,
        ShopInnerInfo,
        ShopInnerFood,
        ShopInnerLimit
    },
    data(){
        return {
            img:'http://p0.meituan.net/deal/e0b3ea4ebd58cb2b63e494277ec0c51c2207460.jpg',
            desctitle: '柒色凉橙烤串·牛排自助餐厅',
            descinner: '单人全天自助',
            buyInner:{
                price: 59.8,
                originPrice: '门市价69元',
                newuser: '商家新客立减6元，每人限购1张',
                agree1: '支持随时退款',
                agree2: '支持过期自动退',
                hasSell: 63167,
            },
            commentIntro:{
                num: 2884,
                score: 4.2
            },
            shopInfo:{
                name: '柒色凉橙烤串·牛排自助餐厅',
                nameBranch: '龙首村店',
                adr: '莲湖区未央路与龙首南路十字东南角',
                shopNum: '2'
            },
            shopFood:{
                price: 69,
                type: '单人全天自助',
                user: 1,
                tip: [
                    '单人全天自助：11:30-14:30,17:00-23:00',
                    '最多可用餐 2.5 小时'
                    ],
            },
            shopLimit:{
                useTime:'2017.4.1 至 2019.12.17 23:59（周末、法定节假日通用）',
                useLimit:[
                    '锅底需到店另付，龙首店锅底10元，西荷店锅底加烤盘15元，每个锅底可供4人使用',
                    '1.0米（不含）-1.4米（含）之间儿童收35元/位；身高1.4米（不含）以上儿童，计为成人票',
                    '65岁以上老人可凭身份证享受35元/位',
                    '生日当天可凭身份证（阳历）享受35元/位',
                    '备注：所有半价优惠均需至少一位成人价陪同（可团购）',
                    '团购用户不可同时享受商家其他优惠',
                    '部分菜品因时令原因有所不同，请以店内当日实际供应为准',
                    '无需预约，消费高峰期可能需要等位',
                    '每张美团券最多1位成人使用，身高1米以上儿童计入人数',
                    '商家提供免费WiFi',
                    '停车位收费标准：详情请咨询商家',
                ]
            }
        }
    }
}
</script>

<style>
    .header{
        height: 4.25rem;
        line-height: 4.25rem;
        background-color: #06c1ae;
        border-bottom: 1px solid #21897d;
        color: #fff;   
        display: flex; 
        position: relative;
    }
    .toback-btn{
        display: inline-block;
        width: 4rem;
        text-align: center;
    }
    .toback-btn img{
        width: 2rem;
        height: 2rem;
        position: relative;
        top: 0.7rem;
    }
    .header-title{
        flex: 1;
        font-size: 18rem;
        text-align: center;
    }
    .header-icon{
        width: 8rem;
        text-align: center;
        line-height: 6rem;
    }
    .header-icon a{
        color: #fff;
        text-decoration: none;
        font-size: 12rem;
        display: inline-block;
        position: relative;
        width: 48%;
    }
    .header-icon a i{
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        background-repeat: no-repeat;
        background-size: 8rem 8rem; 
        position: absolute;
        top: 0.36rem;
        left:0.7rem;
    }
    .header-collect i{
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@83211d4);
        background-position: -48px 0px;
    }
    .header-nav i{
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@83211d4);
        background-position: -25px -25px;
    }
    .banner{
        position: relative;
    }
    .banner img{
        width: 100vw;
        height: 9.2rem;
    }
    .banner a{
        display: inline-block;
        width: 9rem;
        height: 3rem;
        position: absolute;
        top: 5rem;
        /* border: 1px solid #000; */
    }
    .banner .btn-toapp{
        left: 18%;
    }
    .banner .btn-todownload{
        right: 18%;
    }
    .food-image{
        color: #fff;
        text-decoration: none;
        position: relative;
        top: -.31rem;
    }
    .food-image img{
        width: 100%;
        height: 22rem;
    }
    .food-desc{
        position: absolute;
        bottom: 7rem;
        left: 1.5rem;
        font-size: 14rem;
        z-index: 1;
    }
    .food-desc-title{
        font-size: 20rem;
        font-weight: 700;
        margin-bottom: 0.6rem;
    }
    .food-image-shadow{
        width: 100%;
        height: 10rem;
        background: -webkit-linear-gradient(bottom, 
        rgba(0,0,0,0.58), rgba(0,0,0,0.3) 64%, transparent);
        position: absolute;
        bottom: 6rem;
    }
    .shop-details-inner{
        position: relative;
        top: -6.29rem;
    }
    .shop-details-item{
        background-color: #fff;
        margin-bottom: .9rem;
    }
</style>
