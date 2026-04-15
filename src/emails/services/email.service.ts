import { transporter } from "@lib/nodemailer";
import type { EmailOptions } from "../types/email.types";

export const emailService = {
	async send(options: EmailOptions): Promise<void> {
		try {
			const info = await transporter.sendMail(options);
			console.log("Email enviado:", info.messageId);
		} catch (error) {
			console.error("Error enviando email:", error);
			const detail = error instanceof Error ? error.message : String(error);
			throw new Error(`No se pudo enviar el email: ${detail}`);
		}
	},
};
