import { motion } from "motion/react";
import { Coffee, ShoppingBasket, BaggageClaim, Store } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      icon: Coffee,
      titleKey: "ind.food.title",
      subKey: "ind.food.sub",
      descKey: "ind.food.desc",
      iconColor: "text-[#B38322] dark:text-[#E6C36E]",
      bgColor: "bg-[#E6C36E]/10",
      darkBgColor: "dark:bg-[#E6C36E]/20"
    },
    {
      icon: ShoppingBasket,
      titleKey: "ind.retail.title",
      subKey: "ind.retail.sub",
      descKey: "ind.retail.desc",
      iconColor: "text-[#B38322] dark:text-[#E6C36E]",
      bgColor: "bg-[#E6C36E]/10",
      darkBgColor: "dark:bg-[#E6C36E]/20"
    },
    {
      icon: BaggageClaim,
      titleKey: "ind.hosp.title",
      subKey: "ind.hosp.sub",
      descKey: "ind.hosp.desc",
      iconColor: "text-[#B38322] dark:text-[#E6C36E]",
      bgColor: "bg-[#E6C36E]/10",
      darkBgColor: "dark:bg-[#E6C36E]/20"
    },
    {
      icon: Store,
      titleKey: "ind.spec.title",
      subKey: "ind.spec.sub",
      descKey: "ind.spec.desc",
      iconColor: "text-[#B38322] dark:text-[#E6C36E]",
      bgColor: "bg-[#E6C36E]/10",
      darkBgColor: "dark:bg-[#E6C36E]/20"
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10 bg-[#fbfbfb] dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#E6C36E]/10 dark:bg-[#E6C36E]/20 text-[#B38322] dark:text-[#E6C36E] text-sm font-semibold mb-6">
              {t("ind.tag")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight bg-gradient-to-r from-[#E6C36E] to-[#B38322] bg-clip-text text-transparent">
              {t("ind.title")}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("ind.desc")}
            </p>
          </motion.div>

          {/* Right Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white dark:bg-zinc-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent dark:border-zinc-800 flex flex-col transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${ind.bgColor} ${ind.darkBgColor}`}>
                  <ind.icon className={`w-6 h-6 ${ind.iconColor}`} />
                </div>
                <h3 className="text-[22px] font-bold mb-3 text-zinc-900 dark:text-white">{t(ind.titleKey)}</h3>
                <p className="text-[13px] font-bold mb-4 text-zinc-800 dark:text-zinc-200">{t(ind.subKey)}</p>
                <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed mt-auto">
                  {t(ind.descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
