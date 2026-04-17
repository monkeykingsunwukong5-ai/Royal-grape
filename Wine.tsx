export default function Wine() {
  return (
    <section
      id="wine"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/images/dish.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir/85 to-noir" />

      <div className="relative max-w-6xl mx-auto text-center">
        <span className="gold-divider">The Cellar</span>
        <h2 className="mt-6 font-serif text-5xl md:text-7xl text-cream leading-tight">
          Three hundred labels.
          <span className="block italic text-gold-gradient mt-2">
            One perfect pairing.
          </span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-cream/65 text-lg leading-relaxed">
          From the limestone hills of Saperavi to the chalky terroirs of
          Burgundy — our sommelier has spent years curating a list that travels
          across continents and centuries. Whatever you order, there is a glass
          waiting for it.
        </p>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { region: "France", count: "112", note: "Burgundy · Bordeaux · Rhône" },
            { region: "Georgia", count: "68", note: "Saperavi · Rkatsiteli" },
            { region: "Italy & Spain", count: "94", note: "Tuscany · Rioja · Piedmont" },
          ].map((r) => (
            <div
              key={r.region}
              className="border border-white/10 bg-noir/50 backdrop-blur-sm p-8 hover:border-gold/40 transition-colors"
            >
              <div className="font-script text-gold text-5xl">{r.count}</div>
              <div className="mt-2 font-serif text-2xl text-cream">{r.region}</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-cream/50">
                {r.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
