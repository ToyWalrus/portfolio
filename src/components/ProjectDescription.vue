<template>
	<div class="project-description">
		<span class="project-name">{{ projectName }}</span>
		<div class="slideshow-container">
			<slideshow :images="imageAssets" :stagger="stagger" :duration="5000" :transition-duration="750" />
		</div>
		<div class="description-text">
			{{ projectDescription }}
		</div>
	</div>
</template>

<script>
import Slideshow from "@/components/Slideshow";

export default {
	name: "ProjectDescription",
	components: {
		Slideshow,
	},
	props: {
		projectName: String,
		projectDescription: String,
		stagger: Number,
		imageAssets: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>

<style scoped>
.project-description {
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	border: 1px solid cadetblue;
	padding: 8px;
}

.slideshow-container {
	display: flex;
	align-self: stretch;
	min-height: 200px;
	max-height: 400px;
}

.project-name {
	font-size: 2em;
	font-weight: 600;
	padding: 8px;
}

.description-text {
	max-height: 100px;
	overflow-y: scroll;
}
</style>
