import { fail, redirect } from '@sveltejs/kit'
import { superValidate, setError } from 'sveltekit-superforms/server'

import { auth } from '$lib/server/auth'
import { authSchema } from '$lib/zod/schema'

// if the user exists, redirect authenticated users to the profile page
export async function load({ locals }) {
	const { session } = await locals.auth.validateUser()
	if (session) throw redirect(302, '/')

	const form = await superValidate(authSchema)
	return { form }
}

export const actions = {
	async default({ request, locals }) {
		const form = await superValidate(request, authSchema)

		if (!form.valid) {
			return fail(400, { form })
		}

		try {
			const key = await auth.useKey(
				'email',
				form.data.email,
				form.data.password
			)
			const session = await auth.createSession(key.userId)
			locals.auth.setSession(session)
		} catch (error) {
			return setError(form, 'email', 'Invalid credentials')
		}
	},
}
