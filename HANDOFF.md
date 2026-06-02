# CompareAE — ملف تسليم الجلسة (Session Handoff)

> **الغرض:** فتح جلسة جديدة لنفس المشروع بدون فقدان السياق.
> **التاريخ:** 2026-05-31
> **المشروع:** CompareAE (compareae.com) — منصة اكتشاف تأمين إماراتية عربية أولاً.

---

## 0. ملخص سريع (TL;DR)

CompareAE = **منصة اكتشاف معلوماتية (Discovery platform)** للتأمين في الإمارات، عربية-أولاً، ثنائية اللغة (`/ar` + `/en`).
أُنجزت في هذه الجلسة: إصلاحات UI، إعادة بناء صفحات الفئات بهيرو مخصص، نظام كروت مزوّدين قابل لإعادة الاستخدام، جعل الكروت والروابط محلية (locale-aware)، **ترجمة كاملة ثنائية اللغة لكل النصوص الظاهرة**. كل الصفحات (28 تركيبة) تُرجع HTTP 200.

**المتبقي الوحيد:** المرحلة 5 (SEO + ترجمة الميتا) — لم تبدأ، بانتظار قرارك.

---

## 1. المكدّس التقني (Tech Stack)

- **Next.js 16.2.6** (App Router, Turbopack), **React 19**, **TypeScript**
- **Tailwind CSS v4**, **shadcn/ui**
- **next-intl v4** للترجمة وتوجيه اللغات

### مفاهيم next-intl المستخدمة (مهمة)
- `useTranslations('namespace')` — تعمل في مكوّنات server و client معاً (بدون `setRequestLocale` على الصفحات — مُتحقَّق منه).
- `t.raw('key')` — لإرجاع المصفوفات/قوائم الكائنات.
- `useLocale()` من `'next-intl'`.
- `Link` / `usePathname` من `@/i18n/navigation` (وليس `next/link`).
- مبدّل اللغة: `<Link href={pathname} locale={otherLocale}>` (يحافظ على الصفحة الحالية).
- **shadcn `<Button asChild>`** يلفّ `<Link>` لتجنّب التداخل غير الصالح `<a><button>` ومنع hydration mismatch.

### مسارات وتشغيل
- جذر المشروع: `C:\Users\HP\Desktop\UAE-SEO\compareae-next`
- خادم التطوير: عبر `.claude/launch.json` باسم **"compareae"** على المنفذ **3000**.
- **مهم:** معرّفات الخادم (server IDs) تتغيّر عند كل إعادة تشغيل.
- **التحقق الموثوق:** PowerShell `Invoke-WebRequest` (أدوات المعاينة preview_screenshot غير مستقرة وتنتهي مهلتها).

---

## 2. قيود الحوكمة والأمان (مُلزِمة — يجب الحفاظ عليها دائماً)

> الوثيقة المُلزِمة: `compareae-next/governance/MASTER_GOVERNANCE.md` (v1.1, الأقسام S1–S27)

- **CompareAE = منصة اكتشاف (Discovery) — مقفول (LOCKED).** ليست: محرّك مقارنة، وسيط، وكيل، أو منصّة جمع عملاء (lead-gen).
- **ممنوع:** عرض أسعار حيّة، جمع بيانات العملاء، عرض تصنيفات/ترتيب/توصيات.
- **lead-gen ممنوع منعاً باتاً.**
- **روابط الأفلييت يجب أن تستخدم:** `rel="nofollow sponsored noopener noreferrer"` + `target="_blank"`.
- **لا شعارات مزوّدين** حتى توقيع عقود الأفلييت → نستخدم صورة سيارة placeholder بدلاً منها (`CAR_IMG`).
- **إخلاء مسؤولية إلزامي** في أي صفحة تذكر أسماء المزوّدين (الحوكمة S25).
- **القيد القانوني الإماراتي:** مواقع مقارنة أسعار التأمين تحتاج تسجيلاً + وسيطاً مرخّصاً؛ نموذجنا بلا ترخيص يجب أن يبقى **معلوماتياً فقط (informational-only)**.
- **لا تحذف** هذه الملفات في جذر UAE-SEO: `server.js`, `agent.js`, `governance/`, والصفحات (موقع Render حيّ).

### سياسة إعادة البناء (من CLAUDE.md)
- إعادة البناء الكاملة مسموحة ومُفضّلة عند تغيّر الاتجاه البصري.
- لا تُبقِ الهياكل القديمة إلا إذا قال المستخدم صراحة **"preserve existing structure"**.
- الأولوية: الدقة البصرية للمرجع > UX نظيف > تصميم عربي-أولاً متجاوب > بنية إنتاجية.

---

## 3. ما أُنجِز في هذه الجلسة (تسلسل العمل)

