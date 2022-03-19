<template>
  <div class="nav-dialog">
    <el-dialog v-model="isShow" width="30%">
      <template v-if="showFlag === 1">
        <h2>技术交流</h2>
        <img src="~assets/images/wechat.jpg" alt="" />
      </template>
      <template v-else-if="showFlag === 2">
        <h2>时间</h2>
        <iframe
          frameborder="0"
          width="100%"
          src="/page/run-time/index.html"
        ></iframe
      ></template>
      <h3>
        生活再继续,让我们扬帆起航
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-ba633cb8=""
          class="iconMoon"
        >
          <path
            fill="currentColor"
            d="M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
          ></path>
          <path
            fill="currentColor"
            d="M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
          ></path>
        </svg>
        加油~
      </h3>
      <h3>
        心情放轻松,每天进步一点点
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-ba633cb8=""
          class="iconSun"
        >
          <path
            fill="currentColor"
            d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
          ></path></svg
        >坚持~
      </h3>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NavDialog",
  setup() {
    const isShow = ref(false);
    const showFlag = ref(1);
    return { isShow, showFlag };
  }
});
</script>

<style lang="less" scoped>
.nav-dialog {
  padding: 10px 10px;
  img {
    width: 100%;
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 0px;
    cursor: pointer;
    background-image: -webkit-linear-gradient(bottom, red, #ff5f60, #f080c5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    svg {
      width: 20px;
      vertical-align: middle;
      position: relative;
    }
    .iconMoon {
      left: -1px;
    }
    .iconSun {
      left: -2px;
      top: -3px;
      margin: 0 9px 0 1px;
    }
  }
}
</style>
