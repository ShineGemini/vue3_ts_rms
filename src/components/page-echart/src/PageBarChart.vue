<template>
  <div class="page-bar-chart">
    <jl-echarts :options="options"></jl-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import * as echarts from "echarts";
import JlEcharts from "@/common-ui/jl-echarts";

export default defineComponent({
  name: "PageBarChart",
  props: {
    optionData: {
      type: Object,
      default: () => ({})
    }
  },
  components: { JlEcharts },
  setup(props) {
    const options = computed(() => ({
      tooltip: {
        trigger: "item"
      },
      xAxis: {
        data: props.optionData.keyList,
        axisLabel: {
          inside: true,
          color: "#fff"
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#999"
        }
      },
      dataZoom: [
        {
          type: "inside"
        }
      ],
      series: [
        {
          type: "bar",
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.5, color: "#188df0" },
              { offset: 1, color: "#188df0" }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#2378f7" },
                { offset: 0.7, color: "#2378f7" },
                { offset: 1, color: "#83bff6" }
              ])
            }
          },
          data: props.optionData.valueList
        }
      ]
    }));
    return { options };
  }
});
</script>

<style lang="less" scoped></style>
