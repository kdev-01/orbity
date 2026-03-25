import Image from "next/image";
import type { ReactNode } from "react";

interface FormCardProps {
	title: string;
	description: string;
	children: ReactNode;
	imagePath?: string;
	imageAlt?: string;
}

export default function FormCard({
	title,
	description,
	children,
	imagePath,
	imageAlt,
}: FormCardProps) {
	return (
		<article
			className={`grid bg-white rounded-xl overflow-hidden shadow-sm w-full ${
				imagePath ? "max-w-4xl grid-cols-2" : "max-w-lg grid-cols-1"
			}`}
		>
			<section className="flex flex-col gap-6 p-12">
				<div className="flex flex-col items-center">
					<h2 className="text-2xl font-semibold">{title}</h2>
					<p className="text-sm text-muted-foreground mt-1">{description}</p>
				</div>
				{children}
			</section>

			{imagePath && (
				<section className="relative min-h-64">
					<Image
						src={imagePath}
						alt={imageAlt ?? ""}
						fill
						className="object-cover"
						priority
					/>
				</section>
			)}
		</article>
	);
}
