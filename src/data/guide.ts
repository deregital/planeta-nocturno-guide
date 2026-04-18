export interface VideoSource {
  kind: "embed" | "file";
  url: string;
}

export interface GuideItem {
  title: string;
  video: VideoSource;
}

export interface Role {
  id: string;
  label: string;
  slug: string;
  items: GuideItem[];
}

export const roles: Role[] = [
  {
    id: "administrador",
    label: "Administrador",
    slug: "administrador",
    items: [
      // {
      //   title: "Crear un nuevo usuario",
      //   video: {
      //     kind: "embed",
      //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   },
      // },
      // {
      //   title: "Editar permisos de un usuario",
      //   video: {
      //     kind: "embed",
      //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   },
      // },
      // {
      //   title: "Modificar parámetros generales",
      //   video: {
      //     kind: "embed",
      //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   },
      // },
    ],
  },
  {
    id: "jefe-organizadores",
    label: "Jefe de Organizadores",
    slug: "jefe-organizadores",
    items: [
      // {
      //   title: "Ver resumen de evento",
      //   video: {
      //     kind: "embed",
      //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   },
      // },
      // {
      //   title: "Asignar organizadores a un evento",
      //   video: {
      //     kind: "embed",
      //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   },
      // },
    ],
  },
  {
    id: "organizadores",
    label: "Organizadores",
    slug: "organizadores",
    items: [
      {
        title: "Inicio de sesión",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/USqp59OW0CM",
        },
      },
      {
        title: "Visualizar evento",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/-F3FTuWsXAQ",
        },
      },
      {
        title: "Compartir link a contacto",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/5wdX4oGA130",
        },
      },
      {
        title: "Subir a estados",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/1AuTGhVgJtE",
        },
      },
      {
        title: "Reenviar PDF",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/S7wFuBQQwus",
        },
      },
      {
        title: "Visualizar escaneo en vivo",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/CB-sVBfkR4k",
        },
      },
      {
        title: "Reenviar y descargar",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/gb5Mgv709iw",
        },
      },
      {
        title: "Crear acceso directo",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/RNq2aNETrxY",
        },
      },
      {
        title: "Crear acceso directo (instalar)",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/QNCm0i3Xz1I",
        },
      },
      {
        title: "Recorrido por la plataforma",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/1cUSdNW0vY4",
        },
      },
      {
        title: "Recorrido por cada menú",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/rpaFMeJ1XpA",
        },
      },
      {
        title: "Recorrido por evento particular",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/5UwumhwXEK8",
        },
      },
      {
        title: "Copiar link de tickets",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/ai59s3VA0JM",
        },
      },
      {
        title: "Visualizar la compra de entradas",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/q7usjkELq6Q",
        },
      },
      {
        title: "Tipos de tickets y buscador en evento particular",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/3s5pqCddaYs",
        },
      },
      {
        title: "Copiar link por tipo de ticket",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/PdPxmlOisyU",
        },
      },
      {
        title: "Asistir a tus compradores: Reenviar y descargar",
        video: {
          kind: "embed",
          url: "https://www.youtube.com/embed/gb5Mgv709iw",
        },
      },
    ],
  },
  {
    id: "acceso",
    label: "Acceso",
    slug: "acceso",
    items: [
      // {
      //   title: "Escanear una entrada",
      //   video: {
      //     kind: "embed",
      //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   },
      // },
      // {
      //   title: "Buscar un asistente manualmente",
      //   video: {
      //     kind: "embed",
      //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   },
      // },
    ],
  },
];

export function getRoleBySlug(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug);
}

export function getAllSlugs(): string[] {
  return roles.map((r) => r.slug);
}
