import {createWebHistory,createRouter} from "vue-router";

const instanceRouter = createRouter({
    history:createWebHistory(),
    routes: [
        {
            name: "index",
            path: "/",
            component: () => import("../views/Index.vue"),
            meta: {
                title: '首页',
            },
        },
    ]
});

export default instanceRouter;