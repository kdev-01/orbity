interface FieldErrorProps {
	children: React.ReactNode;
}

export default function FieldError({ children }: FieldErrorProps) {
	return <p className="text-xs leading-4 text-red-400">{children}</p>;
}
