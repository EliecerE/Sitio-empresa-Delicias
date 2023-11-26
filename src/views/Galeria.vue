<template>
	<main class="main">
		<h1 class="titulo">Galeria</h1>

		<div class="galeriaBox">
			<div
				class="boxGaleria"
				v-for="(image, index) in imageArray"
				:key="index">
				<img
					:src="image"
					alt="Imagen" />
			</div>
		</div>

		<mi-footer></mi-footer>
	</main>
</template>

<script>
	import Footer from '../components/Footer.vue';

	export default{
		  components: {
	    // Registra el componente MiComponente para su uso en este componente
	    'mi-footer': Footer
	  },

		data (){
			return{
				imageArray:[
					'/galeria/galeria1.jpg',
					'/galeria/galeria2.jpg',
					'/galeria/galeria3.jpg',
					'/galeria/galeria4.jpg',
					'/galeria/galeria5.jpg',
					'/galeria/galeria6.jpg',
				]
			}
		},
	}
</script>

<style lang="scss" scoped>
		body{
		  background-color: #663399;
		}
		.titulo{
			font-size: 4.5rem;
			text-align: center;
			border-bottom: 4px solid rgb(233, 179, 98);
			margin-bottom: 1rem;
		}

	.galeriaBox{
		 display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	  gap: 16px;
	  padding: 16px;

		.boxGaleria{
			 overflow: hidden;
	  border-radius: 8px;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

		img{
			  width: 100%;
	  height: auto;
	  display: block;
	  border-radius: 8px;
		}
		}
	}
</style>
