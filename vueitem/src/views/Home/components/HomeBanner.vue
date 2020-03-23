<!-- 首页banner组件 -->
<template>
	<div class="home-banner" id="banner">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="homeBannerData in homeBannerDatas" :key="homeBannerData.id">
				<img :src="homeBannerData.imgsrc" alt />
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				homeBannerDatas: [{
					"id": 1,
					"imgsrc": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d1fb47f07c29a6da962edf16dda7a76.jpg?thumb=1&w=720&h=360"
				}, {
					"id": 2,
					"imgsrc": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af6a1aaf908b750bbeacd7e0d1945086.jpg?thumb=1&w=720&h=360"
				}, {
					"id": 3,
					"imgsrc": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88777c26c1017590a9f1f6df42189b5e.jpg?thumb=1&w=720&h=360"
				}]
			}
		}
	}
</script>

<style lang="less">
	.home-banner {
		margin-top: 1.4rem;
		height: 4.5rem;
		img {
			width: 100%;
			height: 4.5rem;
		}
	}
</style>
