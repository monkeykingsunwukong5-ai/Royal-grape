export default function Posts() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-noir">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="gold-divider">What's New</span>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl text-cream">
              Latest at <span className="italic text-gold-gradient">the Grape</span>
            </h2>
          </div>
          <div className="text-cream/50 text-sm tracking-[0.2em] uppercase">
            Posts &amp; Events
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured post */}
          <article className="lg:col-span-2 group relative overflow-hidden bg-wine-900/30 border border-white/5">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/french-breakfast.jpg"
                alt="French Breakfast"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="absolute top-5 left-5 bg-gold text-noir text-[10px] uppercase tracking-[0.25em] px-3 py-1.5">
              Featured Event
            </div>
            <div className="p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold/80">
                Apr 4 — Apr 5, 2026
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl text-cream group-hover:text-gold transition-colors">
                Французский Завтрак
              </h3>
              <p className="mt-3 font-serif italic text-cream/60 text-lg">
                A French Breakfast in the White City
              </p>
              <p className="mt-5 text-cream/65 leading-relaxed">
                Two mornings only. Buttery croissants pulled at dawn, eggs
                florentine, vintage champagne and Parisian café — served beneath
                the soft Saturday light of the boulevard.
              </p>
              <a
                href="#reserve"
                className="mt-7 inline-flex items-center gap-3 text-gold text-xs uppercase tracking-[0.28em] border-b border-gold/40 pb-1 hover:border-gold"
              >
                Reserve Your Table
                <span>→</span>
              </a>
            </div>
          </article>

          {/* Side posts */}
          <div className="flex flex-col gap-8">
            <SidePost
              date="Every Friday"
              title="Sommelier's Table"
              desc="A six-course tasting paired with rare bottles from the private cellar."
            />
            <SidePost
              date="Live · Saturdays"
              title="Acoustic Nights"
              desc="Strings & jazz. Soft enough to talk over, beautiful enough to listen."
            />
            <SidePost
              date="New Season"
              title="Autumn Menu"
              desc="Truffle, game, cured meats. The kitchen turns toward longer evenings."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SidePost({
  date,
  title,
  desc,
}: {
  date: string;
  title: string;
  desc: string;
}) {
  return (
    <a
      href="#"
      className="group block border border-white/10 p-7 hover:border-gold/50 hover:bg-wine-900/20 transition-all"
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
        {date}
      </div>
      <h4 className="mt-3 font-serif text-2xl text-cream group-hover:text-gold transition-colors">
        {title}
      </h4>
      <p className="mt-3 text-cream/55 text-sm leading-relaxed">{desc}</p>
    </a>
  );
}
