<template>
	<div class="project-description">
		<span class="project-name">{{ projectName }}</span>
		<img class="project-image" :src="require('@/assets/' + imageAsset)" :alt="imageAlt" />
		<div class="description-text">
			{{ projectDescription }}
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectDescription",
	props: {
		projectName: String,
		projectDescription: String,
		imageAsset: String,
		imageAlt: [String, undefined],
	},
};
</script>

<style scoped>
.project-description {
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	border: 1px solid cadetblue;
	/*background-color: ;*/
	padding: 8px;
}

.project-image {
	align-self: center;

	min-height: 200px;
	max-height: 300px;

	min-width: 200px;
	max-width: 300px;
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
