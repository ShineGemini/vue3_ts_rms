<template>
  <div class="page-rose-chart">
    <jl-echarts :options="option"></jl-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import JlEcharts from "@/common-ui/jl-echarts";

export default defineComponent({
  name: "PageRoseChart",
  props: {
    optionData: {
      type: Object,
      default: () => ({})
    }
  },
  components: { JlEcharts },
  setup(props) {
    var option = computed(() => {
      return {
        tooltip: {
          trigger: "item"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [15, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },
            data: props.optionData
          }
        ]
      };
    });
    return { option };
  }
});
</script>

<style lang="less" scoped></style>
