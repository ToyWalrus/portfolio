<template>
	<div class="project-row">
		<div v-if="!projectFirst" class="row-spacer" />
		<div class="project">
			<slot />
		</div>
		<div v-if="projectFirst" class="row-spacer" />
	</div>
</template>

<script>
export default {
	name: "ProjectRow",
	props: {
		projectFirst: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style scoped>
.project-row {
	display: flex;
	flex-direction: row;
	column-gap: 16px;
	padding-bottom: 16px;
}

.project,
.row-spacer {
	flex: 1;
}
</style>
