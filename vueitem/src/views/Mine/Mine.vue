<template>
	<div class="mine">
		<Header title="个人中心" />
		<h2>个人中心组件</h2>
		<Footer />
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Footer from "@/components/Footer.vue";
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>
