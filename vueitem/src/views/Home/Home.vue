<template>
	<div class="home">
		<Header title="蓝果小镇商城" />
		<HomeBanner />
		<HomeList />
		<Footer />
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Footer from "@/components/Footer.vue";
	import HomeBanner from "./components/HomeBanner.vue";
	import HomeList from "./components/HomeList.vue";
	export default {
		components: {
			Header,
			HomeBanner,
			HomeList,
			Footer
		}
	}
</script>

<style lang="less">
	.list {
		li {
			color: red;
		}
	}
</style>
