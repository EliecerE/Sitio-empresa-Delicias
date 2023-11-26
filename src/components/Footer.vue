<!-- MiComponente.vue -->

<template>
	<div class="footer">
		<div class="autores">
			<h1>Autores:</h1>
			<h2>Eliecer Escudero,</h2>
			<h2>Katyusca Ortega</h2>
		</div>
		<div class="fechaCreacion">Fecha de creación: Miercoles, 22 de noviembre</div>
		&copy; Todos los derechos reservados 2023
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	.footer{
		margin-top: 2rem;
	   background-color: #1a1a1a;
	    padding: 2rem 1rem;
	   color: #ffffff;
	    border-radius: 4px;
	     display: flex;
	      gap: 3rem 0;
	     flex-flow: row wrap;
	      justify-content: space-between;

	      .autores{
	       display: flex;
	       flex-flow: row wrap;
	        width: 100%;
	        justify-content: space-around;

	        h1{
	         font-size: 1.5rem;
	        }

	         h2{
	           font-size: 1.3rem;
	           color: rgb(5, 124, 143);
	         }
	      }
	 }
</style>
