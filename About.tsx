export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/images/interior.jpg"
              alt="Wine cellar interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 w-44 h-44 rounded-full bg-noir border border-gold/40 flex flex-col items-center justify-center text-center">
            <span className="font-script text-gold text-5xl leading-none">Est.</span>
            <span className="font-serif text-cream text-3xl tracking-widest">2018</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mt-1">Baku</span>
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-gold/40 hidden md:block" />
        </div>

        {/* Text side */}
        <div>
          <span className="gold-divider">Our Story</span>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl leading-tight text-cream">
            A house built for
            <span className="block italic text-gold-gradient">slow evenings.</span>
          </h2>
          <p className="mt-8 text-cream/70 leading-relaxed text-lg">
            The Royal Grape was born from a single conviction — that a great
            evening cannot be hurried. From our cellar of more than{" "}
            <span className="text-gold">300 hand-picked labels</span> to a
            kitchen that treats every plate as a small ceremony, we are devoted
            to the lost art of dining slowly.
          </p>
          <p className="mt-5 text-cream/60 leading-relaxed">
            Tucked inside Baku's elegant White City, our dining room is dressed
            in candlelight and soft jazz — an intimate stage for first dates,
            quiet anniversaries and long conversations that deserve another
            bottle.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            <Stat n="300+" label="Wine labels" />
            <Stat n="48" label="Seats only" />
            <Stat n="5.0" label="Guest rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl md:text-5xl text-gold-gradient">
        {n}
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-cream/50">
        {label}
      </div>
    </div>
  );
}
