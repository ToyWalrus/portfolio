<template>
	<div id="Projects">
		<project-row
			v-for="(proj, i) in projects"
			:project-title="proj.title"
			:project-title-first="i % 2 === 0"
			:key="proj.title"
		>
			<project-description :image-assets="proj.images" :project-description="proj.description" />
		</project-row>
	</div>
</template>

<script>
import ProjectDescription from "@/components/ProjectDescription";
import ProjectRow from "@/components/ProjectRow";
import loremIpsum from "@/util/LoremIpsum";

export default {
	components: {
		ProjectRow,
		ProjectDescription,
	},
	data() {
		return {
			projects: [
				{
					title: "Procedural Terrain Generator",
					description: loremIpsum,
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
