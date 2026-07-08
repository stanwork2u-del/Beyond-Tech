import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Headset } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

type Plan = {
  nameKey: string;
  price?: string;
  annualPrice?: string;
  originalAnnualPrice?: string;
  priceKey?: string;
  pricePrefix?: string;
  descKey: string;
  features: string[];
  featured: boolean;
};

const plans: Plan[] = [
  {
    nameKey: "pricing.plan1.name",
    pricePrefix: "pricing.from",
    price: "599",
    annualPrice: "6589",
    originalAnnualPrice: "7188",
    descKey: "pricing.plan1.desc",
    features: ["feat.metal", "feat.support", "feat.rent"],
    featured: false,
  },
  {
    nameKey: "pricing.plan2.name",
    pricePrefix: "pricing.from",
    price: "1599",
    annualPrice: "17589",
    originalAnnualPrice: "19188",
    descKey: "pricing.plan2.desc",
    features: ["feat.metal", "feat.sys", "feat.pay", "feat.support"],
    featured: true,
  },
  {
    nameKey: "pricing.plan3.name",
    priceKey: "pricing.custom",
    descKey: "pricing.plan3.desc",
    features: ["feat.custom", "feat.support", "feat.sys", "feat.trade"],
    featured: false,
  }
];

export function Pricing() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t('pricing.title')}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto mb-8">{t('pricing.subtitle')}</p>
          
          <div className="flex flex-col items-center gap-4">
            <div className={cn(
              "inline-flex p-1 rounded-full border",
              theme === 'premium' ? "bg-zinc-100 border-zinc-200" : "bg-zinc-900 border-zinc-800"
            )}>
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  "px-6 md:px-10 py-2.5 rounded-full text-sm font-semibold transition-all",
                  billingCycle === 'monthly' 
                    ? "bg-[#1a73e8] text-white shadow-sm" 
                    : "opacity-60 hover:opacity-100"
                )}
              >
                {t('pricing.monthly')}
              </button>
              <button 
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  "px-6 md:px-10 py-2.5 rounded-full text-sm font-semibold transition-all",
                  billingCycle === 'annual' 
                    ? "bg-[#1a73e8] text-white shadow-sm" 
                    : "opacity-60 hover:opacity-100"
                )}
              >
                {t('pricing.annual')}
              </button>
            </div>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {t('pricing.save')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "p-8 relative flex flex-col h-full transition-transform hover:-translate-y-2 border",
                theme === 'premium' ? "rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]" : "bg-[#121212] rounded-3xl",
                plan.featured && theme === 'cyber' ? "border-[#D5A13E]" : "border-zinc-200 dark:border-zinc-800"
              )}
              style={{
                borderColor: theme === 'premium' && plan.featured ? '#D5A13E' : undefined,
              }}
            >
              {plan.featured && (
                <div className={cn(
                  "absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 text-sm font-bold tracking-wider whitespace-nowrap rounded-full",
                  theme === 'premium' ? "bg-gold-gradient text-white shadow-md" : "bg-gold-gradient text-white uppercase"
                )}>
                  {t('pricing.popular')}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{t(plan.nameKey)}</h3>
                <p className="text-sm opacity-70 mb-8 min-h-[60px] leading-relaxed">{t(plan.descKey)}</p>
                <div className="flex items-baseline gap-1 mb-8 flex-wrap">
                  {plan.pricePrefix && <span className="text-3xl font-bold">{t(plan.pricePrefix)}</span>}
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.priceKey ? t(plan.priceKey) : (billingCycle === 'annual' && plan.annualPrice ? plan.annualPrice : plan.price)}
                  </span>
                  {!plan.priceKey && (
                    <span className="text-3xl font-bold">{billingCycle === 'annual' ? t('pricing.yr') : t('pricing.mo')}</span>
                  )}
                  {billingCycle === 'annual' && plan.originalAnnualPrice && (
                    <span className="text-2xl font-medium opacity-40 line-through ml-2">
                      RM {plan.originalAnnualPrice}
                    </span>
                  )}
                </div>
                
                <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-6" />
                
                <div className="font-bold mb-4">{t('pricing.includes')}</div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm font-medium opacity-90 leading-snug">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 mt-auto">
                <button className={cn(
                  "w-full py-4 text-center font-bold transition-all rounded-xl text-white",
                  theme === 'premium' 
                    ? "bg-gold-gradient shadow-md hover:shadow-lg hover:opacity-90"
                    : "bg-gold-gradient shadow-md hover:shadow-lg hover:opacity-90"
                )}>
                  {t('pricing.select')}
                </button>
                <div className="flex items-center justify-center gap-2 opacity-60">
                  <Headset className="w-4 h-4" />
                  <span className="text-xs font-medium">{t('pricing.support')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
