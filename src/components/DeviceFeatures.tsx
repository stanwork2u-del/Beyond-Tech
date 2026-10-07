import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { LayoutGrid, Camera, QrCode, CreditCard, Monitor, HardDrive } from "lucide-react";

import installImg from "../assets/images/feature_coffee_shop_kiosk_1784297071417.jpg";
import cameraImg from "../assets/images/feature_camera_1784280519800.jpg";
import qrImg from "../assets/images/feature_qr_1784280535463.jpg";
import nfcImg from "../assets/images/feature_nfc_1784280556213.jpg";
import touchImg from "../assets/images/feature_touch_1784280575694.jpg";
import periImg from "../assets/images/feature_peripherals_1784280594451.jpg";

export function DeviceFeatures() {
  const { t } = useLanguage();

  const features = [
    {
      icon: LayoutGrid,
      titleKey: "df.install.title",
      descKey: "df.install.desc",
      image: installImg,
    },
    {
      icon: Camera,
      titleKey: "df.camera.title",
      descKey: "df.camera.desc",
      image: cameraImg,
    },
    {
      icon: QrCode,
      titleKey: "df.qr.title",
      descKey: "df.qr.desc",
      image: qrImg,
    },
    {
      icon: CreditCard,
      titleKey: "df.nfc.title",
      descKey: "df.nfc.desc",
      image: nfcImg,
    },
    {
      icon: Monitor,
      titleKey: "df.touch.title",
      descKey: "df.touch.desc",
      image: touchImg,
    },
    {
      icon: HardDrive,
      titleKey: "df.peri.title",
      descKey: "df.peri.desc",
      image: periImg,
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative z-10 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#E6C36E] to-[#B38322] bg-clip-text text-transparent">
            {t("df.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t("df.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img src={feat.image} alt={t(feat.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#E6C36E] opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white flex items-center gap-2">
                  <feat.icon className="w-5 h-5 text-[#B38322]" />
                  {t(feat.titleKey)}
                </h3>
                <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t(feat.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

