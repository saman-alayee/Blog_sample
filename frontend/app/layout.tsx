import { Spline_Sans } from 'next/font/google'
import { Providers } from '../providers/next-ui/providers';
import '@/styles/globals.css'
import { NextThemeProvider } from "providers/next-theme";
import NavBar from '@/components/navbar';
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
            <main>
            <div className='w-full relative top-8 z-40'>
            <NavBar/>
            </div>
              {children}
            </main>
          </NextThemeProvider>
        </Providers>
      </body>
    </html>

  )
}