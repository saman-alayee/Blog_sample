import { Noto_Sans } from 'next/font/google'
import '@/styles/globals.css'


const noto_sans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400','200'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${noto_sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}