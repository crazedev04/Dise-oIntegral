# DB Diseño Integral — Landing Page

## Project Overview
- **Name**: DB Diseño Integral
- **Type**: Landing page one-page (Next.js 15 + Tailwind CSS 4)
- **Core**: Diseño integral de espacios, interiores, fachadas, asesorías, renders
- **Target**: Dueños de viviendas, locales comerciales, emprendedores

---

## Design System

### Colors
```css
--bg: #F7F3ED;           /* Blanco roto */
--bg-card: #FFFFFF;      /* Blanco */
--primary: #1E1E1E;    /* Negro suave */
--accent: #8B735C;      /* Marrón suave */
--text: #1E1E1E;        /* Negro */
--text-muted: #6F6A63;   /* Gris cálido */
--border: #E8DDD0;       /* Beige claro */
```

### Typography
- **Headings**: DM Serif Display (elegant serif)
- **Body**: Inter (clean sans)

---

## Sections

### 1. Header
- Logo/nombre: DB Diseño Integral
- Nav: Servicios | Proceso | Proyectos | Contacto
- WhatsApp CTA

### 2. Hero
- Título: "Diseño integral para espacios funcionales y habitables"
- Subtítulo: "Transformamos ideas en espacios pensados para vivir, trabajar y disfrutar"
- CTAs: WhatsApp + "Ver proyectos"

### 3. Servicios
- Diseño de interiores
- Asesorías online y presenciales
- Fachadas
- Renders
- Proyectos residenciales y comerciales
- Mobiliario a medida

### 4. Proceso
1. Relevamiento
2. Propuesta conceptual
3. Desarrollo del diseño
4. Visualización
5. Entrega final

### 5. Portfolio
- 4 cards visuals (Casa Lumen, Fachada, Espacio comercial, Render interior)

### 6. Sobre DB
- Texto breve sobre la marca

### 7. CTA Final
- "¿Tenés un espacio que querés transformar?"
- Botones WhatsApp + Instagram

### 8. Footer
- Credits + Instagram + WhatsApp

---

## Site Config
```ts
export const siteConfig = {
  brandName: "DB Diseño Integral",
  whatsapp: "549XXXXXXXXXX",
  instagram: "https://www.instagram.com/db.disenointegral/",
  developerName: "Belatech",
  developerUrl: "",
};
```

---

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS 4
- DM Serif Display + Inter (Google Fonts)
- Lucide icons
- Framer Motion

---

## Acceptance Criteria
- [ ] Landing carga sin errores
- [ ] Diseño elegante, minimalista, premium
- [ ] Responsive mobile/tablet/desktop
- [ ] Botones WhatsApp funcionan
- [ ] Link Instagram visible
- [ ] No funcionalidades fuori alcance
- [ ] Crédito discreto al desarrollador