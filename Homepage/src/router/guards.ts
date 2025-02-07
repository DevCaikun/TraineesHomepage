import instanceRouter from "./index.ts";

//全局前置路由守卫
instanceRouter.beforeEach((to, from) => {
    if (to || from !== undefined) {}
    // 返回 `true` 允许导航，或者 `false` 来阻止导航
    return true;  // 允许导航
});

//全局后置路由守卫
instanceRouter.afterEach((to, from) => {
    if (to || from !== undefined) {}
    return true;  // 后置守卫没有返回值，但可以用来执行清理等操作
});
