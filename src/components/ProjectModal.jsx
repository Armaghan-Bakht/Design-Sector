import { useEffect, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Get ALL other images for the "Sub-images" section
  const subImages = project.gallery.filter((img) => img !== project.image); // Use the original primary image as reference
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-ink/95 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 z-20 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition hover:border-accent hover:text-accent sm:right-8 sm:top-8"
        >
          Close
        </button>

        <div className="overflow-y-auto">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
            {/* Primary Visual Column */}
            <div className="flex flex-col border-r border-white/5">
              <div className="relative w-full overflow-hidden bg-white/5">
                <img
                  src={activeImage}
                  alt={project.title}
                  className="w-full h-auto object-contain transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-8 lg:hidden">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Mini Thumbnails for Interaction */}
              {project.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto p-6 scrollbar-hide">
                  {project.gallery.slice(0, 8).map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                        activeImage === img
                          ? "border-accent scale-105 shadow-glow-sm"
                          : "border-transparent opacity-40 hover:opacity-100 hover:scale-105"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-8 p-8 sm:p-12 lg:p-16">
              <div className="hidden lg:block">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">
                  {project.category}
                </span>
                <h3 className="mt-4 text-4xl font-bold text-white leading-[1.1]">
                  {project.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sub-Images Grid Section */}
              {/* {subImages.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                      Project Exploration
                    </h4>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
                    {subImages.map((img, index) => (
                      <div
                        key={index}
                        className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 transition-transform hover:-translate-y-1"
                        onClick={() => setActiveImage(img)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" && setActiveImage(img)
                        }
                      >
                        <img
                          src={img}
                          alt={`Project view ${index + 1}`}
                          className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-accent/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                <button
                  type="button"
                  className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:scale-105 hover:shadow-glow"
                >
                  <span className="relative z-10">View Full Case Study</span>
                  <div className="relative z-10 transition-transform group-hover:translate-x-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
