import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Wine", href: "#wine" },
  { label: "Hours", href: "#hours" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0606]/85 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative">
            <span className="text-3xl">🍇</span>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl tracking-wide text-cream">
              The Royal Grape
            </span>
            <span className="block font-script text-gold text-sm -mt-1">
              est. Baku
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-[0.18em] uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-cream/75 hover:text-gold transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#reserve"
          className="hidden md:inline-flex items-center gap-2 border border-gold/60 text-gold px-5 py-2.5 text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-noir transition-colors duration-300"
        >
          Reserve
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-cream transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-px bg-cream transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-cream transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        } bg-[#0a0606]/95 backdrop-blur-md`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-[0.2em]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/80 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="border border-gold/60 text-gold px-5 py-3 text-center"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  );
}
