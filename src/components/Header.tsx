"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ThemeButton() {
  const onPress = () => {
    toast.success("темная тема");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className=" border border-b-accent/40 h-20 w-screen bg-background flex align-middle justify-between px-10 items-center gap-2">
      <h2 className="text-text text-2xl font-bold"> Автоподбор </h2>
      <div className="flex gap-2">
        <Link href="/">
          <Button
            onMouseDown={() => {
              console.log("");
            }}
            variant="ghost"
            className=" text-accent hover:text-accent-foreground"
          >
            <span>Главная</span>
          </Button>
        </Link>
        <Link href="/catalog">
          <Button
            onMouseDown={() => {
              console.log("");
            }}
            variant="ghost"
            className=" text-accent hover:text-accent-foreground"
          >
            <span>Подбор Авто</span>
          </Button>
        </Link>
        <Button
          onMouseDown={() => {
            console.log("");
          }}
          variant="ghost"
          className=" text-accent hover:text-accent-foreground"
        >
          <span>Услуги</span>
        </Button>
        <Button
          onMouseDown={() => {
            console.log("");
          }}
          variant="ghost"
          className=" text-accent hover:text-accent-foreground"
        >
          <span>О компаний</span>
        </Button>
        <Button
          onMouseDown={() => {
            console.log("");
          }}
          variant="ghost"
          className=" text-accent hover:text-accent-foreground"
        >
          <span>Контакты</span>
        </Button>
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
    </div>
  );
}
