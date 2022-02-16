import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  { title: 'Cryptoland', excerpt: 'Learn to create a web 3.0 app' },
  {
    title: 'Learn Solitidy',
    excerpt: 'Learn to write Solitidy using Hardhat',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Marvbuzz Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky"></div>
        </div>
      </div>
    </div>
  )
}
