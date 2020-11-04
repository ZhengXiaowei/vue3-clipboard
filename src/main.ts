import { createApp } from "vue";
import App from "./App.vue";
import VueClipboard3 from "./plugin/vue-clipboard";

const app = createApp(App);

app.use(VueClipboard3).mount("#app");
