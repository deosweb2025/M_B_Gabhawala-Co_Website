import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export const MainLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};
