// components/ClientLayout.tsx
"use client"; // This declares the component as a client component.

import { ReactNode, useState, useEffect } from "react";
import SplashScreen from "./Shared/SplashScreen";

// The ClientLayout component wraps its children with client-side logic
export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state, you can replace this with actual loading logic
    const timer = setTimeout(() => {
      setIsLoading(false); // After 1 second, hide splash screen
    }, 100);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // If the page is loading, show the splash screen
  if (isLoading) {
    return <SplashScreen />;
  }

  // Once loading is complete, render the children
  return <>{children}</>;
}
