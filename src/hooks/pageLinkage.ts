import { ref } from "vue";
import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

type callback = (data?: any) => void;

export function searchLinkage() {
  const pageTabelRef = ref<InstanceType<typeof PageTabel>>();
  const resetBtnClick = () => {
    pageTabelRef.value?.getDataList();
  };
  const searchBtnClick = (queryInfo: any) => {
    pageTabelRef.value?.getDataList(queryInfo);
  };
  return [pageTabelRef, resetBtnClick, searchBtnClick];
}

export function operationLinkage(
  editCallback?: callback,
  createCallBack?: callback
) {
  const pageDialogRef = ref<InstanceType<typeof PageDialog>>();
  const defaultValue = ref({});
  const handleCreateBtnClick = () => {
    defaultValue.value = {};
    if (pageDialogRef.value) {
      pageDialogRef.value.centerDialogVisible = true;
    }
    createCallBack && createCallBack();
  };

  const handleEditorBtnClick = (payload: any) => {
    defaultValue.value = payload;

    if (pageDialogRef.value) {
      pageDialogRef.value.centerDialogVisible = true;
    }

    editCallback && editCallback({ ...payload });
  };
  return [
    pageDialogRef,
    defaultValue,
    handleEditorBtnClick,
    handleCreateBtnClick
  ];
}
