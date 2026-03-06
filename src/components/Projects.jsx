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
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Explore Categories
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent/60">
          {projects.length} Total Projects
        </span>
      </div>

      <div className="no-scrollbar -mx-6 flex overflow-x-auto px-6 lg:mx-0 lg:px-0">
        <div className="flex w-max items-center border-b border-white/5 lg:w-full">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onChange(category)}
                className={`group relative flex cursor-pointer items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-slate-300"
                  }`}
                >
                  {counts[category] || 0}
                </span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_12px_rgba(198,217,45,0.8)]"
                    style={{ viewTransitionName: "active-underline" }}
                  />
                )}
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
    <section id="projects" className="scroll-mt-24 py-20 sm:py-32">
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
          <div className="flex flex-wrap justify-center gap-4">
            {visibleCount < filteredProjects.length && (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:border-accent hover:text-accent"
              >
                Load More Projects
              </button>
            )}

            {visibleCount > 6 && (
              <button
                type="button"
                onClick={() => setVisibleCount(6)}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:border-accent hover:text-accent"
              >
                View Less
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
