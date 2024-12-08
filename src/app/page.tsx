import Image from "next/image";
import { Hero } from "./components/Hero";
import { ProductDemo } from "./components/ProductDemo";
import HowItWorks from "./components/HowItWorks";
import QuestionCards from "./components/QuestionCards";
import { Discover } from "./components/Discover";
import Testimonials from "./components/testimonials";
import BlogPosts from "./components/BlogPosts";
import { BookNow } from "./components/BookNow";

export default function Home() {
  return (
    <div className="min-h-screen space-y-20 pb-20">
      <Hero />
      <ProductDemo />
      <HowItWorks />
      <QuestionCards />
      <Discover />
      <Testimonials />
      <BlogPosts />
      <BookNow />
    </div>
  );
}
