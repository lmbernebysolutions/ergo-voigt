# Research Prompt: Mobile-First Optimization für Ergotherapie-Praxis Website

## Kontext
Ich entwickle eine Next.js 15 + TypeScript + Tailwind CSS Website für eine Ergotherapie-Praxis mit 3 Standorten. Die Website nutzt Framer Motion für Animationen, shadcn/ui Komponenten, und hat folgende Hauptseiten:
- Homepage (Hero, Service-Cards, Location-Cards)
- Leistungen (Service-Grid mit Modals)
- Praxis (3 Standorte mit Galerien)
- Team
- Karriere

## Aktuelle Technologie-Stack
- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript 5.3 (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Animationen:** Framer Motion
- **UI-Komponenten:** shadcn/ui (Radix UI based)
- **Icons:** Lucide React
- **Package Manager:** npm

## Spezifische Anforderungen für Mobile-Optimierung

### 1. First View / Above-the-Fold Optimierung
- **Problem:** Hero-Section muss vollständig auf allen Geräten (320px - 1920px+) sichtbar sein
- **Anforderungen:**
  - Hero-Text, CTA-Buttons und Hauptbild müssen ohne Scrollen sichtbar sein
  - Responsive Bildgrößen für Hero (nicht zu groß, nicht zu klein)
  - Touch-optimierte Button-Größen (min. 44x44px)
  - Keine abgeschnittenen Elemente auf Mobile

### 2. Typografie & Lesbarkeit (Barrierefreiheit)
- **WCAG AA/AAA Compliance:**
  - Kontrastverhältnisse für alle Text-Farben
  - Mindest-Schriftgrößen: 16px für Body-Text, 14px Minimum für sekundäre Texte
  - Zeilenhöhe: 1.5-1.75 für Body-Text
  - Responsive Typografie-Skala (Mobile: kleiner, Desktop: größer)
  - Touch-optimierte Link-Abstände (min. 8px zwischen klickbaren Elementen)

### 3. Layout & Spacing
- **Whitespace-Regeln:**
  - Konsistente Abstände zwischen Sektionen (Mobile: 2-3rem, Desktop: 4-6rem)
  - Padding in Cards: Mobile min. 1rem, Desktop 1.5-2rem
  - Grid-Gaps: Mobile 1rem, Tablet 1.5rem, Desktop 2rem
  - Container-Max-Widths für optimale Lesbarkeit (Mobile: 100%, Tablet: 90%, Desktop: 1280px)

### 4. Navigation & Interaktion
- **Mobile Navigation:**
  - Hamburger-Menu für Mobile (< 1024px)
  - Sticky/Fixed Header mit korrekter z-index Hierarchie
  - Touch-optimierte Navigation-Items (min. 48px Höhe)
  - Smooth Scroll zu Ankern
  - Back-Button Handling für Mobile Browser

### 5. Bilder & Medien
- **Responsive Images:**
  - Next.js Image-Komponente mit korrekten `sizes` Attributen
  - Lazy Loading für Bilder außerhalb des Viewports
  - WebP/AVIF Format-Optimierung
  - Aspect-Ratio Preservation auf allen Geräten
  - **Galerie-Bilder:** Müssen in der Galerie größer sein als die Vorschaubilder (min. 80vw auf Mobile, 60vw auf Desktop)

### 6. Cards & Komponenten
- **Service-Cards:**
  - Mobile: 1 Spalte, Tablet: 2 Spalten, Desktop: 3 Spalten
  - Touch-optimierte Click-Areas
  - Hover-Effekte nur auf Desktop (nicht auf Touch-Geräten)
  - Scroll-Animationen müssen auf Mobile performant sein

### 7. Modals & Overlays
- **Mobile-Optimierung:**
  - Fullscreen auf Mobile (< 768px)
  - Swipe-to-Close Gesten
  - Touch-optimierte Close-Buttons (min. 44x44px)
  - Keyboard-Navigation (ESC-Taste)
  - Focus-Trapping für Accessibility

### 8. Formulare & CTAs
- **Touch-Optimierung:**
  - Input-Felder: min. 44px Höhe
  - Button-Größen: Mobile min. 48x48px, Desktop 40-44px
  - Abstände zwischen Form-Elementen: min. 1rem
  - Placeholder-Text muss lesbar sein (nicht zu hell)

### 9. Performance
- **Mobile Performance:**
  - Lighthouse Mobile Score > 90
  - First Contentful Paint < 1.8s
  - Time to Interactive < 3.5s
  - Optimierte Bundle-Größe (Code-Splitting)
  - Lazy Loading für nicht-kritische Komponenten

### 10. Animationen
- **Mobile-optimierte Animationen:**
  - Reduzierte Animationen auf Low-End-Geräten (prefers-reduced-motion)
  - GPU-beschleunigte Transforms (transform, opacity)
  - Keine Layout-Shifts durch Animationen
  - Smooth 60fps Scroll-Animationen

## Spezifische Breakpoints (Tailwind CSS)
- **sm:** 640px (Mobile Landscape)
- **md:** 768px (Tablet Portrait)
- **lg:** 1024px (Tablet Landscape / Small Desktop)
- **xl:** 1280px (Desktop)
- **2xl:** 1536px (Large Desktop)

## Design-System Anforderungen
- **Farben:** OKLCH Format für Primary Colors
- **Schatten:** Soft Shadows mit Primary-Color Tints
- **Border-Radius:** rounded-2xl / rounded-3xl für Cards
- **Spacing-Scale:** 4px Base (0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, etc.)

## Accessibility (A11Y) Anforderungen
- **ARIA-Labels:** Für alle interaktiven Elemente
- **Keyboard-Navigation:** Tab-Order, Focus-States
- **Screen-Reader:** Semantisches HTML, Alt-Texte für Bilder
- **Color-Blindness:** Nicht nur Farbe für Information verwenden
- **Touch-Targets:** Min. 44x44px (Apple HIG) / 48x48px (Material Design)

## Was ich brauche

Bitte recherchiere und liefere mir:

1. **Best Practices für Mobile-First Design in Next.js 15:**
   - Konkrete Code-Beispiele für responsive Layouts
   - Tailwind CSS v4 Mobile-Patterns
   - Next.js Image-Optimierung für Mobile

2. **WCAG 2.1 AA/AAA Compliance Checkliste:**
   - Spezifische Kontrast-Werte für meine Farben (Primary: oklch(0.55 0.15 260))
   - Typografie-Größen für verschiedene Viewport-Größen
   - Touch-Target-Größen und Abstände

3. **Performance-Optimierung für Mobile:**
   - Code-Splitting Strategien für Next.js 15
   - Image-Optimierung (WebP, AVIF, sizes-Attribute)
   - Bundle-Size-Optimierung

4. **Animation-Performance auf Mobile:**
   - Framer Motion Best Practices für Mobile
   - CSS-Animationen vs. JavaScript-Animationen
   - prefers-reduced-motion Handling

5. **Touch-Gesten & Mobile-Interaktionen:**
   - Swipe-Gesten für Modals/Galerien
   - Touch-Optimierung für Cards
   - Mobile-Navigation-Patterns

6. **Responsive Typography-System:**
   - Fluid Typography (clamp) für verschiedene Viewports
   - Line-Height-Skala
   - Font-Size-Skala für Mobile/Tablet/Desktop

7. **Layout-Patterns für Mobile:**
   - Grid-Layouts (1/2/3 Spalten basierend auf Viewport)
   - Card-Layouts mit optimalen Abständen
   - Hero-Section Mobile-Optimierung

8. **Galerie-Optimierung:**
   - Mobile-Galerie mit größeren Bildern als Vorschaubilder
   - Touch-Gesten (Swipe, Pinch-to-Zoom)
   - Performance-Optimierung für viele Bilder

9. **Konkrete Code-Beispiele:**
   - Responsive Hero-Section
   - Mobile-optimierte Service-Cards
   - Touch-optimierte Buttons
   - Mobile-Navigation
   - Responsive Modals

10. **Testing-Strategien:**
    - Device-Testing (iPhone SE, iPhone 14 Pro, iPad, Android)
    - Browser-Testing (Safari iOS, Chrome Android, Firefox)
    - Lighthouse Mobile Audit
    - Real Device Testing Tools

## Erwartetes Output-Format
Bitte liefere:
- **Konkrete Code-Snippets** (TypeScript/TSX)
- **Tailwind CSS Klassen** für verschiedene Breakpoints
- **Messbare Werte** (Pixel, rem, vw/vh)
- **Checklisten** für jede Kategorie
- **Priorisierte To-Do-Liste** für die Umsetzung
- **Referenzen** zu offiziellen Dokumentationen (Next.js, Tailwind, WCAG)

## Priorität
**Höchste Priorität:**
1. First View / Above-the-Fold
2. Touch-Optimierung (Buttons, Links, Cards)
3. Typografie & Lesbarkeit
4. Responsive Layouts

**Mittlere Priorität:**
5. Animation-Performance
6. Galerie-Optimierung
7. Navigation

**Niedrige Priorität:**
8. Erweiterte Animationen
9. Micro-Interactions

---

**Bitte recherchiere umfassend und liefere konkrete, umsetzbare Lösungen mit Code-Beispielen für jede Kategorie.**
