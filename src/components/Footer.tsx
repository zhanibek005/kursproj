"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function ThemeButton() {
  const onPress = () => {
    toast.success("темная тема");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="border border-t-accent/40 h-20 w-screen bg-background flex align-middle justify-between px-10 items-center ">
      <h2 className="text-text text-2xl font-bold"> © 2025 «Автоподбор» </h2>
      <Button
        onMouseDown={() => {
          console.log("");
        }}
        variant="outline"
        className=" text-accent hover:text-accent-foreground"
      >
        <span>Оставить заявку</span>
      </Button>
    </div>
  );
}
