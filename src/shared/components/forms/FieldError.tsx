interface FieldErrorProps {
	children: React.ReactNode;
}

export default function FieldError({ children }: FieldErrorProps) {
	return <p className="text-xs mt-1 leading-4 text-red-400">{children}</p>;
}
