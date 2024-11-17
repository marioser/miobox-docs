import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-ES',
  title: "MIOBOX Docs",
  description: "Configuración y Usos",
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '../introduccion/assets/icono.svg',
    // https://vitepress.dev/reference/default-theme-config#navbar
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
          { text: 'Comunicaciones', link: '/comunicaciones/index' ,
          items: [
            { text: 'Protocolos', link: '/comunicaciones/index#protocolos' },
            { text: 'Tag', link: '/comunicaciones/index#tag' },
            { text: 'Parámetros de la conexión', link: '/comunicaciones/index#parametros-de-la-conexion' },
            { text: 'Tareas', link: '/comunicaciones/tareas' }
          ]},
          { text: 'Análisis', link: '/analisis/index' },
          { text: 'Seguridad', link: '/seguridad/index' },
          { text: 'Configuracion', link: '/' },
        ]
      },{
      text: 'Soporte',
      items: [
        { 
          text: 'Generar Ticket', link:'/soporte/index',}]
    }
    ],

    socialLinks: [
      { icon: 'github', link: '/' }
    ]
  }
})
