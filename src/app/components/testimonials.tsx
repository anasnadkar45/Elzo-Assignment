import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Topmate from '../../../public/Topmate Logo 1-Cz03129y.svg'
import Conquer from '../../../public/Conquer logo 1-aig4X9TT.svg'
import Blend from '../../../public/Blend logo 1-csJtI1YI.svg'
import Wave from '../../../public/wave.svg'

const testimonials = [
  {
    quote: "We use Elzo to understand users signing up from outside India - how their needs and behaviors differ from our Indian users. Elzo talks to 100s of our new users in their language and uncovers insights like a superhuman. What we used to get done in weeks, Elzo does in days. Game changer.",
    author: "Ankit Agarwal",
    role: "Founder & CEO, Topmate",
    company: {
      name: "Topmate",
      logo: Topmate
    },
    avatar: "/placeholder.svg?height=48&width=48"
  },
  {
    quote: "I am impressed by Elzo and its application of Generative AI. As someone who constantly deals with surveys for gathering customer feedback, it's incredibly refreshing to see a tool that prioritizes efficiency without sacrificing quality.",
    author: "Brendan Whitson",
    role: "Head of product, Conquer",
    company: {
      name: "CONQUER",
      logo: Conquer
    },
    avatar: "/placeholder.svg?height=48&width=48"
  },
  {
    quote: "Elzo helped us understand why a lot of users were uninstalling our app, and within a couple of months of using them, we've learned so many nuances typical surveys missed. We decreased our 7-day uninstalls by more than 20%, just by being able to listen to our users in their language and at scale, 24/7.",
    author: "Vishwanath Kollapudi",
    role: "Founder & CEO, Blend",
    company: {
      name: "Blend",
      logo: Blend
    },
    avatar: "/placeholder.svg?height=48&width=48"
  }
]

export default function Testimonials() {
  return (
    <section className="px-3">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16">
            What our customers are saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-foreground shadow-lg rounded-xl">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-8 h-8">
                    <Image
                      src={testimonial.company.logo}
                      alt={testimonial.company.name}
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </div>

                  <blockquote className="flex-grow mb-8">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-800">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Image src={Wave} alt="wave" className="max-w-fit mx-auto mt-10 " />
        </div>
      </div>
    </section>
  )
}

