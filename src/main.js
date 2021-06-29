import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementUI from "element-ui";
//import ECharts from "vue-echarts";
import "element-ui/lib/theme-chalk/index.css";

// 在 webpack 环境下指向 components/ECharts.vue

// 手动引入 ECharts 各模块来减小打包体积
//import "echarts/lib/chart/bar";
//import "echarts/lib/component/tooltip";

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
//import "echarts-gl";

// 注册组件后即可使用

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  //ECharts,
  render: (h) => h(App),
}).$mount("#app");
