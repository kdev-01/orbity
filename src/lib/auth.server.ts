import { auth } from "@lib/auth";
import { headers } from "next/headers";

async function getServerSession() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return session;
}

export async function getUserSession() {
	const session = await getServerSession();

	return {
		session,
		isAuthenticated: !!session,
	};
}
