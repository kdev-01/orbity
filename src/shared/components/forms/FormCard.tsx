import Image from "next/image";
import type { ReactNode } from "react";

interface FormCardProps {
	title: string;
	description: string;
	children: ReactNode;
	imagePath: string;
}

export default function FormCard({
	title,
	description,
	children,
	imagePath,
}: FormCardProps) {
	return (
		<article className="grid grid-cols-2 bg-white rounded-xl overflow-hidden w-full max-w-2xl shadow-sm">
			<section className="flex flex-col gap-6 p-8">
				<div className="flex flex-col items-center">
					<h2 className="text-2xl font-semibold">{title}</h2>
					<p className="text-sm text-muted-foreground mt-1">{description}</p>
				</div>
				{children}
			</section>

			<section className="relative min-h-64">
				<Image
					src={imagePath}
					alt="Atardecer en la playa con amigos."
					fill
					className="object-cover"
					priority
				/>
			</section>
		</article>
	);
}
