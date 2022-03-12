<template>
	<div class="home">
<!--		<span class="tiny-heading">Welcome</span>-->
<!--		<span class="sub-heading">to my site.</span>-->
		<div>
			<span>I'm a </span>
			<vue-typed-js :strings="strings" :backSpeed="50" :loop="true" :startDelay="1000" :cursorChar="'_'">
				<span class="sub-heading typing"></span>
			</vue-typed-js>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			strings: ["Programmer", "Musician", "Human"],
		};
	},
};
</script>

<style scoped>
.sub-heading {
	padding-left: 16px;
}

.mah-name {
	font-size: 3em;
	letter-spacing: 0.1em;
	text-align: center;
}

.name-area {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

<style>
.sub-heading,
.typed-cursor {
	font-size: 2em;
}

.typing {
	font-style: italic;
}
</style>
