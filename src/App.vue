<template>
	<div id="app">
		<div id="page-links">
			<router-link
				v-slot="{ href, navigate, isActive }"
				v-for="route in routes"
				:key="route.path"
				:to="route.path"
				custom
			>
				<nav-button :isActive="isActive" :navigate="navigate" :routeName="route.name" :href="href" />
			</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
import { routes } from '@/router';
import NavButton from '@/components/NavButton';

export default {
	name: 'App',
	components: {
		NavButton,
	},
	data: function () {
		return {
			routes,
		};
	},
};
</script>

<style scoped>
#page-links {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin: 10px 20px;
}
</style>
