import FeaturedCourses from "@/Components/FeaturedCourses";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Instructor from "@/Components/Instructor";
import MusicSchoolTestimonial from "@/Components/MusicSchoolTestimonial";
import UpcomingWebinar from "@/Components/UpcomingWebinar";
import WhyChooseUs from "@/Components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <UpcomingWebinar/>
      <Instructor/>
      <Footer/>
    
    </main>
    
  );
}
