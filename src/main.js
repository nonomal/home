import { createApp } from "vue";
// import Antd from "ant-design-vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "../src/router/index.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VxeUITable from "vxe-table";
import "vxe-table/lib/style.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(VxeUITable);
app.use(router).mount("#app");
