import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="w-full">
        <div className="pb-2 pt-8">
          <h1 className="text-2xl font-extrabold leading-9 text-gray-900 dark:text-gray-100">
            Projects
          </h1>
        </div>
        <div className="container">
          <div className="m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
