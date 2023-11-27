import 'sweetalert2/dist/sweetalert2.min.css';
import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import './assets/main.css';
import router from './router';
const app = createApp(App);

app.use(router);
app.use(VueSweetalert2);
app.mount('#app');

