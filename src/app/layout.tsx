import './globals.css'
import Header from '../components/Headercomponent/Header'

export const metadata = {
  title: 'ARTTHÉA',
  description: 'Una ventana moderna al arte clásico y contemporáneo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
