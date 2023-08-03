import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Generate',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app mt-10'>
                {children}
            </main>
        </body>
    </html>
  )
}
