<template>
  <div id="app">
    <div class="navbar">
      <div class="nav-left navbar-item">
        <a href="#">
          <span>西安</span>
          <img src="../images/tobottom.png">
        </a>
      </div>
      <div class="box-search navbar-item">
        <a href="#">
          <img src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png">
          <span>请输入商家名、品类或者商圈...</span>
        </a>
      </div>
      <div class="nav-right navbar-item">
        <img src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png">
      </div>
    </div>
    <div class="banner-download">
      <div class="banner-item">
        <img src="../images/meituanLogo.png" alt="美团icon">
        <div class="logo-text">
          <div class="logo-title">省钱利器 购物超划算</div>
          <div class="logo-desc">吃喝玩乐尽在美团</div>
        </div>
      </div>
      <div class="toapp">去APP</div>
    </div>
    <Menu :menuList="menuList"/>
    <div class="foodshoplist">
      <div class="foodshoplist-title">猜你喜欢</div>
      <FoodShop 
        v-for="(item, index) of foodShopList"
        :key="index"
        :item="item">
      </FoodShop>
      <div class="foodshoplist-more">
        <a href="#">
          查看全部团购
          <span>></span>
        </a>
      </div>
    </div>
    <div class="footer">
      <div class="footer-bar">
        <a class="footer-bar-login footer-bar-item" href="#">登录</a>
        <a class="footer-bar-register footer-bar-item" href="#">注册</a>
        <div class="footer-bar-city footer-bar-item">
          <span>城市：</span>
          <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png">
          <a href="#">{{city}}</a>
        </div>
      </div>
      <div class="footer-nav">
        <div class="footer-nav-item">
          <a href="#">首页</a>
        </div>
        <div class="footer-nav-item">
          <a href="#">我的</a>
        </div>
        <div class="footer-nav-item">
          <a href="#">美团下载</a>
        </div>
        <div class="footer-nav-item">
          <a href="#">电脑版</a>
        </div>
        <div class="footer-nav-item">
          <a href="#">帮助</a>
        </div>
      </div>
      <div class="footer-link">
        友情链接：
        <a href="http://m.maoyan.com/?channel=touch_group">猫眼电影</a>
        <a href="http://m.dianping.com">大众点评</a>
        <a href="https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj">美团旅行</a>
        <a href="http://i.zhenguo.com">榛果民宿</a>
        <a href="http://evt.dianping.com/synthesislink/9496.html">大众点评下载</a>
        <a href="https://shouyin.meituan.com?utm_source=inner&utm_medium=mti">美团收银官网</a>
        <a href="https://xue.meituan.com/?from=mt0">美团点评餐饮学院</a>
        <a href="https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html">快驴进货商家合作</a>
      </div>
      <div class="footer-copyright">
        <span>
          ©2019 美团网 
          <a href="http://www.beian.miit.gov.cn/">京ICP证070791号</a>
        </span>
      </div>
    </div>
    <!-- <ShopDetails/> -->
  </div>

</template>

<script>
import Menu from '../components/Menu.vue'
import FoodShop from '../components/FoodShop.vue'
// import ShopDetails from './ShopDetails.vue'

