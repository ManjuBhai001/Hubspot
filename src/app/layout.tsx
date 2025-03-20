import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import CarousalHeader from "@/components/CarousalHeader";
import CarousalHomepage from "@/components/CarousalHomepage";
import Heroine from "@/components/HeroineSection";
import AchievementHomepage from "@/components/AchievementHomepage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medical College Insights",
  description: "Explore top medical colleges and get expert admission guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <CarousalHeader />
        <CarousalHomepage />
        <Heroine />
        <AchievementHomepage />
        <main>{children}</main> {/* ✅ Ensure children render correctly */}
        <Footer />
      </body>
    </html>
  );
}
