export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[680px] w-full overflow-hidden grain"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Royal Grape dining room"
          className="w-full h-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/40 to-noir" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-transparent to-noir/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <span className="gold-divider reveal">Baku · White City · Since 2018</span>

        <h1 className="reveal reveal-delay-1 mt-6 font-serif text-[15vw] sm:text-[10vw] md:text-[8.2rem] leading-[0.92] text-cream font-light tracking-tight max-w-4xl">
          The
          <span className="block italic text-gold-gradient">
            Royal Grape
          </span>
        </h1>

        <p className="reveal reveal-delay-2 mt-8 max-w-xl font-serif text-xl md:text-2xl italic text-cream/80 leading-relaxed">
          Fine wine. Elegant dining. <br />
          A place for slow evenings &amp; deep taste.
        </p>

        <div className="reveal reveal-delay-3 mt-12 flex flex-wrap gap-4">
          <a
            href="#reserve"
            className="group relative inline-flex items-center gap-3 bg-gold text-noir px-8 py-4 text-xs uppercase tracking-[0.28em] font-medium overflow-hidden"
          >
            <span className="relative z-10">Reserve a Table</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
            <span className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-3 border border-cream/30 text-cream px-8 py-4 text-xs uppercase tracking-[0.28em] hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Explore the Menu
          </a>
        </div>

        {/* Bottom info */}
        <div className="reveal reveal-delay-4 absolute bottom-10 left-6 right-6 max-w-7xl mx-auto flex items-end justify-between text-xs uppercase tracking-[0.25em] text-cream/60">
          <div className="hidden md:flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 pulse-dot" />
            <span>Open Now · Until 11:00 PM</span>
          </div>
          <div className="hidden md:block text-right">
            <div>Mərkəzi Bulvar 5</div>
            <div className="mt-1">050 519 14 11</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-cream/40 text-[10px] tracking-[0.4em] uppercase">
        Scroll
        <span className="block w-px h-10 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  );
}
