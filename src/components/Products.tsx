import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';
import kioskImage from '../assets/images/regenerated_image_1784293135897.png';

export function Products() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const models = [
    { name: t('prod.desktop'), size: '15.6" - 21.5"', type: 'desktop' },
    { name: t('prod.floor'), size: '21.5" - 27"', type: 'floor' },
    { name: t('prod.wall'), size: '21.5" / 27"', type: 'wall' }
  ];

  return (
    <section id="models" className={cn("py-32 px-6", theme === 'premium' ? 'bg-[#f5f5f7] text-[#1d1d1f]' : 'bg-black text-[#f5f5f7]')}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight bg-gradient-to-b from-[#FFF2B2] via-[#E2B74B] to-[#B38728] bg-clip-text text-transparent"
          >
            {t('prod.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium opacity-60 leading-relaxed"
          >
            {t('prod.subtitle')}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[2rem] overflow-hidden group flex justify-center items-center"
          style={{ backgroundColor: theme === 'premium' ? '#ffffff' : '#000000' }}
        >
          <img 
            src={kioskImage} 
            alt="Beyond Tech POS Kiosk Models" 
            className="w-full h-auto object-cover md:object-contain transition-transform duration-1000 group-hover:scale-105"
            style={{ maxHeight: '800px' }}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-24 pt-12 md:pt-16 border-t border-zinc-200 dark:border-zinc-800"
        >
          {models.map((model, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-sm font-semibold opacity-50 mb-3 uppercase tracking-wider">
                {t('prod.sizeLabel')}
              </span>
              <span 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-2" 
                style={{ color: 'var(--color-primary)' }}
              >
                {model.size}
              </span>
              <span className="text-lg font-medium opacity-80 mt-1">
                {model.name} — <span className="opacity-70">{t(`prod.desc${idx + 1}`)}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
