import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/authSchema";
import type { RegisterFormValues } from "../types/auth.types";

export function useRegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (values: RegisterFormValues) => {
		console.log(values);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isSubmitting,
	};
}
