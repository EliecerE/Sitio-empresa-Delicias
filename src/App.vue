<script setup>
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header class="header">
		<div style="width: 120px; height: 120px;">
			<img
				alt="Vue logo"
				class="logo"
				src="@/assets/logo_empresa.jpeg" />
		</div>
		<div class="boxNavbar">
			<nav class="navbar">
				<RouterLink
					to="/"
					class="navbar__link"
					>Home</RouterLink
				>
				<RouterLink
					to="/inicio"
					class="navbar__link"
					>Inicio</RouterLink
				>
				<RouterLink
					to="/galeria"
					class="navbar__link"
					>Galeria</RouterLink
				>
				<RouterLink
					to="/contacto"
					class="navbar__link"
					>Contacto</RouterLink
				>
				<RouterLink
					to="/about"
					class="navbar__link"
					>Quienes somos</RouterLink
				>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style scoped>
	.header{
		padding: .5rem;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		min-height: 10vh;
		background-color: burlywood;
		margin-bottom: 3rem;
		border-bottom: 2px solid gray;
	}

	.boxNavbar{
		padding: .5rem;
		width: 70%;
		font-size: 1.5rem;
	}


	.navbar{
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: .5rem 0;
	}

	.navbar__link{
		padding: .2rem 1.5rem;
		border-radius: 3px;
	}

	.navbar__link:link{
		color: darkmagenta;
	}
	.navbar__link:hover{
		background-color: rgb(232, 121, 41);
	}

	.router-link-active{
		color: brown;
			background-color: rgb(232, 121, 41);
			font-style: oblique;
			text-decoration: underline;
	}
</style>

