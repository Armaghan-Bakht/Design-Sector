import { useEffect, useState } from "react";
import AgencyLogo from "../assets/Agency-Logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-ink/60 py-3 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 lg:px-10">
        {/* Logo */}
        <div className="flex-1">
          <a href="#home" className="group inline-block">
            <img
              src={AgencyLogo}
              className="w-32 transition-transform duration-500 group-hover:scale-105 sm:w-40"
              alt="Agency Logo"
            />
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 transition-all duration-300 hover:text-accent sm:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden flex-1 items-center justify-end md:flex">
          <a
            href="#contact"
            className="group relative flex items-center gap-2 overflow-hidden border border-accent/20 px-7 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-ink"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">
              Let&apos;s Work
            </span>
            <div className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0"></div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="group relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-[2px] w-6 bg-slate-100 transition-all duration-500 ${isOpen ? "translate-y-[8px] rotate-45 bg-accent" : ""}`}
          />
          <span
            className={`h-[2px] w-4 bg-slate-100 transition-all duration-500 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-slate-100 transition-all duration-500 ${isOpen ? "-translate-y-[8px] -rotate-45 bg-accent" : ""}`}
          />
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-3xl font-bold uppercase tracking-[0.3em] text-slate-100 transition-all duration-500 hover:text-accent ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className={`mt-10 rounded-full border border-accent/40 px-10 py-4 text-sm font-bold uppercase tracking-[0.3em] text-accent transition-all duration-500 hover:bg-accent hover:text-ink ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Start a Project
          </a>
        </div>

        {/* Minimalist Background Pattern for Mobile Menu */}
        <div className="absolute bottom-10 left-0 right-0 text-center text-[10px] uppercase tracking-[0.5em] text-white/10">
          Design Sector &copy; 2024
        </div>
      </div>
    </header>
  );
};

export default Navbar;
