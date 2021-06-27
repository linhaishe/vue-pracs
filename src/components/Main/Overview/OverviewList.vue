<template>
  <div id="overview-container">
    <div class="topLine-container">
      <div id="main" style="width: 50%; height: 400px"></div>
      <div class="topLine-right">
        <div class="reqAndApp">
          <div class="reqAndApp-left">
            <p class="title"><strong>APPROVAL REQUEST</strong></p>
            <h1>26</h1>
            <p style="color: lightgray">Request Wating To Approve</p>
            <el-button class="morebtn" type="info" size="small" round>
              <div class="moreBtnContainer">
                <p><strong>More</strong></p>
                <img src="../../../assets/Arrow.png" alt="" />
              </div>
            </el-button>
          </div>
          <div class="reqAndApp-right">
            <p class="title"><strong>UPCOMING APPOINTMENT</strong></p>
            <h1>14</h1>
            <el-button class="morebtn" type="info" size="small" round>
              <div class="moreBtnContainer">
                <p><strong>More</strong></p>
                <img src="../../../assets/Arrow.png" alt="" />
              </div>
            </el-button>
          </div>
        </div>
        <div class="clinicInfo">
          <p class="title"><strong>CLINIC INFORMATION</strong></p>
          <div class="adress">
            <i class="el-icon-s-home"></i>
            <span>7989 Marsh Ln Undefined Richardson,Winsconsin 35697</span>
          </div>
          <div class="tel">
            <i class="el-icon-phone"></i>
            <span>(205) 555-0100 | (262) 555-0131</span>
          </div>

          <el-button class="morebtn" type="info" size="small" round>
            <div class="moreBtnContainer">
              <p><strong>More</strong></p>
              <img src="../../../assets/Arrow.png" alt="" />
            </div>
          </el-button>
        </div>
      </div>
    </div>
    <div class="bottomLine">
      <div class="tabs">
        <p class="title"><strong>TODAY'S APPOINTMENT(4)</strong></p>
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <p>Consultation</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <p>Open Access</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <p>Scaling</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
        <el-button class="morebtn" type="info" size="small" round>
          <div class="moreBtnContainer">
            <p><strong>More</strong></p>
            <img src="../../../assets/Arrow.png" alt="" />
          </div>
        </el-button>
      </div>
      <div class="tabs">
        <p class="title"><strong>TOP TREATMENT</strong></p>
        <div class="treatmentList">
          <p>1. Consultation</p>
          <br />
          <p>2. Scaling</p>
          <br />
          <p>3. Root Canel</p>
          <br />
          <p>4. Bleaching</p>
          <br />
          <p>5. Wisdom Teeth Removal</p>
        </div>
        <el-button class="morebtn" type="info" size="small" round>
          <div class="moreBtnContainer">
            <p><strong>More</strong></p>
            <img src="../../../assets/Arrow.png" alt="" />
          </div>
        </el-button>
      </div>
      <div class="tabs">
        <p class="title"><strong>TOTAL PATIENTS THIS MONTH</strong></p>
        <h1>10</h1>
        <p class="title"><strong>TOTAL PATIENTS ALL TIME</strong></p>
        <h1>103</h1>
        <el-button class="morebtn" type="info" size="small" round>
          <div class="moreBtnContainer">
            <p><strong>More</strong></p>
            <img src="../../../assets/Arrow.png" alt="" />
          </div>
        </el-button>
      </div>
      <div class="tabs">
        <p class="title"><strong>JASPEL</strong></p>
        <h1>$23,000</h1>
        <p class="subs">This Month So Far</p>
        <hr />
        <h1>$35,000</h1>
        <p class="subs">Previous Month</p>
        <el-button class="morebtn" type="info" size="small" round>
          <div class="moreBtnContainer">
            <p><strong>More</strong></p>
            <img src="../../../assets/Arrow.png" alt="" />
          </div>
        </el-button>
      </div>
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
  margin-top: 10px;
  height: 310px;
  justify-content: space-between;
}
#main,
.topLine-right {
  border: 1px solid #e6e6e6;
}

.topLine-right {
  width: 49%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* height: 100%; */
}

.reqAndApp,
.clinicInfo {
  height: 50%;
}

.reqAndApp {
  display: flex;
}

.reqAndApp-left,
.reqAndApp-right {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;
}

.reqAndApp-left {
  border-right: 1px solid #e6e6e6;
}

.title {
  font-size: 12px;
}

.reqAndApp-left h1,
.reqAndApp-right h1,
.tabs h1 {
  color: darkgray;
  font-size: 45px;
}

.tabs {
  width: 23.33%;
  border: 1px solid #e6e6e6;
  height: 100%;
  padding: 20px;
}

.morebtn {
  color: black;
  background-color: white;
  width: 100px;
  height: 30px;
  padding: 0 10px;
}

.morebtn img {
  width: 30px;
  height: 30px;
}

.moreBtnContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.clinicInfo,
.tabs {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding: 20px;
}

.adress,
.tel {
  color: darkgray;
  font-size: 12px;
}

.treatmentList,
.subs {
  color: darkgray;
  font-size: 14px;
}

.adress span,
.tel span {
  padding: 0 10px;
}

.tabs >>> .el-card__body {
  padding: 5px;
}
</style>
