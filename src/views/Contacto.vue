<template>
	<main class="main">
		<h1>Contacto</h1>
		<div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1700827712214!6m8!1m7!1sarBpTrTkuqA5S079bE9V1w!2m2!1d9.35003898292254!2d-79.81095551189324!3f86.07214287265795!4f2.1990888826917967!5f0.7820865974627469"
				width="600"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>

		<mi-footer></mi-footer>
	</main>
</template>

<script>
		import footer from '../components/Footer.vue';

	export default {
		components: {
			 // Registra el componente MiComponente para su uso en este componente
			 'mi-footer': footer
		 }
	}
</script>

<style lang="scss" scoped></style>
