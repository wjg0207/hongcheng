import Vue from "vue";
//配置路由
import VueRouter from "vue-router";
Vue.use(VueRouter)
//创建组件
import Home from "../views/Home/Home.vue";
import Category from "../views/Category/Category.vue";
import Cart from "../views/Cart/Cart.vue";
import Mine from "../views/Mine/Mine.vue";
let routes = [{
	path: "/",
	redirect: "/home"
}, {
	path: "/home",
	name: Home,
	component: Home
}, {
	path: "/category/:id",
	name: Category,
	component: Category
}, {
	path: "/cart",
	name: Cart,
	component: Cart
}, {
	path: "/mine",
	name: Mine,
	component: Mine
}]
//实例化路由
let router = new VueRouter({
	mode: 'history',
	routes
})
export default router
