import type { InputHTMLAttributes } from "react";
import FieldError from "./FieldError";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	error?: string;
};

export default function InputField({
	label,
	error,
	...props
}: InputFieldProps) {
	return (
		<div className="flex flex-col">
			<label
				className="flex flex-col gap-1 text-sm font-medium"
				htmlFor={props.id}
			>
				{label}

				<input
					className={`
						w-full
						p-2
						rounded-md
						border
						border-gray-300
						focus:outline-none
						focus:ring-0
						focus:border-gray-300
						${error ? "border-red-400 text-red-400 placeholder-red-400 focus:ring-red-500 focus:border-red-500" : ""}`}
					{...props}
				/>
			</label>

			{error ? <FieldError>{error}</FieldError> : null}
		</div>
	);
}
