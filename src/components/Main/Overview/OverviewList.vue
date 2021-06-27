<template>
  <div id="overview-container">
    <div class="topLine-container">
      <div id="main" style="width: 50%; height: 400px"></div>
      <div class="topLine-right"></div>
    </div>
    <div class="bottomLine">
      <div class="tabs"></div>
      <div class="tabs"></div>
      <div class="tabs"></div>
      <div class="tabs"></div>
    </div>
  </div>
</template>
<script>
//import ECharts from "vue-echarts";

var echarts = require("echarts");
export default {
  data() {
    return {
      option: {
        title: {
          text: "Good Mroning,Dr Adam",
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true,
            },
          },
        },

        xAxis: {
          data: ["jan", "feb", "mar", "apr", "may", "jun"],
        },
        yAxis: {},
        series: [
          {
            name: "sales",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  methods: {
    set() {
      let myChart = echarts.init(document.getElementById("main"));
      myChart.clear(); //如果图表有修改需求建议加上此方法先清后画
      myChart.setOption(this.option);
    },
  },
  mounted() {
    this.set();
  },
};
</script>
<style scoped>
#overview-container {
  padding: 20px;
}

.topLine-container,
.bottomLine {
  display: flex;
}
.bottomLine {
  height: 330px;
  justify-content: space-between;
}
#main,
.topLine-right {
  border: 1px solid #e6e6e6;
}

.topLine-right {
  width: 50%;
}

.tabs {
  width: 23.33%;
  border: 1px solid #e6e6e6;
  height: 100%;
}
</style>
