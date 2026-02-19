"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import HeroSection from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  const router = useRouter();
  const { session, signOut } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary dark:bg-[#030712] relative">
      <NavBar />
      <main className="flex flex-col items-center justify-center gap-8 p-8 text-center w-full">
          <HeroSection />
          <HowItWorksSection />
      </main>
    </div>
  );
}
