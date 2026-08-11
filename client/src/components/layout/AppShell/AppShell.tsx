import type { ReactNode } from "react";
import { BottomNavigation } from "../BottomNavigation/BottomNavigation";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#FFF9F3] pb-28">
      {children}

      <BottomNavigation />
    </div>
  );
}