import { emailField, nameField, passwordField } from "@validations/user.fields";
import { z } from "zod";

export const registerSchema = z
	.object({
		name: nameField,
		email: emailField,
		password: passwordField,
		confirmPassword: z.string({
			error: "La confirmación de contraseña es requerida.",
		}),
	})
	.check(
		z.refine((data) => data.password === data.confirmPassword, {
			error: "Las contraseñas no coinciden.",
			path: ["confirmPassword"],
			when(payload) {
				return payload.issues.every((iss) => {
					const field = iss.path?.[0];
					return field !== "password" && field !== "confirmPassword";
				});
			},
		}),
	);

export const loginSchema = z.object({
	email: emailField,
	password: passwordField,
});

export const forgotPasswordSchema = z.object({
	email: emailField,
});
