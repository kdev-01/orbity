import LinkButton from "@ui/LinkButton";

export default function GuestNavigation() {
	return (
		<section className="flex gap-2">
			<LinkButton href="/auth/login">Iniciar sesión</LinkButton>
			<LinkButton href="/auth/register" type="secondary">
				Registrarse
			</LinkButton>
		</section>
	);
}