export default {
  name: 'app',
  components: {
    Menu,
    FoodShop,
    // ShopDetails
  },
  data(){
    return{
      menuList:[
        {
          id: 1,
          icon:require('../images/food.png'),
          name:'美食',
          background: 'background-color: rgb(253, 157, 33)'
        },
        {
          id: 2,
          icon:require('../images/film.png'),
          name:'猫眼电影',
          background: 'background-color: rgb(255, 103, 103)'
        },
        {
          id: 3,
          icon:require('../images/hotel.png'),
          name:'酒店',
          background: 'background-color: rgb(138, 144, 250)'
        },
        {
          id: 4,
          icon:require('../images/xiuxianyule.png'),
          name:'休闲娱乐',
          background: 'background-color: rgb(254, 208, 48)'
        },
        {
          id: 5,
          icon:require('../images/waimai.png'),
          name:'外卖',
          background: 'background-color: rgb(253, 157, 33)'
        },
        {
          id: 6,
          icon:require('../images/ktv.png'),
          name:'KTV',
          background: 'background-color: rgb(254, 208, 48)'
        },
        {
          id: 7,
          icon:require('../images/zhoubianyou.png'),
          name:'周边游',
          background: 'background-color: rgb(77, 198, 238)'
        },
        {
          id: 8,
          icon:require('../images/liren.png'),
          name:'丽人',
          background: 'background-color: rgb(255, 128, 194)'
        },
        {
          id: 9,
          icon:require('../images/xiaochikuaican.png'),
          name:'小吃快餐',
          background: 'background-color: rgb(253, 157, 33)'
        },
        {
          id: 10,
          icon:require('../images/more.png'),
          name:'全部分类',
          background: 'background-color: rgb(0, 211, 190)'
        }
      ],
      foodShopList:[
        {
          image:'http://p0.meituan.net/200.0/deal/25f365d6d31979b2511f1b8455ce2a3896451.jpg@0_185_1080_1080a%7C267h_267w_2e_90Q',
          name:'吉布鲁牛排海鲜自助',
          adr:'[未央路]',
          type:'通用单人券',
          price:86,
          originalPrice:'129元',
          newUserTag:'',
          hasSell:28117
        },
        {
          image:'http://p1.meituan.net/200.0/deal/58a66faa9a40e1d773f9f9cde110bb76954859.jpg@483_0_1524_1524a%7C267h_267w_2e_90Q',
          name:'柒色凉橙烤串·牛排自助餐厅',
          adr:'[2店通用]',
          type:'单人全天自助',
          price:59.8,
          originalPrice:'',
          newUserTag:'新客减6',
          hasSell:63137
        },
        {
          image:'http://p1.meituan.net/200.0/deal/fa80f07fb5fbeaff7c501c8a586872c432689.jpg@100_0_600_600a%7C267h_267w_2e_90Q',
          name:'火焰山牛排海鲜自助美食汇',
          adr:'[2店通用]',
          type:'单人自助晚餐/周末节假日通用2选1',
          price:73,
          originalPrice:'75元',
          newUserTag:'',
          hasSell:323577
        },
        {
          image:'http://p0.meituan.net/200.0/deal/9820e157825c95944648d8c70e436a7314313.jpg@0_7_425_425a%7C267h_267w_2e_90Q',
          name:'2068香辣虾',
          adr:'[未央路]',
          type:'100元代金券1张，可叠加',
          price:95,
          originalPrice:'100元',
          newUserTag:'',
          hasSell:49513
        },
        {
          image:'http://p0.meituan.net/200.0/deal/cd5fc40f1d7bf19eb5e15d1537f00dfc49438.jpg',
          name:'红透天自助涮烤',
          adr:'[互助路立交]',
          type:'红透天自助涮烤',
          price:39.9,
          originalPrice:'42元',
          newUserTag:'',
          hasSell:241234
        },
        {
          image:'http://p1.meituan.net/200.0/deal/cf609888910717898f95005a6e43dc9e342643.jpg@138_0_425_425a%7C267h_267w_2e_90Q',
          name:'野葡萄时尚自助餐厅',
          adr:'[大明宫万达]',
          type:'单人晚餐',
          price:62.8,
          originalPrice:'79元',
          newUserTag:'',
          hasSell:60936
        },
        {
          image:'http://p1.meituan.net/200.0/deal/e6eb9d4073b702a0eec293d6380492f9106640.jpg',
          name:'保尔森自助海鲜烧烤',
          adr:'[未央路]',
          type:'周内单人自助晚餐/周六至周日全天2选1',
          price:72.8,
          originalPrice:'79元',
          newUserTag:'',
          hasSell:22810
        },
        {
          image:'http://p1.meituan.net/200.0/deal/fd4f128564d35276f49eb6889bd4acec44248.jpg@120_0_480_480a%7C267h_267w_2e_90q',
          name:'李想大虾火锅花园',
          adr:'[未央路]',
          type:'2-3人套餐，提供免费WiFi',
          price:99,
          originalPrice:'140元',
          newUserTag:'',
          hasSell:6202
        },
        {
          image:'http://p0.meituan.net/200.0/deal/588d43cb20ece7e15dc7724862e0e9ae74337.jpg@48_0_712_712a%7C267h_267w_2e_90Q',
          name:'塔吉蜀黍鲜焗锅',
          adr:'[太华路]',
          type:'双人塔吉锅套餐，提供免费WiFi',
          price:63,
          originalPrice:'',
          newUserTag:'新客减7',
          hasSell:3218
        },
        {
          image:'http://p1.meituan.net/200.0/deal/4082d30ce1c94f376baf66a71f97c836103011.jpg@196_0_569_569a%7C267h_267w_2e_90Q',
          name:'和谐号海鲜烤肉火锅自助',
          adr:'[小寨]',
          type:'单人自助餐',
          price:68.8,
          originalPrice:'99元',
          newUserTag:'',
          hasSell:241386
        },
        {
          image:'http://p1.meituan.net/200.0/deal/c04c654fcc07232b0d40ce49e30e4e3462841.jpg@139_0_361_361a%7C267h_267w_2e_100Q',
          name:'千家粗粮王',
          adr:'[太华路]',
          type:'单人晚餐',
          price:67.1,
          originalPrice:'69元',
          newUserTag:'',
          hasSell:52657
        },
        {
          image:'http://p0.meituan.net/200.0/deal/414295f81011838bd825012cc16e4db283401.jpg@118_0_472_472a%7C267h_267w_2e_90Q',
          name:'仟禧自助涮烤',
          adr:'[政法/师大]',
          type:'单人午/晚市套餐',
          price:52.9,
          originalPrice:'',
          newUserTag:'新客减8',
          hasSell:196873
        },
        {
          image:'http://p0.meituan.net/200.0/deal/d0194b196e3455ae91bc33747caa796c49904.jpg@120_0_400_400a%7C267h_267w_2e_100q',
          name:'乡党臊子面',
          adr:'[7店通用]',
          type:'单人自助面，提供免费WiFi  ',
          price:29,
          originalPrice:'31元',
          newUserTag:'',
          hasSell:81436
        },
        {
          image:'http://p1.meituan.net/200.0/deal/b7585580e4a6d87b7b832467b4689541546962.jpg@120_0_480_480a%7C267h_267w_2e_90Q',
          name:'鑫海汇海鲜烤肉火锅自助',
          adr:'[建工路]',
          type:'单人自助晚餐',
          price:66.9,
          originalPrice:'86元',
          newUserTag:'',
          hasSell:191583
        },
        {
          image:'http://p1.meituan.net/200.0/deal/58be8e3aaf7a2f0f16e19293845e6a5383349.jpg@267h_267w_2e_90Q',
          name:'小蹄大作',
          adr:'[2店通用]',
          type:'小吃3选1，提供免费WiFi',
          price:15,
          originalPrice:'16元',
          newUserTag:'',
          hasSell:31336
        },
        {
          image:'http://p1.meituan.net/200.0/deal/3874c41cb8756487564c1e25263862e8121539.jpg@174_0_586_586a%7C267h_267w_2e_90Q',
          name:'迈德思客',
          adr:'[西安等]',
          type:'香辣鸡腿堡套餐，建议单人使用',
          price:15,
          originalPrice:'21.5元',
          newUserTag:'',
          hasSell:679546
        },
        {
          image:'http://p0.meituan.net/200.0/deal/92a6a86cdf288e13959ad587b25dc8e6213735.jpg@166_0_667_667a%7C267h_267w_2e_90Q',
          name:'乔福记香菇面',
          adr:'[3店通用]',
          type:'香菇面单人餐，提供免费WiFi',
          price:15.8,
          originalPrice:'18元',
          newUserTag:'',
          hasSell:126264
        },
        {
          image:'http://p0.meituan.net/200.0/deal/8d50056fc1eb2b83f89d0fc3d7bbb36c57997.jpg@49_0_542_542a%7C267h_267w_2e_100Q',
          name:'渔歌·活鱼现烤',
          adr:'[2店通用]',
          type:'100元晚市代金券1张，可叠加',
          price:59.9,
          originalPrice:'100元',
          newUserTag:'',
          hasSell:56389
        },
        {
          image:'http://p1.meituan.net/200.0/deal/939fb8f1cfc1c4c378324f3340167e1439349.jpg',
          name:'毅祥斋老孙家泡馍',
          adr:'[莲湖区]',
          type:'单人牛肉泡馍，提供免费WiFi',
          price:9.8,
          originalPrice:'25元',
          newUserTag:'',
          hasSell:160994
        },
        {
          image:'http://p0.meituan.net/200.0/deal/cdee4950aec05b0eb0fe2a15c6b2b667256454.jpg@235_0_931_931a%7C267h_267w_2e_90Q',
          name:'吉姆大师傅',
          adr:'[太华路]',
          type:'原汁原味蛋糕1份，包间免费',
          price:19.8,
          originalPrice:'23元',
          newUserTag:'',
          hasSell:514
        },
        {
          image:'http://p0.meituan.net/200.0/deal/400387bf85164ac9d1bb097bce2e633f51770.jpg@120_0_400_400a%7C267h_267w_2e_100Q',
          name:'享遇牛排海鲜自助餐厅',
          adr:'[小寨]',
          type:'午晚通用自助',
          price:69.9,
          originalPrice:'99元',
          newUserTag:'',
          hasSell:264929
        },
        {
          image:'http://p1.meituan.net/200.0/deal/726c6971271e3909dd30f3d858f460b9189155.jpg@177_0_709_709a%7C267h_267w_2e_90Q',
          name:'螺小胖柳州螺蛳粉',
          adr:'[7店通用]',
          type:'柳州螺蛳粉1份，提供免费WiFi',
          price:11.8,
          originalPrice:'13元',
          newUserTag:'',
          hasSell:131579
        },
        {
          image:'http://p1.meituan.net/200.0/deal/c9bb8b5f991fe841ebad74c006f4d19423865.jpg@200_0_900_900a%7C267h_267w_2e_90Q',
          name:'一只酸奶牛',
          adr:'[西安等]',
          type:'酸奶牛紫米露3选1',
          price:10.9,
          originalPrice:'12元',
          newUserTag:'',
          hasSell:1287698
        },
        {
          image:'http://p1.meituan.net/200.0/deal/61ce03e080b35a5a77302f8ac9c02ae4296248.jpg@0_169_1079_1079a%7C267h_267w_2e_90Q',
          name:'优为客牛排自助餐厅',
          adr:'[2店通用]',
          type:'优为客牛排自助',
          price:67.9,
          originalPrice:'79元',
          newUserTag:'',
          hasSell:120357
        },
        {
          image:'http://p1.meituan.net/200.0/dpdeal/bff97507db8c0598f327309c15c3d4f3133497.jpg',
          name:'清水湾·乐汤汇',
          adr:'[明光路]',
          type:'【全时通用】泡汤+水疗+汗蒸',
          price:89,
          originalPrice:'99元',
          newUserTag:'',
          hasSell:117514
        },
        {
          image:'http://p0.meituan.net/200.0/deal/6fa1d71ef1f1d86abfecbff16ea003a532802.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
          name:'赛百味',
          adr:'[18店通用]',
          type:'单人餐',
          price:26,
          originalPrice:'37元',
          newUserTag:'',
          hasSell:141949
        },
        {
          image:'http://p0.meituan.net/200.0/deal/__44275781__5150758.jpg',
          name:'顶牛兰州牛肉拉面',
          adr:'[建工路]',
          type:'拉面套餐，建议单人使用',
          price:9.88,
          originalPrice:'12元',
          newUserTag:'',
          hasSell:151973
        },
        {
          image:'http://p0.meituan.net/200.0/deal/c6db2cb3359fa6313dc5a5c979362ea469968.jpg@133_0_533_533a%7C267h_267w_2e_90Q',
          name:'抚小鲜蒸汽石锅鱼',
          adr:'[3店通用]',
          type:'100元代金券1张，可叠加',
          price:88,
          originalPrice:'100元',
          newUserTag:'',
          hasSell:42054
        },
        {
          image:'http://p0.meituan.net/200.0/deal/c3a39148e071c838681ed939c52e0bc226700.jpg@139_0_548_548a%7C267h_267w_2e_90Q',
          name:'东东包',
          adr:'[西安等]',
          type:'单人餐',
          price:18,
          originalPrice:'24元',
          newUserTag:'',
          hasSell:63466
        },
        {
          image:'http://p0.meituan.net/200.0/deal/3387c0da32ba38d8deb07208a9f6e42724632.jpg',
          name:'瑞可爷爷的店',
          adr:'[西安等]',
          type:'蛋糕2选1,约7英寸，圆形',
          price:43.9,
          originalPrice:'59.9元',
          newUserTag:'',
          hasSell:80999
        },
        {
          image:'http://p1.meituan.net/200.0/deal/5a183d873bdf49f77689ca15e445a4ae75997.jpg@120_0_480_480a%7C267h_267w_2e_90Q',
          name:'金迈源自助涮烤王',
          adr:'[建工路]',
          type:'单人晚餐自助',
          price:66.9,
          originalPrice:'',
          newUserTag:'新客减11',
          hasSell:147927
        },
      ],
      city: '西安'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: #f0f0f0;
  /* margin-top: 60px; */
}
.navbar{
  width: 100%;
  height: 4.14rem;
  line-height: 4.14rem;
  background: linear-gradient(135deg, #ffd000 0%, #ffbd00);
  position: relative;
  display: flex;
}
.navbar-item{
  display: inline-block;
  height: 100%;
  position: relative;
}
.nav-left a{
  text-decoration: none;
  color: #2c3e50;
  font-size: 14rem;
  padding: 0 1.6rem;
}
.nav-left img{
  width: .55rem;
  height: .55rem;
  position: relative;
  top: 0rem;
  left: .5rem;
}
.box-search{
  margin-left: .2rem;
  height: 66%;
  line-height: 66%;
  /* width: 66.8%; */
  flex: 1;
  border-radius: 0.8rem;
  background-color: #fff;
  opacity: 0.9;
  top: 0.72rem;
  font-size: 13rem;
}
.box-search a{
  display: inline-block;
  color: #999;
  text-decoration: none;
  position: relative;
  top: 0.5rem;
}
.box-search img{
  width: 1.2rem;
  height: 1.2rem;
  padding: 0 1rem;
  position: relative;
  top: .25rem;
}
.nav-right{
  width: 4rem;
  /* position: absolute;
  right: 0rem; */
}
.nav-right img{
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 0.9rem;
  left: 0.9rem;
}
.banner-download{
  background-color: #111;
  color: #fff;
  height: 4.3rem;
  /* line-height: 4.5rem; */
  width: 100%;
  position: relative;
}
.banner-download img{
  width: 3rem;
  height: 3rem;
  display: inline-block;
  position: relative;
  top: .7rem;
  left: 1.25rem;
  /* margin-right: 1.25rem; */
}
.logo-text{
  display: inline-block;
  position: relative;
  top: 0.4rem;
  left: 2.1rem;
  font-size: 13rem;
}
.logo-text div{
  height: 1.5rem;
  line-height: 1.5rem;
}
.logo-desc{
  color: #ccc;
  font-size: 12rem;
  font-weight: 300;
}
.toapp{
  background: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  color: #000;
  width: 4.5rem;
  height: 2.5rem;
  border-radius: .5rem;
  text-align: center;
  line-height: 2.5rem;
  position: absolute;
  right: 1.25rem;
  top: 1rem;
}
.foodshoplist{
  background-color: #fff;
  padding-left: .9rem;
}
.foodshoplist-title{
  padding: 1rem 0 .76rem;
  font-size: 17rem;
  border-bottom: .016px solid #f4f4f4;
}
.foodshoplist-more{
  width: 100%;
  height: 3.6rem;
  line-height: 3.6rem;
}
.foodshoplist-more a{
  color: #fe8c00;
  text-decoration: none;
  font-size: 15rem;
  width: 100%;
  display: inline-block;
  position: relative;
}
.foodshoplist-more span{
  position: absolute;
  right: 1rem;
  font-size: 15rem;
}
.footer{
  border-top: 1px solid #DDD8CE;
  padding: 1rem 1rem;
  background-color: #fff;
}
.footer-bar{
  margin: 0 1rem;
  font-size: 14rem;
  position: relative;
}
.footer-bar a{
  text-decoration: none;
  color: #222;
  background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%); 
  padding: .35rem 1.1rem;
  border-radius: .6rem;
  margin-right: 1rem;
}
.footer-bar-item{
  display: inline-block;
}
.footer-bar-item img{
  width: 1.1rem;
  height: 1.1rem;
  position: relative;
  top: 0.18rem;
}
.footer-bar-city{
  position: absolute;
  right: 0rem;
  top: 0.3rem;
}
.footer-bar-city span{
  color: #999;
  margin-right: .5rem;
}
.footer-bar-city a{
  background: none;
  padding: 0 0 0 0.3rem;
}
.footer-nav{
  padding: 2rem 0;
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
  color: #fe8c00;
  font-weight: 400;
  font-size: 12rem;
}
.footer-link{
  text-align: center;
  padding-bottom: 1.5rem;
}
.footer-link a{
  display: inline-block;
  text-decoration: none;
  color: #646464;
  padding: 0 1.5rem 0.6rem 0;
  font-size: 12rem;
}
.footer-copyright{
  position: relative;
  border-top: 1px solid #999;
  text-align: center;
}
.footer-copyright span{
  display: inline-block;
  padding: 0 1rem;
  background-color: #fff;
  color: #999;
  position: relative;
  top: -0.85rem;
}
.footer-copyright span a{
  color: #999;
  text-decoration: none;
}
</style>
