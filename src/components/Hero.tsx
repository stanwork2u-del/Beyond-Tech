import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { ArrowRight, ShieldCheck, Headset, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Hero() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-6">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Background gradient orb */}
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]",
            theme === 'cupertino' ? "bg-blue-400" : "bg-rose-600"
          )}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-12 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {theme === 'premium' && (
            <div className="mb-8 flex flex-col items-center justify-center">
               <Logo className="w-16 h-16 md:w-20 md:h-20 mb-4" />
               <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-1" style={{ color: 'var(--color-accent)' }}>
                 Beyond Tech
               </h2>
               {language === 'zh' && (
                 <span className="text-xs md:text-sm tracking-[0.4em] opacity-60 font-medium" style={{ color: 'var(--color-primary)' }}>
                   超越科技
                 </span>
               )}
            </div>
          )}

          <h1 className={cn(
            "text-4xl md:text-7xl font-extrabold tracking-tight mb-4",
            theme === 'cyber' && "uppercase tracking-tighter"
          )}>
            {t('hero.title1')} <br className="hidden md:block" />
            <span className="text-gold-gradient block mt-2 md:mt-4 text-5xl md:text-8xl">{t('hero.title2')}</span>
          </h1>
          
          <p className="text-base md:text-xl mt-6 mb-12 opacity-70 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-12 mb-16 w-full max-w-2xl mx-auto">
            {[
              { icon: ShieldCheck, label: 'hero.safe' },
              { icon: Headset, label: 'hero.support' },
              { icon: TrendingUp, label: 'hero.growth' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-3">
                <div className={cn(
                  "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center",
                  theme === 'premium' ? "bg-white shadow-lg border border-zinc-100" : "bg-zinc-900 border border-zinc-800"
                )}>
                  <item.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: 'var(--color-accent)' }} />
                </div>
                <span className="text-xs md:text-sm font-semibold opacity-80">{t(item.label)}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center w-full max-w-md mx-auto mb-16">
            <a 
              href="#pricing"
              className={cn(
                "w-full px-8 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center justify-center gap-3 text-white shadow-[0_8px_30px_rgb(213,161,62,0.3)] hover:shadow-[0_8px_40px_rgb(213,161,62,0.4)] hover:-translate-y-1",
                theme === 'premium' 
                  ? "bg-gold-gradient" 
                  : "bg-gold-gradient"
              )}
            >
              {t('hero.startJourney')} <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          {/* Stats Section */}
          <div className={cn(
            "w-full max-w-4xl mx-auto rounded-3xl p-8 mb-20",
            theme === 'premium' ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100" : "bg-[#121212] border border-zinc-800"
          )}>
            <div className="mb-6 text-left">
              <h3 className="font-bold text-lg opacity-80">{t('stats.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-1">
                <div className="text-sm font-medium opacity-70">{t('stats.eff')}</div>
                <div className="text-3xl font-bold text-gold-gradient">60%+</div>
                <div className="text-xs opacity-50">{t('stats.effDesc')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium opacity-70">{t('stats.cost')}</div>
                <div className="text-3xl font-bold text-gold-gradient">30%+</div>
                <div className="text-xs opacity-50">{t('stats.costDesc')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium opacity-70">{t('stats.stable')}</div>
                <div className="text-3xl font-bold text-gold-gradient">99.9%+</div>
                <div className="text-xs opacity-50">{t('stats.stableDesc')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