1. **إصلاح 3 مشاكل UI:** كرت "تأمين السيارات" "ما يعمل شيء"، قسم تواصل الفوتر (إبقاء الإيميل فقط)، تاغ غير واضح.
2. **إصلاح هيرو السيارات:** الخلفية كانت معتمة جداً (تفتيح overlay)، وزر "استكشف المزوّدين" صغير (تكبير).
3. **حذف ProvidersSection** (شريط شعارات رمادي RAK/Orient) نهائياً من كل الصفحات.
4. **بناء كروت مزوّدين حقيقية** في صفحة تأمين السيارات لتشجيع الإجراء.
5. **تعميم كروت المزوّدين** على صفحات health/travel/business.
6. **جعل كروت الفئات قابلة للنقر بالكامل** (وليس فقط زر "استكشف").
7. **روابط محلية (locale-aware)** لكل الروابط الداخلية + توصيل مبدّل اللغة.
8. **استخراج ترجمة كامل (AR/EN)** للصفحة الرئيسية + chrome (header/footer/...).
9. **ترجمة كل الصفحات المتبقية** (صفحات الفئات + الصفحات الثابتة/القانونية).

---

## 4. الملفات الرئيسية وحالتها

### مكوّنات (components/)
| الملف | الحالة |
|------|--------|
| `hero-section.tsx` | لوحة Discovery؛ `useTranslations('hero')`؛ `insuranceTypes` = `{href, labelKey, icon}` |
| `footer.tsx` | حُذف Phone/MapPin (إيميل فقط)؛ next-intl Link؛ `useTranslations('footer')` |
| `cta-section.tsx` | كلا الزرّين `<Button asChild>` يلفّ `<Link>`؛ تباين زر outline مُصلَح؛ `useTranslations('cta')` |
| `header.tsx` | `'use client'`؛ next-intl Link؛ مبدّل لغة (English ⇄ العربية)؛ أزرار CTA → `/providers` |
| `insurance-categories.tsx` | الكرت كامل `<Link href={category.href}>` مع span بصري للـ CTA؛ `useTranslations('categories')` |
| `provider-cards.tsx` | **مُنشأ** — `ProviderCards({providers})` قابل لإعادة الاستخدام + إخلاء مسؤولية إلزامي؛ `useTranslations('providerCards')` |
| `providers-section.tsx` | **محذوف** (شريط الشعارات الرمادي) |
| `how-it-works.tsx`, `why-compareae.tsx`, `faq-section.tsx`, `trust-section.tsx`, `editorial-guides.tsx`, `contact-form.tsx` | كلها موصولة بـ useTranslations؛ بعضها يستخدم `t.raw()` للمصفوفات |

### مكتبات (lib/)
| الملف | الحالة |
|------|--------|
| `providers.ts` | **مُنشأ** — `CAR_IMG`، نوع `Provider` مع `categories[]` و `urls` لكل فئة، مصفوفة `PROVIDERS` (Shory/YallaCompare/Policybazaar/InsuranceMarket)، `getAllProviders()`, `getProvidersByCategory(category)` |

### صفحات (app/[locale]/)
| الصفحة | الحالة |
|--------|--------|
| `car-insurance/page.tsx` | **أُعيد بناؤها** — هيرو مخصص للسيارة (صورة، overlay `0.05→0.3`، زر `h-14 px-10 text-lg font-semibold` → `/providers`)، قسم كروت مزوّدين، `useTranslations('carInsurance')` + `t.raw('features'/'comprehensiveBullets'/'thirdPartyBullets')` |
| `health/travel/business-insurance/page.tsx` | **أُعيد بناؤها** — هيرو مخصص، أقسام مزوّدين عبر `getProvidersByCategory(...)`، namespaces مناسبة. زر business CTA → `/providers`؛ زر هيرو business → `/contact` |
| `providers/page.tsx` | `getAllProviders()` + `<ProviderCards>`؛ `useTranslations('providersPage')` |
| `about/contact/disclaimer/faq/guides/terms/privacy/trust/page.tsx` | كلها موصولة بـ namespaces الخاصة بها؛ الصفحات القانونية تستخدم `t.raw()` لقوائم النقاط |

### ملفات الترجمة (messages/)
`ar.json` + `en.json` — مملوءة بالكامل بالـ namespaces التالية:
```
common, header, hero, categories, howItWorks, why, faq, trust, guides,
cta, footer, providerCards, carInsurance, healthInsurance, travelInsurance,
businessInsurance, about, contact, contactForm, disclaimer, faqPage,
guidesPage, terms, privacy, trustPage, providersPage
```

---

## 5. الأخطاء التي صادفناها وحلولها (دروس مستفادة)

