import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Charles Ouverleaux. I live in Berlin, where I build  products that make a difference.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Charles. I live in Berlin, where I build products that make a
            difference.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved building things for as long as I can remember, after
              working on the business side (Account Management and Marketing)
              for over 6 years, I decided to dive into software engineering to
              be able to create new products more independently.
            </p>
            <p>
              I started my journey learning the fundamentals of programming on
              my own but quickly realized that I needed strucutre and hands on
              experience to be able to learn faster and more efficiently. I
              joined a coding bootcamp (LeWagon) where I learned the basics of
              web development. I ended the bootcamp leading a MVP project from
              ideation to production, which was really fun.
            </p>
            <p>
              The bootcamp was great to get the basics but to work as a
              developer, I focused on learning and building with commonly used
              tech stacks. I spent time learning React and diving into next.js.
              After contributing to the next.js community, I crossed path with
              people at OneFootball Labs and that&apos;s where my professional
              journey started.
            </p>
            <p>
              I spent the next years working as a software engineer, focusing on
              frontend technologies, for multiple companies. At OneFootball, we
              developed a cutting-edge web3 marketplace using React and
              TypeScript. At Project A, I had the chance to contribute to a wide
              range of projects, from building products from scratch to working
              on large scale platforms.
            </p>
            <p>
              Today, I’m working at Metycle as a Frontend Engineer, supporting
              to build a ciruclar economy for metals. On the side I founded and
              run ontour.pro, where we develop technologies that empower diy
              musicians to plan their tours. Sometimes, I write about triathlons
              and surfing :)
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/CO_IN_TECH" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://github.com/CharlesOuverleaux"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/charlesouverleaux/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:charlesantoine.ouverleaux@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              charlesantoine.ouverleaux@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
