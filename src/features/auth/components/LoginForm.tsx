"use client";

import FormCard from "@forms/FormCard";
import InputField from "@forms/InputField";
import Button from "@ui/Button";
import Link from "next/link";

export default function LoginForm() {
	return (
		<FormCard
			title="Iniciar sesión"
			description="Inicia sesión para continuar"
			imagePath="/images/auth-login.png"
		>
			<form className="flex flex-col gap-4">
				<InputField
					label="Email"
					id="email"
					type="email"
					placeholder="mi@email.com"
					autoComplete="email"
				/>

				<div className="flex flex-col gap-1.5">
					<div className="flex justify-between items-center">
						<label htmlFor="password" className="text-sm font-medium">
							Contraseña
						</label>
						<Link
							href="/auth/reset-password"
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
