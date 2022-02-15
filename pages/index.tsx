import Head from 'next/head'

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
      </Head>
    </div>
  )
}
