import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, ShieldCheck, Headset, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

import img1 from "../assets/images/feature_coffee_shop_kiosk_1784297071417.jpg";
import img2 from "../assets/images/hero_retail_kiosk_1784298914944.jpg";
import img3 from "../assets/images/hero_hotel_kiosk_1784298931103.jpg";

export function Hero() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      title1: t('hero.slide1.title1'),
      title2: t('hero.slide1.title2'),
      subtitle: t('hero.slide1.subtitle'),
    },
    {
      image: img2,
      title1: t('hero.slide2.title1'),
      title2: t('hero.slide2.title2'),
      subtitle: t('hero.slide2.subtitle'),
    },
    {
      image: img3,
      title1: t('hero.slide3.title1'),
      title2: t('hero.slide3.title2'),
      subtitle: t('hero.slide3.subtitle'),
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden pt-16">
      {/* Left Content Half */}
      <div className={cn(
        "w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-20 py-12 lg:py-0 z-10 transition-colors duration-500",
        theme === 'premium' ? "bg-[#f5f5f7] text-[#1d1d1f]" : "bg-[#1d1d1f] text-[#f5f5f7]"
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            {theme === 'premium' && (
              <div className="mb-8 flex items-center gap-3">
                 <Logo className="w-8 h-8" />
                 <div>
                   <h2 className="text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
                     Beyond Tech
                   </h2>
                   {language === 'zh' && (
                     <span className="text-[10px] tracking-[0.4em] opacity-60 font-medium" style={{ color: 'var(--color-primary)' }}>
                       超越科技
                     </span>
                   )}
                 </div>
              </div>
            )}

            <div className="mb-4">
              <p className="text-sm md:text-base font-semibold opacity-70 mb-2">
                Beyond Tech Kiosk Solutions
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                {slides[currentSlide].title1} <br />
                <span className="bg-gradient-to-r from-[#D5A13E] to-[#B38728] bg-clip-text text-transparent">
                  {slides[currentSlide].title2}
                </span>
              </h1>
            </div>
            
            <p className="text-base md:text-lg mt-6 mb-10 opacity-70 leading-relaxed max-w-md">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#pricing"
                className={cn(
                  "px-8 py-3 rounded-md font-medium text-sm transition-all flex items-center justify-center text-white",
                  "bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                )}
              >
                {t('hero.startJourney') || '立即购买'}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Image Half */}
      <div className="w-full lg:w-[55%] h-[50vh] lg:h-auto relative bg-[#e5e5e5] dark:bg-[#111111]">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Product showcase"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm dark:bg-black/90 px-4 py-2 rounded-full shadow-lg border border-black/5 dark:border-white/10">
            <button 
              onClick={prevSlide}
              className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-black dark:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium px-2 text-black dark:text-white min-w-[3rem] text-center">
              {currentSlide + 1} / {slides.length}
            </span>
            <button 
              onClick={nextSlide}
              className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-black dark:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <button className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform font-medium text-sm">
            <span>Play</span>
            <PlayCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

