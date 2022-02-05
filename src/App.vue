<template>
	<div id="app">
		<div id="app-bar">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data: function () {
		return {
			currentPage: 'Home',
			pages: ['Home', 'Projects', 'About'],
		};
	},
};
</script>
