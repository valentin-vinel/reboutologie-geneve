# LP Reboutologue Genève
 
Site vitrine de Laurianne Vibert, reboutologue à Genève.  
Astro + Tailwind v4 — déployé sur Vercel.
 
## Stack
 
- [Astro](https://astro.build) (SSG, zéro JS par défaut)
- [Tailwind CSS v4](https://tailwindcss.com)
- Vercel
 
## Lancer le projet
 
```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```
 
## Images
 
Placer dans `/public/images/` au format **WebP** :
 
| Fichier | Utilisation |
|---|---|
| `hero-cabinet.webp` | Fond hero + section reboutologie |
| `laurianne-portrait.webp` | Section pourquoi Laurianne |
| `cabinet-acces.webp` | Section cabinet / localisation |
 
## GTM
 
Dans `src/layouts/Layout.astro`, remplacer le commentaire TODO par le tag GTM.  
⚠️ Ne pas hardcoder le tag de conversion Google Ads — le configurer dans GTM avec un déclencheur sur clic `tel:` uniquement.
 
## Scores Lighthouse (production)
 
- Performance : 99
- Accessibilité : 94
- Best Practices : 100
- SEO : 100