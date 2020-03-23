<template>
	<div class="header">
		<div class="header-title">{{title}}</div>
	</div>
</template>

<script>
	export default {
		props:["title"]
	}
</script>

<style lang="less">
	.header {
		width: 100%;
		height: 1.4rem;
		background: #186EC5;
		position: fixed;
		top: 0;
		z-index: 9999;
		text-align: center;
		color: #fff;
		font-size: .44rem;
		line-height: 1.4rem;
	}
</style>
