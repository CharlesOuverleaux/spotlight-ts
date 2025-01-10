import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Charles Ouverleaux',
    default:
      'Charles Ouverleaux - Frontend Engineer and Entrepreneur. Building products that makes a difference.',
  },
  description:
    'I’m Charles, a frontend engineer and entrepreneur based in Berlin, Germany. I’m currently working at Metycle as a Frontend Engineer, supporting to build a ciruclar economy for metals. On the side I run ontour.pro, where we develop technologies that empower diy musicians to plan their tours.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  )
}
