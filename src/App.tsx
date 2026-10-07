import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { DeviceFeatures } from "./components/DeviceFeatures";
import { Industries } from "./components/Industries";
import { Pricing } from "./components/Pricing";
import { ROICalculator } from "./components/ROICalculator";
import { DemoForm } from "./components/DemoForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen selection:bg-rose-500/30 selection:text-current">
          <Navbar />
          <main>
            <Hero />
            <Products />
            <DeviceFeatures />
            <Industries />
            <Pricing />
            <ROICalculator />
            <DemoForm />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
