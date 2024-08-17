import ProtectedLayout from "../Component/ProtectedLayout";
import UserInfo from "../Component/UserInfo";
import AddTestimonial from "./add-testimonial/page";

import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <ProtectedLayout>
        <UserInfo />
        <AddTestimonial />
      </ProtectedLayout>
    </div>
  );
}

