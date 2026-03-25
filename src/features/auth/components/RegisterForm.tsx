"use client";

import FormCard from "@forms/FormCard";
import InputField from "@forms/InputField";
import Button from "@ui/Button";
import Link from "next/link";
import { useRegisterForm } from "../hooks/useRegisterForm";

export default function RegisterForm() {
	const { register, handleSubmit, onSubmit, errors, isSubmitting } =
		useRegisterForm();

	return (
		<FormCard
			title="Crear una cuenta"
			description="Crea una cuenta para acceder a tu comunidad."
			imagePath="/images/auth-cover.png"
			imageAlt="Planeta tierra en el espacio."
		>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<InputField
					label="Nombre"
					id="name"
					type="text"
					placeholder="Kevin"
					autoComplete="name"
					error={errors.name?.message}
					{...register("name")}
				/>
				<InputField
					label="Email"
					id="email"
					type="email"
					placeholder="mi@email.com"
					autoComplete="email"
					error={errors.email?.message}
					{...register("email")}
				/>
				<InputField
					label="Contraseña"
					id="password"
					type="password"
					placeholder="Contraseña"
					autoComplete="new-password"
					error={errors.password?.message}
					{...register("password")}
				/>
				<InputField
					label="Confirmar contraseña"
					id="confirm-password"
					type="password"
					placeholder="Confirmar contraseña"
					autoComplete="new-password"
					error={errors.confirmPassword?.message}
					{...register("confirmPassword")}
				/>

				<Button type="submit">Crear cuenta</Button>

				<p className="mt-4 text-sm text-center text-muted-foreground">
					¿Ya tienes cuenta?{" "}
					<Link
						href="/auth/login"
						className="text-foreground underline underline-offset-2 hover:text-sky"
					>
						Iniciar sesión
					</Link>
				</p>
			</form>
		</FormCard>
	);
}
