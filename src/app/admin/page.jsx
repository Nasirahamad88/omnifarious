import Link from 'next/link'
import React from 'react'
import AddTestimonial from './add-testimonial/page';

const AdminPage = () => {
  return (
    <section>
      <div className="pt-32 flex justify-center bg-white p-4 shadow-lg rounded-lg space-x-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <Link
          href="admin/add-testimonial"
          className="text-blue-600 hover:text-blue-800"
        >
          Add Testimonial
        </Link>
        <Link
          href="admin/add-image"
          className="text-blue-600 hover:text-blue-800"
        >
          Image
        </Link>
        <Link
          href="admin/add-services"
          className="text-blue-600 hover:text-blue-800"
        >
          Services
        </Link>
      </div>
      <div>
        <AddTestimonial/>
      </div>
    </section>
  );
}

export default AdminPage