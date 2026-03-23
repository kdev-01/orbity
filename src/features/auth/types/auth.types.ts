import type { z } from "zod";
import type { loginSchema } from "../schemas/loginSchema";

export type LoginFormValues = z.infer<typeof loginSchema>;
