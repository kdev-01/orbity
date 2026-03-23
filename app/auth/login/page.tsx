import LoginForm from "@features/auth/components/LoginForm";
import generateTitle from "@utils/generateTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: generateTitle("Iniciar sesión"),
};

export default function LoginPage() {
	return (
		<main className="flex min-h-screen items-center justify-center px-4 py-12">
			<LoginForm />
		</main>
	);
}
