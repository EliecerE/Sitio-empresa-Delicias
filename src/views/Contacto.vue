<template>
	<main class="main">
		<marquee
			class="GeneratedMarquee"
			direction="left"
			scrollamount="5"
			behavior="alternate">
			<h1>Contactanos</h1>
		</marquee>

		<div class="boxUsuarios">
			<div class="usuario usuario1">
				<div class="imagenUsuario">
					<img
						src="/UbicacionEmpres/persona1.jpg"
						alt="imagen Usuario" />
				</div>
				<div class="usuarioText">
					<h3>Eliecer Escudero - <span> Jefe principal</span></h3>
					<h3>Email <a href="mailto:elicerescudero687@gmail.com">elicerescudero687@gmail.com</a></h3>
					<h3>
						Telefono y Whatsapp: <a href="tel:+50769297800">69297800</a> <font-awesome-icon :icon="['fad', 'phone']" />
					</h3>

					<font-awesome-icon :icon="['fad', 'phone']" />
				</div>
			</div>

			<div class="usuario">
				<div class="imagenUsuario">
					<img
						src="/UbicacionEmpres/persona1.jpg"
						alt="imagen Usuario" />
				</div>
				<h3>Eliecer Escudero - Jefe principal</h3>
				<h3>Email <a href="mailto:elicerescudero687@gmail.com">elicerescudero687@gmail.com</a></h3>
				<h3>Whatsapp: <a href="tel:+50769297800">69297800</a></h3>
			</div>
		</div>

		<h2 class="titulo">En dónde estamos?</h2>
		<div class="ubicacionEmpresa">
			<div>
				<img
					src="/UbicacionEmpres/Ubicacion.png"
					alt="Ubicacion empresa" />
			</div>

			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1700827712214!6m8!1m7!1sarBpTrTkuqA5S079bE9V1w!2m2!1d9.35003898292254!2d-79.81095551189324!3f86.07214287265795!4f2.1990888826917967!5f0.7820865974627469"
					width="600"
					height="500"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
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

<style lang="scss" scoped>

			h3{
				font-family:system-ui, -apple-system;
				font-size: 1.3rem;
			}
					.GeneratedMarquee{
						font-size: 3rem;
						background-color: firebrick;
						color: #fff;
					}


				.boxUsuarios{
					height: 70vh;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 0 6rem;
				}

	.usuario{
		background-color: rgb(233, 214, 233);
		padding: 2rem;
		border-radius: 3px;
		box-shadow: 0 0 4px rgb(67, 67, 183);
		display: flex;
		flex-flow: column wrap;
		justify-content: space-between;
		align-items: center;

		span{
			font-style: italic;
			font-size: 1.2rem;
			color: darkorange;
		}
	}

	.usuario1{
				background-color: rgba(236, 180, 198, 0.384);
	}


				.imagenUsuario{
				width: 200px;
				height: 200px;
				img{
					border-radius: 50%;
				}
				}

				.usuarioText{
					margin-top: 2rem;
					text-align: justify;
				}

						.titulo{
							padding: 0 2rem;
							font-size: 4rem;
							border-bottom: 3px solid gold;
							margin-bottom: 2rem;
							background-color: rgb(237, 206, 227);
							color: rgb(40, 12, 125);
						}

						.ubicacionEmpresa{
							display: flex;
							flex-flow: row wrap;
						}
</style>
