<template>
	<div id="app">
		<nav-bar />
		<router-view class="main-content" />
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
	name: "App",
	components: {
		NavBar,
	},
};
</script>

<style scoped>
#app {
	min-height: 100vh;
	overflow: hidden;
}

.main-content {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 16px;
}
</style>
