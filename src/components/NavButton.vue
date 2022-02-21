<template>
	<div :class="['nav-button', { 'active-route': active() }]" @click="navigate" :href="href">
		{{ routeName }}
	</div>
</template>

<script>
export default {
	props: {
		isActive: Boolean,
		routeName: String,
		href: String,
		navigate: Function,
	},
	methods: {
		active() {
			return this.$props.isActive || (window.location.pathname === '/' && this.$props.routeName === 'Home');
		},
	},
};
</script>

<style lang="scss" scoped>
$transition-curve: ease-out;

.nav-button {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	color: var(--primary-text-color);
	background-color: var(--primary-background-color);
	border-radius: 100px;
	border: 0;

	font-size: 16px;
	font-weight: 300;
	line-height: 20px;
	max-width: 480px;
	min-height: 40px;
	overflow: hidden;

	margin: 0 5px;
	padding: 0 20px;

	transition: background-color 250ms $transition-curve, transform 600ms $transition-curve;
}

.nav-button:hover:not(.active-route),
.nav-button:focus {
	background-color: var(--secondary-background-color-darker);
}

.active-route {
	transform: translateY(2px);
	background-color: var(--secondary-background-color);
}
</style>
