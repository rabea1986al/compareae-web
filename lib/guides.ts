// Single source of truth for CompareAE educational guides.
// Content is INFORMATIONAL ONLY — no prices, no broker/comparison language,
// no provider recommendations. Aligns with governance S25/S26 (disclaimer + no prices).
// Used by: /guides (listing), homepage EditorialGuides, and /guides/[slug] (article).

export type GuideSection = {
  heading: string
  body: string[]
  bullets?: string[]
}

export type GuideLocaleContent = {
  category: string
  title: string
  excerpt: string
  readTime: string
  intro: string
  sections: GuideSection[]
  takeaways: string[]
}

export type IconKey = 'car' | 'health' | 'travel' | 'business'

export type Guide = {
  slug: string
  image: string
  iconKey: IconKey
  ar: GuideLocaleContent
  en: GuideLocaleContent
}

export const guides: Guide[] = [
  {
    slug: 'car-insurance-guide',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
    iconKey: 'car',
    ar: {
      category: 'تأمين السيارات',
      title: 'دليل شامل لتأمين السيارات في الإمارات',
      excerpt: 'كل ما تحتاج معرفته عن أنواع تأمين السيارات والتغطيات المتاحة وكيفية الاختيار بينها.',
      readTime: '10 دقائق',
      intro:
        'تأمين السيارات في دولة الإمارات ليس خياراً بل متطلّب قانوني لتسجيل المركبة وقيادتها. هذا الدليل التثقيفي يشرح الأنواع الرئيسية للتغطية والفروقات بينها لمساعدتك على فهم خياراتك، دون أن يكون نصيحة تأمينية أو مالية.',
      sections: [
        {
          heading: 'لماذا تأمين السيارات إلزامي؟',
          body: [
            'تشترط الجهات التنظيمية في الإمارات وجود وثيقة تأمين سارية قبل تسجيل أي مركبة أو تجديد ملكيتها. الهدف الأساسي هو ضمان تغطية الأضرار التي قد تلحق بالأطراف الأخرى في حال وقوع حادث.',
            'تنقسم تغطية السيارات بشكل عام إلى نوعين رئيسيين: التأمين الشامل، والتأمين ضد الغير (الطرف الثالث). لكل منهما نطاق حماية مختلف يناسب احتياجات وظروف مختلفة.',
          ],
        },
        {
          heading: 'التأمين الشامل',
          body: [
            'يوفّر التأمين الشامل أوسع نطاق حماية، إذ يغطي عادةً الأضرار التي تلحق بمركبتك أنت بالإضافة إلى مسؤوليتك تجاه الغير.',
          ],
          bullets: [
            'أضرار مركبتك الناتجة عن الحوادث',
            'السرقة والحريق ضمن الشروط المذكورة في الوثيقة',
            'المسؤولية تجاه الطرف الثالث (أشخاص وممتلكات)',
            'إضافات اختيارية مثل المساعدة على الطريق أو التغطية خارج الدولة (حسب الوثيقة)',
          ],
        },
        {
          heading: 'التأمين ضد الغير (الطرف الثالث)',
          body: [
            'يغطّي هذا النوع الأضرار التي تتسبّب بها لمركبات أو ممتلكات أو أشخاص آخرين، لكنه لا يغطّي أضرار مركبتك أنت.',
            'يُعدّ خياراً يختاره بعض مالكي المركبات الأقدم، لكن من المهم قراءة حدود التغطية والاستثناءات بعناية قبل اتخاذ القرار.',
          ],
        },
        {
          heading: 'عوامل قد تؤثر على وثيقتك',
          body: [
            'تختلف تفاصيل التغطية والشروط من مزوّد لآخر ومن وثيقة لأخرى. من العوامل الشائعة التي قد تؤثر على تغطيتك:',
          ],
          bullets: [
            'نوع المركبة وعمرها وطرازها',
            'سجل القيادة وعدد سنوات الخبرة',
            'منطقة الاستخدام وطبيعته (شخصي أو تجاري)',
            'الإضافات الاختيارية ونوع الإصلاح (وكالة أو ورشة)',
          ],
        },
        {
          heading: 'نصائح عند مراجعة الوثيقة',
          body: [
            'قبل اعتماد أي وثيقة، يُنصح دائماً بقراءة بنود التغطية والاستثناءات بالتفصيل، والتحقّق من تفاصيلها مباشرةً مع شركة التأمين المرخّصة. تأكّد من فهمك لمبلغ التحمّل (deductible) ولشروط المطالبات وآلية الإصلاح المعتمدة.',
          ],
        },
      ],
      takeaways: [
        'تأمين السيارات إلزامي قانونياً في الإمارات لتسجيل المركبة وقيادتها.',
        'النوعان الرئيسيان هما التأمين الشامل والتأمين ضد الغير.',
        'تختلف التغطية والاستثناءات بين الوثائق؛ اقرأها بعناية.',
        'تحقّق دائماً من التفاصيل مباشرةً مع شركة التأمين المرخّصة.',
      ],
    },
    en: {
      category: 'Car Insurance',
      title: 'A Complete Guide to Car Insurance in the UAE',
      excerpt: 'Everything you need to understand about car insurance types, available coverage, and how to think about your options.',
      readTime: '10 min',
      intro:
        'Car insurance in the UAE is not optional — it is a legal requirement to register and drive a vehicle. This educational guide explains the main coverage types and how they differ, to help you understand your options. It is not insurance or financial advice.',
      sections: [
        {
          heading: 'Why is car insurance mandatory?',
          body: [
            'UAE regulators require a valid insurance policy before a vehicle can be registered or its ownership renewed. The core purpose is to ensure that damage caused to other parties in an accident is covered.',
            'Car coverage generally falls into two main categories: comprehensive insurance, and third-party (liability) insurance. Each offers a different scope of protection suited to different needs.',
          ],
        },
        {
          heading: 'Comprehensive insurance',
          body: [
            'Comprehensive insurance offers the widest scope of protection, typically covering damage to your own vehicle as well as your liability toward others.',
          ],
          bullets: [
            'Damage to your own vehicle from accidents',
            'Theft and fire, subject to the policy terms',
            'Third-party liability (people and property)',
            'Optional add-ons such as roadside assistance or off-country cover (policy dependent)',
          ],
        },
        {
          heading: 'Third-party (liability) insurance',
          body: [
            'This type covers damage you cause to other vehicles, property, or people, but does not cover damage to your own vehicle.',
            'It is an option some owners of older vehicles consider, but it is important to read the coverage limits and exclusions carefully before deciding.',
          ],
        },
        {
          heading: 'Factors that can affect your policy',
          body: [
            'Coverage details and terms vary between providers and between policies. Common factors that can affect your coverage include:',
          ],
          bullets: [
            'The type, age, and model of the vehicle',
            'Driving record and years of experience',
            'Area and nature of use (personal or commercial)',
            'Optional add-ons and repair type (agency or workshop)',
          ],
        },
        {
          heading: 'Tips when reviewing a policy',
          body: [
            'Before committing to any policy, always read the coverage terms and exclusions in detail, and verify them directly with the licensed insurer. Make sure you understand the deductible, the claims conditions, and the approved repair process.',
          ],
        },
      ],
      takeaways: [
        'Car insurance is legally mandatory in the UAE to register and drive a vehicle.',
        'The two main types are comprehensive and third-party (liability).',
        'Coverage and exclusions vary between policies — read them carefully.',
        'Always confirm the details directly with the licensed insurer.',
      ],
    },
  },
  {
    slug: 'health-insurance-guide',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    iconKey: 'health',
    ar: {
      category: 'تأمين صحي',
      title: 'كيف تختار التأمين الصحي المناسب لعائلتك',
      excerpt: 'معلومات تثقيفية حول خطط التأمين الصحي وما يجب مراعاته عند الاختيار.',
      readTime: '8 دقائق',
      intro:
        'يُعدّ التأمين الصحي من أهم أنواع الحماية لك ولعائلتك، وهو إلزامي في عدد من إمارات الدولة. يشرح هذا الدليل العناصر الأساسية التي تساعدك على فهم خطط التأمين الصحي، بأسلوب تثقيفي محايد دون عرض أسعار.',
      sections: [
        {
          heading: 'متطلبات التأمين الصحي في الإمارات',
          body: [
            'تفرض بعض الإمارات، مثل دبي وأبوظبي، تغطية صحية إلزامية للمقيمين. غالباً ما تكون مسؤولية توفير الحد الأساسي من التغطية على صاحب العمل، مع إمكانية ترقية الخطة أو إضافة أفراد العائلة.',
          ],
        },
        {
          heading: 'عناصر ينبغي فهمها في الخطة',
          body: [
            'عند مراجعة أي خطة صحية، من المفيد التركيز على العناصر التي تحدّد نطاق التغطية الفعلي:',
          ],
          bullets: [
            'شبكة المستشفيات والعيادات المعتمدة',
            'تغطية الأدوية والفحوصات والعلاج التخصصي',
            'نسبة التحمّل (co-payment) والحدود السنوية',
            'تغطية الأمومة والأسنان والبصريات إن وُجدت',
          ],
        },
        {
          heading: 'التغطية داخل الشبكة وخارجها',
          body: [
            'تعتمد معظم الخطط على شبكة محدّدة من مزوّدي الرعاية الصحية. قد تكون التغطية أعلى داخل الشبكة، بينما تخضع الزيارات خارج الشبكة لشروط أو نسب تحمّل مختلفة. فهم هذا الفرق يساعدك على اختيار خطة تناسب المستشفيات التي تفضّلها.',
          ],
        },
        {
          heading: 'احتياجات العائلة',
          body: [
            'تختلف الاحتياجات بين الأفراد والعائلات. عند وجود أطفال أو التخطيط للأمومة أو وجود حالات مزمنة، يصبح من المهم التحقّق من شمول هذه الجوانب وشروطها قبل اعتماد الخطة.',
          ],
        },
      ],
      takeaways: [
        'التأمين الصحي إلزامي في عدد من إمارات الدولة.',
        'ركّز على الشبكة الطبية ونسبة التحمّل والحدود السنوية.',
        'افهم الفرق بين التغطية داخل الشبكة وخارجها.',
        'تحقّق من شمول احتياجات عائلتك مباشرةً مع المزوّد.',
      ],
    },
    en: {
      category: 'Health Insurance',
      title: 'How to Choose the Right Health Insurance for Your Family',
      excerpt: 'Educational information on health insurance plans and what to consider when choosing.',
      readTime: '8 min',
      intro:
        'Health insurance is one of the most important forms of protection for you and your family, and it is mandatory in several emirates. This guide explains the key elements that help you understand health plans, in a neutral, educational way and without showing prices.',
      sections: [
        {
          heading: 'Health insurance requirements in the UAE',
          body: [
            'Some emirates, such as Dubai and Abu Dhabi, mandate health coverage for residents. Providing the basic level of coverage is often the employer’s responsibility, with the option to upgrade the plan or add family members.',
          ],
        },
        {
          heading: 'Elements to understand in a plan',
          body: [
            'When reviewing any health plan, it helps to focus on the elements that define the actual scope of coverage:',
          ],
          bullets: [
            'The approved network of hospitals and clinics',
            'Coverage for medication, tests, and specialist treatment',
            'Co-payment percentage and annual limits',
            'Maternity, dental, and optical coverage where available',
          ],
        },
        {
          heading: 'In-network vs out-of-network coverage',
          body: [
            'Most plans rely on a defined network of healthcare providers. Coverage may be higher in-network, while out-of-network visits can be subject to different terms or co-payments. Understanding this difference helps you choose a plan that fits the hospitals you prefer.',
          ],
        },
        {
          heading: 'Family needs',
          body: [
            'Needs differ between individuals and families. When you have children, are planning for maternity, or have chronic conditions, it becomes important to verify that these aspects are covered and to understand their terms before committing to a plan.',
          ],
        },
      ],
      takeaways: [
        'Health insurance is mandatory in several UAE emirates.',
        'Focus on the medical network, co-payment, and annual limits.',
        'Understand the difference between in-network and out-of-network coverage.',
        'Verify your family’s needs directly with the provider.',
      ],
    },
  },
  {
    slug: 'travel-insurance-guide',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    iconKey: 'travel',
    ar: {
      category: 'تأمين سفر',
      title: 'أهمية تأمين السفر قبل رحلتك القادمة',
      excerpt: 'تعرّف على التغطيات الأساسية التي يجب أن يشملها تأمين السفر ولماذا تحتاجه.',
      readTime: '6 دقائق',
      intro:
        'يوفّر تأمين السفر طبقة حماية مفيدة أثناء التنقّل خارج الدولة، من الطوارئ الطبية إلى تأخّر الرحلات. يشرح هذا الدليل التغطيات الشائعة لمساعدتك على فهم ما قد تحتاجه قبل السفر، بأسلوب تثقيفي.',
      sections: [
        {
          heading: 'لماذا قد تحتاج تأمين سفر؟',
          body: [
            'قد تطلب بعض الدول وجود تأمين سفر ساري المفعول كشرط لإصدار التأشيرة. وبعيداً عن المتطلبات، فإنه يساعد على تغطية النفقات غير المتوقّعة التي قد تحدث أثناء الرحلة.',
          ],
        },
        {
          heading: 'تغطيات شائعة في وثائق السفر',
          body: [
            'تختلف التغطيات بين الوثائق، لكن من أكثرها شيوعاً:',
          ],
          bullets: [
            'الطوارئ الطبية والاستشفاء خارج الدولة',
            'إلغاء الرحلة أو تأخّرها ضمن الشروط',
            'فقدان الأمتعة أو تأخّر وصولها',
            'المساعدة والطوارئ على مدار الساعة',
          ],
        },
        {
          heading: 'نقاط ينبغي الانتباه لها',
          body: [
            'من المهم مراجعة مدّة التغطية والوجهات المشمولة وحدود المطالبات. كما تجدر مراجعة الاستثناءات، مثل بعض الأنشطة الرياضية أو الحالات الطبية السابقة، والتي قد تخضع لشروط خاصة.',
          ],
        },
      ],
      takeaways: [
        'قد يكون تأمين السفر شرطاً للحصول على تأشيرة بعض الدول.',
        'يغطّي عادةً الطوارئ الطبية وإلغاء الرحلات والأمتعة.',
        'راجع مدّة التغطية والوجهات والاستثناءات بعناية.',
        'تحقّق من تفاصيل الوثيقة مباشرةً مع المزوّد قبل السفر.',
      ],
    },
    en: {
      category: 'Travel Insurance',
      title: 'Why Travel Insurance Matters Before Your Next Trip',
      excerpt: 'Learn about the core coverage travel insurance should include and why you may need it.',
      readTime: '6 min',
      intro:
        'Travel insurance provides a useful layer of protection while abroad, from medical emergencies to flight delays. This guide explains common coverage to help you understand what you might need before traveling, in an educational way.',
      sections: [
        {
          heading: 'Why might you need travel insurance?',
          body: [
            'Some countries require valid travel insurance as a condition for issuing a visa. Beyond requirements, it helps cover unexpected expenses that can arise during a trip.',
          ],
        },
        {
          heading: 'Common coverage in travel policies',
          body: [
            'Coverage varies between policies, but the most common include:',
          ],
          bullets: [
            'Medical emergencies and hospitalization abroad',
            'Trip cancellation or delay, subject to terms',
            'Lost or delayed baggage',
            'Round-the-clock assistance and emergencies',
          ],
        },
        {
          heading: 'Points to pay attention to',
          body: [
            'It is important to review the coverage period, included destinations, and claim limits. It is also worth reviewing exclusions, such as certain sporting activities or pre-existing medical conditions, which may be subject to special terms.',
          ],
        },
      ],
      takeaways: [
        'Travel insurance may be a visa requirement for some countries.',
        'It typically covers medical emergencies, trip cancellation, and baggage.',
        'Review the coverage period, destinations, and exclusions carefully.',
        'Confirm the policy details directly with the provider before traveling.',
      ],
    },
  },
  {
    slug: 'business-insurance-guide',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    iconKey: 'business',
    ar: {
      category: 'تأمين شركات',
      title: 'تأمين الشركات: دليل لأصحاب الأعمال',
      excerpt: 'كل ما يحتاج رواد الأعمال وأصحاب الشركات معرفته عن حماية أعمالهم.',
      readTime: '12 دقيقة',
      intro:
        'يساعد تأمين الشركات على حماية الأعمال من مخاطر متنوّعة قد تؤثّر على استمراريتها. يقدّم هذا الدليل نظرة تثقيفية على الأنواع الشائعة من تغطيات الأعمال في الإمارات لمساعدة أصحاب الشركات على فهم خياراتهم.',
      sections: [
        {
          heading: 'لماذا يهمّ تأمين الأعمال؟',
          body: [
            'تواجه الشركات على اختلاف أحجامها مخاطر تشغيلية وقانونية ومادية. يساعد التأمين على تخفيف الأثر المالي لبعض هذه المخاطر، ما يدعم استمرارية العمل.',
          ],
        },
        {
          heading: 'أنواع شائعة من تغطيات الأعمال',
          body: [
            'تختلف الاحتياجات حسب طبيعة النشاط وحجمه، ومن التغطيات الشائعة:',
          ],
          bullets: [
            'تأمين الممتلكات والأصول',
            'المسؤولية تجاه الغير والمسؤولية المهنية',
            'تأمين تعويضات العمال',
            'تغطية انقطاع الأعمال ضمن الشروط',
          ],
        },
        {
          heading: 'كيف تقدّر احتياجات شركتك؟',
          body: [
            'تبدأ التغطية المناسبة من فهم طبيعة المخاطر الخاصة بنشاطك. على سبيل المثال، تختلف احتياجات شركة تقنية عن مطعم أو مصنع. من المفيد جرد الأصول والمسؤوليات المحتملة قبل مراجعة الخيارات.',
          ],
        },
        {
          heading: 'نقاط عند مراجعة الوثيقة',
          body: [
            'راجع حدود التغطية والاستثناءات وشروط المطالبات بعناية، ويُفضّل التحقّق من ملاءمتها لطبيعة نشاطك مباشرةً مع شركة التأمين المرخّصة أو مع مختصّ قانوني عند الحاجة.',
          ],
        },
      ],
      takeaways: [
        'تأمين الأعمال يخفّف الأثر المالي لمخاطر متنوّعة.',
        'تشمل التغطيات الشائعة الممتلكات والمسؤولية وتعويضات العمال.',
        'حدّد التغطية بناءً على طبيعة نشاطك وحجمه.',
        'راجع الحدود والاستثناءات وتحقّق من التفاصيل مع المزوّد.',
      ],
    },
    en: {
      category: 'Business Insurance',
      title: 'Business Insurance: A Guide for Business Owners',
      excerpt: 'What entrepreneurs and business owners need to know about protecting their business.',
      readTime: '12 min',
      intro:
        'Business insurance helps protect companies from a range of risks that can affect their continuity. This guide offers an educational look at common business coverage types in the UAE to help owners understand their options.',
      sections: [
        {
          heading: 'Why does business insurance matter?',
          body: [
            'Companies of all sizes face operational, legal, and physical risks. Insurance helps mitigate the financial impact of some of these risks, supporting business continuity.',
          ],
        },
        {
          heading: 'Common types of business coverage',
          body: [
            'Needs vary by the nature and size of the activity. Common coverage includes:',
          ],
          bullets: [
            'Property and asset insurance',
            'Third-party and professional liability',
            'Workers’ compensation',
            'Business interruption coverage, subject to terms',
          ],
        },
        {
          heading: 'How to assess your business needs',
          body: [
            'The right coverage starts with understanding the risks specific to your activity. For example, a tech company’s needs differ from a restaurant or a factory. It helps to take stock of your assets and potential liabilities before reviewing options.',
          ],
        },
        {
          heading: 'Points when reviewing a policy',
          body: [
            'Review coverage limits, exclusions, and claim conditions carefully, and ideally verify their suitability for your activity directly with the licensed insurer or with a legal specialist when needed.',
          ],
        },
      ],
      takeaways: [
        'Business insurance mitigates the financial impact of various risks.',
        'Common coverage includes property, liability, and workers’ compensation.',
        'Define coverage based on the nature and size of your activity.',
        'Review limits and exclusions, and confirm details with the provider.',
      ],
    },
  },
  {
    slug: 'save-car-insurance',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80',
    iconKey: 'car',
    ar: {
      category: 'تأمين السيارات',
      title: 'كيف تقلّل تكلفة تأمين سيارتك',
      excerpt: 'نصائح ذكية لفهم العوامل التي قد تؤثّر على تكلفة تأمين سيارتك دون التضحية بجودة التغطية.',
      readTime: '5 دقائق',
      intro:
        'تتأثّر تكلفة وثيقة تأمين السيارة بعدّة عوامل. هذا الدليل التثقيفي يستعرض عوامل قد تؤثّر على التكلفة بشكل عام، دون عرض أسعار أو أرقام، لمساعدتك على فهم ما يمكنك التحكّم به.',
      sections: [
        {
          heading: 'عوامل ضمن سيطرتك',
          body: [
            'بعض العوامل التي قد تؤثّر على التكلفة يمكنك التأثير فيها مع الوقت:',
          ],
          bullets: [
            'الحفاظ على سجل قيادة نظيف وخالٍ من الحوادث',
            'مراجعة مستوى التغطية والإضافات التي تحتاجها فعلاً',
            'فهم خيار مبلغ التحمّل (deductible) وأثره',
            'الاستفادة من مكافأة عدم المطالبة (no-claims) عند توفّرها',
          ],
        },
        {
          heading: 'لا تضحِّ بالتغطية الأساسية',
          body: [
            'قد يكون تقليص التغطية وسيلة لخفض التكلفة، لكنه قد يعرّضك لمخاطر مالية أكبر عند وقوع حادث. من المهم الموازنة بين التكلفة ومستوى الحماية الذي تحتاجه فعلاً.',
          ],
        },
        {
          heading: 'اقرأ التفاصيل قبل التجديد',
          body: [
            'عند التجديد، راجع بنود الوثيقة وأي تغييرات في التغطية أو الاستثناءات. وتحقّق دائماً من التفاصيل مباشرةً مع شركة التأمين المرخّصة قبل اتخاذ القرار.',
          ],
        },
      ],
      takeaways: [
        'سجل القيادة النظيف قد يؤثّر إيجاباً مع الوقت.',
        'اختر التغطية والإضافات بناءً على احتياجك الفعلي.',
        'تقليص التغطية قد يوفّر تكلفة لكنه يزيد المخاطر.',
        'راجع التفاصيل مع المزوّد قبل كل تجديد.',
      ],
    },
    en: {
      category: 'Car Insurance',
      title: 'How to Reduce the Cost of Your Car Insurance',
      excerpt: 'Smart tips for understanding the factors that can affect your car insurance cost without sacrificing coverage quality.',
      readTime: '5 min',
      intro:
        'The cost of a car insurance policy is influenced by several factors. This educational guide reviews factors that can affect cost in general — without showing prices or figures — to help you understand what you can control.',
      sections: [
        {
          heading: 'Factors within your control',
          body: [
            'Some factors that can affect cost are ones you can influence over time:',
          ],
          bullets: [
            'Maintaining a clean, accident-free driving record',
            'Reviewing the coverage level and add-ons you actually need',
            'Understanding the deductible option and its effect',
            'Benefiting from a no-claims reward where available',
          ],
        },
        {
          heading: 'Don’t sacrifice essential coverage',
          body: [
            'Reducing coverage can be a way to lower cost, but it may expose you to greater financial risk in an accident. It is important to balance cost against the level of protection you actually need.',
          ],
        },
        {
          heading: 'Read the details before renewing',
          body: [
            'At renewal, review the policy terms and any changes to coverage or exclusions. Always confirm the details directly with the licensed insurer before deciding.',
          ],
        },
      ],
      takeaways: [
        'A clean driving record can have a positive effect over time.',
        'Choose coverage and add-ons based on your actual needs.',
        'Cutting coverage may save cost but increases risk.',
        'Review the details with the provider before every renewal.',
      ],
    },
  },
  {
    slug: 'health-policy-terms',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80',
    iconKey: 'health',
    ar: {
      category: 'تأمين صحي',
      title: 'فهم شروط وثيقة التأمين الصحي',
      excerpt: 'شرح مبسّط للمصطلحات والشروط الشائعة في وثائق التأمين الصحي.',
      readTime: '7 دقائق',
      intro:
        'تحتوي وثائق التأمين الصحي على مصطلحات قد تبدو معقّدة. يشرح هذا الدليل أبرز المصطلحات الشائعة بأسلوب مبسّط لمساعدتك على قراءة وثيقتك بثقة، دون أن يكون نصيحة طبية أو تأمينية.',
      sections: [
        {
          heading: 'مصطلحات أساسية',
          body: [
            'فهم هذه المصطلحات يساعدك على معرفة ما تغطّيه وثيقتك فعلاً:',
          ],
          bullets: [
            'القسط (Premium): المبلغ المطلوب للحفاظ على سريان الوثيقة.',
            'نسبة التحمّل (Co-payment): الجزء الذي تدفعه من تكلفة الخدمة.',
            'الحد الأقصى السنوي: أعلى مبلغ تغطّيه الوثيقة خلال السنة.',
            'الشبكة (Network): المستشفيات والعيادات المعتمدة ضمن الخطة.',
          ],
        },
        {
          heading: 'الاستثناءات والفترات الانتظارية',
          body: [
            'تحدّد الاستثناءات الحالات أو الخدمات غير المشمولة. كما قد توجد فترات انتظار قبل سريان تغطية بعض الخدمات، مثل الأمومة أو بعض الحالات. قراءة هذه البنود بعناية تجنّبك المفاجآت لاحقاً.',
          ],
        },
        {
          heading: 'المطالبات والموافقات المسبقة',
          body: [
            'تتطلّب بعض الخدمات موافقة مسبقة من شركة التأمين قبل تقديمها. من المفيد فهم آلية المطالبات والمستندات المطلوبة لتسهيل الإجراءات عند الحاجة.',
          ],
        },
      ],
      takeaways: [
        'افهم القسط ونسبة التحمّل والحد الأقصى السنوي والشبكة.',
        'راجع الاستثناءات وفترات الانتظار بعناية.',
        'بعض الخدمات تتطلّب موافقة مسبقة.',
        'عند الالتباس، اطلب التوضيح مباشرةً من المزوّد.',
      ],
    },
    en: {
      category: 'Health Insurance',
      title: 'Understanding Your Health Insurance Policy Terms',
      excerpt: 'A simplified explanation of common terms and conditions in health insurance policies.',
      readTime: '7 min',
      intro:
        'Health insurance policies contain terms that can seem complex. This guide explains the most common ones in a simplified way to help you read your policy with confidence. It is not medical or insurance advice.',
      sections: [
        {
          heading: 'Key terms',
          body: [
            'Understanding these terms helps you know what your policy actually covers:',
          ],
          bullets: [
            'Premium: the amount required to keep the policy active.',
            'Co-payment: the portion you pay of a service’s cost.',
            'Annual maximum: the highest amount the policy covers in a year.',
            'Network: the approved hospitals and clinics within the plan.',
          ],
        },
        {
          heading: 'Exclusions and waiting periods',
          body: [
            'Exclusions define the conditions or services that are not covered. There may also be waiting periods before coverage for certain services begins, such as maternity or certain conditions. Reading these terms carefully avoids surprises later.',
          ],
        },
        {
          heading: 'Claims and pre-approvals',
          body: [
            'Some services require pre-approval from the insurer before they are provided. It helps to understand the claims process and the required documents to ease procedures when needed.',
          ],
        },
      ],
      takeaways: [
        'Understand the premium, co-payment, annual maximum, and network.',
        'Review exclusions and waiting periods carefully.',
        'Some services require pre-approval.',
        'When in doubt, ask the provider directly for clarification.',
      ],
    },
  },
]

export const guideSlugs = guides.map((g) => g.slug)

export type GuideCard = {
  slug: string
  image: string
  iconKey: IconKey
  category: string
  title: string
  excerpt: string
  readTime: string
}

export type GuideArticle = GuideLocaleContent & {
  slug: string
  image: string
  iconKey: IconKey
}

function pick(g: Guide, locale: string): GuideLocaleContent {
  return locale === 'en' ? g.en : g.ar
}

export function getAllGuides(locale: string): GuideCard[] {
  return guides.map((g) => {
    const c = pick(g, locale)
    return {
      slug: g.slug,
      image: g.image,
      iconKey: g.iconKey,
      category: c.category,
      title: c.title,
      excerpt: c.excerpt,
      readTime: c.readTime,
    }
  })
}

export function getGuide(slug: string, locale: string): GuideArticle | null {
  const g = guides.find((x) => x.slug === slug)
  if (!g) return null
  const c = pick(g, locale)
  return { ...c, slug: g.slug, image: g.image, iconKey: g.iconKey }
}
