import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
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
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex items-start gap-3 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--color-primary)' }} />
              <span>017-7645949</span>
            </li>
            <li className="flex items-start gap-3 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--color-primary)' }} />
              <a href="mailto:beyondtech.my@gmail.com">beyondtech.my@gmail.com</a>
            </li>
            <li className="flex items-start gap-3 hover:opacity-100 transition-opacity">
              <MapPin className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--color-primary)' }} />
              <div className="flex flex-col gap-1">
                <span className="mt-1 leading-relaxed">
                  Suite C-3A-1, C-3A-2 and C-3A-3, Aras 3A, Block C,<br />
                  The FIVE @ KPD, Kompleks Pejabat Damansara,<br />
                  No.49 Jalan Dungun, Bukit Damansara<br />
                  50490 Kuala Lumpur
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">{t('footer.links')}</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li>
              <a href="#features" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>{t('nav.function')}</span>
              </a>
            </li>
            <li>
              <a href="#pricing" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>{t('nav.pricing')}</span>
              </a>
            </li>
            <li>
              <a href="#roi" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>{t('nav.roi')}</span>
              </a>
            </li>
            <li>
              <a href="#demo" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>{t('nav.demo')}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm opacity-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 ASJ SOLUTIONS SDN BHD (Reg no: 201201040247). Beyond Tech. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-100">{t('footer.privacy')}</a>
          <a href="#" className="hover:opacity-100">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
