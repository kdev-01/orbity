import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			className="py-2 mt-2 rounded-xl text-sm font-medium bg-foreground text-background cursor-pointer"
			{...props}
		>
			{children}
		</button>
	);
}
