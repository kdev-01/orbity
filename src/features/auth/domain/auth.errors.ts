export type AuthErrorCode =
	| "USER_ALREADY_EXISTS"
	| "USER_NOT_FOUND"
	| "INVALID_CREDENTIALS"
	| "USER_NOT_VERIFIED";

export class AuthError extends Error {
	constructor(public readonly code: AuthErrorCode) {
		super(code);
		this.name = "AuthError";
	}
}

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
	USER_ALREADY_EXISTS: "El correo ya está registrado, intenta iniciar sesión.",
	USER_NOT_FOUND: "El usuario no está registrado, intenta crear una cuenta.",
	INVALID_CREDENTIALS: "Credenciales inválidas, intenta de nuevo.",
	USER_NOT_VERIFIED:
		"Tu cuenta no está verificada, te hemos enviado un nuevo correo de verificación.",
};
