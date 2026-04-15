"use server";

import { AUTH_ERROR_MESSAGES, AuthError } from "../domain/auth.errors";
import { registerSchema } from "../schemas/auth.schemas";
import { authService } from "../services/auth.service";
import type { RegisterFormValues } from "../types/auth.types";

export async function registerAction(data: RegisterFormValues) {
	const parsed = registerSchema.safeParse(data);

	if (!parsed.success) {
		return { error: "Los datos no son válidos." };
	}

	try {
		await authService.register(parsed.data);
		return {
			success:
				"¡Cuenta creada exitosamente, revisa tu correo para verificarla!",
		};
	} catch (error) {
		if (error instanceof AuthError) {
			return { error: AUTH_ERROR_MESSAGES[error.code] };
		}

		return {
			error: "Ocurrió un error inesperado al registrarte, inténtalo de nuevo.",
		};
	}
}
