import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
};

export default function InputField({
	label,
	...props
}: Partial<InputFieldProps>) {
	return (
		<label
			className="flex flex-col gap-2 text-sm font-medium"
			htmlFor={props.id}
		>
			{label}

			<input
				className="w-full p-2 rounded-md border border-gray-300"
				{...props}
			/>
		</label>
	);
}
