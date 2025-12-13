"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function ThemeButton() {
  const onPress = () => {
    toast.success("темная тема");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      onMouseDown={onPress}
      variant="outline"
      className="mb-8 text-accent hover:text-accent-foreground"
    >
      <span>Сменить тему</span>
    </Button>
  );
}
