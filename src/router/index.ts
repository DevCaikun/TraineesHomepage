import {createWebHistory,createRouter} from "vue-router";

const instanceRouter = createRouter({
    history:createWebHistory(),
    routes: [
        {
            name: "index",
            path: "/",
            component: () => import("../views/Index.vue"),
            redirect: "/home",
            meta: {
                title: '首页',
            },
            children: [
                {
                    name: "home",
                    path: "home",
                    component: () => import("../views/Home.vue"),
                    meta: {
                        title: '主页',
                    }
                },
            ],
        },
    ]
});

export default instanceRouter;