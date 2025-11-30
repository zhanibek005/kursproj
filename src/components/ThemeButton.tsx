'use client';
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function ThemeButton() {

	const onPress = () => {
		toast.success("абоба")
		document.documentElement.classList.toggle("dark");
	}

	return (
		<Button onMouseDown={onPress} variant="outline" className="text-accent hover:text-accent-foreground">
			<span>Сменить тему</span>
		</Button>
	)
}
