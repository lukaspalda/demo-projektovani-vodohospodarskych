# Demo Web — Projektování vodohospodářských staveb s.r.o.

Toto je demo web vytvořený agenturou WebZítra.
Cíl: Ukázat firmě, jak by mohl vypadat jejich nový profesionální web.

## Čti BRIEF.md
Veškerý obsah, informace o firmě, seznam obrázků a pokyny najdeš v **BRIEF.md**.
Začni tam.

## Tech stack
- HTML5, CSS3, vanilla JavaScript — **ŽÁDNÉ frameworky**
- System fonts (Inter via Google Fonts nebo system-ui)
- Netlify hosting (auto-deploy z main branch)
- Formuláře: Netlify Forms (`data-netlify="true"`)

## Pravidla
- **Čeština**, vykání, `&nbsp;` před jednopísmennými předložkami (k, s, v, z, o, u, i, a)
- Ceny v **CZK** (realistické pro český trh a obor firmy)
- Responzivní: **mobile-first**, breakpointy 1024px, 768px, 480px
- **Dark/light mode** — CSS custom properties jsou připravené v style.css
- **WCAG AA** kontrasty — barvy v CSS proměnných jsou accessibility-safe
- Obrázky z **img/** adresáře, ne externe
- Placeholder texty (Lorem ipsum, "Vaše firma") = **zakázané** — vše přepiš reálným obsahem

## Struktura
- `index.html` — hlavní stránka (šablona firma)
- `css/style.css` — styly s CSS custom properties (barvy hotové)
- `js/main.js` — interaktivita (dark mode, hamburger, scroll)
- `img/` — stažené fotky z webu firmy
- `BRIEF.md` — obsah a pokyny

## Git workflow
```bash
# Po dokončení:
git add -A
git commit -m "Demo web — Projektování vodohospodářských staveb s.r.o."
git push
```
Netlify auto-deploy se postará o zbytek. Web je live za ~30s.

## Deploy URL
https://wz-demo-projektovani-vodohospodarskych.netlify.app
