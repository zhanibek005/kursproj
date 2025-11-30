'use client';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import SampleForm from "./FormExample";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle, Terminal } from "lucide-react";
import { toast } from "sonner";

export default function SampleModal() {
	const [dialogOpen, setDialogOpen] = useState(false)


	const onSubmit = () => {
		setDialogOpen(false)
		toast.custom(() => (
			<Alert className="border-green-500">
				<Terminal className="h-4 w-4" />
				<AlertTitle>Проверяй</AlertTitle>
				<AlertDescription>
					Хуй был успешно отправлен тебе за щеку
				</AlertDescription>
			</Alert>
		))
	}

	const onCancel = () => {
		setDialogOpen(false)
		toast.custom(() => (
			<Alert variant="destructive">
				<AlertTriangle className="h-4 w-4" />
				<AlertTitle>А похуй</AlertTitle>
				<AlertDescription>
					Всё равно отправил
				</AlertDescription>
			</Alert>
		))
	}

	return (
		<Dialog open={dialogOpen} onOpenChange={(v) => setDialogOpen(v)}>
			<DialogTrigger asChild>
				<Button>
					<span>Сюда жми</span>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Форма отправки моего хуя тебе за щеку</DialogTitle>
				</DialogHeader>
				<SampleForm onSubmit={onSubmit} onCancel={onCancel} />
			</DialogContent>
		</Dialog>
	)
}
