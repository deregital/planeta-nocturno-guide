# Planeta Nocturno - Guía

Guía de uso del sistema **Planeta Nocturno**, construida con [Astro](https://astro.build).

## Estructura

```
src/
├── data/
│   └── guide.ts          # Datos y tipos: roles, sectores, ítems
├── components/
│   ├── GuideTopbar.astro  # Barra superior con roles y sectores
│   └── GuideAccordionItem.astro  # Acordeón desplegable (título + texto + video)
├── layouts/
│   └── Layout.astro       # Layout global
├── pages/
│   ├── index.astro        # Landing con selector de rol
│   └── guia/
│       └── [rol].astro    # Página dinámica por rol
└── styles/
    └── guide.css          # Estilos globales
```

## Cómo editar el contenido

Todo el contenido se gestiona desde `src/data/guide.ts`. La estructura es:

```ts
roles[] → sectors[] → items[]
```

Cada **ítem** tiene:

| Campo   | Tipo     | Descripción                          |
|---------|----------|--------------------------------------|
| `title` | string   | Título del acordeón                  |
| `body`  | string   | Texto explicativo                    |
| `video` | opcional | `{ kind: "embed" \| "file", url }` |

### Agregar un video embebido (YouTube/Vimeo)

Usá la URL de embed, no la URL normal:

```ts
video: { kind: "embed", url: "https://www.youtube.com/embed/VIDEO_ID" }
```

### Agregar un video local

1. Colocá el archivo en `public/videos/` (ej: `public/videos/tutorial.mp4`)
2. Referencialo así:

```ts
video: { kind: "file", url: "/videos/tutorial.mp4" }
```

## Comandos

| Comando             | Acción                                  |
|---------------------|-----------------------------------------|
| `npm install`       | Instala dependencias                    |
| `npm run dev`       | Servidor de desarrollo en localhost:4321 |
| `npm run build`     | Build de producción en `./dist/`        |
| `npm run preview`   | Preview del build localmente            |
