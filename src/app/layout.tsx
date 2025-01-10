import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const Thumbnail = '/images/avatar.png'

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
        url: Thumbnail,
        secureUrl: Thumbnail,
        width: 1200,
        height: 630,
        alt: "Preview image for Dan Mugh's Blog",
      },
    ],
    type: 'website',
    siteName: "Dan Mugh's Blog",
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
