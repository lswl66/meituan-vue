<template>
    <div class="shop-details">
        <div class="header">
            <div class="header-item toback">
                <router-link to='/'>
                    <i class="toback-btn"></i>
                </router-link>
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
            <div class="shop-details-item">
                <ShopInnerCommentText :item="commentText"></ShopInnerCommentText>
            </div>
            <div class="shop-details-item">
                <ShopInnerRecommend 
                    :item="recommendShop"
                    :shop="desctitle"></ShopInnerRecommend>
            </div>
        </div>
        <div class="footer">
            <div class="nav-bread">当前位置：西安团购 > {{desctitle}}</div>
            <div class="footer-btn">
                <div class="footer-btn-left">
                    <div class="btn-login btn-item"><a href="#">登录</a></div>
                    <div class="btn-register btn-item"><a href="#">注册</a></div>
                </div>
                <div class="footer-btn-right">
                     城市：<div class="btn-city btn-item"><a href="#">西安</a></div>
                </div>
            </div>
            <div class="footer-nav">
                <div class="footer-nav-item">
                <a href="#">首页</a>
                </div>
                <div class="footer-nav-item">
                <a href="#">订单</a>
                </div>
                <div class="footer-nav-item">
                <a href="#">客户端</a>
                </div>
                <div class="footer-nav-item">
                <a href="#">电脑版</a>
                </div>
                <div class="footer-nav-item">
                <a href="#">帮助</a>
                </div>
            </div>
            <div class="footer-link">
                友情链接：<a href="https://m.maoyan.com/?channel=touch_group">猫眼电影</a>
            </div>
            <div class="footer-copyright">
                <span>
                ©2019 美团网 
                <a href="http://www.beian.miit.gov.cn/">京ICP证070791号</a>
                </span>
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
import ShopInnerCommentText from '../components/ShopInnerCommentText.vue'
import ShopInnerRecommend from '../components/ShopInnerRecommend.vue'

