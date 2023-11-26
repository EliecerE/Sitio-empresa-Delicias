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

		<div class="fondoBonito">
			<marquee
				class="GeneratedMarquee GeneratedMarquee2"
				direction="right"
				scrollamount="5"
				behavior="alternate">
				<h2>Ofertas</h2>
			</marquee>

			<swiper
				:effect="'coverflow'"
				:grabCursor="true"
				:centeredSlides="true"
				:autoplay="{
      delay: 2100,
      disableOnInteraction: false,
    }"
				:slidesPerView="'auto'"
				:coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
				:pagination="true"
				:modules="modules"
				class="mySwiper">
				<swiper-slide
					v-for="(image, index) in imageOfertas"
					:key="index">
					<img
						:src="image"
						alt="Imagen" />
				</swiper-slide>
			</swiper>
		</div>

		<mi-footer></mi-footer>
	</main>
</template>

<script>
						import 'swiper/css';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import footer from '../components/Footer.vue';

																													  import 'swiper/css/effect-coverflow';
	import 'swiper/css/pagination';
	import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
					export default {
					  components: {
					   // Registra el componente MiComponente para su uso en este componente
					   'mi-footer': footer,
						     Swiper,
				    SwiperSlide,
					 },  setup() {
				    return {
				      modules: [EffectCoverflow, Pagination, Autoplay],
				    };
				  },
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
					],
							imageOfertas:[
						'/productos/producto11.jpeg',
						'/productos/producto12.jpeg',
						'/productos/producto13.jpeg',
						'/productos/producto14.jpeg',
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
								margin-bottom: 2rem;

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


				.fondoBonito{
					background-color: rgb(175, 176, 173);
					padding-bottom: 1rem;
				}


	.GeneratedMarquee2{
		background-color: rgb(184, 197, 162);
		color: rgb(1, 22, 23);
		font-size: 4rem;
		padding: 1.5rem 0;
	}

				.mySwiper{
					width: 650px;
					height: 650px;
					margin: 0 auto;
				}
</style>
