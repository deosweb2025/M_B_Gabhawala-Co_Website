import React, { useState } from "react";
import { siteData, type GalleryItem } from "../data/siteData";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { ImageModal } from "../components/common/ImageModal";
import { Maximize2, Camera } from "lucide-react";

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Real Estate & Infra",
    "IT & Corporate",
    "Logistics & Trade",
    "BFSI & Finance",
    "Hospitality & Tourism",
    "Healthcare & Pharma",
    "Manufacturing",
  ];

  const filteredItems =
    activeCategory === "All"
      ? siteData.gallery
      : siteData.gallery.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader
        variant="gallery"
        badge="Industry Practice Showcase"
        title="Key Practice Sectors &"
        highlight="Client Industries"
        description="Visual showcase of the diverse industrial sectors, corporate enterprises, and supply chains served by M B Gabhawala & Co."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="py-20 bg-slate-950 min-h-[60vh] relative overflow-hidden">
        {/* Subtle glossy ambient background reflection */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/35 border border-blue-400/40"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 backdrop-blur-sm"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden glossy-card cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full"
              >
                {/* Top Specular Edge Highlight */}
                <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 pointer-events-none" />

                {/* Image Container with Zoom Effect */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-950 relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                  {/* Hover Icon Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="p-3.5 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/40 transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300 bg-slate-950/85 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Caption Footer */}
                <div className="p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-t border-white/10 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug line-clamp-2 min-h-[2.75rem]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 min-h-[2.25rem] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-[11px] text-slate-400 font-medium">Practice Sector</span>
                    <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                      Explore View ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Helpful click hint */}
          <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <Camera className="w-4 h-4 text-blue-400" />
            <span>Click any image to view in high-resolution full-screen lightbox</span>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
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
    </>
  );
};

export default Gallery;
