<template>
    <div class="comment">
        <div class="comment-top">
            <div class="comment-score">
                <div>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <span>{{item.score}}</span>
            </div>
            <div class="comment-num">
                <a href="#">{{item.num}}人评价 ></a>
            </div>
        </div>
        <div class="comment-bottom">
            <a href="#">味道赞404</a>
            <a href="#">菜品不错404</a>
            <a href="#">回头客404</a>
            <a href="#">分量足404</a>
            <a href="#">上菜快404</a>
            <a href="#">海鲜棒404</a>
            <a href="#">饮品赞404</a>
            <a href="#">撸串圣地404</a>
            <a href="#">朋友聚餐404</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInnerComment',
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
    .comment-top{
        padding: .9rem .9rem;
        position: relative;
        border-bottom: .5px solid rgba(0, 0, 0, .1)
    }
    .comment-top div{
        display: inline-block;
        font-size: 15rem;
    }
    .comment-score{
        color: #fa952f;
    }
    .comment-score i{
        display: inline-block;
        width: 1.3rem;
        height: 1.3rem;
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cb45534a7d3737c0.png@83211d4);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .comment-score i:last-child{
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/f906908262f9b786.png@83211d4);
        margin-right: .3rem;
    }
    .comment-score span{
        position: relative;
        top: -0.19rem;
    }
    .comment-num a{
        color: #888;
        text-decoration: none;
        position: absolute;
        right: 0.9rem;
        top: 0.88rem;
    }
    .comment-bottom{
        padding: .9rem .9rem;
    }
    .comment-bottom a{
        display: inline-block;
        text-decoration: none;
        color: #fa952f;
        border: 1px solid #fa952f;
        border-radius: .3rem;
        padding: .4rem .4rem;
        margin-right: .5rem;
        margin-bottom: .6rem;
        font-size: 14rem;
    }
</style>
