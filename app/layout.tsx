import { Suspense}  from 'react';
// import { Metadata } from 'next'
import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Analytics from '../components/Analytics'


const picnicRoboto = Roboto({
  weight : ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']  
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={picnicRoboto.className}>
        <Suspense>
          <Analytics />
        </Suspense>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
