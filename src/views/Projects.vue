<template>
	<div id="Projects">
		<project-row :project-first="true">
			<project-description
				image-asset="logo.png"
				project-name="My first project"
				:project-description="loremIpsum"
			/>
		</project-row>
		<project-row :project-first="false">
			<project-description
				image-asset="logo.png"
				project-name="My second project"
				:project-description="loremIpsum"
			/>
		</project-row>
	</div>
</template>

<script>
import ProjectDescription from "@/components/ProjectDescription";
import LoremIpsum from "@/util/LoremIpsum";
import ProjectRow from "@/components/ProjectRow";

export default {
	components: {
		ProjectRow,
		ProjectDescription,
	},
	data() {
		return {
			loremIpsum: LoremIpsum,
		};
	},
};
</script>

<style scoped>
#Projects {
	display: flex;
	flex-direction: column;
}
</style>
