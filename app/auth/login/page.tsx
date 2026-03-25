import LoginForm from "@features/auth/components/LoginForm";
import generateTitle from "@utils/generateTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: generateTitle("Iniciar sesión"),
};

export default function LoginPage() {
	return <LoginForm />;
}
