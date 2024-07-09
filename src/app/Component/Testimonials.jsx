"use client"
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BASE_API_URL } from "../../../utils/constants";
const Testimonials = () => {

  

 const [testimonials, setTestimonials] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const fetchTestimonials = async () => {
    
     try {
       const res = await fetch(`${BASE_API_URL}/api/testimonial`);
       if (!res.ok) {
         throw new Error("Failed to fetch testimonials");
       }
       const data = await res.json();
       setTestimonials(data);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   };

   fetchTestimonials();
 }, []);

 const settings = {
   direction: "left",
   speed: 50,
   pauseOnHover: true,
   gradient: false,
   gradientColor: "#ffffff00",
   gradientWidth: 10,
 };

 if (loading) {
   return <div>Loading...</div>;
 }
  

  return (
    <section>
      <div className="bg-white py-10">
        <h1 className="text-4xl font-bold text-center py-10 text-black">
          Words From Our Partners And Clients
        </h1>
        <Marquee {...settings} className="flex space-x-6">
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="card  w-96 shadow-xl bg-slate-600"
              >
                <div className="card-body">
                  <h2 className="card-title">{testimonial.name}</h2>
                  <p>"{testimonial.message}"</p>
                  <h3 className="card-subtitle text-white">
                    "{testimonial.post}"
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
