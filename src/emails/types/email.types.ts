export interface EmailAddress {
	name: string;
	email: string;
}

export interface VerificationEmailData extends EmailAddress {
	url: string;
}

export interface PasswordResetEmailData extends EmailAddress {
	url: string;
}

export type EmailOptions = {
	from: string;
	to: string;
	subject: string;
	text: string;
	html: string;
};
