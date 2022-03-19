<template>
  <div class="jl-echarts">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, watchEffect } from "vue";

import { EChartsOption } from "echarts";
import echartInit from "../hooks/initECharts";

export default defineComponent({
  name: "JlEcharts",
  props: {
    options: {
      type: Object as PropType<EChartsOption>,
      default: () => ({})
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "360px"
    }
  },
  setup(props) {
    const echartRef = ref<HTMLDivElement>();
    onMounted(() => {
      const { setChartOption } = echartInit(echartRef.value!);
      watchEffect(() => {
        setChartOption(props.options);
      });
    });

    return { echartRef };
  }
});
</script>

<style lang="less" scoped></style>
