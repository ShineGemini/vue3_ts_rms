<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="menuFoldAction"
    ></i>
    <bread-crumb :breadCrumbInfo="breadCrumbInfo" />

    <div class="user-info">
      <div class="other-operate">
        <i @click="showDialogClick('wechat')" class="icon-weichat"></i>
        <i @click="gotoGithub" class="icon-huaban881"></i>
        <i @click="showDialogClick('runtime')" class="icon-tingchewei"></i>
      </div>
      <el-avatar
        size="medium"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F12%2F20200312003511_jZVLK.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650194714&t=58dba8eb40e922e350c563d59b0abcb1"
      ></el-avatar>
      <el-dropdown>
        <div class="el-dropdown-link">
          <span class="user-name">{{ userName }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-plus">我的信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus" @click="exitLoginClick"
              >退出登陆</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <nav-dialog ref="navDialogRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store";
import { useRoute, useRouter } from "vue-router";

import BreadCrumb from "@/common-ui/breadcrumb";
import NavDialog from "./cpn/NavDialog.vue";

import { breadCrumbMapToMenu } from "@/utils/menuToRoute";
import localCache from "@/utils/cache";

export default defineComponent({
  emits: ["changeMenuFold"],
  name: "NavHeader",
  components: {
    BreadCrumb,
    NavDialog
  },
  setup(props, { emit }) {
    const isFold = ref(true);
    const store = useStore();
    const router = useRouter();
    const userInfo = computed(() => store.state.login.userInfo);
    const breadCrumbInfo = computed(() => {
      const route = useRoute();
      const path = route.path;
      return breadCrumbMapToMenu(store.state.login.userMenus, path);
    });

    const menuFoldAction = () => {
      emit("changeMenuFold", isFold.value);
      isFold.value = !isFold.value;
    };
    const gotoGithub = () => {
      window.location.href = "https://github.com/ShineGemini/vue3_ts_rms";
    };
    const navDialogRef = ref<InstanceType<typeof NavDialog>>();
    const showDialogClick = (flag: string) => {
      navDialogRef.value!.isShow = true;
      if (flag === "wechat") {
        navDialogRef.value!.showFlag = 1;
      } else if (flag === "runtime") {
        navDialogRef.value!.showFlag = 2;
      }
    };
    const exitLoginClick = () => {
      localCache.deleteCache("token");
      router.replace("/login");
    };
    const userName = ref(localCache.getCache("name"));
    return {
      userInfo,
      exitLoginClick,
      showDialogClick,
      menuFoldAction,
      isFold,
      breadCrumbInfo,
      gotoGithub,
      navDialogRef,
      userName
    };
  }
});
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  align-items: center;
  justify-content: space-evenly;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .bread-crumb {
    flex: 1;
    text-align: left;
    margin-left: 10px;
  }
  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "iconfont";
    .other-operate {
      font-size: 25px;
      margin-right: 10px;
      i {
        margin: 0 12px;
        user-select: none;
        cursor: pointer;
      }
    }
    .user-name {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 15px;
      font-weight: 600;
    }
  }
}
</style>
