<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
  import {mapState, mapActions} from "vuex";
  export default {
    name: 'App',
    computed: mapState([
      "scale"
    ]),
    created () {
      let docEl = document.documentElement
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
      let _this = this
      let recalc = function () {
        var clientWidth = docEl.clientWidth
        var clientHeight = docEl.clientHeight
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
        _this.changeScale({scale: clientWidth / 375, height: clientHeight})
      }
      recalc()
      if (!document.addEventListener) return
      window.addEventListener(resizeEvt, recalc, false)
      document.addEventListener('DOMContentLoaded', recalc, false)
    },
    methods: {
      ...mapActions(['changeScale'])
    }
  }
</script>

<style>
  body {
    background-color: #f2f2f2;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
  }
</style>
<style>
  .slide-left-enter-active,.slide-right-enter-active,.slide-left-leave-active,.slide-right-leave-active{
    transition: all 0.5s;
    transform: translateX(0);
  }
  .slide-left-enter,.slide-right-leave-to{
    transform: translateX(100%);
    transition: all 0.5s;
  }
  .slide-left-leave-to ,.slide-right-enter{
    transform: translateX(-100%);
    transition: all 0.5s;
  }
  .borderOnePx:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  .onLinepx:after{
    content: '';
    position: absolute;
    bottom: -1px;
    background: #DCDCDC;
    width: 100%;
    height: 1px;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
</style>
