# Deployment Guide - Ergotherapie Voigt

## 🚀 Vercel Deployment

### Voraussetzungen
- Node.js 20+ installiert
- Git installiert
- Vercel CLI installiert: `npm i -g vercel`

### 1. Git Repository Setup

```bash
# Im Projektverzeichnis
cd ergotherapie-voigt

# Git initialisieren (falls noch nicht geschehen)
git init

# Remote Repository hinzufügen
git remote add origin https://github.com/lmbernebysolutions/ergo-voigt.git

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Production-ready Ergotherapie Voigt Website"

# Auf GitHub pushen
git branch -M main
git push -u origin main
```

### 2. Vercel Deployment

#### Option A: Via Vercel CLI (Empfohlen)

```bash
# In das Projektverzeichnis wechseln
cd ergotherapie-voigt

# Vercel Login
vercel login

# Projekt deployen
vercel

# Für Production Deployment
vercel --prod
```

#### Option B: Via Vercel Dashboard

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf "Add New Project"
3. Importiere das GitHub Repository `lmbernebysolutions/ergo-voigt`
4. Vercel erkennt automatisch Next.js
5. Klicke auf "Deploy"

### 3. Umgebungsvariablen (falls benötigt)

Falls später Umgebungsvariablen benötigt werden:
- Gehe zu Project Settings > Environment Variables
- Füge Variablen hinzu

### 4. Passwort-Schutz

Die Website ist mit einem Passwort geschützt:
- **Passwort:** `Voigt2025!`
- Der Passwort-Schutz wird über Middleware implementiert
- Nach erfolgreicher Anmeldung wird ein Cookie gesetzt (24h gültig)

### 5. Build & Test lokal

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build testen
npm run build
npm run start
```

## 📁 Projektstruktur

```
ergotherapie-voigt/
├── src/
│   ├── app/              # Next.js App Router Seiten
│   ├── components/        # React Komponenten
│   ├── data/             # Statische Daten
│   ├── lib/              # Utilities
│   └── middleware.ts     # Passwort-Schutz Middleware
├── public/               # Statische Assets
├── .gitignore           # Git Ignore Regeln
├── next.config.ts       # Next.js Konfiguration
├── package.json         # Dependencies
└── vercel.json          # Vercel Deployment Konfiguration
```

## 🔒 Sicherheit

- Passwort-Schutz für alle Routen (außer `/login`)
- Cookie-basierte Authentifizierung
- Middleware schützt alle Seiten automatisch

## 🛠️ Technologie-Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📝 Wichtige Hinweise

1. **Passwort ändern:** Passwort in `src/middleware.ts` und `src/app/login/page.tsx` ändern
2. **Environment Variables:** Für Production können Umgebungsvariablen in Vercel gesetzt werden
3. **Custom Domain:** In Vercel Project Settings > Domains konfigurieren

## 🐛 Troubleshooting

### Build Fehler
```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
```

### Vercel Deployment Fehler
- Prüfe Build-Logs in Vercel Dashboard
- Stelle sicher, dass `package.json` korrekt ist
- Prüfe `next.config.ts` auf Fehler

### Passwort funktioniert nicht
- Prüfe Browser-Cookies (müssen aktiviert sein)
- Prüfe ob Middleware korrekt läuft
- Prüfe Console auf Fehler
