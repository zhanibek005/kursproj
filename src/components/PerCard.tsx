'use client'

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface PersonnelCardProps {
    name: string;
    position: string;
    skills: string[];
    imageUrl?: string;
}

export default function PersonnelCard(props: PersonnelCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setImageLoaded(true);
        }
    }, [props.imageUrl]);

    const handleImgLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-80 rounded bg-card border border-border shadow-sm p-4">
            <div className="relative w-full h-52 rounded overflow-visible">
                <div
                    className={cn([
                        "absolute rounded inset-0 transition-color animate-radial-pulse",
                        imageLoaded ? "opacity-0" : "opacity-100"
                    ])}
                />

                {props.imageUrl && (
                    <img
                        ref={imgRef}
                        src={props.imageUrl}
                        alt={props.name}
                        className={cn([
                            "w-full h-full object-cover transition-all duration-300 rounded",
                            imageLoaded ? "opacity-100" : "opacity-0"
                        ])}
                        onLoad={handleImgLoad}
                    />
                )}

                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute group rounded-full -top-2 -right-2 bg-background hover:bg-accent/40"
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    <Heart
                        className={cn([
                            isFavorite
                                ? "fill-primary text-primary group-hover:fill-accent-foreground"
                                : "text-primary",
                            "group-hover:text-accent-foreground"
                        ])}
                    />
                </Button>
            </div>

            <h3 className="text-xl font-semibold">{props.name}</h3>
            <p className="text-sm text-foreground/70">{props.position}</p>

            <div className="flex gap-2 flex-wrap">
                {props.skills.map((skill, i) => (
                    <Badge
                        key={i}
                        variant="outline"
                        className="text-xs p-0 text-foreground/70 bg-transparent border-0"
                    >
                        {skill.toUpperCase()}
                    </Badge>
                ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
                <Button variant="outline">Профиль</Button>
            </div>
        </div>
    );
}