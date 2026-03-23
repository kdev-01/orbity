import Logo from "@ui/Logo";
import GuestNavigation from "./GuestNavigation";

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4">
			<Logo href="/" />
			<GuestNavigation />
		</header>
	);
}
