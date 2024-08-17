import AllLogo from "./Component/AllLogo";
import Carousel from "./Component/Carousel";
import Testimonials from "./Component/Testimonials";
import AboutUs from "./aboutus/page";
// import CompletedProjects from "./completedProjects/page";
import Contact from "./contact/page";
import Gallery from "./gallery/page";
import OurTeam from "./ourTeam/page";
import Services from "./services/page";
import WhyUs from "./whyUs/page";

export default function Home() {
  return (
    <section>
      <Carousel />
      <AboutUs/>
      <Services />
      <WhyUs />
      <OurTeam />
      <Gallery />
     
      
      <Testimonials />
      <AllLogo />
      <Contact/>
   </section>
  );
}
