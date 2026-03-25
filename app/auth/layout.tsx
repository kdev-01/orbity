import BackLink from "@ui/BackLink";

export default function PublicLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen px-4">
			<BackLink href="/">Regresar</BackLink>
			{children}
		</main>
	);
}
