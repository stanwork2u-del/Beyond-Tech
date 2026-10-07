import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

const KIOSK_PACKAGES = [199, 299, 329, 359, 399];

export function ROICalculator() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [employeeSalary, setEmployeeSalary] = useState<number>(2200);
  const [kioskPrice, setKioskPrice] = useState<number>(199);

  const monthlySavings = employeeSalary - kioskPrice;
  const yearlySavings = monthlySavings * 12;

  return (
    <section id="roi" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            "p-8 md:p-12 overflow-hidden relative",
            theme === 'premium' ? "rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100" : "rounded-3xl bg-[#121212] border border-zinc-800"
          )}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t('roi.title')}</h2>
              <p className="opacity-70 mb-8">{t('roi.subtitle')}</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold">{t('roi.salary')}</label>
                    <span className="font-bold">RM {employeeSalary}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1500" 
                    max="5000" 
                    step="100"
                    value={employeeSalary}
                    onChange={(e) => setEmployeeSalary(Number(e.target.value))}
                    className={cn(
                      "w-full h-2 rounded-lg appearance-none cursor-pointer",
                      theme === 'premium' ? "bg-zinc-200 accent-[#D5A13E]" : "bg-zinc-800 accent-[#D5A13E]"
                    )}
                  />
                </div>
                
                <div className={cn(
                  "p-4 rounded-xl space-y-3",
                  theme === 'premium' ? "bg-zinc-50" : "bg-zinc-900"
                )}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm opacity-70">{t('roi.kiosk')}</span>
                    <span className="font-bold text-[#D5A13E]">RM {kioskPrice} {t('roi.mo')}</span>
                  </div>

                  <input 
                    type="range" 
                    min="0" 
                    max="4" 
                    step="1"
                    value={KIOSK_PACKAGES.indexOf(kioskPrice)}
                    onChange={(e) => setKioskPrice(KIOSK_PACKAGES[Number(e.target.value)])}
                    aria-label="Kiosk Package Price"
                    className={cn(
                      "w-full h-2 rounded-lg appearance-none cursor-pointer",
                      theme === 'premium' ? "bg-zinc-200 accent-[#D5A13E]" : "bg-zinc-800 accent-[#D5A13E]"
                    )}
                  />

                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                    {KIOSK_PACKAGES.map((price) => (
                      <button
                        key={price}
                        type="button"
                        onClick={() => setKioskPrice(price)}
                        className={cn(
                          "py-1.5 px-0.5 sm:px-1 text-xs font-semibold rounded-lg transition-all border text-center cursor-pointer",
                          kioskPrice === price
                            ? "bg-[#D5A13E] text-zinc-950 border-[#D5A13E] shadow-sm font-bold scale-[1.02]"
                            : theme === 'premium'
                              ? "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100"
                              : "bg-zinc-800/70 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800"
                        )}
                      >
                        RM {price}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "p-8 relative flex flex-col justify-center",
              theme === 'premium' ? "bg-zinc-50 rounded-2xl" : "bg-zinc-900 rounded-2xl"
            )}>
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-semibold opacity-70 uppercase tracking-wider mb-1">{t('roi.monthly')}</div>
                  <div className={cn(
                    "text-4xl md:text-5xl font-bold tracking-tight text-gold-gradient"
                  )}>
                    RM {monthlySavings.toLocaleString()}
                  </div>
                </div>
                
                <div className={cn(
                  "h-px w-full",
                  theme === 'premium' ? "bg-zinc-200" : "bg-zinc-800"
                )} />

                <div>
                  <div className="text-sm font-semibold opacity-70 uppercase tracking-wider mb-1">{t('roi.yearly')}</div>
                  <div className={cn(
                    "text-4xl md:text-5xl font-bold tracking-tight text-gold-gradient"
                  )}>
                    RM {yearlySavings.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
