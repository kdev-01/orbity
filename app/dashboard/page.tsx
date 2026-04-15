import { getUserSession } from "@lib/auth.server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
	const { isAuthenticated } = await getUserSession();
	if (!isAuthenticated) {
		redirect("/auth/login");
	}

	return <div>DashboardPage</div>;
}
