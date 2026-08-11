import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type NavigationItem = {
  id: string;
  label: string;
  icon: ReactNode;
  path: string;
};

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "⌂",
    path: "/",
  },
  {
    id: "menu",
    label: "Menu",
    icon: "☰",
    path: "/menu",
  },
  {
    id: "queue",
    label: "Queue",
    icon: "◷",
    path: "/queue",
  },
  {
    id: "orders",
    label: "Orders",
    icon: "▣",
    path: "/orders",
  },
];

export function BottomNavigation() {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-[#E8D8C8]
        bg-white/95
        backdrop-blur
      "
    >
      <div className="mx-auto flex max-w-2xl items-center justify-around px-4 py-3">
        {navigationItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            aria-label={item.label}
            className={({ isActive }) => `
              flex
              min-w-16
              flex-col
              items-center
              gap-1
              rounded-xl
              px-3
              py-2
              text-xs
              font-medium
              transition-all
              duration-200
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#FF7A00]/20
              ${
                isActive
                  ? "text-[#FF7A00]"
                  : "text-[#6B7280] hover:text-[#1F2937]"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <span
                  aria-hidden="true"
                  className={`
                    text-xl
                    leading-none
                    transition-transform
                    duration-200
                    ${isActive ? "scale-110" : ""}
                  `}
                >
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}