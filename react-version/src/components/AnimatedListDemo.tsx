"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Milo a envoyé un devis pour votre projet",
    description: "Devis #2024-001",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Milo a finalisé votre mail",
    description: "Email marketing prêt",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Milo a créé une nouvelle tâche",
    description: "Révision du contenu",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Milo a planifié votre réunion",
    description: "Rendez-vous client demain",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // gray background styles matching newsletter
        "bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="size-10 rounded-2xl overflow-hidden">
          <img src="/favicon.svg" alt="Milo Favicon" className="h-10 w-10 object-cover" />
        </div>
        <div className="flex flex-col overflow-hidden text-left">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white text-left">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 text-left">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </div>
  );
}