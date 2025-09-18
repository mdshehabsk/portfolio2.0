import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MD SHEHAB UDDIN',
    short_name: 'SHEHAB',
    description: 'A Progressive Web App built with Next.js For Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/MD_SHEHAB_UDDIN.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  }
}