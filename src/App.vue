<template>
	<v-app id="app">
		<v-app-bar dark app color="primary" elevation="0" id="app-bar">
			<v-tabs right v-model="currentPage">
				<v-tab v-for="pageName in pages" :key="pageName" :href="`#${pageName}`">
					{{ pageName }}
				</v-tab>
			</v-tabs>
		</v-app-bar>

		<v-main>
			<v-tabs-items v-model="currentPage">
				<v-tab-item v-for="pageName in pages" :value="pageName" :key="pageName">
					{{ pageName }}
				</v-tab-item>
			</v-tabs-items>
		</v-main>
	</v-app>
	<!-- <div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div> -->
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

<style lang="scss">
@import '@/scss/variables.scss';

#app {
	color: $primary-text-color;
	background-color: $primary-background-color;
	font-family: 'Poppins', sans-serif;
}

#app-bar {
	background-color: $primary-background-color;
}
</style>
