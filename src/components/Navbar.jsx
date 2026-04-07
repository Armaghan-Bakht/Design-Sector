import { useEffect, useState } from "react";
import AgencyLogo from "../assets/Logo.png";

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
          ? "bg-ink/80 py-2.5 backdrop-blur-xl border-b border-white/10 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 lg:px-10">
        {/* Logo */}
        <div className="flex-1">
          <a href="#home" className="group flex items-center">
            <img
              src={AgencyLogo}
              className="w-15 transition-transform duration-500 group-hover:scale-105 sm:w-19"
              alt="Agency Logo"
            />
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-300 transition-colors duration-300 hover:text-white sm:text-[11px]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden flex-1 items-center justify-end md:flex">
          <a
            href="#contact"
            className="group relative flex items-center justify-center overflow-hidden rounded-md border border-white/20 bg-white/5 px-6 py-2 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-500 hover:border-accent hover:bg-accent hover:text-ink sm:text-[11px]"
          >
            <span className="relative z-10 transition-colors duration-300">
              Let&apos;s Work
            </span>
            {/* Subtle sweep effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="group relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-[2px] w-6 bg-slate-200 transition-all duration-500 ${isOpen ? "translate-y-[7px] rotate-45 bg-accent" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-slate-200 transition-all duration-500 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-slate-200 transition-all duration-500 ${isOpen ? "-translate-y-[7px] -rotate-45 bg-accent" : ""}`}
          />
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/95 backdrop-blur-2xl transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-2xl font-medium uppercase tracking-[0.2em] text-slate-300 transition-all duration-500 hover:text-white ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className={`mt-4 rounded-md border border-white/20 bg-white/5 px-10 py-3.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-500 hover:border-accent hover:bg-accent hover:text-ink ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${navLinks.length * 100 + 100}ms` }}
          >
            Start a Project
          </a>
        </div>

        {/* Minimalist Background Pattern for Mobile Menu */}
        <div className="absolute bottom-10 left-0 right-0 text-center text-[10px] uppercase tracking-widest text-white/30">
          Design Sector &copy; 2024
        </div>
      </div>
    </header>
  );
};

export default Navbar;
