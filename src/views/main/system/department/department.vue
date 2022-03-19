<template>
  <div class="department">
    <div class="department-header">
      <page-search
        :formConfig="FormConfig"
        @searchReset="resetBtnClick"
        @searchKeyValue="searchBtnClick"
      ></page-search>
    </div>
    <div class="department-main">
      <page-tabel
        ref="pageTabelRef"
        :tabelConfig="TabelConfig"
        pageName="department"
        @createBtnClick="handleCreateBtnClick"
        @editorBtnClick="handleEditorBtnClick"
      ></page-tabel>
    </div>
    <page-dialog
      ref="pageDialogRef"
      :defaultValue="defaultValue"
      :pageDialogConfig="DialogConfig"
      pageName="department"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/components/page-search";
import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

import FormConfig from "./config/from.config";
import TabelConfig from "./config/tabel.config";
import DialogConfig from "./config/dialog.config";

import { searchLinkage, operationLinkage } from "@/hooks/pageLinkage";
export default defineComponent({
  name: "department",
  components: { PageSearch, PageTabel, PageDialog },
  setup() {
    const [pageTabelRef, resetBtnClick, searchBtnClick] = searchLinkage();
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    ] = operationLinkage();
    return {
      FormConfig,
      TabelConfig,
      DialogConfig,
      pageTabelRef,
      resetBtnClick,
      searchBtnClick,
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    };
  }
});
</script>

<style scoped lang="less">
.department {
  .department-main {
    margin-top: 20px;
  }
}
</style>
