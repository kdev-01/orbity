"use server";

import { AUTH_ERROR_MESSAGES, AuthError } from "../domain/auth.errors";
import { loginSchema } from "../schemas/auth.schemas";
import { authService } from "../services/auth.service";
import type { LoginFormValues } from "../types/auth.types";

export async function loginAction(data: LoginFormValues) {
	const parsed = loginSchema.safeParse(data);

	if (!parsed.success) {
		return { error: "Los datos no son válidos." };
	}

	try {
		await authService.login(parsed.data);
	} catch (error) {
		if (error instanceof AuthError) {
			return { error: AUTH_ERROR_MESSAGES[error.code] };
		}

		return {
			error:
				"Ocurrió un error inesperado al iniciar sesión, inténtalo de nuevo.",
		};
	}
}
