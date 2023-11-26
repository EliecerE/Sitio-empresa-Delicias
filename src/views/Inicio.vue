<template>
	<main class="main">
		<marquee
			class="GeneratedMarquee"
			direction="left"
			scrollamount="5"
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

				<button @click="showAlert">Comprar</button>
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
		},

		methods: {
	   showAlert() {
	     // Use sweetalert2
	     this.$swal(
				{
	 position: "top-end",
	 icon: "success",
	 title: "Compra realizada",
	 showConfirmButton: true,
	 timer: 2500
					}
			 );
	   },
	}}
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

							button{
			border: 2px solid gainsboro;
			font-weight: bold;
			display: block;
			width: 100%;
			cursor: pointer;
			background-color: rgb(5, 234, 211);
			font-size: 1.2rem;
			padding: .8rem 0;
			border-radius: 3px;
			}
							button:hover{
	background-color: rgba(0, 255, 229, 0.55);
			}
					}
			}
</style>
