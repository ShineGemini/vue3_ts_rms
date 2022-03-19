<template>
  <div class="overview">
    <jl-card title="关于">
      <span>
        <b>Vue3TsRMS</b> 是基于<b
          >Vue3、Vuex、VueRouter、VueCLI、Axios、ElementPlus
          、TypeScript、Echart5 </b
        >等后台系统解决方案。
      </span>
    </jl-card>
    <jl-card title="技术栈">
      <ul class="technology-stacks">
        <li v-for="(item, index) in technologyStacks" :key="index">
          {{ item.title }}:<a href="javascript:;">{{ item.desp }}</a>
        </li>
      </ul>
      <jl-descriptions :options="DependenciesOptions" />
      <jl-descriptions :options="DevDependenciesOptions" />
    </jl-card>
    <jl-card title="项目解构">
      <pre>{{ TreeOptions }}</pre>
    </jl-card>
    <jl-card title="项目规范">
      <jl-descriptions :options="filenameStandard" />
      <jl-descriptions :options="componentStandard" />
      <jl-descriptions :options="commitStandard" />
    </jl-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JlCard from "@/common-ui/jl-card";
import JlDescriptions from "@/common-ui/jl-descriptions";

import technologyStacks from "./config/technologyStacks";
import DependenciesOptions from "./config/dependencies";
import DevDependenciesOptions from "./config/devDependencies";
import TreeOptions from "./config/projectTree";
import {
  filenameStandard,
  componentStandard,
  commitStandard
} from "./config/projectStandard";
export default defineComponent({
  name: "overview",
  components: { JlCard, JlDescriptions },
  setup() {
    return {
      DependenciesOptions,
      DevDependenciesOptions,
      TreeOptions,
      technologyStacks,
      filenameStandard,
      componentStandard,
      commitStandard
    };
  }
});
</script>

<style scoped lang="less">
.overview {
  color: #57606a;
  .technology-stacks {
    margin-bottom: 30px;
    li {
      font-weight: 600;
      font-size: 16px;
      line-height: 30px;
      a {
        margin-left: 20px;
        font-weight: 500;
        text-decoration: none;
        color: #409eff;
      }
    }
  }
  pre {
    font-size: 18px;
    font-weight: 600;
    background: #dee1e6;
  }
}
</style>
