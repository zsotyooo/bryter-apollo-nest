import urql, { defaultExchanges } from "@urql/vue";
import { devtoolsExchange } from "@urql/devtools";
import { createApp } from "vue";
import { createPinia } from "pinia";

// General Font
import "vfonts/Lato.css";
// Monospace Font
import "vfonts/FiraCode.css";

import "./assets/style.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(urql, {
  url: "http://localhost:3000/graphql",
  exchanges: [devtoolsExchange, ...defaultExchanges],
});
app.use(createPinia());
app.use(router);

app.mount("#app");
