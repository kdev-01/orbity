import { db } from "@db";
import type { IAuthRepository } from "../domain/IAuthRepository";

class AuthRepository implements IAuthRepository {
	async userExists(email: string): Promise<boolean> {
		const user = await db.query.users.findFirst({
			where: {
				email,
			},
		});

		return !!user;
	}
}

export const authRepository = new AuthRepository();
