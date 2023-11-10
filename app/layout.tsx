import Head from 'next/head'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import background from '@/public/images/background.png'
import Nav from './components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Erdre et Dev - Expertise en développement web',
  description: 'Erdre et Dev spécialisé dans le développement web, création de sites, d\'applications mobiles, et de web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <div className=''>
        <Nav />
        </div>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image
        alt="Background"
        src={background}
        fill
        quality={100}
        style={{
          objectFit: 'cover',
          objectPosition: 'center 10%',
          marginTop : '0rem'
        }}
        
      />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {children}
      </div>
    </div>



      </body>
    </html>
  )
}
