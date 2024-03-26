import AllLogo from "./Component/AllLogo";
import Carousel from "./Component/Carousel";
import Testimonials from "./Component/Testimonials";
import Contact from "./contact/page";
import GallerySection from "./gallery/page";
import OngoingProject from "./ongoingProjects/page";
import OurTeam from "./ourTeam/page";
// import KeenSlider from "./Component/KeenSlider";
import Services from "./services/page";
import WhyUs from "./whyUs/page";

export default function Home() {
  return (
    <section>
      <Carousel />
      <Services />
      <WhyUs />
      <OurTeam />
      <GallerySection />
      <OngoingProject/>
      <Testimonials />
      <AllLogo />
      <Contact/>
   </section>
  );
}
