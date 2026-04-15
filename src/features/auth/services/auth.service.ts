import { auth } from "@lib/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { AuthError } from "../domain/auth.errors";
import type { IAuthRepository } from "../domain/IAuthRepository";
import { authRepository } from "../repositories/auth.repository";
import type { LoginFormValues, RegisterFormValues } from "../types/auth.types";

class AuthService {
	constructor(private repository: IAuthRepository) {}

	async register(credentials: RegisterFormValues) {
		const { name, email, password } = credentials;

		const userExists = await this.repository.userExists(email);
		if (userExists) {
			throw new AuthError("USER_ALREADY_EXISTS");
		}

		await auth.api.signUpEmail({
			body: { name, email, password, callbackURL: "/dashboard" },
			headers: await headers(),
		});
	}

	async login(credentials: LoginFormValues) {
		const { email, password } = credentials;

		const userExists = await this.repository.userExists(email);
		if (!userExists) {
			throw new AuthError("USER_NOT_FOUND");
		}

		try {
			await auth.api.signInEmail({
				body: { email, password },
				headers: await headers(),
			});
		} catch (error) {
			if (error instanceof APIError) {
				if (error.statusCode === 401) {
					throw new AuthError("INVALID_CREDENTIALS");
				}

				if (error.statusCode === 403) {
					throw new AuthError("USER_NOT_VERIFIED");
				}
			}
		}
	}
}

export const authService = new AuthService(authRepository);
