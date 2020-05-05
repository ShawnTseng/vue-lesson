
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
                    // alias: 'story',
                    alias: ['story', 'abouthome'],
                    component: About,
                    children: [
                        { path: "", name: 'home', component: AboutHome },
                        { path: "us", name: 'us', component: AboutUs },
                        { path: "you", component: AboutYou },
                        {
                            path: 'both', components: {
                                default: AboutUs,
                                second: AboutYou
                            }
                        }
                    ]
                },
                // path to regexp
                { path: "products/:id?", name: 'prod', component: Products },
                { path: 'aboutus', redirect: '/about/us' },
                // { path: '*', redirect: '/about/us' }
                { path: '*', redirect: { name: 'home' } }
            ]
        }
    ]
})