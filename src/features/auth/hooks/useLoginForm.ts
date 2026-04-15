import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { sileo } from "sileo";
import { loginAction } from "../actions/login.action";
import { loginSchema } from "../schemas/auth.schemas";
import type { LoginFormValues } from "../types/auth.types";

export function useLoginForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormValues) => {
		const executeAction = async () => {
			const result = await loginAction(data);

			if (result?.error) {
				throw new Error(result.error);
			}

			return "/dashboard";
		};

		await sileo
			.promise(executeAction(), {
				loading: { title: "Cargando..." },
				success: () => ({
					title: "Bienvenido",
				}),
				error: (errorMsg: unknown) => ({
					title:
						errorMsg instanceof Error
							? errorMsg.message
							: "Ocurrió un error inesperado al iniciar sesión, inténtalo de nuevo.",
				}),
			})
			.then((path: string) => {
				reset();
				router.push(path);
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
