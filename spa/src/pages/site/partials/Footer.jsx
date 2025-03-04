import { IconHeartFilled } from "@tabler/icons-react";

export default function Footer() {
	return (
		<footer className="flex justify-center items-center gap-1 h-[40px]">
			<IconHeartFilled className="relative top-[2px] text-primary" size={18} />
			Lua perfumada
		</footer>
	);
}
