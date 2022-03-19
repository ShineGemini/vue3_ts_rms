<template>
  <div class="login-user">
    <el-form
      label-width="70px"
      :model="account"
      :rules="loginUserRules"
      ref="elFormRef"
      class="el-form"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";

import { ElForm } from "element-plus";

import { loginUserRules } from "../hooks/rules";
import localCache from "@/utils/cache";
export default defineComponent({
  name: "LoginUser",
  setup() {
    const account = reactive({
      name: localCache.getCache("name"),
      password: localCache.getCache("password")
    });
    const store = useStore();
    const elFormRef = ref<InstanceType<typeof ElForm>>();
    const loginUserAction = (rememberPassword: boolean) => {
      elFormRef.value?.validate((res) => {
        if (res) {
          if (rememberPassword) {
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
            store.dispatch("login/accountLoginAction", { ...account });
          } else {
            localCache.setCache("name", "");
            localCache.setCache("password", "");
          }
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };

    return { account, loginUserRules, elFormRef, loginUserAction };
  }
});
</script>

<style lang="less" scoped>
.el-form {
  padding-top: 10px;
}
</style>
