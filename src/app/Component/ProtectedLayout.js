"use client"

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // Or a spinner/loader component
  }

  if (status === "authenticated") {
    return <>{children}</>; // Render the protected content
  }

  return null; // Optionally return null or a loading state while redirecting
}
