import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { Home, Compass } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.08),transparent_70%)] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-xl">
        <span className="text-7xl sm:text-9xl font-extrabold gold-gradient-text tracking-tighter block mb-4">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Page Not Located
        </h1>

        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The requested statutory resource or advisory section could not be located in our index. Please return to the homepage or explore our practice areas.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm tracking-wide transition-all shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-semibold text-sm transition-all"
          >
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Explore Practice Areas</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
