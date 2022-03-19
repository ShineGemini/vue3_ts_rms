<template>
  <div class="menu">
    <page-tabel
      :tabelConfig="TabelConfig"
      pageName="menu"
      @editorBtnClick="handleEditorBtnClick"
      @createBtnClick="handleCreateBtnClick"
    ></page-tabel>
    <page-dialog
      pageName="menu"
      :pageDialogConfig="menuDialogConfig"
      ref="pageDialogRef"
      :defaultValue="defaultValue"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

import TabelConfig from "./configs/tabel.config";
import DialogConfig from "./configs/dialog.config";

import { operationLinkage } from "@/hooks/pageLinkage";
import { mapFirstMenuList } from "@/utils/menuToRoute";
export default defineComponent({
  name: "menu",
  components: { PageTabel, PageDialog },
  setup() {
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    ] = operationLinkage();

    const menuDialogConfig = computed(() => {
      const store = useStore();
      const menuList = mapFirstMenuList(store.state.menuList);
      const parentSection = DialogConfig.formItem.find((item) => {
        return item.field === "parentId";
      });
      parentSection!.options = menuList;
      return DialogConfig;
    });

    return {
      TabelConfig,
      menuDialogConfig,
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    };
  }
});
</script>

<style scoped></style>
