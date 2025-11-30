"use client"

import { useState } from "react"

import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

// Функции тоже можно прокидывать, как обычные переменные
interface SampleFormProps {
	onSubmit: () => void;
	onCancel: () => void;
}

// При чтении пропсов можно сразу деконструировать их в объявлении функции
export default function SampleForm({
	onSubmit,
	onCancel
}: SampleFormProps) {
	const [name, setName] = useState("")
	const [username, setUsername] = useState("")
	const [errors, setErrors] = useState<{ name?: string; username?: string }>({})

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const newErrors: typeof errors = {}
		if (!name.trim()) newErrors.name = "Хуйни в поле накидвй"
		if (!username.trim()) newErrors.username = "Бля брат выше же написал"
		setErrors(newErrors)
		if (Object.keys(newErrors).length === 0) {
			onSubmit()
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<FieldSet>
				<FieldLegend>Оба ебать</FieldLegend>
				<FieldDescription>Группа полей ввода ёбана</FieldDescription>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="name">Имя</FieldLabel>
						<Input
							id="name"
							autoComplete="off"
							placeholder="Мужик"
							value={name}
							onChange={(e) => setName(e.target.value)}
							aria-invalid={!!errors.name}
						/>
						{errors.name ? (
							<FieldError>{errors.name}</FieldError>
						) : (
							<FieldDescription>Описание поля ввода</FieldDescription>
						)}
					</Field>
					<Field>
						<FieldLabel htmlFor="username">Опять имя</FieldLabel>
						<Input
							id="username"
							autoComplete="off"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							aria-invalid={!!errors.username}
						/>
						{errors.username && (
							<FieldError>{errors.username}</FieldError>
						)}
					</Field>
					<Field orientation="horizontal">
						<Switch id="newsletter" />
						<FieldLabel htmlFor="newsletter">Опять имя</FieldLabel>
					</Field>
				</FieldGroup>
				<FieldSeparator />
				<div className="flex gap-2 mt-4">
					<Button type="submit">Дать леща</Button>
					<Button
						type="button"
						variant="destructive"
						onClick={onCancel}
					>
						Сломать колени
					</Button>
				</div>

			</FieldSet>
		</form>
	)
}

