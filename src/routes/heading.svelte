<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
	import {Terminal, Menu } from 'lucide-svelte'
	let isMenuOpen = false; // Ajout de l'état du menu mobile

	$: user = $page.data.user
</script>

<AppBar>
	<svelte:fragment slot="lead">

		<a class="flex gap-1" href="/">
			<Terminal /> Prompt Lover
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<button class="hamburger" on:click={() => isMenuOpen = !isMenuOpen}>
			<Menu />
		</button>
		<div class={`menu ${isMenuOpen ? 'open' : ''}`}>
			<a href="/pricing">Abonnements</a>

			{#if user}
			<a href="/authenticated">Les prompts</a>
				<form method="POST" action="/logout" use:enhance>
					<button type="submit">Déconnexion</button>
				</form>
			{:else}
				<a href="/login">Se connecter</a>
				<a href="/register">S'inscrire</a>
			{/if}
		</div>
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<style>
    .hamburger {
        display: none; /* Caché par défaut */
		cursor: pointer;
    }

    .menu {
		display: absolute; /* Style normal en mode desktop */
        right: 0; /* Aligner à droite */
        top: 100%; /* Positionnez sous la barre de navigation */
        width: 100%; /* Ou toute autre largeur appropriée */
		}

	.menu a {
		display: inline;
		padding: 1rem;
	}

    .menu.open {
        display: block; /* Affiche le menu en mode ouvert */
    }

    @media (max-width: 768px) { /* Ajustez selon le point de rupture souhaité */
        .hamburger {
            display: block; /* Affiche l'icône du menu hamburger en mode mobile */
			
        }

        .menu {
            display: none; /* Cache le menu en mode mobile par défaut */
			flex-direction: column;
			text-align: justify;
	        right: 0; /* Aligner à droite */
       		top: 100%; /* Positionnez sous la barre de navigation */
        }
    }
</style>


