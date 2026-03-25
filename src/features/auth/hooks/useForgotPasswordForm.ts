import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "../schemas/authSchema";
import type { ForgotPasswordFormValues } from "../types/auth.types";

export function useForgotPasswordForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ForgotPasswordFormValues>({
		resolver: zodResolver(forgotPasswordSchema),
	});

	const onSubmit = async (data: ForgotPasswordFormValues) => {
		console.log(data);
	};

	return { register, handleSubmit, onSubmit, errors, isSubmitting };
}
