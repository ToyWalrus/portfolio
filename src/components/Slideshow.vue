<template>
	<div class="image-transition">
		<img :class="image1Class" :src="require('@/assets/' + image1)" alt="image 1" :style="imageStyle" />
		<img :class="image2Class" :src="require('@/assets/' + image2)" alt="image 2" :style="imageStyle" />
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: [String],
			required: true,
		},
		duration: {
			type: Number,
			default: 3000,
		},
		transitionDuration: {
			type: Number,
			default: 500,
		},
	},
	computed: {
		image1Class() {
			return "img-1" + (this.image1Visible ? " visible" : "");
		},
		image2Class() {
			return "img-2" + (this.image1Visible ? "" : " visible");
		},
	},
	data() {
		const images = this.$props.images;
		let image1 = "";
		let image2 = "";
		let imageIndex = 0;

		if (images.length >= 1) {
			image1 = images[imageIndex++];
			if (images.length >= 2) {
				image2 = images[imageIndex++];
			}
		}

		return {
			image1,
			image2,
			imageIndex,
			image1Visible: false,
			imageStyle: { transition: `opacity ${this.$props.transitionDuration}ms ease-in-out` },
			changeImageTimeout: undefined,
			swapImageTimeout: undefined,
		};
	},
	mounted() {
		this.swapImages();
	},
	methods: {
		swapImages() {
			this.image1Visible = !this.image1Visible;
			this.changeImages();
			this.swapImageTimeout = setTimeout(() => {
				this.swapImages();
			}, this.$props.duration);
		},
		changeImages() {
			const images = this.$props.images;

			let changeImage;
			const idx = (this.imageIndex = (this.imageIndex + 1) % images.length);

			if (this.image1Visible) {
				changeImage = () => {
					this.image2 = images[idx];
				};
			} else {
				changeImage = () => {
					this.image1 = images[idx];
				};
			}

			this.changeImageTimeout = setTimeout(changeImage, this.$props.transitionDuration);
		},
	},
	beforeDestroy() {
		if (this.changeImageTimeout) {
			clearTimeout(this.changeImageTimeout);
		}
		if (this.swapImageTimeout) {
			clearTimeout(this.swapImageTimeout);
		}
	},
};
</script>

<style scoped>
.image-transition {
	flex: 1;
	position: relative;
}

.img-1,
.img-2 {
	position: absolute;
	/* left: 0;
	top: 0; */
	opacity: 0;

	/* width: 100%; */
	/* height: 100%; */
	/* max-height: 100%; */
	object-fit: contain;
}

img.visible {
	opacity: 1;
}
</style>
