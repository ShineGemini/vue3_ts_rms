<template>
  <div class="page-pie-chart">
    <jl-echarts :options="option"></jl-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import JlEcharts from "@/common-ui/jl-echarts";

export default defineComponent({
  name: "PagePieChart",
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
        legend: {
          orient: "horizontal",
          left: "left"
        },
        series: [
          {
            name: "商品数据",
            type: "pie",
            radius: "50%",
            data: props.optionData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    });
    return { option };
  }
});
</script>

<style lang="less" scoped></style>
