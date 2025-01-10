import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Thumbnail from '@/images/avatar.png'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Charles Ouverleaux',
    default:
      'Charles Ouverleaux - Frontend engineer & product developer, crafting impactful apps.',
  },
  description:
    'I’m Charles, a frontend engineer and product developer based in Berlin, Germany. I’m currently working at METYCLE as a Frontend Engineer, building a circular economy for metals. On the side, I craft SaaS for communities I’m passionate about.',
  openGraph: {
    title:
      'Charles Ouverleaux - Frontend engineer & product developer, crafting impactful apps.',
    description:
      'I’m Charles, a frontend engineer and product developer based in Berlin, Germany. I’m currently working at METYCLE as a Frontend Engineer, building a circular economy for metals. On the side, I craft SaaS for communities I’m passionate about.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: Thumbnail.src,
        secureUrl: Thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Preview image for Charles Ouverleaux's Blog",
      },
    ],
    type: 'website',
    siteName: "Charles Ouverleaux's Blog",
  },
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
