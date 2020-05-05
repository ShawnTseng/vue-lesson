
import Vue from 'vue'
import VueRouter from "vue-router";

import App from './App.vue';
import Products from "./components/Products.vue";
import About from "./components/About.vue";
import AboutUs from "./components/AboutUs.vue";
import AboutYou from "./components/AboutYou.vue";
import AboutHome from "./components/AboutHome.vue";


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: "about",
                    component: About,
                    children: [
                        { path: "", component: AboutHome },
                        { path: "us", component: AboutUs },
                        { path: "you", component: AboutYou }
                    ]
                },
                // path to regexp
                { path: "products/:id?", component: Products }
            ]
        }
    ]
})