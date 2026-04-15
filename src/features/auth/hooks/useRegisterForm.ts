import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sileo } from "sileo";
import { registerAction } from "../actions/register.action";
import { registerSchema } from "../schemas/auth.schemas";
import type { RegisterFormValues } from "../types/auth.types";

export function useRegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterFormValues) => {
		const executeAction = async () => {
			const result = await registerAction(data);

			if (result?.error) {
				throw new Error(result.error);
			}

			if (result?.success) {
				reset();
				return result.success;
			}
		};

		await sileo
			.promise(executeAction(), {
				loading: { title: "Cargando..." },
				success: (successMsg: string | undefined) => ({
					title:
						successMsg ||
						"¡Cuenta creada exitosamente, revisa tu correo para verificarla!",
				}),
				error: (errorMsg: unknown) => ({
					title:
						errorMsg instanceof Error
							? errorMsg.message
							: "Ocurrió un error inesperado al registrarte, inténtalo de nuevo.",
				}),
			})
			.catch(() => {});
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isSubmitting,
	};
}
