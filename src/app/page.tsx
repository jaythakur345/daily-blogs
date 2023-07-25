import FeaturedPosts from '@/components/featuredPosts/featuredPosts'
import HeroSection from '@/components/hero/heroSection'
import Testimonial from '@/components/testimonials/testimonial'

export default function Home() {
  return (
    <div>
       <HeroSection />
       <FeaturedPosts />
       <Testimonial />
    </div>
  )
}
