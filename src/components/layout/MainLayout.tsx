import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export const MainLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#355094] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};
