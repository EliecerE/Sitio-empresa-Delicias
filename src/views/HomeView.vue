<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="hero"></div>
	<main class="main">
		<h1 class="titulo">
			Bienvenido a <span>Alimentos con Pasión</span>
			<img
				src="@/assets/delicioso.png"
				alt="Delicioso" />
		</h1>
		<RouterLink
			to="/productos"
			class="btnProductos"
			>Ir a productos</RouterLink
		>
	</main>
</template>

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

		img{
			width: 150px;
			height: 150px;
		}

				.main{
					background: #fff;
					max-width: 1000px;
					margin: 0 auto;
					box-shadow: -1px 4px 2px rgb(255, 216, 161);
					animation: slidein 2s ease-in-out  ;
				}

			@keyframes slidein {
			  from {
			  transform: translateX(100%);
			  }

			  to {
			  transform: translateX(0);
			  }
			}
				.titulo{
						font-size: 5rem;
						& span{
								color: rgb(215, 99, 16);
						}
				}

	.btnProductos{
		background: none;
		padding: 1rem 0;
		display: block;
		width: 100%;
		font-weight: bold;
		font-size: 2rem;
		color: indigo;
		animation: cambioColores 8s ease infinite;
		box-shadow: 0 0 3px rgb(52, 52, 52);
	}

	 @keyframes cambioColores {
	  0% {
	      background-color: rgb(233, 233, 233);
				color: red;
	  }
	  25% {
	       background-color: rgb(219, 219, 244);
	  }
	  50% {
	       background-color: rgb(213, 217, 213);
				 color: rgb(98, 149, 48);
	  }
	  75% {
	       background-color: rgb(233, 233, 233);
	  }
	  100% {
	       background-color: rgb(12, 10, 10);
				 color: crimson;
	     }
	   }
</style>

