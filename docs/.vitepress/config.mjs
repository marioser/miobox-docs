import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MIOBOX Docs",
  description: "Configuración y Usos",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/introduccion/objetivo' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          { text: 'Objetivo de MIOBOX', link: '/introduccion/objetivo' },
          { text: 'Beneficios claves', link: '/introduccion/beneficios' },
          {text:'Primeros pasos', link:'/introduccion/inicio',
            items: [
              { text: 'Componentes', link: '/introduccion/inicio.html#componentes-de-la-aplicacion' },
            ]
          }
        ]
      },
      {
        text: 'Módulos de la aplicación',
        items: [
          { 
            text: 'Producción', link:'/produccion/index',
            items: [
              { text: 'Unidades', link: '/produccion/index#unidades' },
              { text: 'Localizaciones', link: '/produccion/index#localizaciones' },
              { text: 'Lineas de producción', link: '/produccion/index#lineas-de-producción' },
              { text: 'Materiales', link: '/produccion/index#materiales' },
              { text: 'Recetas', link: '/produccion/index#recetas' }
            ]
          },
          { text: 'Planeacion', link: '/planeacion/index',
            items: [
              { text: 'Primeros pasos', link: '/planeacion/index#' },
              { text: 'Funciones', link: '/planeacion/#funciones-especificas' },
              { text: 'Datos recopilados', link: '/planeacion/#datos-recopilados' },
              { text: 'Trazabilidad', link: '/planeacion/#trazabilidad' },
              { text: 'Detalle del modulo', link: '/planeacion/#detalles-del-modulo' }
            ]
           },
          { text: 'Comunicaciones', link: '/comunicaciones/index' },
          { text: 'Análisis', link: '/' },
          { text: 'Seguridad', link: '/' },
          { text: 'Configuracion', link: '/' },
        ]
      },{
      text: 'Soporte',
      items: [
        { 
          text: 'Generar Ticket', link:'/produccion/index',}]
    }
    ],

    socialLinks: [
      { icon: 'github', link: '/' }
    ]
  }
})
