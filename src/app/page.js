"use client";
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import Navigation from "@/components/navigation";

// Correct the path for the Wizard component if needed
const Wizard = dynamic(() => import("@/components/models/Wizard"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center relative">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="background-image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.2)",
          }}
        />
      </div>
      <div className="w-full h-screen flex items-center justify-center relative z-10">
        <Navigation />
        <div className="w-3/4 h-3/4 flex items-center justify-center">
          <RenderModel>
            <Wizard scale={[0.08, 0.08, 0.08]} />
          </RenderModel>
        </div>
      </div>
    </main>
  );
}
