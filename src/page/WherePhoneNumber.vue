<template>
    <div 
        class="select-country-code"
        @touchmove="move"
        @mousewheel="move"
    >
        <div class="wherephonenumber">
            <div class="header">
                <div class="toback">
                    <router-link to="Login"><i class="toback-btn"></i></router-link>
                </div>
                <div class="title">选择手机号归属地</div>
            </div>
            <div class="select-box">
                <div 
                    class="select-item"
                    v-for="(item, key, index) in codeList"
                    :key="index"
                    :id="key"
                >
                    <div class="select-title">{{key}}</div>
                    <ul>
                        <li 
                            v-for="(inneritem, innerkey, innerindex) in item"
                            :key="innerindex"
                            class="select-li"
                            @click="selectThis(innerkey, inneritem)"
                        >
                            <span class="select-name">{{innerkey}}</span>
                            <span class="select-code">{{inneritem}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="select-aside">
                <div 
                    v-for="(item, key, index) in codeList"
                    :key="index"
                    :class="{
                        'select-aside-item': true, 
                        'select-aside-item-selected': index == selected
                    }"
                    @click="toselect(index)"
                >
                    <a :href="'#' + key">
                        {{key}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WherePhoneNumber',
    data(){
        return{
            codeList:{
                '热门':{
                    '中国': '+86',
                    '香港(中国)': '+852',
                    '澳门(中国)': '+853',
                    '台湾(中国)': '+886',
                    '新加坡': '+65',
                    '澳大利亚': '+61',
                    '新西兰': '+64',
                    '日本': '+81',
                    '韩国': '+82'
                },
                'A':{
                    '阿尔巴尼亚': '+355',
                    '阿尔及利亚' :'+213',
                    '阿富汗': '+93',
                    '阿根廷': '+54',
                    '爱尔兰(岛)': '+353',
                    '埃及': '+20',
                    '埃塞俄比亚': '+251',
                    '爱沙尼亚': '+372',
                    '阿联酋': '+971',
                    '阿鲁巴': '+297',
                    '阿曼': '+968',
                    '安道尔共和国': '+376',
                    '安哥拉': '+244',
                    '安圭拉岛': '+1264',
                    '安提瓜及巴布达': '+268',
                    '奥地利': '+43',
                    '阿塞拜疆': '+994',
                    '阿根延': '+54',
                    '阿拉伯联合酋长国': '+972',
                    '阿拉伯也门共和国': '+968',
                    '阿拉斯加': '+1907',
                    '阿鲁巴岛': '+297',
                    '阿森松': '+247',
                    '爱尔兰': '+353',
                    '安道尔': '+33628',
                    '安提瓜和巴布达': '+1809'
                },
                'B':{
                    '巴巴多斯': '+1246',
                    '巴布亚新几内亚': '+675',
                    '巴哈马': '+1242',
                    '白俄罗斯': '+375',
                    '百慕大': '+441',
                    '巴基斯坦': '+92',
                    '巴林': '+973',
                    '巴拿马': '+507',
                    '保加利亚': '+359',
                    '北马里亚那群岛': '+1670',
                    '贝宁': '+229',
                    '比利时': '+32',
                    '冰岛': '+354',
                    '波多黎各': '+1787',
                    '波兰': '+48',
                    '玻利维亚': '+591',
                    '伯利兹': '+501',
                    '博内尔岛': '+599',
                    '波斯尼亚和黑塞哥维那': '+387',
                    '博茨瓦那': '+267',
                    '不丹': '+975',
                    '布基纳法索国': '+226',
                    '布隆迪': '+257',
                    '巴基期坦': '+92',
                    '巴西': '+55',
                    '百慕大群岛': '+1809',
                    '博茨瓦纳': '+267',
                    '布基纳法索': '+226'
                },
                'C':{
                    '朝鲜': '+850',
                    '赤道几内亚': '+240'
                },
                'D':{
                    '丹麦': '+45',
                    '德国': '+49',
                    '东帝汶': '+670',
                    '多哥': '+228',
                    '多明尼加共和国': '+1849',
                    '多米尼克': '+1767',
                    '东萨摩亚': '+684',
                    '多米尼加共和国': '+1809'
                },
                'E':{
                    '厄瓜多尔': '+593',
                    '厄立特里亚国': '+291',
                    '俄罗斯': '+7'
                },
                'F':{
                    '法国': '+33',
                    '法罗群岛': '+298',
                    '梵蒂冈': '+379',
                    '法属波利尼西亚': '+689',
                    '法属圭亚那': '+594',
                    '法属西印度群岛': '+809',
                    '斐济': '+679',
                    '菲律宾': '+63',
                    '芬兰': '+358',
                    '富图纳群岛': '+681',
                    '法兰': '+48',
                    '法属波里尼西亚': '+689',
                    '佛得角': '+500'
                },
                'G':{
                    '冈比亚': '+220',
                    '刚果': '+242',
                    '刚果民主共和国': '+243',
                    '格恩西岛': '+44',
                    '格陵兰岛': '+299',
                    '格林纳达': '+1473',
                    '格鲁吉亚': '+995',
                    '哥斯达黎加': '+506',
                    '瓜德罗普岛': '+890',
                    '关岛': '+1671',
                    '古巴': '+53',
                    '圭亚那': '+592',
                    '哥伦比亚': '+57'
                },
                'H':{
                    '海地': '+509',
                    '哈萨克斯坦': '+327',
                    '黑山共和国': '+382',
                    '荷兰': '+31',
                    '洪都拉斯': '+504',
                    '荷属安的列斯群岛': '+599'
                },
                'J':{
                    '加纳': '+233',
                    '加拿大': '+1',
                    '柬埔寨': '+855',
                    '加蓬': '+241',
                    '吉布提': '+253',
                    '捷克共和国': '+420',
                    '吉尔吉斯斯坦': '+331',
                    '津巴布韦': '+263',
                    '几内亚': '+224',
                    '畿尼': '+245',
                    '基里巴斯+': '686',
                    '几内亚比绍': '+245',
                    '加那利群岛': '+3422'
                },
                'K':{
                    '开曼群岛': '+1345',
                    '喀麦隆': '+237',
                    '卡塔尔': '+974',
                    '克罗地亚共和国': '+385',
                    '科摩洛': '+269',
                    '肯尼亚': '+254',
                    '科威特': '+965',
                    '库克群岛': '+682',
                    '库拉索': '+5999',
                    '科科斯岛': '+6722',
                    '科克群岛': '+682',
                    '科摩罗': '+269',
                    '科特迪瓦': '+225',
                    '科威物': '+966'
                },
                'L':{
                    '老挝': '+856',
                    '拉脱维亚': '+371',
                    '利比里亚': '+231',
                    '利比亚': '+218',
                    '列支敦士登': '+423',
                    '立陶宛': '+370',
                    '留尼旺': '+262',
                    '卢森堡': '+352',
                    '卢旺达': '+250',
                    '莱索托': '+266',
                    '黎巴嫩': '+962',
                    '列士敦士登': '+4175',
                    '留尼旺岛': '+262',
                    '卢森保': '+352',
                    '罗马尼亚': '+40'
                },
                'M':{
                    '马达加斯加': '+261',
                    '马恩岛': '+44',
                    '马尔代夫': '+960',
                    '马耳他': '+356',
                    '马尔维纳斯群岛': '+500',
                    '马拉维': '+265',
                    '马来西亚': '+60',
                    '马里': '+223',
                    '毛里塔尼亚': '+222',
                    '毛里求斯': '+230',
                    '马其顿': '+389',
                    '马提尼克岛': '+596',
                    '马约特岛': '+269',
                    '美国': '+1',
                    '美属萨摩亚群岛': '+684',
                    '蒙古': '+976',
                    '蒙特塞拉特': '+1664',
                    '孟加拉共和国': '+880',
                    '密克罗尼西亚': '+691',
                    '摩尔多瓦': '+373',
                    '摩洛哥': '+212',
                    '摩纳哥公国': '+377',
                    '莫桑比克': '+258',
                    '墨西哥': '+52',
                    '马里亚纳群岛': '+670',
                    '马提尼克': '+596',
                    '蒙特塞拉特岛': '+1809',
                    '孟加拉国': '+880',
                    '秘鲁': '+51',
                    '摩纳哥': '+3393'
                },
                'N':{
                    '纳米比亚': '+264',
                    '南非': '+27',
                    '南苏丹': '+211',
                    '尼泊尔': '+977',
                    '尼加拉瓜': '+505',
                    '尼日尔': '+227',
                    '尼日利亚': '+234',
                    '挪威': '+47',
                    '南斯拉夫': '+338',
                    '瑙鲁': '+674',
                    '纽埃岛': '+683',
                    '诺福克岛': '+6723'
                },
                'P':{
                    '帕劳': '+680',
                    '葡萄牙': '+351'
                },
                'R':{
                    '瑞典': '+46',
                    '瑞士': '+41'
                },
                'S':{
                    '萨尔瓦多': '+503',
                    '塞尔维亚共和国': '+381',
                    '塞拉利昂': '+232',
                    '塞浦路斯': '+357',
                    '塞舌尔群岛': '+248',
                    '萨摩亚': '+685',
                    '沙特阿拉伯': '+966',
                    '圣赫勒拿岛': '+290',
                    '圣基茨和尼维斯': '+1869',
                    '圣露西亚': '+1758',
                    '圣马丁海岛领地': '+590',
                    '圣马力诺共和国': '+378',
                    '圣皮埃尔和密克隆群岛': '+508',
                    '圣文森特和格林纳丁斯': '+784',
                    '史瓦济兰': '+268',
                    '斯里兰卡': '+94',
                    '斯洛文尼亚': '+386',
                    '苏丹': '+249',
                    '苏里南河': '+597',
                    '所罗门群岛': '+677',
                    '塞拉利昴': '+232',
                    '塞内加尔': '+221',
                    '塞舌尔': '+248',
                    '圣多美和普林西比': '+239',
                    '圣赫勒拿': '+290',
                    '圣克里斯托费和尼维斯': '+1809',
                    '圣卢西亚': '+1809',
                    '圣马力诺': '+39549',
                    '圣庭岛': '+6724',
                    '圣文桑特岛和格雷纳丁斯': '+1809',
                    '斯威士兰': '+268',
                    '苏里南': '+597',
                    '索马里': '+252'
                },
                'T':{
                    '泰国': '+66',
                    '塔吉克斯坦': '+992',
                    '汤加群岛': '+676',
                    '坦桑尼亚': '+255',
                    '特克斯和凯科斯群岛': '+1649',
                    '特立尼达岛和多巴哥': '+1868',
                    '土耳其': '+90',
                    '土库曼': '+993',
                    '突尼斯': '+216',
                    '图瓦卢': '+688',
                    '汤加': '+676',
                    '特立尼达和多巴哥': '+1809'
                },
                'W':{
                    '瓦努阿图': '+678',
                    '危地马拉': '+502',
                    '委内瑞拉': '+58',
                    '文莱': '+673',
                    '乌干达': '+256',
                    '乌克兰': '+380',
                    '巴拉圭': '+595',
                    '乌拉圭': '+598',
                    '乌兹别克斯坦': '+998',
                    '威克岛': '+1808',
                    '维尔京群岛': '+1809'
                },
                'X':{
                    '西班牙': '+34',
                    '希腊': '+30',
                    '新喀里多尼亚岛': '+687',
                    '匈牙利': '+36',
                    '叙利亚': '+963',
                    '西萨摩亚': '+685',
                    '夏威夷': '+1808',
                    '新喀里多尼亚群岛': '+687'
                },
                'Y':{
                    '牙买加': '+1876',
                    '亚美尼亚': '+374',
                    '也门': '+967',
                    '意大利': '+39',
                    '伊拉克': '+964',
                    '伊朗': '+98',
                    '印度尼西亚': '+62',
                    '印度': '+91',
                    '英国': '+44',
                    '英属维尔京群岛': '+1284',
                    '英属维京群岛': '+1284',
                    '英属印度洋领地': '+246',
                    '以色列': '+972',
                    '约旦': '+962',
                    '越南': '+84'
                },
                'Z':{
                    '赞比亚': '+260',
                    '泽西岛': '+44',
                    '乍得': '+235',
                    '直布罗陀': '+350',
                    '智利': '+56',
                    '扎伊尔': '+243',
                    '中非': '+236',
                    '中途岛': '+1808'
                }
            },
            selected: 0,
            offsetArr:[]
        }
    },
    mounted: function(){
        // var arr = document.getElementsByClassName('select-item')
        // console.log(arr)
        var list = document.querySelectorAll('.select-item')
        // console.log(list)
        var arr = [];
        for(let i = 0; i < list.length; i++){
            arr.push(list[i].offsetTop - 380)
        }
        this.offsetArr = arr;
        // console.log(this.offsetArr)
    },
    methods:{
        toselect: function(e){
            this.selected = e
        },
        move: function(e){
            // console.log(arr)
            // console.log(this.settime)
            if(this.settime){
                clearTimeout(this.settime);
            }
            var settime = setTimeout(() => {
                let arr = this.offsetArr;
                let scrool = document.getElementsByClassName('select-country-code')[0].scrollTop;
                // console.log(scrool)
                for(let i = 0; i < arr.length; i++){
                    if(arr[i] < scrool && scrool < arr[i+1]){
                        // console.log(i) 
                        // console.log(arr)
                        this.selected = i;
                        break;
                    }
                    // console.log(i)
                }
                if(scrool > arr[arr.length - 1]){
                    this.selected = arr.length - 1;
                }
            },400)
            this.settime = settime;
            // console.log(this.settime)
        },
        selectThis: function(name, code){
            console.log(name, code)
            this.$store.commit('COUNTRY_CODE', {name, code})
            this.$router.push('Login')
        }
    }
}
</script>