- **كرت السيارة "ما يعمل":** السبب الحقيقي أن صفحة car-insurance كانت تعرض نفس `<HeroSection/>` العام للصفحة الرئيسية، فالتنقّل ينجح لكن الأعلى يبدو مطابقاً. **الحل:** هيرو مخصص للصفحة.
- **hydration mismatch `<a><button>`:** `<Link><Button>` يولّد تداخلاً غير صالح. **الحل:** `<Button asChild><Link>...</Link></Button>` في كل مكان.
- **أخطاء HeroSection ReferenceError / module-factory:** من تعديلات سريعة/كاش. **الحل:** إيقاف الخادم، `Remove-Item -Recurse -Force .next`، إعادة تشغيل.
- **الفاصلة العربية (،) مقابل اللاتينية (,):** فشل عدة Edit على النص العربي. **الحل:** إعادة قراءة الأسطر بدقة أو إعادة كتابة الملف عبر Write.
- **`/ar` "connection closed unexpectedly":** إعادة تجميع ثقيلة عابرة بعد تعديلات كثيرة؛ نجحت بإعادة المحاولة.
- **تحذيرات RSC prefetch:** حُلّت بتحويل كل ملفات `next/link` الستة إلى next-intl Link (0 روابط داخلية غير محلية من أصل 33).

---

## 6. التحقق (Verification)

✅ كل الـ **28 تركيبة** (14 صفحة × ar/en) تُرجع **HTTP 200** (تأكّد عبر مسح PowerShell كامل، exit 0).

أمر التحقق المرجعي (PowerShell):
```powershell
$paths = @('', 'providers','car-insurance','health-insurance','travel-insurance',
  'business-insurance','about','contact','faq','guides','terms','privacy','trust','disclaimer')
foreach ($loc in @('en','ar')) {
  foreach ($p in $paths) {
    $url = "http://localhost:3000/$loc" + ($(if ($p) { "/$p" } else { "" }))
    try { $r = Invoke-WebRequest $url -UseBasicParsing; "$loc/$p => $($r.StatusCode)" }
    catch { "$loc/$p => ERROR" }
  }
}
```

---

## 7. المتبقي — المرحلة 5 (SEO + ترجمة الميتا) — لم تبدأ

> **هذا هو العمل الوحيد المتبقي، بانتظار قرار المستخدم.**

1. **ترجمة `metadata` الصفحات:** حالياً `title`/`og` عربية ثابتة (hardcoded) حتى على `/en`. الحل: تحويل صادرات `metadata` الثابتة إلى `generateMetadata` لكل صفحة.
   - *مثال على المشكلة:* `app/[locale]/providers/page.tsx` و `trust/page.tsx` ما زالا يصدّران `metadata` ثابتاً بالعربية.
2. **hreflang / `alternates.languages` / canonical URLs.**
3. **`sitemap.ts` متعدد اللغات.**
4. **إعادة تسمية `middleware.ts` → `proxy.ts`** (تحذير إهمال Next 16).

### (أولوية أدنى)
- صفحات ملفات المزوّدين `/providers/[name]` (الحوكمة S8).

---

## 8. كيف تستأنف في جلسة جديدة

1. شغّل خادم التطوير (`.claude/launch.json` → "compareae"، منفذ 3000).
2. إذا ظهرت أخطاء كاش: `Remove-Item -Recurse -Force .next` ثم أعد التشغيل.
3. تحقّق من الحالة بمسح PowerShell أعلاه (يجب أن تكون كلها 200).
4. لبدء المرحلة 5: ابدأ بترجمة الميتا عبر `generateMetadata`، ثم hreflang/alternates/canonical، ثم sitemap متعدد اللغات، وأخيراً إعادة تسمية middleware.

### قيود أسلوب العمل (مستمرة)
- العمل ملفاً بملف بشكل منهجي.
- الحفاظ على التصميم/الخطوط/الألوان الحالية.
- عدم كسر الصفحات.
- "اتصرف بالأفضل" — ابدأ مباشرة دون عرض كل تغيير قبله.

---

## 9. مرجع الذاكرة الدائمة (Memory)

ملفات الذاكرة المُلزِمة (في `C:\Users\HP\.claude\projects\C--Users-HP-Desktop-UAE-SEO\memory\`):
- `feedback_rebuild_policy.md` — إعادة البناء مسموحة افتراضياً؛ لا patch-preserve للـ UI القديم إلا بطلب صريح.
- `project_legal_comparison_constraint.md` — القيد القانوني الإماراتي (informational-only).
- `project_product_positioning.md` — **مقفول:** Discovery/content platform، ليست محرّك مقارنة/وسيط/lead-gen.
- `compareae-next/governance/MASTER_GOVERNANCE.md` (v1.1) — 27 قسماً؛ S22–S26 تغطي العلامة التجارية/الشعار، قواعد rel للأفلييت، حق المزوّد في التصحيح، إخلاء المسؤولية الإلزامي، قفل عدم عرض الأسعار.

---

*انتهى ملف التسليم. افتح الجلسة الجديدة وأرفِق هذا الملف للمتابعة من حيث توقّفنا.*
