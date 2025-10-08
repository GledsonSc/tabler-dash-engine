import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-16 transition-all duration-300">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};
