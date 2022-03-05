import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
	{
		path: "/home",
		name: "Home",
		alias: "/",
		component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
	},
	{
		path: "/projects",
		name: "Projects",
		component: () => import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: "/",
	routes,
});

export default router;
