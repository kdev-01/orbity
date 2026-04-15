export interface IAuthRepository {
	userExists(email: string): Promise<boolean>;
}
