import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import post1 from '../../../public/post1.avif'
import post2 from '../../../public/post2.avif'
import post3 from '../../../public/post3.avif'

const posts = [
  {
    date: "May 27, 2024",
    readTime: "5 min read",
    title: "Harness the Power of User Experience Research Tools for Your Business",
    image: post1,
    href: "#"
  },
  {
    date: "May 16, 2024",
    readTime: "5 min read",
    title: "How to Incorporate Conversational AI into Your Workflow",
    image: post2,
    href: "#"
  },
  {
    date: "Apr 4, 2024",
    readTime: "5 min read",
    title: "How to Incorporate Conversational AI into Your Workflow",
    image: post3,
    href: "#"
  }
]

export default function BlogPosts() {
  return (
    <section className="py-24 px-3">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16">
            Blog Posts
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden border border-foreground rounded-xl">
                <Link href={post.href} className="block">
                  <div className="w-[calc(100%-8)] h-[200px] rounded-md relative p-2 m-3">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold leading-tight mb-4">
                      {post.title}
                    </h3>
                    <span className="text-blue-500 inline-flex items-center mb-3">
                      Read more ››
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

