import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			className="px-4 py-2 rounded-xl text-sm font-medium bg-foreground text-background"
			{...props}
		>
			{children}
		</button>
	);
}
