<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'

	export let data

	const { form, errors, constraints, enhance } = superForm(data.form)
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>S'inscrire</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>
		<label class="label" for="firstname">
			<span class="block">Prénom</span>
			<input
				class="input"
				type="text"
				name="firstname"
				id="firstname"
				class:input-error={$errors.firstname}
				aria-invalid={$errors.firstname ? 'true' : undefined}
				bind:value={$form.firstname}
				{...$constraints.firstname}
			/>
		</label>

		{#if $errors.lastname}
			<span class="text-red-400">{$errors.lastname}</span>
		{/if}
		<label class="label" for="lastname">
			<span class="block">Nom</span>
			<input
				class="input"
				type="text"
				name="lastname"
				id="lastname"
				class:input-error={$errors.lastname}
				aria-invalid={$errors.lastname ? 'true' : undefined}
				bind:value={$form.lastname}
				{...$constraints.lastname}
			/>
		</label>
		{#if $errors.lastname}
			<span class="text-red-400">{$errors.lastname}</span>
		{/if}

		<label class="label" for="email">
			<span class="block">Email</span>
			<input
				class="input"
				type="text"
				name="email"
				id="email"
				class:input-error={$errors.email}
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
				{...$constraints.email}
			/>
		</label>
		{#if $errors.email}
			<span class="text-red-400">{$errors.email}</span>
		{/if}

		<label class="label" for="password">
			<span class="block">Password</span>
			<input
				class="input"
				type="password"
				name="password"
				id="password"
				class:input-error={$errors.password}
				aria-invalid={$errors.password ? 'true' : undefined}
				bind:value={$form.password}
				{...$constraints.password}
			/>
		</label>
		{#if $errors.password}
			<span class="text-red-400">{$errors.password}</span>
		{/if}

		<button class="btn variant-filled" type="submit">S'inscrire</button>
	</form>
</div>
