<template>
	<div class="body">
		<router-view></router-view>
	</div>
</template>

<script>
import Hello from './components/Hello'

export default {
	components: {
		Hello
	}
}
</script>

<style>
html {
	height: 100%;
}

body {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	overflow: hidden;
}


#app {
	width: 100%;
	height: 100%;
	font-family: Source Sans Pro, Helvetica, sans-serif;
}

.body {
	position: relative;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
}
</style>
