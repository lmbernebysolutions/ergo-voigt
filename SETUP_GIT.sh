#!/bin/bash

# Git Setup Script für Ergotherapie Voigt Website
# Führt alle notwendigen Git-Operationen aus

echo "🚀 Git Setup für Ergotherapie Voigt Website"
echo ""

# Prüfe ob Git initialisiert ist
if [ ! -d ".git" ]; then
    echo "📦 Git Repository initialisieren..."
    git init
    git branch -M main
fi

# Prüfe ob Remote bereits existiert
if ! git remote | grep -q "origin"; then
    echo "🔗 Remote Repository hinzufügen..."
    git remote add origin https://github.com/lmbernebysolutions/ergo-voigt.git
else
    echo "✅ Remote Repository bereits vorhanden"
    git remote set-url origin https://github.com/lmbernebysolutions/ergo-voigt.git
fi

# Alle Dateien hinzufügen
echo "📝 Dateien zum Staging hinzufügen..."
git add .

# Commit erstellen
echo "💾 Commit erstellen..."
git commit -m "Production-ready: Ergotherapie Voigt Website mit Passwort-Schutz

- Vollständiger Passwort-Schutz implementiert (Voigt2025!)
- Navbar-Text aktualisiert: 'Praxen im Erzgebirge'
- Vercel Deployment-Konfiguration
- Mobile-First Responsive Design
- FAQ-System mit Themen-Kategorien
- Interaktive Bildergalerien
- WCAG-konforme Accessibility"

# Status anzeigen
echo ""
echo "📊 Git Status:"
git status

echo ""
echo "✅ Setup abgeschlossen!"
echo ""
echo "📤 Zum Pushen auf GitHub ausführen:"
echo "   git push -u origin main"
echo ""
echo "🚀 Für Vercel Deployment:"
echo "   vercel login"
echo "   vercel --prod"
