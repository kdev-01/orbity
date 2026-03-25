"use client";

import FormCard from "@forms/FormCard";
import InputField from "@forms/InputField";
import Button from "@ui/Button";
import Link from "next/link";
import { useLoginForm } from "../hooks/useLoginForm";

export default function LoginForm() {
	const { register, handleSubmit, onSubmit, errors, isSubmitting } =
		useLoginForm();

	return (
		<FormCard
			title="Iniciar sesión"
			description="Ingresa tus credenciales para acceder a tu cuenta."
			imagePath="/images/auth-cover.png"
			imageAlt="Planeta tierra en el espacio."
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

				<div className="flex flex-col gap-1.5">
					<div className="flex justify-between items-center">
						<label htmlFor="password" className="text-sm font-medium">
							Contraseña
						</label>
						<Link
							href="/auth/forgot-password"
							className="text-xs text-muted-foreground hover:underline"
						>
							¿Olvidaste tu contraseña?
						</Link>
					</div>
					<InputField
						id="password"
						type="password"
						placeholder="Contraseña"
						autoComplete="current-password"
						error={errors.password?.message}
						{...register("password")}
					/>
				</div>

				<Button type="submit">Iniciar sesión</Button>

				<p className="text-sm text-center text-muted-foreground">
					¿No tienes cuenta?{" "}
					<Link
						href="/auth/register"
						className="text-foreground underline underline-offset-2 hover:text-sky"
					>
						Regístrate
					</Link>
				</p>
			</form>
		</FormCard>
	);
}
