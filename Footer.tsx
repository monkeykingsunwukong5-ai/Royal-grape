export default function Footer() {
  return (
    <footer className="bg-noir border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-5xl">🍇</div>
          <div className="mt-4 font-serif text-3xl text-cream">
            The Royal Grape
          </div>
          <div className="font-script text-gold text-3xl -mt-1">
            cheers to slow evenings
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center md:text-left text-sm text-cream/60">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Visit
            </div>
            Ağ şəhər, Mərkəzi Bulvar 5<br />
            Baku 1025, Azerbaijan
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Reserve
            </div>
            <a href="tel:+994505191411" className="hover:text-gold">
              050 519 14 11
            </a>
            <br />
            reservations@royalgrape.az
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Hours
            </div>
            Mon — Fri · 12:00 — 23:00
            <br />
            Sat — Sun · 10:00 — 23:00
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-cream/40">
          <div>© 2026 The Royal Grape · All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
