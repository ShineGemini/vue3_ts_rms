<template>
  <div class="category">
    <category-header :chartsData="chartsData" />
    <page-search
      :formConfig="FormConfig"
      class="page-search"
      @searchKeyValue="searchBtnClick"
      @searchReset="resetBtnClick"
    ></page-search>
    <page-tabel
      :tabelConfig="TabelConfig"
      pageName="category"
      ref="pageTabelRef"
      @editorBtnClick="handleEditorBtnClick"
      @createBtnClick="handleCreateBtnClick"
    ></page-tabel>
    <page-diaglog
      :pageDialogConfig="DialogConfig"
      pageName="category"
      :defaultValue="defaultValue"
      ref="pageDialogRef"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

import CategoryHeader from "./cpn/CategoryHeader.vue";
import PageSearch from "@/components/page-search";
import PageTabel from "@/components/page-tabel";
import PageDiaglog from "@/components/page-dialog";

import FormConfig from "./config/form.config";
import TabelConfig from "./config/tabel.config";
import DialogConfig from "./config/dialog.config";

import { searchLinkage, operationLinkage } from "@/hooks/pageLinkage";
export default defineComponent({
  name: "category",
  components: { CategoryHeader, PageSearch, PageTabel, PageDiaglog },
  setup() {
    const store = useStore();
    store.dispatch("analysis/goodsSaleTop10Action");

    const chartsData = computed(() => {
      return store.state.analysis.goodsSaleTop10.map((goods) => {
        return { name: goods.name, value: goods.saleCount };
      });
    });

    const [pageTabelRef, resetBtnClick, searchBtnClick] = searchLinkage();
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    ] = operationLinkage();
    return {
      chartsData,
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
.category {
  .page-search {
    margin: 10px 0;
  }
}
</style>
