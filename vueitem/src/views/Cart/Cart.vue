<template>
	<div class="cart">
		<Header title="购物车" />
		<h2>购物车组件</h2>
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
