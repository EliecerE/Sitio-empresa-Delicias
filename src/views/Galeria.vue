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

		<h2 class="tituloMusica">Musica</h2>
		<div class="musicaBox">
			<div class="musica">
				<div>
					<img
						src="/imagenesCover/cover1.jpg"
						alt="Portada del Álbum" />
				</div>

				<audio controls>
					<source
						src="/musica/JujutsuOP.mp3"
						type="audio/mp3" />
					Tu navegador no soporta el elemento de audio.
				</audio>
			</div>

			<div class="musica">
				<div>
					<img
						src="/imagenesCover/cover2.jpg"
						alt="Portada del Álbum" />
				</div>

				<audio controls>
					<source
						src="/musica/KimetsuOP.mp3"
						type="audio/mp3" />
					Tu navegador no soporta el elemento de audio.
				</audio>
			</div>

			<div class="musica">
				<div>
					<img
						src="/imagenesCover/cover3.jpg"
						alt="Portada del Álbum" />
				</div>

				<audio controls>
					<source
						src="/musica/Avicii - The Nights.mp3"
						type="audio/mp3" />
					Tu navegador no soporta el elemento de audio.
				</audio>
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


		.titulo, .tituloMusica {
			font-size: 5rem;
			text-align: center;
			border-bottom: 4px solid rgb(145, 101, 34);
			margin-bottom: 1rem;
			background-color: #d4c0e7;
		}

		.tituloMusica{
			margin-top: 5rem;
			border-bottom: 4px solid rgb(41, 34, 145);
			background-color: #c0e7d1;
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
	.musicaBox{
		background-color: rgb(0, 255, 136);
		display: flex;
		flex-flow: row wrap ;
		justify-content: space-between;
		gap: 0 1rem;

				img{
			max-width: 210px;
			height: 100%;
		}
	}

	.musica{
		background-color: rgb(154, 188, 19);
		padding: 1rem;
		border: 3px;
		display: flex;
		flex-flow: column wrap;
		justify-content: space-between;
		align-items: center;
	}
</style>
