import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

interface Props {
  children: ReactNode;
}

export default function SidebarLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
