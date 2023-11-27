<template>
	<div class="hero"></div>
	<main class="main">
		<div class="boxMain">
			<h1 class="titulo">Quienes somos</h1>
			<p>
				ALIMENTOS CON PASION, el rincón más dulce y colorido de tus deseos golosos y aperitivos de tu día a día. En ALIMENTOS
				CON PASION nos enorgullece ofrecer una amplia gama de golosinas (Galletas, Caramelos, Snacks, Cafés, Tés, Pastas,
				Aceites, Margarinas y algunas marcas distribuidas) de la más alta calidad, diseñadas para deleitar tus sentidos y
				alegrar tu día.
			</p>
		</div>

		<div class="imgQuienesomos">
			<img
				src="@/assets/logo_empresa.jpeg"
				alt="" />
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

<style scoped>
		.hero{
			position: absolute;
			right: 0;
			left: 0;
			bottom: 0;
			top: 0;
			z-index: -1;
			background: radial-gradient(circle, rgba(36, 33, 34, 0.937) 0%, rgba(1, 1, 1, 0.67) 100%),url('@/assets/fondoBodyDulces.jpg');
		}

		.main{
			padding: 1rem;
			display: flex;
			justify-content: space-between;
			flex-flow: row wrap;
		}

	.boxMain{
	width: 50%;
	& p{
		text-align: justify;
	}
	}

		.titulo{
			font-size: 4rem;
			color: rgb(215, 99, 16);
			background-color: rgba(0, 255, 255, 0.706);
			text-align: center;
			border: 4px;
		}

		.imgQuienesomos{
			widows: 40%;
			box-shadow: 0 0 4px grey;
		}
</style>