<style scoped>
    .select-country-code{
        height: 100vh;
        overflow: scroll;
    }
    .header{
        position: fixed;
        top: 0;
        z-index: 1;
        padding: 1rem 0;
        width: 100vw;
        background: #fff;
    }
    .header div{
        display: inline-block;
    }
    .toback{
        margin: 0 2.3rem;
    }
    .header .title{
        text-align: center;
        font-size: 18rem;
        margin-left: 3.58rem;
        position: relative;
        top: -0.2rem;
    }
    .select-box{
        color: #777;
        padding: 0 1.9rem;
    }
    .select-title{  
        font-size: 13rem;
        margin-bottom: .2rem;
    }
    .select-item{
        padding-top: 3.9rem;
    }
    .select-item ul{
        padding: 0;
        margin: .2rem 0;
        list-style: none;
    }
    .select-li{
        position: relative;
        padding: 1rem 0;
        font-size: 13.6rem;
        border-bottom: 1.2px solid rgba(119, 119, 119, .15);
    }
    .select-name{
        color: #111;
    }
    .select-code{
        position: absolute;
        right: 0;
    }
    .select-aside{
        position: fixed;
        top: 15%;
        right: 0.2rem;
        font-size: 13rem;
    }
    .select-aside-item{
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: .4rem;
        text-align: center;
        overflow: hidden;
    }
    .select-aside-item a{
        color: #111;
    }
    .select-aside-item-selected{
        border-radius: 2rem;
        background: linear-gradient(133deg, #ffd000 0%, #ffdb00 100%);
    }
</style>
