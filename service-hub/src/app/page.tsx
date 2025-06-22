import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 py-16 gap-20 text-center sm:text-left font-sans">
      <LandingPage />
      <Footer />
    </div>
  );
}
