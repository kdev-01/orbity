import Header from "@ui/Header";

export default function PublicLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
