import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 20

export async function getStaticProps() {
  const publications = await getAllFilesFrontMatter('publications')
  const initialDisplayPublications = publications.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(publications.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPublications, publications, pagination } }
}

export default function Publications({ initialDisplayPublications, publications, pagination }) {
  return (
    <>
      <PageSEO
        title={`Publications - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={publications}
        initialDisplayPosts={initialDisplayPublications}
        pagination={pagination}
        title="Publications"
      />
    </>
  )
}
