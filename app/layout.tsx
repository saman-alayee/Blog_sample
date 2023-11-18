"use client"
import { Spline_Sans } from 'next/font/google'
import { Providers } from '../providers/next-ui/providers';
import '@/styles/globals.css'
import { NextThemeProvider } from "providers/next-theme";
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import { usePathname } from 'next/navigation';
const spline_sans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  return (
    <html lang="en">
      <body className="w-full min-h-screen dark:bg-[#526D82] bg-white font-splinesans">
        <Providers>
          <NextThemeProvider>
            <nav className='w-full absolute top-8 z-40'>
              <NavBar />
            </nav>
            <main>
              <div className={`${pathname === '/' ? null : 'mt-20'}`}>
                {children}
              </div>
            </main>
            <footer className='w-full md:h-24 bg-white dark:bg-black flex flex-col justify-center md:items-center md:flex-row border-t'>
              <Footer />
            </footer>
          </NextThemeProvider>
        </Providers>
      </body>
    </html>
  )
}