import { z } from "zod";

export const nameField = z
	.string()
	.min(1, { error: "El nombre es un campo requerido." });

export const emailField = z.email({
	error: "Por favor, ingrese un email válido.",
});

export const passwordField = z
	.string({ error: "La contraseña es requerida." })
	.min(8, { error: "Mínimo 8 caracteres." })
	.max(50, { error: "Máximo 50 caracteres." })
	.refine((val) => /[A-Z]/.test(val), {
		error: "Debe tener al menos una letra mayúscula.",
	})
	.refine((val) => /[a-z]/.test(val), {
		error: "Debe tener al menos una letra minúscula.",
	})
	.refine((val) => /\d/.test(val), {
		error: "Debe tener al menos un número.",
	})
	.refine((val) => /[@$!%*?&]/.test(val), {
		error: "Debe tener al menos un carácter especial (@$!%*?&).",
	});
