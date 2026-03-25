import ForgotPasswordForm from "@features/auth/components/ForgotPasswordForm";
import generateTitle from "@utils/generateTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: generateTitle("Recuperar contraseña"),
};

export default function ForgotPasswordPage() {
	return <ForgotPasswordForm />;
}
