<template>
    <router-link to="/shopdetails" class="toshop-details">
        <div class="foodshoplist-item">
            <div class="item-left">
            <img :src="item.image">
            </div>
            <div class="item-right">
                <div class="item-name">{{item.name}}</div>
                <div class="item-desc">{{item.adr}}{{item.type}}</div>
                <div class="item-price">
                    <span class="item-price-num item-price-sell">{{item.price}}</span>
                    <span class="item-price-text item-price-sell">元</span>
                    <span 
                        class="item-price-originalPrice"
                        v-if="item.originalPrice">
                        门市价:{{item.originalPrice}}
                    </span>
                    <span 
                        class="item-price-tag"
                        v-if="item.newUserTag">
                        {{item.newUserTag}}
                    </span>
                    <span class="item-price-hasSell">已售{{item.hasSell}}</span>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        item:Object
    }     
}
</script>

<style scoped>
    .toshop-details{
        display: block;
        color: #222;
        text-decoration: none;
    }
    .foodshoplist-item{
        display: flex;
        padding: .9rem 0;
        border-bottom: .016px solid #f4f4f4;
    }
    .item-left img{
        width: 7.5rem;
        height: 6.834rem;
        margin-right: .9rem;
    }
    .item-right{
        flex: 1;
    }
    .item-name{
        font-size: 15rem;
    }
    .item-desc{
        margin: 0.4rem 0;
    }
    .item-price{
        margin-top: 1.75rem;
        position: relative;
    }
    .item-price-num{
        font-size: 18rem;
    }
    .item-price-sell{
        color: #f60;
    }
    .item-price-tag{
        color: #f90;
        border: .1rem solid #f90;
        font-size: 12rem;
        border-radius: .3rem;
        margin-left: .3rem;
    }
    .item-price-hasSell{
        position: absolute;
        right: 0.9rem;
        bottom: .25rem;
    }
</style>
