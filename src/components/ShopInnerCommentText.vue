<template>
    <div>
        <div class="title">
            评价
            <div class="star">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                4.2
            </div>
        </div>
        <div 
            class="comment-text"
            v-for="(item, index) of item"
            :key="index"
        >
            <div class="user-wrapper">
                <div class="userphoto">
                    <img :src="item.userPhoto" alt="1">
                </div>
                <div class="userinfo">
                    <div class="username">{{item.userName}}</div>
                    <div class="score">
                        <div class="star">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div class="comment-time">{{item.commentTime}}</div>
                    </div>
                </div>
            </div>
            <div class="text">
                {{item.commentText}}
            </div>
            <div 
                class="comment-image"
                v-for="(inner_item, index) of item.commentImage"
                :key="index"
            >
                <img :src="inner_item">
            </div>

            <div class="comment-shop">{{item.commentShop}}</div>
            
            <div class="shop-reply">
                <span></span>
                商家回复:
                <div class="reply-inner">{{item.shopReply}}</div>
            </div>
        </div>
        <div class="more">
            <a href="#">查看全部2896条评价</a>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShopInnerCommentText',
    props:{
        item: Array
    }
}
</script>

<style scoped>
    .title{
        padding: .95rem .9rem;
        font-size: 16rem;
        border-bottom: .5px solid rgba(0,0,0,.1);
        position: relative;
    }
    .star{
        display: inline-block;
        color: #fa952f;
        position: absolute;
        right: .9rem;
    }
    .star i{
        display: inline-block;
        width: 1.3rem;
        height: 1.3rem;
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cb45534a7d3737c0.png@83211d4);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: 0.2rem;
    }
    .star i:last-child{
        background-image: url(http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/f906908262f9b786.png@83211d4);
        margin-right: .3rem;
    }
    .comment-text{
        padding: 0rem .9rem .9rem;
        border-bottom: 0.51px solid rgba(0,0,0,.1)
    }
    .userphoto{
        display: inline-block;
        position: relative;
    }
    .userphoto img{
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        position: absolute;
        top: -0.61rem;
    }
    .userinfo{
        position: relative;
        top: -1rem;
        margin-left: 3.2rem;
        color: #666;
    }
    .userinfo .score div{
        display: inline-block;
        position: relative;
        top: 0.2rem;
    }
    .comment-time{
        font-size: 12rem;
        color: #999;
    }
    .userinfo .star{
        right: 0;        
    }
    .userinfo .star i{
        width: 1.1rem;
        height: 1.1rem;
    }
    .text{
        font-size: 15rem;
        text-align: justify;
        color: #333;
        margin: 0.1rem 0 0.5rem;
    }
    .comment-image{
        display: inline-block;
        margin-right: .5rem;
        margin-bottom: .2rem;
    }
    .comment-image img{
        width: 4.5rem;
        height: 4.5rem;
    }
    .comment-shop{
        color: #666;
        font-size: 14rem;
        margin: .9rem 0;
    }
    .shop-reply{
        padding: .9rem .9rem;
        background-color: #f7f7f6;
        color: #666;    
        position: relative;
    }
    .shop-reply span{
        display: inline-block;
        width: .9rem;
        height: .9rem;
        background-color: #f7f7f6;
        position: absolute;
        top: -0.5rem;
        left: 2rem;
        transform: rotate(45deg)
    }
    .reply-inner{
        color: #ed852c;
        font-size: 15rem;
        margin-top: 1.8rem;
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
