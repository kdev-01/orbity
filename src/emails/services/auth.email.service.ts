import { emailConfig } from "../config";
import {
	renderVerificationEmail,
	renderVerificationEmailText,
} from "../templates/VerificationEmail";
import type { VerificationEmailData } from "../types/email.types";
import { emailService } from "./email.service";

export const authEmailService = {
	async sendVerificationEmail(data: VerificationEmailData): Promise<void> {
		await emailService.send({
			from: emailConfig.from.verification,
			to: data.email,
			subject: "Confirmación de cuenta",
			text: renderVerificationEmailText(data),
			html: renderVerificationEmail(data),
		});
	},
};
