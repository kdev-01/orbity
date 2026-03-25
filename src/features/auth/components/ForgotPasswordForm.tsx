"use client";

import FormCard from "@forms/FormCard";
import InputField from "@forms/InputField";
import Button from "@ui/Button";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";

export default function ForgotPasswordForm() {
	const { register, handleSubmit, onSubmit, errors, isSubmitting } =
		useForgotPasswordForm();

	return (
		<FormCard
			title="Recuperar contraseña"
			description="Ingresa tu email para recibir un enlace de recuperación."
		>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<InputField
					label="Email"
					id="email"
					type="email"
					placeholder="mi@email.com"
					autoComplete="email"
					error={errors.email?.message}
					{...register("email")}
				/>

				<Button type="submit">Enviar enlace</Button>
			</form>
		</FormCard>
	);
}
