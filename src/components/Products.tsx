import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';
import { MonitorSmartphone, ScanFace, CreditCard, ScanLine } from 'lucide-react';
import kioskImage from '../assets/images/kiosk_ordering_generic_1783445147706.jpg';

export function Products() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const features = [
    {
      icon: <ScanFace className="w-6 h-6" />,
      title: t('prod.feat1'),
      desc: t('prod.feat1Desc')
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t('prod.feat2'),
      desc: t('prod.feat2Desc')
    }
  ];

  const models = [
    { name: t('prod.desktop'), size: '21.5"', type: 'desktop' },
    { name: t('prod.floor'), size: '27"', type: 'floor' },
    { name: t('prod.wall'), size: '21.5" / 27"', type: 'wall' }
  ];

  return (
    <section id="models" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            {t('prod.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto"
          >
            {t('prod.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">{t('prod.title')}</h3>
              
              <div className="flex flex-wrap gap-4">
                {models.map((model, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "px-4 py-3 rounded-xl border flex flex-col gap-1",
                      theme === 'premium' ? "bg-white border-zinc-200" : "bg-zinc-900/50 border-zinc-800"
                    )}
                  >
                    <span className="font-medium">{model.name}</span>
                    <span className="text-xs opacity-50">{model.size}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
                    theme === 'premium' ? "bg-zinc-100 text-zinc-900" : "bg-zinc-800 text-white"
                  )}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="opacity-60 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 group"
          >
            <img 
              src={kioskImage} 
              alt="Beyond Tech POS Kiosk" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-sm font-medium tracking-wider uppercase mb-2">Beyond Tech</p>
              <p className="text-xl font-bold">Smart Self-Ordering Kiosk</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
