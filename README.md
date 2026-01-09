# Ergotherapie Anne-Karen Voigt - Website

Moderne, responsive Website für die Ergotherapie-Praxis mit drei Standorten im Erzgebirge.

## 🚀 Features

- **Passwort-Schutz:** Vollständiger Passwort-Schutz für alle Seiten
- **Responsive Design:** Optimiert für alle Geräte (Mobile-First)
- **3 Praxis-Standorte:** Aue, Schwarzenberg, Lößnitz
- **Service-Übersicht:** Standard- und Spezial-Leistungen
- **Team-Präsentation:** Mit Qualifikationen und Profilen
- **FAQ-System:** Mit Themen-Kategorien
- **Bildergalerien:** Interaktive Galerien für Praxen und Leistungen
- **Accessibility:** WCAG-konform, Keyboard-Navigation, Screen Reader Support

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build
npm run start
```

## 🔒 Passwort-Schutz

Die Website ist mit einem Passwort geschützt.
- Das Passwort wird über die Umgebungsvariable `SITE_PASSWORD` konfiguriert.
- Standardmäßig (Development) ist ein Fallback konfiguriert.
- Nach erfolgreicher Anmeldung wird ein Cookie gesetzt (24h gültig).

## 📁 Projektstruktur

```
src/
├── app/              # Next.js App Router Seiten
│   ├── login/       # Passwort-Login Seite
│   ├── api/         # API Routes (Auth)
│   └── ...
├── components/       # React Komponenten
│   ├── layout/      # Header, Footer
│   ├── sections/    # Hero, Services, Team, etc.
│   └── ui/          # UI Komponenten (shadcn/ui)
├── data/            # Statische Daten (Services, Team, FAQ, etc.)
├── lib/             # Utilities
└── middleware.ts    # Passwort-Schutz Middleware
```

## 🚀 Deployment

Siehe [DEPLOYMENT.md](./DEPLOYMENT.md) für detaillierte Anweisungen.

### Quick Start (Vercel CLI)

```bash
# Vercel Login
vercel login

# Deploy
vercel --prod
```

## 📝 Wichtige Hinweise

- **Passwort ändern:** Passwort über `SITE_PASSWORD` in `.env.local` (local) oder Environment Variables (Production) setzen.
- **Environment Variables:** Für Production können Umgebungsvariablen in Vercel gesetzt werden
- **Custom Domain:** In Vercel Project Settings > Domains konfigurieren

## 📄 Lizenz

Private Projekt - Alle Rechte vorbehalten
