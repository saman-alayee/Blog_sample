import { Spline_Sans } from 'next/font/google'
import { Providers } from './providers';
import '@/styles/globals.css'
import { NextThemeProvider } from "@/components/nextTheme";
const spline_sans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='transition-colors duration-1000'>
      <body className="min-w-full min-h-screen font-splinesans">
        <Providers>
          <NextThemeProvider>
            <main>{children}</main>
          </NextThemeProvider>
        </Providers>
      </body>
    </html>

  )
}