<template>
  <div class="goods">
    <page-tabel
      :tabelConfig="TabelConfig"
      pageName="goods"
      @createBtnClick="handleCreateBtnClick"
      @editorBtnClick="handleEditorBtnClick"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 65px; height: 65px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template v-slot:status="scope">
        <el-button
          :type="scope.row.enable || scope.row.status ? 'success' : 'danger'"
          size="small"
          plain
          >{{
            scope.row.enable || scope.row.status ? "启用" : "禁用"
          }}</el-button
        >
      </template>
    </page-tabel>
    <page-dialog
      :pageDialogConfig="DialogConfig"
      pageName="goods"
      ref="pageDialogRef"
      :defaultValue="defaultValue"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

import TabelConfig from "./configs/tabel.config";
import DialogConfig from "./configs/dialog.config";

import { operationLinkage } from "@/hooks/pageLinkage";
export default defineComponent({
  name: "goods",
  components: { PageTabel, PageDialog },
  setup() {
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    ] = operationLinkage();
    return {
      TabelConfig,
      DialogConfig,
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    };
  }
});
</script>

<style scoped lang="less"></style>
