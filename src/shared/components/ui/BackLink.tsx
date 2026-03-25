import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";

type BackLinkProps = ComponentProps<typeof Link>;

export default function BackLink({ href, children, ...props }: BackLinkProps) {
	return (
		<Link
			href={href}
			className="flex items-center gap-1 text-sm absolute top-10 left-10"
			{...props}
		>
			<ChevronLeft size={16} />
			{children}
		</Link>
	);
}
