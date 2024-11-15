import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoMetycle from '@/images/logos/metycle.png'
import logoProjectA from '@/images/logos/projectA.png'
import logoOneFootball from '@/images/logos/onefootball.png'
import logoAmazon from '@/images/logos/amazon.png'
import logoNu3 from '@/images/logos/nu3.png'
import logoHome24 from '@/images/logos/home24.png'
import logoLeWagon from '@/images/logos/lewagon.png'

const works = [
  {
    name: 'METYCLE',
    description:
      'Currently building the platform to accelerate the global circular flow of secondary metals',
    link: { href: '/work/metycle', label: 'metycle.com' },
    logo: logoMetycle,
  },
  {
    name: 'Project A',
    description:
      'Designed, planned and implemented business-critical, performant and accessible user interfaces with project A portfolio companies',
    link: { href: '/work/project-a', label: 'project-a.com' },
    logo: logoProjectA,
  },
  {
    name: 'Project A - METYCLE',
    description:
      'Project: enabled a seamless content delivery experience and improved overall system performance and maintainability',
    link: { href: '/work/project-a-metycle', label: 'project-a.com' },
    logo: logoProjectA,
  },
  {
    name: 'Project A - Enapi',
    description:
      'Project: developed the MVP of the user interface from the ground up',
    link: { href: '/work/project-a-enapi', label: 'project-a.com' },
    logo: logoProjectA,
  },
  {
    name: 'OneFootball (Labs)',
    description:
      'Developed a cutting-edge web3 marketplace using React and TypeScript',
    link: { href: '/work/onefootball', label: 'onefootball.com' },
    logo: logoOneFootball,
  },
  {
    name: 'LeWagon - SurfEasy & Rent a Techy',
    description:
      'Completed the coding bootcamp, launched two MVP projects from ideation to production',
    link: { href: '/work/lewagon', label: 'lewagon.com' },
    logo: logoLeWagon,
  },
  {
    name: 'Amazon',
    description:
      "Consulted Europe's largest startups and emerging brands grow their businesses across 6 countries",
    link: { href: '/work/amazon', label: 'amazon.com' },
    logo: logoAmazon,
  },
  {
    name: 'nu3',
    description:
      'Led the category management of the French market and led the CRM marketing team',
    link: { href: '/work/nu3', label: 'nu3.de' },
    logo: logoNu3,
  },
  {
    name: 'Home24',
    description: 'Launched and developed the sales of the international shops',
    link: { href: '/work/home24', label: 'home24.com' },
    logo: logoHome24,
  },
]

export const metadata: Metadata = {
  title: 'Work',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Work() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of projects over the years but these are the ones that I’m most proud of."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {works.map((work) => (
          <Card as="li" key={work.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={work.logo}
                alt={work.name}
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={`${work.link.href}`}>{work.name}</Card.Link>
            </h2>
            <Card.Description>{work.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <span>Read more</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
