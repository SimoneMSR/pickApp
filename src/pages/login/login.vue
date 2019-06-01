<template>
	<f7-page name="login" >
		<!-- Scrollable page content -->
		<div @click="onClick">
			{{message}}
		</div>
	</f7-page>
</template>
<script>
	import page from "./login.js"
	import "./login.scss"
	// script must return component object
	export default page
</script>