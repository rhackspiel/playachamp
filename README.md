# TFB Events – Landingpage (React + Vite + Tailwind)

Moderne, sportliche Landingpage mit Weiß/Grau + Neon‑Grün Akzenten.

## Installation
```bash
npm install
npm run dev
```
Öffne die URL aus der Konsole.

## Build
```bash
npm run build
npm run preview
```

## Anpassungen
- Inhalte sind in `src/App.tsx`.
- Farben/Design via `tailwind.config.js`.
- Leichte UI-Komponenten unter `src/components/ui/*`.

## Formular (Demo)
Das Kontaktformular zeigt derzeit nur eine Demo‑Alert.  
Für echte Mails:
- `onSubmit` in `App.tsx` anpassen (z. B. an ein Backend/Webhook senden), oder
- `mailto:` verwenden.
