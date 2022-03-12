<template>
	<div class="image-transition">
		<img
			v-if="image1"
			:class="image1Class"
			:style="imageStyle"
			:src="require('@/assets/' + image1)"
			alt="image 1"
			ref="img1Ref"
		/>
		<img
			v-if="image2"
			:class="image2Class"
			:style="imageStyle"
			:src="require('@/assets/' + image2)"
			alt="image 2"
			ref="img2Ref"
		/>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
			validator: prop => prop.every(p => typeof p === "string"),
		},
		duration: {
			type: Number,
			default: 3000,
		},
		transitionDuration: {
			type: Number,
			default: 500,
		},
		stagger: {
			type: Number,
			default: 0,
		},
	},
	created() {
		this.setImageDimensions.bind(this);
	},
	mounted() {
		window.addEventListener("resize", this.setImageDimensions);
		this.setImageDimensions();

		if (this.$props.stagger > 0) {
			setTimeout(() => this.swapImages(), this.$props.stagger);
		} else {
			this.swapImages();
		}
	},
	destroyed() {
		window.removeEventListener("resize", this.setImageDimensions);
	},
	beforeUpdate() {
		this.setImageDimensions();
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
	computed: {
		image1Class() {
			return "img-1" + (this.image1Visible ? " visible" : "");
		},
		image2Class() {
			return "img-2" + (this.image1Visible ? "" : " visible");
		},
	},
	methods: {
		setImageDimensions() {
			if (this.$el && typeof this.$el.getBoundingClientRect === "function") {
				const { img1Ref, img2Ref } = this.$refs;
				const rect = this.$el?.getBoundingClientRect();
				const width = rect.width + "px";
				const height = rect.height + "px";

				if (img1Ref) {
					img1Ref.style.width = width;
					img1Ref.style.height = height;
				}
				if (img2Ref) {
					img2Ref.style.width = width;
					img2Ref.style.height = height;
				}
			}
		},
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
	opacity: 0;
	position: absolute;
	object-fit: contain;
}

img.visible {
	opacity: 1;
}
</style>
