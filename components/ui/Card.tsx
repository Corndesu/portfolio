"use client";
import { cn } from "@/lib/utils";

export function Card({
    title,
    description
}:{
    title: string;
    description: string;
}) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://media.istockphoto.com/id/1401568968/vector/blue-matrix-background-abstract-binary-code-wallpaper-template-for-hackathon-and-other.jpg?s=2048x2048&w=is&k=20&c=IDwgbd3sYk0I0NpAoa5Z4sfDTiI9a5q-WColJqY0cG0=)] bg-cover",
          "before:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGg2MXJ2cXc1MWMyeHJjZmM2aGphc3J5MXZxMWhodnE3NzlubWs2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGg2MXJ2cXc1MWMyeHJjZmM2aGphc3J5MXZxMWhodnE3NzlubWs2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
