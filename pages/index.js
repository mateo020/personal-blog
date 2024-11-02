/* eslint-disable prettier/prettier */

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Skills from '@/components/Skills'
import { Analytics } from '@vercel/analytics/react'
import EducationTimeline from "@/components/Education"
import ExperienceTimeline from '@/components/Experience'
import ImagesCollection from '@/components/ImageCollection'
import RecentImages from '@/components/recentImages'
const MAX_DISPLAY = 6

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('blog')

//   return { props: { posts } }
// }

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Skills />
      < RecentImages MAX_IMAGES="4"/>
      <RecentProjects MAX_PROJECTS="4" />

      <div className="container mx-auto divide-y divide-gray-700">
        <div className="my-4 flex flex-col">
          <span className="font-poppins title-font text-3xl font-bold">Education</span>
          <EducationTimeline/>
        </div>
      </div>

      <div className="container mx-auto divide-y divide-gray-700">
        <div className="my-3 flex flex-col">
          <span className="font-poppins title-font text-3xl font-bold">Experince</span>
          <ExperienceTimeline/>
        </div>
      </div>
      
      <Analytics />
    </>
  )
}
