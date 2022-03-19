<template>
  <div class="not-found">
    <el-button type="primary">{{ counter }}秒后自动跳转</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "NotFound",
  setup() {
    const counter = ref(5);
    const router = useRouter();
    setTimeout(() => {
      router.replace("/login");
    }, 5000);
    var timer = setInterval(() => {
      counter.value--;
      if (counter.value === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return {
      counter
    };
  }
});
</script>

<style lang="less" scoped>
.not-found {
  background: url("../../assets/images/404.gif") center center;
  width: 100%;
  height: 100%;
}
</style>
