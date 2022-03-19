<template>
  <div class="chat">
    <div class="header">
      <el-input style="width: 300px" v-model="title"></el-input>
      <el-button @click="publishArticlesClick">发布文章</el-button>
    </div>
    <div class="content">
      <jl-editor ref="editRef"></jl-editor>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import JlEditor from "@/common-ui/jl-editor";
import { ElMessage } from "element-plus";

import { publishArticlesData } from "@/service/main/story";
export default defineComponent({
  name: "chat",
  components: { JlEditor },
  setup() {
    const editRef = ref<InstanceType<typeof JlEditor>>();
    const title = ref<string>();
    const publishArticlesClick = () => {
      publishArticlesData({
        title: title.value!,
        cotent: editRef.value!.content.html
      })
        .then((_) => {
          ElMessage.success({
            message: "文章发布成功",
            type: "success"
          });
        })
        .catch((_) => {
          ElMessage.error("文章发布失败");
        });
    };
    return { editRef, publishArticlesClick, title };
  }
});
</script>

<style lang="less" scoped>
.chat {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    text-align: right;
    height: 40px;
  }
  .content {
    flex: 1;
  }
}
</style>
