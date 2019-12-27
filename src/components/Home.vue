<template>
  <div id="index">
    <div class="home-main">
      <div class="home-logo">
        <img style="width: 2rem; height: 2rem;" src="./../../static/images/index-header-logo.png" alt="">
      </div>
      <div class="home-title"><span>云游山西-酒店门票预订<br>(原型)</span></div>
      <div class="home-button">
         <div  @click="goPage(2)">
            <img style="width: 1rem; height: 1rem;" src="./../../static/images/hotel-base.png"  /><br>
            <span>酒店</span>
          </div>
          <div  @click="goPage(1)">
            <img style="width: 1rem; height: 1rem;" src="./../../static/images/ticket-base.png" /><br>
            <span>门票</span>
          </div>
      </div>
      <div class="tabbar"> 
        <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
  const btn = ['home', 'ticket', 'hotel']
  export default {
    name: "Home",
    data() {
      return {
        active: 0
      }
    },
    methods: {
      goPage(index) {
        this.$router.push('/' + btn[index])
      }
    }
  }
</script>

<style scoped>
  #index {
    width: 100%;
    height: 100%;
    text-align: center;
    background: #f2f2f2;
  }
  .home-logo {
    padding-top: .5rem;
  }
  .home-title {
    margin: .4rem 0;
    font-size: .28rem;
    line-height: .5rem;
  }
  .home-button {
    display: flex;
    font-size: .16rem;
    padding-bottom: .5rem;
  }
  .home-button > div {
    width: 50%;
    align-items: center;
    color: rgb(116, 180, 240)
  }
  .tabbar {
    font-size: .14rem;
  }
</style>