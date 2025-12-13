"use client";

import { useState } from "react";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Функции тоже можно прокидывать, как обычные переменные
interface SampleFormProps {
  onSubmit: () => void;
  onCancel: () => void;
}

// При чтении пропсов можно сразу деконструировать их в объявлении функции
export default function SampleForm({ onSubmit, onCancel }: SampleFormProps) {
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [transmission, setTransmission] = useState("");
  const [mileage, setMileage] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<{
    mark?: string;
    model?: string;
    yearFrom?: string;
    yearTo?: string;
    transmission?: string;
    mileage?: string;
    priceFrom?: string;
    priceTo?: string;
    company?: string;
  }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!mark.trim()) newErrors.mark = "Напишите марку";
    if (!model.trim()) newErrors.model = "Укажите модель";
    if (!yearFrom.trim()) newErrors.yearFrom = "Укажите год от";
    if (!yearTo.trim()) newErrors.yearTo = "Укажите год до";
    if (!transmission.trim()) newErrors.transmission = "Укажите КПП";
    if (!mileage.trim()) newErrors.mileage = "Введите пробег";
    if (!priceFrom.trim()) newErrors.priceFrom = "Введите цену от";
    if (!priceTo.trim()) newErrors.priceTo = "Введите цену до";
    if (!company.trim()) newErrors.company = "Введите название компании";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldSet>
        <FieldLegend>Данные автомобиля</FieldLegend>
        <FieldDescription>Заполните поля для создания заявки</FieldDescription>
        <FieldGroup className=" bg-primary/5 -ml-16 px-16 py-2 flex flex-row w-screen">
          <Field className="max-w-32">
            <FieldLabel htmlFor="mark">Марка</FieldLabel>
            <Input
              className="bg-background max-w-32"
              id="mark"
              autoComplete="off"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
              aria-invalid={!!errors.mark}
            />
            {errors.mark ? (
              <FieldError>{errors.mark}</FieldError>
            ) : (
              <FieldDescription>Укажите марку автомобиля</FieldDescription>
            )}
          </Field>

          <Field className="max-w-32">
            <FieldLabel htmlFor="model">Модель</FieldLabel>
            <Input
              className="bg-background max-w-32"
              id="model"
              autoComplete="off"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              aria-invalid={!!errors.model}
            />
            {errors.model && <FieldError>{errors.model}</FieldError>}
          </Field>

          <Field className="max-w-16">
            <FieldLabel htmlFor="yearFrom">Год от</FieldLabel>
            <Input
              className="bg-background max-w-16"
              id="yearFrom"
              autoComplete="off"
              value={yearFrom}
              onChange={(e) => setYearFrom(e.target.value)}
              aria-invalid={!!errors.yearFrom}
            />
            {errors.yearFrom && <FieldError>{errors.yearFrom}</FieldError>}
          </Field>

          <Field className="max-w-16">
            <FieldLabel htmlFor="yearTo">Год до</FieldLabel>
            <Input
              className=" bg-background max-w-16"
              id="yearTo"
              autoComplete="off"
              value={yearTo}
              onChange={(e) => setYearTo(e.target.value)}
              aria-invalid={!!errors.yearTo}
            />
            {errors.yearTo && <FieldError>{errors.yearTo}</FieldError>}
          </Field>

          <Field className="max-w-24">
            <FieldLabel htmlFor="transmission">КПП</FieldLabel>
            <Input
              className="bg-background max-w-24"
              id="transmission"
              autoComplete="off"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              aria-invalid={!!errors.transmission}
            />
            {errors.transmission && (
              <FieldError>{errors.transmission}</FieldError>
            )}
          </Field>

          <Field className="max-w-32">
            <FieldLabel htmlFor="mileage">Пробег</FieldLabel>
            <Input
              className="bg-background max-w-32"
              id="mileage"
              autoComplete="off"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              aria-invalid={!!errors.mileage}
            />
            {errors.mileage && <FieldError>{errors.mileage}</FieldError>}
          </Field>

          <Field className="max-w-32">
            <FieldLabel htmlFor="priceFrom">Цена от</FieldLabel>
            <Input
              className="bg-background max-w-32"
              id="priceFrom"
              autoComplete="off"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              aria-invalid={!!errors.priceFrom}
            />
            {errors.priceFrom && <FieldError>{errors.priceFrom}</FieldError>}
          </Field>

          <Field className="max-w-32">
            <FieldLabel htmlFor="priceTo">Цена до</FieldLabel>
            <Input
              className="bg-background max-w-32"
              id="priceTo"
              autoComplete="off"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              aria-invalid={!!errors.priceTo}
            />
            {errors.priceTo && <FieldError>{errors.priceTo}</FieldError>}
          </Field>
        </FieldGroup>

        <FieldSeparator />

        <div className="flex flex-row gap-2 mt-4">
          <Button type="submit" variant="outline">
            Отправить
          </Button>
          <Button type="button" variant="default" onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </FieldSet>
    </form>
  );
}
