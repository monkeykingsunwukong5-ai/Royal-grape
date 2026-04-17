const dishes = [
  {
    name: "Beef Tenderloin Royale",
    desc: "Aged Azerbaijani beef, bordelaise reduction, smoked marrow butter.",
    price: "₼ 48",
    tag: "Signature",
  },
  {
    name: "Caspian Sturgeon",
    desc: "Pan-seared with saffron beurre blanc, baby leeks, citrus pearls.",
    price: "₼ 56",
    tag: "Local",
  },
  {
    name: "Truffle Tagliatelle",
    desc: "Fresh hand-cut pasta, black winter truffle, parmigiano 36 mois.",
    price: "₼ 38",
  },
  {
    name: "Lamb Shoulder, Slow",
    desc: "Six-hour braise, pomegranate molasses, roasted heritage carrots.",
    price: "₼ 42",
  },
  {
    name: "Burrata di Bufala",
    desc: "Heirloom tomatoes, basil oil, aged balsamic, sourdough toast.",
    price: "₼ 24",
  },
  {
    name: "Chocolate Soufflé",
    desc: "70% Valrhona, salted caramel core, vanilla bean crème anglaise.",
    price: "₼ 18",
    tag: "Dessert",
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-28 md:py-40 px-6 bg-gradient-to-b from-noir via-wine-900/40 to-noir"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider">The Kitchen</span>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl text-cream">
            A menu that
            <span className="italic text-gold-gradient"> tells time</span>.
          </h2>
          <p className="mt-6 text-cream/60">
            Seasonal, ingredient-led, deeply rooted in technique. Below — a few
            of this season's most-loved plates.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {dishes.map((d) => (
            <div key={d.name} className="group">
              <div className="flex items-baseline gap-4">
                <h3 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors">
                  {d.name}
                  {d.tag && (
                    <span className="ml-3 align-middle text-[10px] uppercase tracking-[0.25em] text-gold border border-gold/40 px-2 py-0.5">
                      {d.tag}
                    </span>
                  )}
                </h3>
                <div className="flex-1 border-b border-dashed border-white/15 translate-y-[-4px]" />
                <span className="font-serif text-xl text-gold-gradient">
                  {d.price}
                </span>
              </div>
              <p className="mt-3 text-cream/55 leading-relaxed text-sm md:text-base">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#reserve"
            className="inline-flex items-center gap-3 text-gold text-xs uppercase tracking-[0.3em] border-b border-gold/40 pb-1 hover:border-gold transition-colors"
          >
            Full menu available in-house
          </a>
        </div>
      </div>
    </section>
  );
}
