<template>
  <div class="hello">
    <ul class="menu">
      <li 
        class="menu-item" 
        v-for="(item, index) of menuList"
        :key="index">
        <div 
          class="menu-icon" 
          :style="item.background">
          <img :src="item.icon"/>
        </div>
        <div class="menu-name">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuList:Array
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin-bottom: .9rem;
}
.menu{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:0;
  font-size: 12rem;
  color: 666;
  margin: 0;
  background-color: #fff;
}
.menu-item{
  display: inline-block;
  text-align: center;
  width: 6rem;
  margin: .9rem 0;
}
.menu-icon{
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 4rem;
  display: inline-block;
  margin-bottom: .42rem;
}
.menu-icon img{
  width: 2.4rem;
  height: 2.4rem;
  position: relative;
  top: .55rem;
  left: .1rem;
}
</style>
