import CarCard from "@/components/CarCard";
import SampleModal from "@/components/SampleDialog";
import ThemeButton from "@/components/ThemeButton";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background font-sans">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background sm:items-start">
				<ThemeButton />
				<CarCard
					title="title"
					labels={["label1", "label2", "label3"]}
					price={3.50}
					imageUrl="https://facts.net/wp-content/uploads/2021/01/Frog-Facts-20-1024x629.jpg"
				/>
				<SampleModal />
			</main>
		</div>
	);
}
