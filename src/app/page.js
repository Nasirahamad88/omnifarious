import AllLogo from "./Component/AllLogo";
import Carousel from "./Component/Carousel";
import Testimonials from "./Component/Testimonials";
import GallerySection from "./gallery/page";
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
      <GallerySection/>
      <Testimonials />
      <AllLogo/>
   </section>
  );
}
