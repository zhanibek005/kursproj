"use client";
import CarCard from "@/components/CarCard";
import PerCard from "@/components/PerCard";
import SampleModal from "@/components/SampleDialog";
import ThemeButton from "@/components/ThemeButton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Forum from "@/components/Forum";

export default function Home() {
  const funcName = () => console.log();
  return (
    <div className="bg-background w-screen flex min-h-screen items-center justify-center font-sans">
      <main className=" flex min-h-screen w-full  flex-col items-center justify-between py-15 px-16 sm:items-start">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-2 ">
            <h2 className="pb-4 text-text text-3xl font-bold">
              Подбор Автомобиля
            </h2>
            <p className="text-gray-500 text-xl pb-4">
              уточните фильтры и отсортирйуте результаты
            </p>
          </div>
          <Button
            onMouseDown={() => {
              console.log("");
            }}
            variant="ghost"
            className="p-4 pl-10 border border-indigo-10 text-accent hover:text-accent-foreground"
          >
            <span className="text-xl p-4 pl-10">Оставьте заявку</span>
          </Button>
        </div>

        <Forum onSubmit={funcName} onCancel={funcName} />

        <ThemeButton />
        <div className="rounded-md grid p-2 grid-cols-4 gap-2 justify-between w-full">
          <CarCard
            title="title"
            labels={["label1", "label2", "label3"]}
            price={3.5}
            imageUrl="https://i.pinimg.com/originals/d9/25/2d/d9252d7f73fd1ec4cefc02bc4820633d.jpg"
          />
          <CarCard
            title="title"
            labels={["label1", "label2", "label3"]}
            price={3.5}
            imageUrl="https://i.pinimg.com/originals/d9/25/2d/d9252d7f73fd1ec4cefc02bc4820633d.jpg"
          />
          <CarCard
            title="title"
            labels={["label1", "label2", "label3"]}
            price={3.5}
            imageUrl="https://i.pinimg.com/originals/d9/25/2d/d9252d7f73fd1ec4cefc02bc4820633d.jpg"
          />
          <CarCard
            title="title"
            labels={["label1", "label2", "label3"]}
            price={3.5}
            imageUrl="https://i.pinimg.com/originals/d9/25/2d/d9252d7f73fd1ec4cefc02bc4820633d.jpg"
          />
          <CarCard
            title="title"
            labels={["label1", "label2", "label3"]}
            price={3.5}
            imageUrl="https://i.pinimg.com/originals/d9/25/2d/d9252d7f73fd1ec4cefc02bc4820633d.jpg"
          />
          <CarCard
            title="title"
            labels={["label1", "label2", "label3"]}
            price={3.5}
            imageUrl="https://i.pinimg.com/originals/d9/25/2d/d9252d7f73fd1ec4cefc02bc4820633d.jpg"
          />
          <CarCard
            title="title"
            labels={["label1", "label2", "label3"]}
            price={3.5}
            imageUrl="https://i.pinimg.com/originals/d9/25/2d/d9252d7f73fd1ec4cefc02bc4820633d.jpg"
          />
          <PerCard
            name="title"
            position="positions"
            skills={["skill1", "skill2", "skill3"]}
            imageUrl="https://content.kaspersky-labs.com/fm/site-editor/dc/dc17dbf731bc7c7018d13ffe643e480d/processed/case-study-neo-q93-r1920.jpg"
          />
        </div>
        <SampleModal />
      </main>
    </div>
  );
}
