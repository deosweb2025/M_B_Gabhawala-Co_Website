import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteData, type GalleryItem } from "../../data/siteData";
import { Container } from "../common/Container";
import { AnimatedDivider } from "../common/AnimatedDivider";
import { ImageModal } from "../common/ImageModal";
import { useInView } from "../../hooks/useInView";
import { Maximize2, ArrowRight, ArrowUpRight } from "lucide-react";

export const GalleryGlimpse: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.08 });

  // Curate 6 flagship high-impact industry sectors for the home page glimpse
  const glimpseItems = siteData.gallery.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-white relative border-t border-b border-slate-200 overflow-hidden"
    >
      {/* Crisp White Institutional Atmosphere with Subtle Soft Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(53, 80, 148, 0.03) 0%, transparent 80%)",
          }}
        />
        <div className="absolute -bottom-24 left-1/4 w-[450px] h-[300px] bg-slate-50/80 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 right-1/4 w-[450px] h-[300px] bg-blue-50/30 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        {/* Luxury Section Header */}
        <div
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse" />
            <span>Visual Portfolio • Industry Practice Footprint</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Industry Showcase &{" "}
            <span className="block sm:inline text-[#1e3a8a] mt-1 sm:mt-0 drop-shadow-sm">
              Gallery Glimpse
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            A curated glimpse into the diverse commercial towers, manufacturing facilities, tech corridors, and logistics networks advised by M B Gabhawala & Co. across India.
          </p>

          {/* Specular Center Gradient Divider Line with Appearance Animation */}
          <AnimatedDivider className="mt-6" />
        </div>

        {/* 6 Curated Luxury Photo Cards Grid - Cinematic Shutter Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {glimpseItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`glossy-card rounded-2xl overflow-hidden group cursor-pointer relative flex flex-col justify-between hover:-translate-y-2 hover:scale-[1.01] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md ${
                isInView
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-90 blur-[2px]"
              }`}
              style={{
                transitionDelay: `${index * 90}ms`,
              }}
            >
              {/* Animated Top Specular Light Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-20">
                <div
                  className="w-full h-full bg-gradient-to-r from-transparent via-[#6797D6] to-transparent animate-border-sheen"
                  style={{ animationDelay: `${index * 0.4}s` }}
                />
              </div>

              {/* Static Top Border Rim */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent z-20 pointer-events-none" />

              {/* High-Definition Image Container with Zoom & Hover Overlay */}
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Top Corner Category Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#355094] bg-white/95 px-3 py-1 rounded-full border border-slate-200 backdrop-blur-md shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Center Hover Magnifier Glass Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/30 backdrop-blur-[2px]">
                  <div className="p-3.5 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#355094] text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                  </div>
                </div>
              </div>

              {/* Card Caption & Action Footer */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between gap-3 relative z-10">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#355094] transition-all duration-300 leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px] font-mono text-slate-400">
                    Practice Sector
                  </span>
                  <span className="text-[#355094] font-semibold group-hover:text-[#1e3a8a] transition-colors flex items-center gap-1 text-xs">
                    <span>Explore View</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master CTA: Direct Link to Complete 10-Sector Gallery */}
        <div className="mt-14 sm:mt-18 text-center">
          <Link
            to="/gallery"
            className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white font-bold text-sm tracking-wide transition-all duration-300 border border-sky-300/40 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_10px_25px_-5px_rgba(30,58,138,0.45),0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(30,58,138,0.6),0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
          >
            {/* Top Gloss Curved Reflection */}
            <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-xl pointer-events-none" />

            <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Explore Complete 10-Sector Visual Gallery
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
          </Link>
        </div>
      </Container>

      {/* Interactive Modal for Fullscreen View */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.imageUrl}
          title={selectedImage.title}
          category={selectedImage.category}
          description={selectedImage.description}
        />
      )}
    </section>
  );
};

export default GalleryGlimpse;
