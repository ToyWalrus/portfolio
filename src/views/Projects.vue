<template>
	<div id="Projects">
		<project-row :project-first="true">
			<project-description
				project-name="My first project"
				:project-description="loremIpsum"
				:image-assets="projects[0].images"
			/>
		</project-row>
		<project-row :project-first="false">
			<project-description
				:image-assets="['logo.png']"
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
			projects: [
				{
					images: [
						"terrain-gen/TerrainGen_1.png",
						"terrain-gen/TerrainGen_2.png",
						"terrain-gen/TerrainGen_3.png",
						"terrain-gen/TerrainGen_4.png",
					],
				},
			],
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
