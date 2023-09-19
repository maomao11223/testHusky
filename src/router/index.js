import { createRouter, createWebHistory } from "vue-router";
import routerDatas from "./routerData.json"
import routerMap from './routerMap'


let routerData = routerDatas.menu
let menu = []
//https://www.zhihu.com/tardis/zm/art/405621928?source_id=1003
let formatRoute = function (routerData, menu) {
    try {
        for (let i = 0; i < routerData.length; i++) {
            let temp = {
                path: routerData[i].path,
                name: routerData[i].name,
                component: routerMap[routerData[i].name],
                meta: routerData[i].meta,
                children: [],
            }
            menu.push(temp)
            if (routerData[i].children && routerData[i].children.length > 0) {
                console.log("🚀 ~ file: index.js:20 ~ formatRoute ~ routerData[i].children:", routerData[i].children)
                formatRoute(routerData[i].children, temp.children)
            }
        }
    } catch (error) {
        console.log(error)
    }
}
formatRoute(routerData, menu)



const routes = []
console.log("🚀 ~ file: index.js:32 ~ routes:", routes)



for (let i = 0; i < menu.length; i++) {
    routes.push(menu[i])
}




const router = createRouter({
    history: createWebHistory(),
    // routes: [
    //     {
    //         path: "",
    //         component: () => import("@/layout/default.vue"),
    //         children: [
    //             {
    //                 path: "",
    //                 name: "Home",
    //                 component: () => import("@/views/Home.vue"),
    //                 meta: { title: "首頁" }
    //             },
    //             {
    //                 path: "/Page2",
    //                 name: "Page2",
    //                 component: () => import("@/views/Page2.vue"),
    //                 meta: { title: "Page2" }
    //             },
    //         ]
    //     },
    // ]
    routes: routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

export default router;
