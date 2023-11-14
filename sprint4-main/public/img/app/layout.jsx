import "./globals.css";
import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GuinchoSeguro',
  description: 'Sprint 4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Cabecalho/>
          {children}
        <Rodape/>
      </body>
    </html>
  )
}