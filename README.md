# 🚀 Trustoo.nl Redesign

این پروژه یک بازطراحی مدرن و زیبا از وبسایت Trustoo.nl است که با React و TypeScript ساخته شده است.

## ✨ ویژگی‌های کلیدی

### 🎨 طراحی نوآورانه
- **حذف سرچ بار از بالا**: تجربه کاربری تمیزتر و مینیمال
- **تشخیص خودکار موقعیت**: شناسایی هوشمند مکان کاربر
- **شخصیت انیمیشنی**: کاراکتری که به مشاغل مختلف تبدیل می‌شود

### 🌟 تکنولوژی‌های استفاده شده
- **React 18** - کتابخانه اصلی UI
- **TypeScript** - برای type safety
- **Tailwind CSS** - برای استایل‌دهی مدرن
- **Lucide React** - آیکون‌های زیبا
- **Framer Motion** - انیمیشن‌های روان

### 📱 Responsive Design
- طراحی کاملاً ریسپانسیو
- بهینه‌سازی برای موبایل
- تجربه کاربری عالی در تمام دستگاه‌ها

## 🛠 نصب و راه‌اندازی

### پیش نیازها
- Node.js 16+ 
- npm یا yarn

### نصب وابستگی‌ها
\`\`\`bash
npm install
\`\`\`

### اجرای پروژه در حالت development
\`\`\`bash
npm start
\`\`\`

پروژه روی [http://localhost:3000](http://localhost:3000) اجرا خواهد شد.

### ساخت برای production
\`\`\`bash
npm run build
\`\`\`

## 🏗 ساختار پروژه

\`\`\`
src/
├── components/
│   ├── AnimatedCharacter.tsx    # شخصیت انیمیشنی
│   ├── Header.tsx               # هدر سایت
│   ├── Hero.tsx                 # بخش اصلی
│   ├── LocationDetector.tsx     # تشخیص موقعیت
│   ├── ServicesGrid.tsx         # شبکه خدمات
│   ├── TrustIndicators.tsx      # نشانگرهای اعتماد
│   └── HowItWorks.tsx          # نحوه کارکرد
├── App.tsx                      # کامپوننت اصلی
├── App.css                      # استایل‌های سفارشی
└── index.tsx                    # نقطه ورود
\`\`\`

## 🎯 ویژگی‌های اصلی

### 1. شخصیت انیمیشنی
- تبدیل خودکار به 10 شغل مختلف
- انیمیشن‌های روان و جذاب
- نمایش ابزارهای مختلف برای هر شغل

### 2. تشخیص موقعیت
- استفاده از Geolocation API
- نمایش شهر و استان کاربر
- پشتیبانی از زبان هلندی

### 3. کارت‌های خدمات تعاملی
- افکت‌های hover زیبا
- انیمیشن‌های کلیک
- اطلاعات تعداد ارائه‌دهندگان

### 4. بخش "چگونه کار می‌کند"
- 3 مرحله ساده
- راهنمای بصری
- CTA واضح و جذاب

## 🎨 طراحی و رنگ‌ها

### پالت رنگی
- **قرمز اصلی**: `#e63946` (Trustoo Red)
- **نارنجی**: `#f77f00` (Trustoo Orange)  
- **آبی**: `#457b9d` (Trustoo Blue)
- **آبی روشن**: `#a8dadc` (Light Blue)
- **کرم**: `#f1faee` (Cream)

### فونت
- **Inter** - فونت اصلی برای خوانایی بهتر

## 📊 بهینه‌سازی‌ها

### Performance
- Lazy loading برای کامپوننت‌ها
- بهینه‌سازی تصاویر
- کش کردن درخواست‌های API

### SEO
- Meta tags کامل
- Structured data
- Open Graph tags
- Twitter Cards

### Accessibility
- ARIA labels
- Focus management
- Color contrast
- Keyboard navigation

## 🌐 API‌های استفاده شده

### Geolocation
- **Browser Geolocation API** - برای دریافت مختصات
- **BigDataCloud API** - برای reverse geocoding

## 🚀 آینده پروژه

### ویژگی‌های آتی
- [ ] نسخه موبایل اپلیکیشن
- [ ] پنل ادمین
- [ ] چت آنلاین
- [ ] سیستم پیام‌رسانی
- [ ] پرداخت آنلاین

### بهبودهای برنامه‌ریزی شده
- [ ] PWA Support
- [ ] Dark Mode
- [ ] چند زبانه
- [ ] آنالیتیکس پیشرفته

## 🤝 مشارکت

برای مشارکت در این پروژه:

1. Fork کنید
2. Feature branch ایجاد کنید
3. تغییرات را commit کنید  
4. Branch را push کنید
5. Pull Request ایجاد کنید

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## 👨‍💻 توسعه‌دهنده

ساخته شده با ❤️ برای بهبود تجربه کاربری Trustoo.nl

---

### 📞 تماس

برای سوالات یا پیشنهادات:
- Website: [trustoo.nl](https://trustoo.nl)
- Email: info@trustoo.nl