export default {
    name: 'ShopDetails',
    components: {
        ShopInnerBuy,
        ShopInnerComment,
        ShopInnerInfo,
        ShopInnerFood,
        ShopInnerLimit,
        ShopInnerCommentText,
        ShopInnerRecommend
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
            },
            commentText:[
                {
                    userPhoto:'https://img.meituan.net/avatar/087bb500d64d5a656e5f0d0ad4cd24cb17970.jpg@148w_148h_1e_1c',
                    userName:'虞姬3169',
                    commentScore:5,
                    commentTime:'2019-12-02',
                    commentText:
                    '在西荷花园那边，上二楼就是了。位置很好找。【等位】不需要等位，随到随进。不浪费时间。【环境】第一次去体验。虽然店不是很大。转一圈都可以看到所有菜品。应有尽有',
                    commentImage:[
                        'https://p0.meituan.net/shaitu/830cb5556b19a3be2f923e64803136db2339383.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/05667ecfbed8441d7e22776f23f89afd1713389.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/870c0b446c7b74059be7cb506d1940481651860.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/2566373726abb8b0572111cd632dc9fa2425413.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/73748d2cfcf45218b0fa90077a947d6e2189542.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/41f2b7316e768e0e42558de77e03bc902089943.jpg@220w_220h_1e_1c'
                    ],
                    commentShop:'柒色凉橙烤串·牛排自助餐厅（西荷店）',
                    shopReply:'尊敬的顾客，您好，感谢您的认真评价，您的认可就是我们前进的动力，期待您的下次光临，祝您天天开心！'
                },
                {
                    userPhoto:'https://img.meituan.net/avatar/087bb500d64d5a656e5f0d0ad4cd24cb17970.jpg@148w_148h_1e_1c',
                    userName:'虞姬3170',
                    commentScore:5,
                    commentTime:'2019-12-02',
                    commentText:
                    '在西荷花园那边，上二楼就是了。位置很好找。【等位】不需要等位，随到随进。不浪费时间。【环境】第一次去体验。虽然店不是很大。转一圈都可以看到所有菜品。应有尽有',
                    commentTextMore:
                    '。',
                    commentImage:[
                        'https://p0.meituan.net/shaitu/830cb5556b19a3be2f923e64803136db2339383.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/05667ecfbed8441d7e22776f23f89afd1713389.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/870c0b446c7b74059be7cb506d1940481651860.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/2566373726abb8b0572111cd632dc9fa2425413.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/73748d2cfcf45218b0fa90077a947d6e2189542.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/41f2b7316e768e0e42558de77e03bc902089943.jpg@220w_220h_1e_1c'
                    ],
                    commentShop:'柒色凉橙烤串·牛排自助餐厅（西荷店）',
                    shopReply:'尊敬的顾客，您好，感谢您的认真评价，您的认可就是我们前进的动力，期待您的下次光临，祝您天天开心！'
                },
                {
                    userPhoto:'https://img.meituan.net/avatar/087bb500d64d5a656e5f0d0ad4cd24cb17970.jpg@148w_148h_1e_1c',
                    userName:'虞姬3171',
                    commentScore:5,
                    commentTime:'2019-12-02',
                    commentText:
                    '在西荷花园那边，上二楼就是了。位置很好找。【等位】不需要等位，随到随进。不浪费时间。【环境】第一次去体验。虽然店不是很大。转一圈都可以看到所有菜品。应有尽有',
                    commentTextMore:
                    '。',
                    commentImage:[
                        'https://p0.meituan.net/shaitu/830cb5556b19a3be2f923e64803136db2339383.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/05667ecfbed8441d7e22776f23f89afd1713389.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/870c0b446c7b74059be7cb506d1940481651860.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/2566373726abb8b0572111cd632dc9fa2425413.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/73748d2cfcf45218b0fa90077a947d6e2189542.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/41f2b7316e768e0e42558de77e03bc902089943.jpg@220w_220h_1e_1c'
                    ],
                    commentShop:'柒色凉橙烤串·牛排自助餐厅（西荷店）',
                    shopReply:'尊敬的顾客，您好，感谢您的认真评价，您的认可就是我们前进的动力，期待您的下次光临，祝您天天开心！'
                },
                {
                    userPhoto:'https://img.meituan.net/avatar/087bb500d64d5a656e5f0d0ad4cd24cb17970.jpg@148w_148h_1e_1c',
                    userName:'虞姬3172',
                    commentScore:5,
                    commentTime:'2019-12-02',
                    commentText:
                    '在西荷花园那边，上二楼就是了。位置很好找。【等位】不需要等位，随到随进。不浪费时间。【环境】第一次去体验。虽然店不是很大。转一圈都可以看到所有菜品。应有尽有',
                    commentTextMore:
                    '。',
                    commentImage:[
                        'https://p0.meituan.net/shaitu/830cb5556b19a3be2f923e64803136db2339383.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/05667ecfbed8441d7e22776f23f89afd1713389.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/870c0b446c7b74059be7cb506d1940481651860.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/2566373726abb8b0572111cd632dc9fa2425413.jpg@220w_220h_1e_1c',
                        'https://p0.meituan.net/shaitu/73748d2cfcf45218b0fa90077a947d6e2189542.jpg@220w_220h_1e_1c',
                        'https://p1.meituan.net/shaitu/41f2b7316e768e0e42558de77e03bc902089943.jpg@220w_220h_1e_1c'
                    ],
                    commentShop:'柒色凉橙烤串·牛排自助餐厅（西荷店）',
                    shopReply:'尊敬的顾客，您好，感谢您的认真评价，您的认可就是我们前进的动力，期待您的下次光临，祝您天天开心！'
                }
            ],
            recommendShop:[
                {
                    adr:'未央区',
                    type:'单人自助餐',
                    price:56.8,
                    originPrice:'62',
                    hasSell:888
                },
                {
                    adr:'西稍门',
                    type:'单人自助',
                    price:45.9,
                    originPrice:'49',
                    hasSell:1099
                },
                {
                    adr:'李家村',
                    type:'晚市活动价',
                    price:45.9,
                    originPrice:'78',
                    hasSell:2582
                },
                {
                    adr:'徐家庄',
                    type:'单人自助票',
                    price:46,
                    originPrice:'59',
                    hasSell:4394
                },
                {
                    adr:'未央区',
                    type:'单人自助餐',
                    price:56.8,
                    originPrice:'62',
                    hasSell:888
                },
                {
                    adr:'西稍门',
                    type:'单人自助',
                    price:45.9,
                    originPrice:'49',
                    hasSell:1099
                },
                {
                    adr:'李家村',
                    type:'晚市活动价',
                    price:45.9,
                    originPrice:'78',
                    hasSell:2582
                },
                {
                    adr:'徐家庄',
                    type:'单人自助票',
                    price:46,
                    originPrice:'59',
                    hasSell:4394
                }
            ]
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
    .toback{
        display: inline-block;
        width: 4rem;
        text-align: center;
    }
    .toback-btn{
        width: 1.4rem;
        height: 1.4rem;
        border-color: #fff;
        position: relative;
        top: 0.3rem;
        left: 0.32rem;
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
    .shop-details{
        position: relative;
    }
    .shop-details-inner{
        position: relative;
        top: -6.21rem;
        background-color: #f5f5f5;
    }
    .shop-details-item{
        background-color: #fff;
        margin-bottom: .9rem;
    }
    .shop-details-item:last-child{
        margin-bottom: 0;
    }
    .footer{
        position: absolute;
        bottom: -10.55rem;
        padding: .9rem 0;
        width: 100%;
        background-color: #f5f5f5;
        color: #06c1ae;
    }
    .footer a{
        color: #06c1ae;
    }
    .nav-bread{
        padding: 0.5rem .9rem 0.9rem;
    }
    .footer-btn{
        padding: 0rem .9rem 1.2rem;
        position: relative;
    }
    .footer-btn-right{
        position: absolute;
        right: .9rem;
    }
    .footer-btn div{
        color: #333;
        display: inline-block;
        font-size: 14rem;
    }
    .btn-item{
        padding: .35rem 1.2rem;
        margin-right: .5rem;
        border: 1px solid #06c1ae;
    }
    .btn-city{
        padding: .35rem 2.6rem;
    }
    .footer-nav{
        padding: 0.9rem 0.9rem;
    }
    .footer-nav-item{
        display: inline-block;
        padding:0 1.6rem 0 1.6rem; 
        border-right: 0.02rem solid #666;
    }
    .footer-nav-item:last-child{
        border: none;
    }
    .footer-nav-item a{
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #06c1ae;
        font-weight: 400;
        font-size: 12rem;
    }
    .footer-link{
        text-align: center;
        color: #222;
        padding: 0.9rem 0 1.9rem;
    }
    .footer-copyright{
        position: relative;
        border-top: 1px solid #999;
        text-align: center;
    }
    .footer-copyright span{
        display: inline-block;
        padding: 0 1rem;
        background-color: #f5f5f5;
        color: #999;
        position: relative;
        top: -0.85rem;
    }
    .footer-copyright span a{
        color: #999;
        text-decoration: none;
    }
</style>
