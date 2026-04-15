import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			className="py-2 mt-2 rounded-xl text-sm font-medium bg-foreground text-background cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
			{...props}
		>
			{children}
		</button>
	);
}
