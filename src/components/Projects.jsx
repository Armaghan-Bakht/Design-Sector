import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { projectCategories, projects } from "../data/projects";

const CategoryFilter = ({ categories, activeCategory, onChange, projects }) => {
  const counts = useMemo(() => {
    const countsMap = { All: projects.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        countsMap[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return countsMap;
  }, [categories, projects]);

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
            Explore Categories
          </h3>
          <p className="text-sm text-slate-500 max-w-md">
            Filter through the portfolio to find specific types of work ranging
            from branding to digital experiences.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-accent/30 hidden sm:block" />
          <span className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            {projects.length} Total Projects
          </span>
        </div>
      </div>

      <div className="no-scrollbar -mx-6 flex overflow-x-auto px-6 py-4 lg:-mx-4 lg:px-4">
        <div className="flex w-max items-center gap-4 lg:w-full lg:flex-wrap">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onChange(category)}
                className={`group flex cursor-pointer items-center gap-3 rounded-full border px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "border-accent bg-accent text-ink shadow-[0_8px_20px_rgba(198,217,45,0.3)]"
                    : "border-white/10 bg-white/5 text-slate-400 backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-slate-100"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-ink/20 text-ink"
                      : "bg-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-slate-200"
                  }`}
                >
                  {counts[category] || 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(project)}
    className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-accent/60 hover:bg-white/10"
  >
    <div className="relative overflow-hidden rounded-t-3xl">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-between bg-ink/70 p-6 opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {project.category}
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
          View Case Study
        </span>
      </div>
    </div>
    <div className="space-y-2 px-6 pb-6 pt-5">
      <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
      <p className="text-sm text-slate-400">{project.category}</p>
    </div>
  </button>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Portfolio"
            title="A curated selection of bold brand experiences."
            subtitle="Explore how I help brands stand out through meticulous design, strategic visual storytelling, and high-impact digital experiences."
          />

          <CategoryFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onChange={handleCategoryChange}
            projects={projects}
          />
        </div>

        {/* Desktop View: 3 Columns */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {[0, 1, 2].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {visibleProjects
                .filter((_, index) => index % 3 === colIndex)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={setSelectedProject}
                  />
                ))}
            </div>
          ))}
        </div>

        {/* Tablet View: 2 Columns */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {visibleProjects
                .filter((_, index) => index % 2 === colIndex)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={setSelectedProject}
                  />
                ))}
            </div>
          ))}
        </div>

        {/* Mobile View: 1 Column */}
        <div className="grid sm:hidden grid-cols-1 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {(visibleCount < filteredProjects.length || visibleCount > 6) && (
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {visibleCount < filteredProjects.length && (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-100 transition-all duration-300 hover:border-accent/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(198,217,45,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
                  Load More Projects
                </span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            )}

            {visibleCount > 6 && (
              <button
                type="button"
                onClick={() => setVisibleCount(6)}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-slate-100"
              >
                <span className="relative z-10">View Less</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
