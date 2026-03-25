import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/authSchema";
import type { LoginFormValues } from "../types/auth.types";

export function useLoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormValues) => {
		console.log(data);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isSubmitting,
	};
}
