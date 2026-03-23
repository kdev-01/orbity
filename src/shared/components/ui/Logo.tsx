import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

interface LogoProps extends ComponentProps<typeof Link> {
	width?: number;
	height?: number;
}

export default function Logo({
	href = "/",
	width = 64,
	height = 64,
}: LogoProps) {
	return (
		<Link href={href}>
			<Image
				src="/logo.svg"
				alt="Logo Orbity"
				width={width}
				height={height}
				unoptimized
			/>
		</Link>
	);
}
