"use client";
import CarCard from "@/components/CarCard";
import PerCard from "@/components/PerCard";
import SampleModal from "@/components/SampleDialog";
import ThemeButton from "@/components/ThemeButton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Check, Hourglass, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background w-screen flex flex-col min-h-screen items-center justify-center font-sans inset-x-40">
      <div className="w-[50vw]">
        <div className="flex flex-col gap-2 ">
          <h2 className="pb-4 text-text text-3xl font-bold">
            Подберем Автомобиль под ваши требования
          </h2>
          <p className="text-gray-500 text-xl pb-4">
            уточните фильтры и отсортирйуте результаты
          </p>
          <div className="flex items-center mt-auto gap-2">
            <Button
              className="w-40 h-12 text-secondary text-lg"
              variant="default"
            >
              Подобрать авто
            </Button>
            <Button className="w-40 h-12 text-text text-lg" variant="outline">
              Как это работает
            </Button>
          </div>
          <div className="flex flex-row gap-1">
            <div className="bg-primary/20 rounded-full size-8 flex align-middle justify-center p-1">
              <Shield className="text-blue-600" />
            </div>
            <h1 className="text-gray-500 text-xl pb-4">гарантия до 30 дней</h1>
            <div className="bg-primary/20 rounded-full size-8 flex align-middle justify-center p-1">
              <Check className="text-blue-600" />
            </div>
            <h1 className="text-gray-500 text-xl pb-4">честный отчет</h1>
            <div className="bg-primary/20 rounded-full size-8 flex align-middle justify-center p-1">
              <Hourglass className="text-blue-600" />
            </div>
            <h1 className="text-gray-500 text-xl pb-4">большой опыт работы</h1>
          </div>
        </div>
      </div>
      <div className="w-[50vw]">
        <h1 className="text-black text-2xl pb-4 font-bold">Преимущества</h1>
        <div className=" mx-8 rounded-md p-2 gap-8 w-full flex flex-row">
          <div className=" shadow-md w-110 h-56 border border-2-indigo-400 rounded-xl  ">
            <div className="bg-primary/20 rounded-md size-10 flex align-middle justify-center p-2 m-3">
              <BadgeCheck className="text-blue-600" />
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold p-2">
              Прозрачность
            </div>
            <p className=" text-xl p-2">
              Фото и видео отчет, проверки по базам, Диагностика СТО
            </p>
          </div>
          <div className="shadow-md w-110 h-56 border border-2-indigo-400 rounded-xl  ">
            <div className="bg-primary/20 rounded-md size-10 flex align-middle justify-center p-2 m-3">
              <BadgeCheck className="text-blue-600" />
            </div>
          </div>
          <div className="shadow-md w-110 h-56 border border-2-indigo-400 rounded-xl  ">
            <div className="bg-primary/20 rounded-md size-10 flex align-middle justify-center p-2 m-3">
              <BadgeCheck className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
