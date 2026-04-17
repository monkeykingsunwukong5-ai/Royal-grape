const items = [
  "Fine Wine",
  "Slow Evenings",
  "Deep Taste",
  "Curated Cellar",
  "Seasonal Menu",
  "Live Acoustic",
  "French Mornings",
  "Romantic Dining",
];

export default function Marquee() {
  return (
    <div className="border-y border-white/10 bg-noir overflow-hidden py-6">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-10 px-10 font-serif italic text-3xl md:text-4xl text-cream/70"
          >
            <span>{item}</span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
