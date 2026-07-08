import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export function DemoForm() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = cn(
    "w-full px-4 py-3 text-sm transition-colors outline-none",
    theme === 'premium' 
      ? "bg-zinc-50 border border-zinc-200 focus:border-[#D5A13E] rounded-xl" 
      : "bg-zinc-900 border border-zinc-800 focus:border-[#D5A13E] text-white placeholder-zinc-500 rounded-xl"
  );

  return (
    <section id="demo" className="py-24 px-6 relative z-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t('demo.title')}</h2>
          <p className="text-lg opacity-70">{t('demo.subtitle')}</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold opacity-70 uppercase tracking-wider ml-1">{t('demo.company')}</label>
              <input type="text" required placeholder="Beyond Tech" className={inputClass} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold opacity-70 uppercase tracking-wider ml-1">{t('demo.person')}</label>
              <input type="text" required placeholder="John Doe" className={inputClass} />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-semibold opacity-70 uppercase tracking-wider ml-1">{t('demo.industry')}</label>
            <select required className={cn(inputClass, "appearance-none")}>
              <option value="">{t('demo.ind.select')}</option>
              <option value="fnb">{t('demo.ind.fnb')}</option>
              <option value="retail">{t('demo.ind.retail')}</option>
              <option value="healthcare">{t('demo.ind.health')}</option>
              <option value="other">{t('demo.ind.other')}</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold opacity-70 uppercase tracking-wider ml-1">{t('demo.contact')}</label>
              <input type="tel" required placeholder="+60 12 345 6789" className={inputClass} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold opacity-70 uppercase tracking-wider ml-1">{t('demo.email')}</label>
              <input type="email" required placeholder="john@example.com" className={inputClass} />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold opacity-70 uppercase tracking-wider ml-1">{t('demo.website')}</label>
            <input type="url" placeholder="https://www.example.com" className={inputClass} />
          </div>

          <button 
            type="submit"
            className={cn(
              "w-full py-4 mt-6 font-bold text-lg transition-all rounded-xl text-white",
              theme === 'premium' 
                ? "bg-gold-gradient shadow-lg hover:shadow-xl hover:opacity-90" 
                : "bg-gold-gradient shadow-lg hover:shadow-xl hover:opacity-90"
            )}
          >
            {submitted ? t('demo.success') : t('demo.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
