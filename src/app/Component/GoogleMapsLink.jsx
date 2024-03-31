import React from 'react'

const GoogleMapsLink = () => {
  return (
    <section className="bg-white w-full pt-40">
      
      <div className=" rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.2325770997584!2d90.38719828724479!3d23.873118898270835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5efd47d7353%3A0x30dc011c21c1dec3!2sOmnifarious%20Inc.!5e0!3m2!1sen!2sbd!4v1711013642202!5m2!1sen!2sbd"
         
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default GoogleMapsLink