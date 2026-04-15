import type { z } from "zod";
import type {
	forgotPasswordSchema,
	loginSchema,
	registerSchema,
} from "../schemas/auth.schemas";

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
