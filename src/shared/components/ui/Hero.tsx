import LinkButton from "@ui/LinkButton";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
				<header className="space-y-5">
					<p className="text-sm font-medium text-foreground/70">
						Conecta con personas de tu ciudad
					</p>

					<h1 className="text-4xl leading-tight font-bold text-foreground md:text-5xl">
						Crea <strong className="text-sky">comunidad</strong> con eventos que
						se sienten cercanos, <strong className="text-sky">humanos</strong> y{" "}
						<strong className="text-sky">memorables</strong>.
					</h1>

					<p className="max-w-xl text-base leading-relaxed text-foreground/80">
						Organiza encuentros, talleres y experiencias para compartir con
						gente bonita. Orbity te ayuda a reunir a tu comunidad en un solo
						lugar.
					</p>

					<div className="flex flex-wrap gap-3">
						<LinkButton href="/auth/register">Crear comunidad</LinkButton>

						<LinkButton href="/auth/login" type="secondary">
							Explorar eventos
						</LinkButton>
					</div>
				</header>

				<figure className="relative">
					<div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-sky/25 blur-3xl" />
					<div className="overflow-hidden rounded-3xl">
						<Image
							src="/images/hero.png"
							alt="Astronauta flotando en el espacio"
							width={700}
							height={700}
							className="h-auto w-full object-cover"
							priority
						/>
					</div>
				</figure>
			</div>
		</section>
	);
}
