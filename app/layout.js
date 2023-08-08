import { Inter } from 'next/font/google'
import '../globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReduxProvider } from '@/redux/provider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce',
  description: 'E-commerce site for shops',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>
        <ReduxProvider>

        {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
