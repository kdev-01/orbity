import RegisterForm from "@features/auth/components/RegisterForm";
import generateTitle from "@utils/generateTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: generateTitle("Registrarse"),
};

export default function RegisterPage() {
	return <RegisterForm />;
}
