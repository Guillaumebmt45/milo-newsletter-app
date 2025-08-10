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
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div className="size-8 sm:size-10 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
          <img src="/favicon.svg" alt="Milo Favicon" className="h-8 sm:h-10 w-8 sm:w-10 object-cover" />
        </div>
        <div className="flex flex-col overflow-hidden text-left min-w-0 flex-1">
          <figcaption className="flex flex-row items-center whitespace-pre text-base font-medium dark:text-white ">
            <div className="flex flex-col overflow-hidden">
              <div className="truncate text-base font-semibold">
                {name}
              </div>
              <div className="truncate text-sm text-gray-500">
                {description}
              </div>
            </div>
          </figcaption>
          <div className="ml-auto text-xs text-gray-400">{time}</div>
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