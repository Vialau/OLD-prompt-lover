<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
	import {Terminal } from 'lucide-svelte'

	$: user = $page.data.user
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex gap-1" href="/">
			<Terminal /> Prompt Lover
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
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

		<LightSwitch />
	</svelte:fragment>
</AppBar>
