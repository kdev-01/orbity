import Link from "next/link";

type LinkButtonProps = {
	href: string;
	children: React.ReactNode;
	type?: "primary" | "secondary";
};

export default function LinkButton({
	href,
	children,
	type = "primary",
}: LinkButtonProps) {
	const baseClasses = "px-4 py-2 rounded-xl text-sm font-medium";
	const styles = {
		primary: "bg-foreground text-background",
		secondary: "rounded-xl border border-foreground/15",
	};

	return (
		<Link href={href} className={`${baseClasses} ${styles[type]}`}>
			{children}
		</Link>
	);
}
