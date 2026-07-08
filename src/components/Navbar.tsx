import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Moon, Sun, Globe } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: theme === 'premium' ? 'rgba(255,255,255,0.8)' : 'rgba(18,18,18,0.8)'
      }}
    >
      <div className="flex items-center gap-3">
        <Logo className="w-9 h-9" />
        <div className="flex flex-col justify-center">
          <span className="font-bold text-lg tracking-widest uppercase leading-none" style={{ color: 'var(--color-primary)' }}>
            Beyond Tech
          </span>
          {language === 'zh' && (
            <span className="text-[9px] tracking-[0.4em] opacity-60 leading-none mt-1 ml-0.5 font-medium" style={{ color: 'var(--color-primary)' }}>
              超越科技
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium">
        <a href="#kiosks" className="hidden md:block opacity-70 hover:opacity-100 transition-opacity">{t('nav.models')}</a>
        <a href="#pricing" className="hidden md:block opacity-70 hover:opacity-100 transition-opacity">{t('nav.pricing')}</a>
        <a href="#roi" className="hidden md:block opacity-70 hover:opacity-100 transition-opacity">{t('nav.roi')}</a>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full transition-colors flex items-center gap-2 font-bold text-xs"
            style={{ backgroundColor: 'var(--color-secondary)' }}
            aria-label="Toggle Language"
          >
            <Globe className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
            <span className="pr-2" style={{ color: 'var(--color-primary)' }}>
              {language === 'en' ? 'EN' : '中文'}
            </span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors flex items-center gap-2"
            style={{ backgroundColor: 'var(--color-secondary)' }}
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'premium' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'premium' ? (
                <Sun className="w-4 h-4 text-zinc-900" />
              ) : (
                <Moon className="w-4 h-4 text-white" />
              )}
            </motion.div>
            <span className="text-xs uppercase tracking-wider font-bold pr-2 hidden sm:block">
              {theme === 'premium' ? 'Premium' : 'Cyber'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
