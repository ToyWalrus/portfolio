<template>
	<div id="nav-bar">
		<h2 class="mah-name">Trevor Howell</h2>
		<div class="links">
			<router-link
				v-slot="{ navigate, isActive }"
				v-for="route in routes"
				:key="route.path"
				:to="route.path"
				custom
			>
				<nav-button :isActive="isActive" :navigate="navigate" :routeName="route.name" />
			</router-link>
		</div>
	</div>
</template>

<script>
import NavButton from "@/components/NavButton";
import { routes } from "@/router";

export default {
	name: "NavBar",
	components: {
		NavButton,
	},
	data() {
		return {
			routes,
		};
	},
};
</script>

<style scoped>
#nav-bar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.mah-name {
	margin: 0 16px;
	font-weight: 300;
	letter-spacing: 0.1em;
	text-align: left;
}

.links {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-start;
	margin: 10px 20px;
}
</style>
