import { Spline_Sans } from 'next/font/google'
import { Providers } from './providers';
//import { ScrollShadow } from "@nextui-org/react";
import '@/styles/globals.css'

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
    <html lang="en">
      <body className="min-w-full min-h-screen">
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}