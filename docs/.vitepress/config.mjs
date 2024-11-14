import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MIOBOX Docs",
  description: "Configuracion y Usos",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/objetivo' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          { text: 'Objetivo de MIOBOX', link: '/objetivo' },
          { text: 'Beneficios claves', link: '/beneficios' }
        ]
      },
      {
        text: 'Modulos',
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
          { text: 'Planeacion', link: '/' },
          { text: 'Comunicaciones', link: '/' },
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
