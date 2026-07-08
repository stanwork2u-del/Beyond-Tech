import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Footer() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  return (
    <footer className={cn(
      "border-t py-12 px-6 mt-12",
      theme === 'premium' ? "bg-white border-zinc-200" : "bg-[#0a0a0a] border-zinc-900"
    )}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <Logo className="w-12 h-12" />
            <div className="flex flex-col justify-center">
              <span className="font-bold tracking-widest uppercase text-xl leading-none" style={{ color: 'var(--color-primary)' }}>
                Beyond Tech
              </span>
              {language === 'zh' && (
                <span className="text-[11px] tracking-[0.4em] opacity-60 leading-none mt-1.5 ml-0.5 font-medium" style={{ color: 'var(--color-primary)' }}>
                  超越科技
                </span>
              )}
            </div>
          </div>
          <p className="opacity-60 text-sm max-w-sm mb-6">
            {t('footer.desc')}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">{t('footer.contact')}</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+60 12 345 6789</span>
            </li>
            <li className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@beyondtech.com">hello@beyondtech.com</a>
            </li>
            <li className="flex items-start gap-2 hover:opacity-100 transition-opacity">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>123 Tech Avenue, <br />Kuala Lumpur, Malaysia</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">{t('footer.links')}</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><a href="#kiosks" className="hover:opacity-100 transition-opacity">{t('nav.models')}</a></li>
            <li><a href="#pricing" className="hover:opacity-100 transition-opacity">{t('nav.pricing')}</a></li>
            <li><a href="#roi" className="hover:opacity-100 transition-opacity">{t('nav.roi')}</a></li>
            <li><a href="#demo" className="hover:opacity-100 transition-opacity">{t('nav.demo')}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm opacity-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-100">{t('footer.privacy')}</a>
          <a href="#" className="hover:opacity-100">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
