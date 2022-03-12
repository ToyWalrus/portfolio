<template>
	<div class="project-row" :style="rowStyle">
		<div :class="projectTitleClass">
			<h1>{{ projectTitle }}</h1>
		</div>
		<div class="project">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectRow",
	props: {
		projectTitle: {
			type: String,
			required: true,
		},
		projectTitleFirst: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			rowStyle: { flexDirection: this.$props.projectTitleFirst ? "row" : "row-reverse" },
		};
	},
	computed: {
		projectTitleClass() {
			return "project-title " + `project-title-${this.$props.projectTitleFirst ? "right" : "left"}-aligned`;
		},
	},
};
</script>

<style scoped>
.project-row {
	display: flex;
	column-gap: 16px;
	padding-bottom: 16px;
}

.project,
.project-title {
	flex: 1;
}

.project-title-right-aligned {
	text-align: right;
}
.project-title-left-aligned {
	text-align: left;
}
</style>
