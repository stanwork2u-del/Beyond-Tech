import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.models": "Models",
    "nav.pricing": "Pricing",
    "nav.roi": "ROI",
    "nav.demo": "Request Demo",
    
    // Hero
    "hero.title1": "Smart Ordering Kiosk",
    "hero.title2": "Solution Expert",
    "hero.subtitle": "Empowering the F&B industry, improving efficiency and experience. From ordering to management, a one-stop smart solution.",
    "hero.viewModels": "View Models",
    "hero.requestDemo": "Request Demo",
    "hero.startJourney": "Start Smart Dining Journey",
    "hero.safe": "Safe & Reliable",
    "hero.support": "Pro Support",
    "hero.growth": "Efficient Growth",
    
    // Stats
    "stats.title": "Value Proposition",
    "stats.eff": "Efficiency Boost",
    "stats.effDesc": "Serving efficiency increased",
    "stats.cost": "Cost Optimization",
    "stats.costDesc": "Labor costs reduced",
    "stats.stable": "Stable Operation",
    "stats.stableDesc": "System stability",
    
    // Products
    "prod.title": "Versatile Hardware Models",
    "prod.subtitle": "Flexible form factors designed to fit any restaurant environment, from compact counters to spacious lobbies.",
    "prod.desktop": "Desktop Mode",
    "prod.floor": "Floor-standing Mode",
    "prod.wall": "Wall-mounted Mode",
    "prod.feat1": "Facial Recognition",
    "prod.feat1Desc": "Adjustable camera angle for precise facial payment and VIP customer recognition.",
    "prod.feat2": "Smart Payments",
    "prod.feat2Desc": "Integrated POS, NFC, and QR code scanner for seamless self-checkout.",
    
    // Pricing
    "pricing.title": "Our Packages",
    "pricing.subtitle": "Smart Ordering Kiosk solutions for every business size.",
    "pricing.plan1.name": "Standard Plan",
    "pricing.plan1.desc": "Hardware rental only. Perfect for quick deployment and easy operation.",
    "pricing.plan2.name": "Elite Plan",
    "pricing.plan2.desc": "Hardware + Software. One-stop solution to drive business growth.",
    "pricing.plan3.name": "Automation Plan",
    "pricing.plan3.desc": "Full process automation. Tailored for large scale operations.",
    "pricing.custom": "Custom",
    "pricing.popular": "Most Popular",
    "pricing.select": "Consult Now",
    "pricing.includes": "Plan Includes",
    "pricing.support": "24/7 Professional Support",
    "pricing.monthly": "Monthly",
    "pricing.annual": "Annual",
    "pricing.save": "Get one month free when you pay annually",
    "pricing.from": "Fr RM ",
    "pricing.mo": "/ month",
    "pricing.yr": "/ year",
    
    // Industries
    "ind.tag": "Applicable Industries",
    "ind.title": "Reliable POS Hardware for Seamless Transactions",
    "ind.desc": "With our expertise in self-service technology, we deliver high-performance Point-Of-Sale hardware for retail, hospitality and food service. From POS terminals to self-service kiosks, our durable, fast and reliable solutions power smooth business operations.",
    "ind.food.title": "Food Service",
    "ind.food.sub": "Fast-Food Chains | Restaurants | Coffee Shops",
    "ind.food.desc": "Enhance efficiency with fast, spill-resistant POS hardware.",
    "ind.retail.title": "Retail",
    "ind.retail.sub": "Supermarkets | Hypermarkets | Convenience Stores | Department Stores",
    "ind.retail.desc": "Secure, high-speed POS ensures seamless transactions and easy integration.",
    "ind.hosp.title": "Hospitality",
    "ind.hosp.sub": "Hotels | Hospitals | Theme Parks | Airport Stores",
    "ind.hosp.desc": "Reliable 24/7 POS and kiosk solutions optimise payments and user experience.",
    "ind.spec.title": "Specialty",
    "ind.spec.sub": "Factories | Transportations | Cinemas | Petrol Stations | Pharmacies",
    "ind.spec.desc": "Customisable POS supports diverse industries with scalable, robust solutions.",
    
    // Features
    "feat.hd": "HD Touch Screen",
    "feat.pay": "Multiple Payments",
    "feat.metal": "Solid Metal Body",
    "feat.sys": "Smart System Management",
    "feat.print": "Receipt Printing",
    "feat.install": "Easy Installation",
    "feat.custom": "Flexible Customization",
    "feat.rent": "Rent & Buy Available",
    "feat.trade": "Trade-In Offer",
    "feat.support": "Remote / On-site Support",
    "feat.size": "21.5\" to 27\" Available",

    // ROI
    "roi.title": "Calculate Your ROI",
    "roi.subtitle": "See how much you can save by switching to a Beyond Tech Kiosk compared to a traditional cashier.",
    "roi.salary": "Employee Salary (per month)",
    "roi.kiosk": "Beyond Tech Kiosk",
    "roi.mo": "/mo",
    "roi.monthly": "Monthly Savings",
    "roi.yearly": "Yearly Savings",

    // Demo
    "demo.title": "Request a Demo",
    "demo.subtitle": "Experience the Beyond Tech difference. Leave your details and we'll be in touch.",
    "demo.company": "Company Name",
    "demo.person": "Person in Charge",
    "demo.industry": "Industry",
    "demo.ind.select": "Select Industry",
    "demo.ind.fnb": "Food & Beverage",
    "demo.ind.retail": "Retail",
    "demo.ind.health": "Healthcare",
    "demo.ind.other": "Other",
    "demo.contact": "Contact Number",
    "demo.email": "Email Address",
    "demo.website": "Company Website (Optional)",
    "demo.submit": "Submit Request",
    "demo.success": "Request Sent Successfully",

    // Footer
    "footer.desc": "Pioneering the future of self-service. We provide state-of-the-art kiosk solutions that streamline operations and enhance customer experiences.",
    "footer.contact": "Contact Us",
    "footer.links": "Quick Links",
    "footer.rights": "Beyond Tech. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  zh: {
    // Navbar
    "nav.models": "型号配套",
    "nav.pricing": "价格",
    "nav.roi": "投资回报率",
    "nav.demo": "预约演示",
    
    // Hero
    "hero.title1": "智能点餐机",
    "hero.title2": "解决方案专家",
    "hero.subtitle": "赋能餐饮行业，提升效率与体验。从点餐到管理，一站式智能解决方案。",
    "hero.viewModels": "查看型号",
    "hero.requestDemo": "预约演示",
    "hero.startJourney": "开启智能餐饮之旅",
    "hero.safe": "安全可靠",
    "hero.support": "专业支持",
    "hero.growth": "高效增长",
    
    // Stats
    "stats.title": "价值赋能",
    "stats.eff": "效率提升",
    "stats.effDesc": "出餐效率提升",
    "stats.cost": "成本优化",
    "stats.costDesc": "人力成本降低",
    "stats.stable": "稳定运行",
    "stats.stableDesc": "系统稳定性",
    
    // Products
    "prod.title": "多样化硬件型号",
    "prod.subtitle": "灵活的形态设计，完美适应从紧凑吧台到宽敞大厅的各种餐饮环境。",
    "prod.desktop": "桌面式",
    "prod.floor": "立式",
    "prod.wall": "壁挂式",
    "prod.feat1": "人脸识别",
    "prod.feat1Desc": "可调节摄像头视角，实现精准的人脸支付与 VIP 会员识别。",
    "prod.feat2": "智能支付",
    "prod.feat2Desc": "集成 POS 机、NFC 和二维码扫描，自助结账更轻松。",
    
    // Pricing
    "pricing.title": "方案选择",
    "pricing.subtitle": "适合各种业务规模的智能点餐 Kiosk 解决方案。",
    "pricing.plan1.name": "标准方案",
    "pricing.plan1.desc": "仅租赁智能点餐机。适合刚开始导入智能点餐系统的商家，快速上线，轻松运营。",
    "pricing.plan2.name": "精英方案",
    "pricing.plan2.desc": "智能点餐机 + 软件系统租赁方案。一站式智能租赁方案，包含软件及技术支持，助力业务增长。",
    "pricing.plan3.name": "自动化方案",
    "pricing.plan3.desc": "全流程自动化。品牌专属方案，适用于大型连锁与各类商务活动。",
    "pricing.custom": "定制",
    "pricing.popular": "最受欢迎",
    "pricing.select": "立即咨询方案",
    "pricing.includes": "方案包含",
    "pricing.support": "7×24小时专业支持",
    "pricing.monthly": "月付",
    "pricing.annual": "年付",
    "pricing.save": "按年付款可享一个月免费",
    "pricing.from": "Fr RM ",
    "pricing.mo": "/ 每月",
    "pricing.yr": "/ 每年",
    
    // Industries
    "ind.tag": "适用行业",
    "ind.title": "适用于无缝交易的可靠POS硬件",
    "ind.desc": "凭借在自助服务技术方面的专业知识，我们为零售、酒店和餐饮服务提供高性能的销售点硬件。从POS终端到自助服务亭，我们耐用、快速、可靠的解决方案为您顺畅的业务运营提供动力。",
    "ind.food.title": "餐饮服务",
    "ind.food.sub": "快餐连锁 | 餐厅 | 咖啡店",
    "ind.food.desc": "使用快速防泼洒的POS硬件提高效率。",
    "ind.retail.title": "零售",
    "ind.retail.sub": "超市 | 大卖场 | 便利店 | 百货公司",
    "ind.retail.desc": "安全高速的POS确保无缝交易和轻松集成。",
    "ind.hosp.title": "酒店及休闲",
    "ind.hosp.sub": "酒店 | 医院 | 主题公园 | 机场商店",
    "ind.hosp.desc": "可靠的全天候POS和自助服务亭解决方案优化支付和用户体验。",
    "ind.spec.title": "专业领域",
    "ind.spec.sub": "工厂 | 交通 | 电影院 | 加油站 | 药店",
    "ind.spec.desc": "可定制的POS为各种行业提供可扩展、强大的解决方案。",
    
    // Features
    "feat.hd": "高清触控屏",
    "feat.pay": "多种支付方式",
    "feat.metal": "稳定金属机身",
    "feat.sys": "智能系统管理",
    "feat.print": "快速打印小票",
    "feat.install": "简易安装维护",
    "feat.custom": "灵活定制服务",
    "feat.rent": "灵活租赁或购买",
    "feat.trade": "以旧换新更优惠",
    "feat.support": "远程 / 上门支持",
    "feat.size": "可选 21.5\" 至 27\"",

    // ROI
    "roi.title": "计算您的投资回报率",
    "roi.subtitle": "看看将传统收银员替换为 Beyond Tech Kiosk 后，您能节省多少成本。",
    "roi.salary": "员工薪水（每月）",
    "roi.kiosk": "Beyond Tech Kiosk",
    "roi.mo": "/每月",
    "roi.monthly": "每月节省",
    "roi.yearly": "每年节省",

    // Demo
    "demo.title": "预约演示",
    "demo.subtitle": "体验 Beyond Tech 的与众不同。留下您的资料，我们会尽快与您联系。",
    "demo.company": "公司名字",
    "demo.person": "负责人",
    "demo.industry": "行业",
    "demo.ind.select": "选择行业",
    "demo.ind.fnb": "餐饮业 (F&B)",
    "demo.ind.retail": "零售业",
    "demo.ind.health": "医疗保健",
    "demo.ind.other": "其他",
    "demo.contact": "联络号码",
    "demo.email": "电邮地址",
    "demo.website": "公司网站 (可选)",
    "demo.submit": "提交申请",
    "demo.success": "提交成功！",

    // Footer
    "footer.desc": "引领自助服务的未来。我们提供最先进的 Kiosk 解决方案，简化运营并提升客户体验。",
    "footer.contact": "联络资讯",
    "footer.links": "快速链接",
    "footer.rights": "Beyond Tech. 版权所有。",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
