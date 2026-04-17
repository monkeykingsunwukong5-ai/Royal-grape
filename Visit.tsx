const hours = [
  { day: "Monday", time: "12:00 — 11:00 PM" },
  { day: "Tuesday", time: "12:00 — 11:00 PM" },
  { day: "Wednesday", time: "12:00 — 11:00 PM" },
  { day: "Thursday", time: "12:00 — 11:00 PM" },
  { day: "Friday", time: "12:00 — 11:00 PM" },
  { day: "Saturday", time: "10:00 AM — 11:00 PM" },
  { day: "Sunday", time: "10:00 AM — 11:00 PM" },
];

export default function Visit() {
  const today = new Date().getDay(); // 0 Sun .. 6 Sat
  // map: array index 0=Mon .. 6=Sun
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <section id="visit" className="relative">
      {/* Hours block */}
      <div id="hours" className="py-28 md:py-36 px-6 bg-noir border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <span className="gold-divider">Hours</span>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl text-cream">
              We are
              <span className="italic text-gold-gradient"> open now.</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 text-sm text-cream/70">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 pulse-dot" />
              Until 11:00 PM tonight
            </div>
            <p className="mt-8 max-w-md text-cream/60 leading-relaxed">
              The kitchen takes its last order thirty minutes before closing.
              Reservations are encouraged on weekends and event nights.
            </p>
            <a
              href="#reserve"
              className="mt-10 inline-flex items-center gap-3 bg-gold text-noir px-7 py-3.5 text-xs uppercase tracking-[0.28em] hover:bg-gold-bright transition-colors"
            >
              Book a Table
            </a>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {hours.map((h, i) => (
              <li
                key={h.day}
                className={`flex items-center justify-between py-4 px-2 transition-colors ${
                  i === todayIdx
                    ? "bg-wine-900/40 text-gold"
                    : "text-cream/80 hover:text-cream"
                }`}
              >
                <span className="font-serif text-xl flex items-center gap-3">
                  {h.day}
                  {i === todayIdx && (
                    <span className="text-[10px] uppercase tracking-[0.25em] border border-gold/50 px-2 py-0.5">
                      Today
                    </span>
                  )}
                </span>
                <span className="text-sm tabular-nums">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reserve & Contact */}
      <div id="reserve" className="py-28 md:py-36 px-6 bg-gradient-to-b from-noir via-wine-900/30 to-noir border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="gold-divider">Reservations</span>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl text-cream leading-tight">
              Save your
              <span className="italic text-gold-gradient"> evening.</span>
            </h2>
            <p className="mt-5 text-cream/60">
              Tell us when you'd like to arrive. We'll have your table — and
              your first glass — waiting.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. Our host will confirm your reservation shortly by phone.");
              }}
              className="mt-10 grid sm:grid-cols-2 gap-5"
            >
              <Field label="Name" type="text" required />
              <Field label="Phone" type="tel" required />
              <Field label="Date" type="date" required />
              <Field label="Time" type="time" required />
              <div className="sm:col-span-2">
                <Field label="Guests" type="number" defaultValue={2} min={1} max={20} required />
              </div>
              <button className="sm:col-span-2 mt-3 bg-gold text-noir py-4 text-xs uppercase tracking-[0.28em] hover:bg-cream transition-colors">
                Request Reservation
              </button>
            </form>
          </div>

          {/* Contact */}
          <div className="md:pl-8 md:border-l border-white/10">
            <span className="gold-divider">Contact</span>
            <h3 className="mt-6 font-serif text-4xl text-cream">
              Or simply call.
            </h3>

            <a
              href="tel:+994505191411"
              className="mt-8 block group"
            >
              <div className="text-[11px] uppercase tracking-[0.3em] text-cream/50">
                Reservations
              </div>
              <div className="mt-2 font-serif text-4xl md:text-5xl text-gold-gradient group-hover:tracking-wide transition-all">
                050 519 14 11
              </div>
            </a>

            <div className="mt-12 space-y-7 text-cream/75">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-cream/50">
                  Address
                </div>
                <div className="mt-2 font-serif text-xl leading-relaxed">
                  Ağ şəhər, Mərkəzi Bulvar 5<br />
                  Baku 1025, Azerbaijan
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mərkəzi+Bulvar+5+Baku"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold border-b border-gold/40 hover:border-gold"
                >
                  Get Directions →
                </a>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-cream/50">
                  Email
                </div>
                <div className="mt-2 font-serif text-xl">
                  reservations@royalgrape.az
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {["Instagram", "Facebook", "TripAdvisor"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[11px] uppercase tracking-[0.25em] text-cream/60 border border-white/15 px-4 py-2 hover:border-gold hover:text-gold transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative h-[480px] w-full overflow-hidden border-t border-white/5">
        <iframe
          title="The Royal Grape map"
          src="https://www.google.com/maps?q=Mərkəzi+Bulvar+5+Baku&output=embed"
          className="w-full h-full grayscale contrast-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-noir/40 via-transparent to-noir/60 mix-blend-multiply" />
        <div className="pointer-events-none absolute top-8 left-8 bg-noir/85 backdrop-blur-sm border border-gold/30 p-6 max-w-xs">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
            Find Us
          </div>
          <div className="mt-2 font-serif text-2xl text-cream leading-tight">
            Mərkəzi Bulvar 5
          </div>
          <div className="text-cream/60 text-sm mt-1">
            Ağ şəhər · Baku 1025
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50">
        {label}
      </span>
      <input
        {...props}
        className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-cream font-serif text-lg [color-scheme:dark]"
      />
    </label>
  );
}
