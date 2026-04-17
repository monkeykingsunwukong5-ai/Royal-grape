const reviews = [
  {
    name: "Elman Rzayev",
    when: "a month ago",
    text: "Super. The atmosphere is unreal — felt like dining in another century.",
    rating: 5,
  },
  {
    name: "Kamran Ojagverdiyev",
    when: "6 days ago",
    text: "Wonderful place. Service is impeccable and the wine list is the best I've found in Baku.",
    rating: 5,
  },
  {
    name: "Leyla Mammadova",
    when: "2 weeks ago",
    text: "We came for an anniversary and left with a memory. Candlelight, jazz and the most perfect lamb.",
    rating: 5,
  },
  {
    name: "Daniel Petrov",
    when: "3 weeks ago",
    text: "The sommelier guided us through three glasses, each one better than the last. A masterclass.",
    rating: 5,
  },
];

const breakdown = [
  { stars: 5, pct: 96 },
  { stars: 4, pct: 3 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-28 md:py-40 px-6 bg-gradient-to-b from-noir via-wine-900/30 to-noir"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Score side */}
          <div className="md:sticky md:top-28">
            <span className="gold-divider">Guests Said</span>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl text-cream leading-none">
              Loved by
              <span className="block italic text-gold-gradient">our guests.</span>
            </h2>

            <div className="mt-10 flex items-end gap-4">
              <div className="font-serif text-7xl text-gold-gradient leading-none">
                5.0
              </div>
              <div className="pb-2">
                <div className="flex gap-1 text-gold text-xl">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-cream/50 mt-1">
                  Based on 32 reviews
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              {breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-6 text-cream/60">{b.stars}★</span>
                  <div className="flex-1 h-1.5 bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-gold-bright"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-cream/50">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="border border-white/10 bg-noir/40 p-7 hover:border-gold/40 transition-colors flex flex-col"
              >
                <div className="flex gap-0.5 text-gold text-sm">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="mt-4 font-serif italic text-lg text-cream/85 leading-relaxed flex-1">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wine-600 to-wine-800 flex items-center justify-center text-cream font-serif">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-cream text-sm">{r.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-cream/40 mt-0.5">
                      {r.when}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
