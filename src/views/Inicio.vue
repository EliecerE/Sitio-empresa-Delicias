<template>
	<main class="main">
		<marquee
			class="GeneratedMarquee"
			direction="left"
			scrollamount="9"
			behavior="alternate">
			<h1>Nuestros Productos</h1>
		</marquee>

		<div class="productosBox">
			<div
				class="boxProducto"
				v-for="(image, index) in imageArray"
				:key="index">
				<img
					:src="image"
					alt="Imagen" />
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		data (){
			return{
				imageArray:[
					'/productos/producto1.jpeg',
					'/productos/producto2.jpeg',
					'/productos/producto3.jpeg',
					'/productos/producto4.jpeg',
					'/productos/producto5.jpeg',
					'/productos/producto6.jpeg',
					'/productos/producto7.jpeg',
					'/productos/producto8.jpeg',
					'/productos/producto9.jpeg',
					'/productos/producto10.jpeg',
				]
			}
		}

	}
</script>

<style lang="scss" scoped>


			.GeneratedMarquee {
			font-family:fantasy;
			font-size:2em;
			line-height:1.3em;
			color:rgb(224, 178, 49);
			background-color:#5f5f4a;
			padding:1.5em;
			}

			.productosBox{
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				gap: 3rem 0;

			.boxProducto{
				width:calc(33% - 2.3rem);

				@media only screen
	   and (max-width : 768px) {
	   	width:calc(50% - 1rem);
	}
			}
		}
</style>
