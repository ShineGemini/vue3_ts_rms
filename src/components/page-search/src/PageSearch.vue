<template>
  <div class="page-search">
    <jl-form v-bind="formConfig" v-model="formData">
      <template #title>
        <h2>检索</h2>
      </template>
      <template #footer>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="handleSearchClick"
          >提交</el-button
        >
        <el-button icon="el-icon-refresh-right" @click="handleResetClick"
          >重置</el-button
        >
      </template>
    </jl-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import JlForm from "@/common-ui/jl-form";
export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      require: true
    }
  },
  emits: ["searchKeyValue", "searchReset"],
  components: { JlForm },
  name: "PageSearch",
  setup(props, { emit }) {
    const formItems = props.formConfig?.formItem ?? [];
    const formValue: any = {};
    for (const item of formItems) {
      formValue[item.field] = "";
    }
    const formData = ref(formValue);
    const handleSearchClick = () => {
      emit("searchKeyValue", formData.value);
    };
    const handleResetClick = () => {
      for (const item in formValue) {
        formData.value[item] = formValue[item];
      }
      emit("searchReset");
    };

    return { formData, handleSearchClick, handleResetClick };
  }
});
</script>

<style lang="less" scoped></style>
