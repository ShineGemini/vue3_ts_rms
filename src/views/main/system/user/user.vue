<template>
  <div class="user">
    <page-search
      :formConfig="formConfigList"
      @searchKeyValue="searchBtnClick"
      @searchReset="resetBtnClick"
    ></page-search>
    <div class="user-tabel">
      <page-tabel
        :tabelConfig="tableConfigList"
        pageName="users"
        ref="pageTabelRef"
        @editorBtnClick="handleEditorBtnClick"
        @createBtnClick="handleCreateBtnClick"
      >
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
    </div>
    <page-dialog
      ref="pageDialogRef"
      pageName="users"
      :pageDialogConfig="dialogConfigRef"
      :defaultValue="defaultValue"
    >
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

import PageSearch from "@/components/page-search";
import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

import formConfigList from "./configs/form.config";
import tableConfigList from "./configs/tabel.config";
import dialogConfig from "./configs/dialog.config";

import { searchLinkage, operationLinkage } from "@/hooks/pageLinkage";
export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageTabel,
    PageDialog
  },
  setup() {
    const [pageTabelRef, resetBtnClick, searchBtnClick] = searchLinkage();
    const formItem = dialogConfig.formItem.find((item) => {
      return item.field === "password";
    });
    const editorCallback = () => {
      formItem!.isHidden = true;
    };
    const createCallback = () => {
      formItem!.isHidden = false;
    };
    const store = useStore();
    const dialogConfigRef = computed(() => {
      const departmentItem = dialogConfig.formItem.find((item) => {
        return item.field === "departmentId";
      });
      const departmentList = store.state.departmentList.map((item) => {
        return {
          title: item.name,
          value: item.id
        };
      });
      const roleItem = dialogConfig.formItem.find((item) => {
        return item.field === "roleId";
      });
      const roleList = store.state.roleList.map((item) => {
        return {
          title: item.name,
          value: item.id
        };
      });
      departmentItem!.options = departmentList;
      roleItem!.options = roleList;
      return dialogConfig;
    });
    const [
      pageDialogRef,
      defaultValue,
      handleEditorBtnClick,
      handleCreateBtnClick
    ] = operationLinkage(editorCallback, createCallback);

    return {
      pageTabelRef,
      formConfigList,
      tableConfigList,
      searchBtnClick,
      resetBtnClick,
      dialogConfigRef,
      handleEditorBtnClick,
      handleCreateBtnClick,
      pageDialogRef,
      defaultValue
    };
  }
});
</script>

<style scoped lang="less">
.main {
  .user-tabel {
    margin-top: 20px;
    border-radius: 10px;
  }
}
</style>
