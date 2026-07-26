// ── Site copy, per language ──────────────────────────────────────────────────
// English is the leading version and lives at "/". Hebrew lives at "/he/".
// Only strings live here. Everything language-independent (icons, brand colors,
// photos, LinkedIn URLs, demo video names, integration logos) stays in
// Landing.astro and is zipped with these arrays by index, so the two languages
// can never drift apart in structure.

export type Lang = "en" | "he";

export const LANGS: Lang[] = ["en", "he"];

/** Path each language is served from. */
export const LANG_PATH: Record<Lang, string> = { en: "/", he: "/he/" };

/** BCP-47 tag + writing direction per language. */
export const LANG_META: Record<Lang, { htmlLang: string; dir: "ltr" | "rtl"; ogLocale: string }> = {
  en: { htmlLang: "en", dir: "ltr", ogLocale: "en_US" },
  he: { htmlLang: "he", dir: "rtl", ogLocale: "he_IL" },
};

type Item = { title: string; sub: string };

export type Copy = {
  meta: { title: string; description: string };
  nav: {
    links: { href: string; label: string }[];
    cta: string;
    themeLabel: string;
    themes: { system: string; light: string; dark: string };
    /** Label on the button that switches to the other language. */
    switchTo: string;
    switchToAria: string;
    brandHome: string;
  };
  hero: { h1a: string; h1b: string; tagline: string; kpi: string; cta: string };
  approach: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    /** Rendered between journey steps; flips direction per language. */
    arrow: string;
    journey: Item[];
    waysEyebrow: string;
    waysTitle: string;
    ways: Item[];
  };
  domains: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    items: { title: string; tag: string; items: string[] }[];
    management: { title: string; tag: string; items: string[] };
  };
  platform: { eyebrow: string; h2a: string; h2b: string; sub: string; items: Item[] };
  adoption: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    lead: string;
    items: Item[];
    key: string;
    ringOuter: string;
    ringMid: string;
    core: string;
  };
  principles: { eyebrow: string; h2: string; items: { title: string; body: string }[] };
  team: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    linkedin: string;
    linkedinAria: (name: string) => string;
    members: { role: string; bio: string }[];
    advisors: { role: string; bio: string }[];
  };
  demos: {
    eyebrow: string;
    h2: string;
    sub: string;
    groups: { tag: string; title: string; sub: string; rows: { eyebrow: string; title: string; sub: string }[] }[];
    more: string;
  };
  integrations: { eyebrow: string; h2: string; sub: string };
  /** Parked: the proof section is commented out in Landing.astro for now. */
  proof: {
    eyebrow: string;
    h2: string;
    sub: string;
    badge: string;
    cards: { title: string; body: string; blank?: string }[];
  };
  pilot: {
    eyebrow: string;
    h2: string;
    body: string;
    workshopPre: string;
    workshopLink: string;
    workshopPrefill: string;
    fields: {
      name: string;
      company: string;
      role: string;
      email: string;
      phone: string;
      phoneOptional: string;
      pain: string;
      painPlaceholder: string;
    };
    submit: string;
    sending: string;
    retry: string;
    success: string;
  };
  footer: { tag: string; copy: string; whatsapp: string; linkedin: string; fabAria: string };
};

export const en: Copy = {
  meta: {
    title: "Mateos: Your AI partner. Not an agency. Not consulting.",
    description:
      "Mateos builds the software, deploys it inside your organization, and takes ownership of the result. 25% of our fee is tied to your KPIs. Start with a pilot.",
  },
  nav: {
    links: [
      { href: "#approach", label: "Approach" },
      { href: "#domains", label: "Domains" },
      { href: "#platform", label: "Platform" },
      { href: "#adoption", label: "Adoption" },
      { href: "#how", label: "How we work" },
      { href: "#team", label: "Team" },
      { href: "#examples", label: "Examples" },
      { href: "#integrations", label: "Integrations" },
    ],
    cta: "Start a Pilot",
    themeLabel: "Color theme",
    themes: { system: "System", light: "Light", dark: "Dark" },
    switchTo: "עברית",
    switchToAria: "Switch to Hebrew",
    brandHome: "Mateos.ai home",
  },
  hero: {
    h1a: "From Complexity to Efficiency:",
    h1b: "AI Automation Built for Industrial Growth.",
    tagline:
      "We build the software, deploy it inside your organization, and take ownership of the result. Then we train your people to run it.",
    kpi: "25% of our fee is tied to your KPIs.",
    cta: "See how it works ↓",
  },
  approach: {
    eyebrow: "What we do",
    h2a: "Not Just Automation.",
    h2b: "A Company Brain.",
    sub: "A step-by-step journey, wrapped at every step by the change layer that makes it stick.",
    arrow: "→",
    journey: [
      {
        title: "Diagnose Deep",
        sub: "We map your organization, your data and your workflows, and pinpoint where AI pays back first, in any department.",
      },
      {
        title: "Prove",
        sub: "A focused solution at your sharpest pain point, measured against agreed results in weeks, not promises.",
      },
      {
        title: "Replicate",
        sub: "Agents and automations roll out department by department, building toward one orchestrating Company Brain.",
      },
    ],
    waysEyebrow: "Ways to work with us",
    waysTitle: "Start where it fits your organization",
    ways: [
      {
        title: "Fractional CAIO",
        sub: "A senior Chief AI Officer embedded in your leadership, driving the platform and the roadmap, part-time.",
      },
      { title: "Workshops", sub: "Hands-on sessions that get your people building with our agents, fast." },
      { title: "Projects", sub: "A defined build on our platform, with a clear scope, owned end to end." },
    ],
  },
  domains: {
    eyebrow: "Where we work",
    h2a: "Every department,",
    h2b: "one plant",
    sub: "These are the domains inside the plant we work in. We start in the one that hurts most, then expand, and every department we add makes the others smarter.",
    items: [
      {
        title: "Production Floor",
        tag: "Real-time visibility and fewer surprises on the line.",
        items: [
          "Automated shift-handover reports",
          "Downtime root-cause analysis",
          "OEE dashboards fed directly by machine data",
        ],
      },
      {
        title: "Maintenance",
        tag: "From firefighting to prediction.",
        items: [
          "Predictive maintenance alerts",
          "Automated work-order creation and prioritization",
          "Spare-parts demand forecasting",
        ],
      },
      {
        title: "Quality (QA/QC)",
        tag: "Catch deviations before the customer does.",
        items: [
          "AI-assisted defect detection",
          "Automated non-conformance reports",
          "Compliance documentation generated from production data",
        ],
      },
      {
        title: "Planning & Production Control",
        tag: "Plans that survive contact with reality.",
        items: [
          "AI-assisted production scheduling",
          "Bottleneck simulation",
          "Automatic re-planning when orders or materials shift",
        ],
      },
      {
        title: "Supply Chain & Procurement",
        tag: "Buy smarter, chase less.",
        items: [
          "Demand forecasting",
          "Automated PO creation and approvals",
          "Supplier-quote comparison and follow-up agents",
        ],
      },
      {
        title: "Warehouse & Logistics",
        tag: "The right stock, in the right place, without spreadsheets.",
        items: [
          "Inventory optimization",
          "Automated receiving and picking documentation",
          "Shipment tracking and customer notifications",
        ],
      },
      {
        title: "Engineering & R&D",
        tag: "Your know-how, searchable and reusable.",
        items: [
          "Technical knowledge-base agents",
          "Automated engineering-change (ECO) documentation",
          "Drawing and spec retrieval in plain language",
        ],
      },
      {
        title: "Marketing",
        tag: "More qualified leads, less manual work.",
        items: [
          "Automated market and competitor intelligence",
          "Content tailored to different audiences",
          "Lead scoring, campaign automation and trade-show prep",
        ],
      },
      {
        title: "Sales & Customer Service",
        tag: "Faster quotes, calmer customers.",
        items: [
          "Quote generation from ERP data",
          "Order-intake automation",
          "Service-ticket triage and response drafting",
        ],
      },
      {
        title: "Finance",
        tag: "Close the month, not your evenings.",
        items: ["Invoice matching and reconciliation", "Automated reporting", "Cash-flow and cost anomaly alerts"],
      },
      {
        title: "HR & Workforce",
        tag: "The right people, trained and scheduled.",
        items: [
          "Shift-staffing optimization",
          "Onboarding and training assistants for the systems we deploy",
          "HR request automation",
        ],
      },
      {
        title: "EHS (Safety & Environment)",
        tag: "Compliance that runs itself.",
        items: ["Incident reporting and analysis", "Automated safety-audit checklists", "Regulatory-deadline tracking"],
      },
    ],
    management: {
      title: "Management",
      tag: "One brain over all of it.",
      items: [
        "Cross-department executive dashboards",
        'An "ask the plant anything" interface',
        "KPI alerts before problems escalate",
      ],
    },
  },
  platform: {
    eyebrow: "The platform",
    h2a: "Software,",
    h2b: "not just people",
    sub: "Most of what you'll see in this space is an agency: people, billed by the hour. This is the technology we own and keep building on your behalf.",
    items: [
      { title: "Agents", sub: "Purpose-built AI agents wired into the tools you already run on." },
      { title: "Learning", sub: "Every agent is evaluated and improves with every run." },
      { title: "Data Analysis", sub: "Your operational data, turned into the signals that make agents useful." },
      { title: "Company Brain", sub: "An Orchestrating Layer: What one team learns, the whole company knows." },
    ],
  },
  adoption: {
    eyebrow: "The adoption layer",
    h2a: "Technology is not enough,",
    h2b: "adoption is the missing piece.",
    lead: "Connecting the technology is the part everyone talks about. Getting hundreds of people to change how they work every day is the part that decides whether it lasts. It is the wrapper around everything we build.",
    items: [
      { title: "A structured adoption program", sub: "Built around how your people actually work, not a generic rollout." },
      { title: "Training on the systems we build", sub: "Your teams learn the exact tools we deploy for you, hands-on." },
      { title: "Champions inside your organization", sub: "We grow internal owners who carry the change forward." },
    ],
    key: '"We don\'t leave until your people run it without us."',
    ringOuter: "Adoption & Training",
    ringMid: "Agents",
    core: "Company<br />Brain",
  },
  principles: {
    eyebrow: "How we work",
    h2: "End to end, and on the ground",
    items: [
      {
        title: "Start at the sharpest pain",
        body: "A bottleneck on the production line, a swamped service desk, a finance close that eats a week. We start where it hurts most, in any function.",
      },
      {
        title: "Solve today, build for tomorrow",
        body: "Every solution ships value now <em>and</em> becomes a building block toward the Company Brain. Nothing is throwaway.",
      },
      {
        title: "Own it end to end",
        body: "Diagnosis, solution, implementation, training. Real work on the ground, not slide decks and hand-offs.",
      },
      {
        title: "Every project compounds",
        body: "What we build for one team becomes knowledge the whole organization can reuse. The value accumulates.",
      },
    ],
  },
  team: {
    eyebrow: "The team",
    h2a: "Serious people who understand",
    h2b: "organizations like yours",
    sub: "CEOs buy from people. Our founding partners bring senior experience across technology, business and change management inside complex organizations.",
    linkedin: "LinkedIn",
    linkedinAria: (name) => `${name} on LinkedIn`,
    members: [
      {
        role: "Founder & CEO",
        bio: "A 3x, award-winning entrepreneur across tech and social impact, with a track record of founding AI and productivity ventures.",
      },
      {
        role: "Founder & CTO",
        bio: "Engineer and 2x tech founder, ex-IDF technologist with two decades building and leading engineering teams from the ground up.",
      },
      {
        role: "Founder & COO",
        bio: "Entrepreneur and business leader with extensive experience in software, AI, and technology innovation. Passionate about building strategic partnerships, scaling ventures, and turning ideas into impactful businesses.",
      },
      {
        role: "Head of Partnerships",
        bio: "Former industrialist and founder of BIRANO, a B2B and B2B2C branding and marketing studio. Board member of the Manufacturers Association of Israel and a member of the Chamber of Commerce.",
      },
      {
        role: "Head of Product",
        bio: "Ex-VP of Product at Slack, with product leadership at AB InBev. 15+ years shipping complex B2B and B2C products at scale.",
      },
      {
        role: "Chief of Staff",
        bio: "Chief of Staff across startups, growth-stage companies and boutique consulting firms in Israel and the US. Board member of the National Giving Alliance and the Park Slope Food Coop.",
      },
    ],
    advisors: [
      {
        role: "AI KPIs Advisor",
        bio: "Research fellow at MIT Sloan's Initiative on the Digital Economy. His research on AI-enhanced KPIs reframes metrics as sources of strategic value, not merely measures of it.",
      },
      {
        role: "AI Ethics Advisor",
        bio: "Professor of philosophy and founding director of the Applied Ethics Center at UMass Boston. His recent work focuses on the ethics of AI and how working with it reshapes how we understand ourselves.",
      },
    ],
  },
  demos: {
    eyebrow: "Example solutions",
    h2: "What a solution looks like",
    sub: "A couple of examples of what we deliver, across the floor and across the funnel. These are illustrations, not the whole story: your pilot starts wherever it hurts most.",
    groups: [
      {
        tag: "Operations",
        title: "The Operational Wizard",
        sub: "An assistant that runs the day-to-day: planning, keeping records current, and clearing the backlog.",
        rows: [
          {
            eyebrow: "Morning",
            title: "It plans your day",
            sub: "Meetings, priorities and prep for every call, ready before you are.",
          },
          {
            eyebrow: "After a meeting",
            title: "It keeps records current",
            sub: "Say what happened and the system updates itself: stage, next steps, notes. No forms.",
          },
          {
            eyebrow: "End of day",
            title: "It clears the busywork",
            sub: "Drafts sent, records updated, schedules fixed, so tomorrow starts clean.",
          },
        ],
      },
      {
        tag: "Sales",
        title: "The Sales Magician",
        sub: "A teammate for revenue: it keeps the pipeline full, wins the event, and grows the accounts you already have.",
        rows: [
          {
            eyebrow: "Top of funnel",
            title: "Fills the pipeline",
            sub: "Fresh leads, new angles to sell, and untapped markets to go after.",
          },
          {
            eyebrow: "Before an event",
            title: "Wins the event",
            sub: "Matches attendees to your ideal profile, drafts intros, and books the meetings.",
          },
          {
            eyebrow: "Existing accounts",
            title: "Grows the relationship",
            sub: "Spots expansion signals: upsell moments, likely renewals, warm intros in your network.",
          },
        ],
      },
    ],
    more: "More examples across manufacturing, service, HR and finance. We'll walk you through the ones closest to your world on the pilot call.",
  },
  integrations: {
    eyebrow: "Integrations",
    h2: "Runs on the tools you already use",
    sub: "No rip and replace. We build on the systems your organization already runs on.",
  },
  proof: {
    eyebrow: "Proof",
    h2: "We don't ask for trust. We earn it.",
    sub: "No inflated case studies. Here is what actually stands behind us today.",
    badge: "Placeholder",
    cards: [
      {
        title: "Tools born from real client work",
        body: "The examples below are working software, not mockups. The demos play themselves. Scroll on.",
      },
      {
        title: "An industrial manufacturer",
        blank: ", ~200 employees",
        body: "admin hours saved per month. Real numbers land here after the first pilots.",
      },
      {
        title: "A measured pilot",
        body: "Success criteria agreed up front, results measured against them. We prove it in weeks, not promises.",
      },
    ],
  },
  pilot: {
    eyebrow: "Start a pilot",
    h2: "Start with a pilot.",
    body: "We diagnose, propose, build and measure: one contained scope, entry-level pricing, real results in weeks. Then you decide how far to go.",
    workshopPre: "Prefer to start with a hands-on workshop?",
    workshopLink: "We do that too →",
    workshopPrefill: "I'd like to start with a workshop.",
    fields: {
      name: "Name",
      company: "Company",
      role: "Role",
      email: "Email",
      phone: "Phone / WhatsApp",
      phoneOptional: "(optional)",
      pain: "Where does it hurt most?",
      painPlaceholder: "The one process, team or bottleneck you'd fix first.",
    },
    submit: "Book a pilot call →",
    sending: "Sending…",
    retry: "Try again",
    success: "Thank you. We'll be in touch to set up your pilot call.",
  },
  footer: {
    tag: "Your AI partner. Not an agency. Not consulting. 25% of our fee is tied to your KPIs.",
    copy: "2026 · © Mateos · All rights reserved.",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    fabAria: "Chat with us on WhatsApp",
  },
};

export const he: Copy = {
  meta: {
    title: 'Mateos: שותף ה-AI שלכם. לא סוכנות. לא ייעוץ.',
    description:
      'Mateos בונה את התוכנה, מטמיעה אותה בתוך הארגון שלכם, ולוקחת אחריות על התוצאה. 25% מהתשלום שלנו צמודים ל-KPI שלכם. מתחילים בפילוט.',
  },
  nav: {
    links: [
      { href: "#approach", label: "הגישה" },
      { href: "#domains", label: "תחומים" },
      { href: "#platform", label: "הפלטפורמה" },
      { href: "#adoption", label: "הטמעה" },
      { href: "#how", label: "איך עובדים" },
      { href: "#team", label: "הצוות" },
      { href: "#examples", label: "דוגמאות" },
      { href: "#integrations", label: "אינטגרציות" },
    ],
    cta: "מתחילים בפילוט",
    themeLabel: "ערכת צבעים",
    themes: { system: "מערכת", light: "בהיר", dark: "כהה" },
    switchTo: "EN",
    switchToAria: "מעבר לגרסה האנגלית",
    brandHome: "לדף הבית של Mateos.ai",
  },
  hero: {
    h1a: "ממורכבות ליעילות:",
    h1b: "אוטומציית AI שנבנתה לצמיחה תעשייתית.",
    tagline:
      "אנחנו בונים את התוכנה, מטמיעים אותה בתוך הארגון שלכם, ולוקחים אחריות על התוצאה. ואז מכשירים את האנשים שלכם להפעיל אותה.",
    kpi: "25% מהתשלום שלנו צמודים ל-KPI שלכם.",
    cta: "איך זה עובד ↓",
  },
  approach: {
    eyebrow: "מה אנחנו עושים",
    h2a: "לא רק אוטומציה.",
    h2b: "מוח ארגוני.",
    sub: "מסע צעד אחר צעד, שעטוף בכל שלב בשכבת ההטמעה שגורמת לו להישאר.",
    arrow: "←",
    journey: [
      {
        title: "אבחון לעומק",
        sub: "אנחנו ממפים את הארגון, הנתונים ותהליכי העבודה שלכם, ומזהים בדיוק איפה ה-AI מחזיר את ההשקעה ראשון, בכל מחלקה.",
      },
      {
        title: "הוכחה",
        sub: "פתרון ממוקד בנקודת הכאב החדה שלכם, שנמדד מול תוצאות שהוסכמו מראש, בשבועות ולא בהבטחות.",
      },
      {
        title: "שכפול",
        sub: "סוכנים ואוטומציות מתפרסים מחלקה אחר מחלקה, ונבנים לכדי מוח ארגוני אחד שמתזמר את הכל.",
      },
    ],
    waysEyebrow: "דרכים לעבוד איתנו",
    waysTitle: "מתחילים במקום שמתאים לארגון שלכם",
    ways: [
      {
        title: "CAIO במשרה חלקית",
        sub: "מנהל AI ראשי בכיר שמשולב בהנהלה שלכם, ומוביל את הפלטפורמה ואת המפה הארגונית, במשרה חלקית.",
      },
      { title: "סדנאות", sub: "מפגשים מעשיים שמכניסים את האנשים שלכם לבנייה עם הסוכנים שלנו, מהר." },
      { title: "פרויקטים", sub: "בנייה מוגדרת על הפלטפורמה שלנו, עם סקופ ברור ובאחריות שלנו מקצה לקצה." },
    ],
  },
  domains: {
    eyebrow: "איפה אנחנו פועלים",
    h2a: "כל מחלקה,",
    h2b: "מפעל אחד",
    sub: "אלה התחומים בתוך המפעל שבהם אנחנו עוסקים. מתחילים בזה שהכי כואב ומתפשטים משם, וכל מחלקה שמצטרפת עושה את כל השאר חכמות יותר.",
    items: [
      {
        title: "רצפת ייצור",
        tag: "נראות בזמן אמת ופחות הפתעות על הקו.",
        items: [
          "דוחות חפיפת משמרות אוטומטיים",
          "ניתוח שורש לזמני השבתה",
          "דשבורדי OEE שמוזנים ישירות מנתוני המכונות",
        ],
      },
      {
        title: "תחזוקה",
        tag: "מכיבוי שריפות לחיזוי.",
        items: ["התראות תחזוקה חזויה", "פתיחת הזמנות עבודה ותעדוף אוטומטיים", "חיזוי ביקוש לחלקי חילוף"],
      },
      {
        title: "איכות (QA/QC)",
        tag: "לתפוס חריגות לפני שהלקוח תופס אותן.",
        items: ["זיהוי פגמים בעזרת AI", "דוחות אי-התאמה אוטומטיים", "מסמכי עמידה ברגולציה שנוצרים מנתוני הייצור"],
      },
      {
        title: "תכנון ובקרת ייצור",
        tag: "תוכניות ששורדות מפגש עם המציאות.",
        items: ["תכנון ייצור בעזרת AI", "סימולציית צווארי בקבוק", "תכנון מחדש אוטומטי כשהזמנות או חומרים משתנים"],
      },
      {
        title: "שרשרת אספקה ורכש",
        tag: "לקנות חכם, לרדוף פחות.",
        items: ["חיזוי ביקוש", "יצירת הזמנות רכש ואישורן אוטומטית", "סוכנים להשוואת הצעות ספקים ולמעקב אחריהן"],
      },
      {
        title: "מחסן ולוגיסטיקה",
        tag: "המלאי הנכון, במקום הנכון, בלי גיליונות אקסל.",
        items: ["אופטימיזציית מלאי", "תיעוד קליטה וליקוט אוטומטי", "מעקב משלוחים והתראות ללקוחות"],
      },
      {
        title: "הנדסה ופיתוח",
        tag: "הידע שלכם, נגיש לחיפוש ולשימוש חוזר.",
        items: ["סוכני מאגר ידע טכני", "תיעוד שינויי הנדסה (ECO) אוטומטי", "אחזור שרטוטים ומפרטים בשפה חופשית"],
      },
      {
        title: "שיווק",
        tag: "יותר לידים איכותיים, פחות עבודת ידיים.",
        items: [
          "מודיעין שוק ומתחרים אוטומטי",
          "תוכן שמותאם לקהלים שונים",
          "דירוג לידים, אוטומציית קמפיינים והכנה לתערוכות",
        ],
      },
      {
        title: "מכירות ושירות לקוחות",
        tag: "הצעות מחיר מהר יותר, לקוחות רגועים יותר.",
        items: ["יצירת הצעות מחיר מתוך ה-ERP", "אוטומציה של קליטת הזמנות", "מיון קריאות שירות וניסוח תשובות"],
      },
      {
        title: "כספים",
        tag: "לסגור את החודש, לא את הערבים שלכם.",
        items: ["התאמת חשבוניות והתאמות חשבונאיות", "דוחות אוטומטיים", "התראות על חריגות בתזרים ובעלויות"],
      },
      {
        title: "משאבי אנוש וכוח אדם",
        tag: "האנשים הנכונים, מוכשרים ומשובצים.",
        items: [
          "אופטימיזציה של שיבוץ משמרות",
          "עוזרי קליטה והדרכה למערכות שאנחנו מטמיעים",
          "אוטומציה של בקשות עובדים",
        ],
      },
      {
        title: "בטיחות וסביבה (EHS)",
        tag: "עמידה בדרישות שמנהלת את עצמה.",
        items: ["דיווח וניתוח תקריות", "צ'ק-ליסטים אוטומטיים לסקרי בטיחות", "מעקב מועדי רגולציה"],
      },
    ],
    management: {
      title: "הנהלה",
      tag: "מוח אחד מעל הכל.",
      items: [
        "דשבורדים הנהלתיים חוצי מחלקות",
        'ממשק "תשאלו את המפעל כל דבר"',
        "התראות KPI לפני שהבעיות מתפוצצות",
      ],
    },
  },
  platform: {
    eyebrow: "הפלטפורמה",
    h2a: "תוכנה,",
    h2b: "לא רק אנשים",
    sub: "רוב מה שתראו בתחום הזה הוא סוכנות: אנשים, בחיוב לפי שעה. זו הטכנולוגיה שבבעלותנו, ושאנחנו ממשיכים לפתח בשבילכם.",
    items: [
      { title: "סוכנים", sub: "סוכני AI שנבנים למטרה ומחוברים לכלים שאתם כבר עובדים איתם." },
      { title: "לימוד", sub: "כל סוכן נמדד ומשתפר בכל הרצה." },
      { title: "ניתוח נתונים", sub: "הנתונים התפעוליים שלכם, הופכים לאותות שהופכים סוכנים למועילים." },
      { title: "מוח ארגוני", sub: "שכבת תזמור: מה שצוות אחד לומד, כל החברה יודעת." },
    ],
  },
  adoption: {
    eyebrow: "שכבת ההטמעה",
    h2a: "טכנולוגיה לא מספיקה,",
    h2b: "ההטמעה היא החלק החסר.",
    lead: "לחבר את הטכנולוגיה זה החלק שכולם מדברים עליו. לגרום למאות אנשים לשנות את אופן העבודה שלהם כל יום זה החלק שקובע אם זה מחזיק. זו העטיפה של כל מה שאנחנו בונים.",
    items: [
      { title: "תוכנית הטמעה מסודרת", sub: "בנויה סביב האופן שבו האנשים שלכם עובדים באמת, לא רולאאוט גנרי." },
      { title: "הדרכה על המערכות שאנחנו בונים", sub: "הצוותים שלכם לומדים בדיוק את הכלים שאנחנו מטמיעים אצלכם, בידיים." },
      { title: "אלופים בתוך הארגון", sub: "אנחנו מגדלים בעלי אחריות פנימיים שממשיכים לשאת את השינוי." },
    ],
    key: '"אנחנו לא עוזבים עד שהאנשים שלכם מפעילים את זה בלעדינו."',
    ringOuter: "הטמעה והדרכה",
    ringMid: "סוכנים",
    core: "מוח<br />ארגוני",
  },
  principles: {
    eyebrow: "איך אנחנו עובדים",
    h2: "מקצה לקצה, ובשטח",
    items: [
      {
        title: "מתחילים בכאב החד ביותר",
        body: "צוואר בקבוק בקו הייצור, דלפק שירות מוצף, סגירת חודש שאוכלת שבוע. אנחנו מתחילים במקום שהכי כואב, בכל פונקציה.",
      },
      {
        title: "לפתור היום, לבנות למחר",
        body: "כל פתרון מספק ערך עכשיו <em>וגם</em> הופך לאבן בניין לקראת המוח הארגוני. שום דבר לא נזרק.",
      },
      {
        title: "אחריות מקצה לקצה",
        body: "אבחון, פתרון, הטמעה, הדרכה. עבודה אמיתית בשטח, לא מצגות והעברות אחריות.",
      },
      {
        title: "כל פרויקט מצטבר",
        body: "מה שאנחנו בונים לצוות אחד הופך לידע שכל הארגון יכול לעשות בו שימוש חוזר. הערך נצבר.",
      },
    ],
  },
  team: {
    eyebrow: "הצוות",
    h2a: "אנשים רציניים שמבינים",
    h2b: "ארגונים כמו שלכם",
    sub: 'מנכ"לים קונים מאנשים. השותפים המייסדים שלנו מביאים ניסיון בכיר בטכנולוגיה, בעסקים ובניהול שינוי בתוך ארגונים מורכבים.',
    linkedin: "לינקדאין",
    linkedinAria: (name) => `${name} בלינקדאין`,
    members: [
      {
        role: "Founder & CEO",
        bio: "יזם עם שלושה מיזמים ופרסים בתחומי הטכנולוגיה והאימפקט החברתי, עם רקורד של הקמת מיזמי AI ופרודוקטיביות.",
      },
      {
        role: "Founder & CTO",
        bio: 'מהנדס ויזם טכנולוגי עם שני מיזמים, יוצא מערך הטכנולוגיה בצה"ל, עם שני עשורים של בנייה והובלה של צוותי פיתוח מאפס.',
      },
      {
        role: "Founder & COO",
        bio: "יזם ומוביל עסקי עם ניסיון נרחב בתוכנה, ב-AI ובחדשנות טכנולוגית. בונה שותפויות אסטרטגיות, מצמיח מיזמים והופך רעיונות לעסקים עם השפעה.",
      },
      {
        role: "Head of Partnerships",
        bio: "תעשיין לשעבר ומייסד BIRANO, סטודיו למיתוג ושיווק B2B ו-B2B2C. בהנהלת התאחדות התעשיינים ובלשכת המסחר.",
      },
      {
        role: "Head of Product",
        bio: 'לשעבר סמנכ"ל מוצר ב-Slack, עם הובלת מוצר ב-AB InBev. מעל 15 שנה של פיתוח והשקת מוצרי B2B ו-B2C מורכבים בהיקפים גדולים.',
      },
      {
        role: "Chief of Staff",
        bio: "ניסיון בתפקידי Chief of Staff בסטארטאפים, בחברות בצמיחה ובחברות ייעוץ בוטיק בישראל ובארצות הברית. בהנהלת National Giving Alliance ו-Park Slope Food Coop.",
      },
    ],
    advisors: [
      {
        role: "AI KPIs Advisor",
        bio: "עמית מחקר ב-MIT Sloan Initiative on the Digital Economy. המחקר על מדדי KPI מבוססי AI ממסגר מחדש מדדים כמקור לערך אסטרטגי, ולא רק כמדידה שלו.",
      },
      {
        role: "AI Ethics Advisor",
        bio: "פרופסור לפילוסופיה ומייסד המרכז לאתיקה יישומית ב-UMass Boston. העבודה העדכנית מתמקדת באתיקה של AI ובאופן שבו העבודה איתו משנה את הדרך שבה אנחנו מבינים את עצמנו.",
      },
    ],
  },
  demos: {
    eyebrow: "דוגמאות לפתרונות",
    h2: "איך נראה פתרון",
    sub: "כמה דוגמאות למה שאנחנו מספקים, על רצפת הייצור ולאורך משפך המכירות. אלה המחשות, לא כל התמונה: הפילוט שלכם מתחיל איפה שהכי כואב.",
    groups: [
      {
        tag: "תפעול",
        title: "האשף התפעולי",
        sub: "עוזר שמנהל את היום-יום: תכנון, שמירה על נתונים מעודכנים, וסגירת הזנב הפתוח.",
        rows: [
          {
            eyebrow: "בוקר",
            title: "מתכנן את היום שלכם",
            sub: "פגישות, סדרי עדיפויות והכנה לכל שיחה, מוכנים לפניכם.",
          },
          {
            eyebrow: "אחרי פגישה",
            title: "שומר את הנתונים מעודכנים",
            sub: "אומרים מה קרה והמערכת מעדכנת את עצמה: שלב, צעדים הבאים, הערות. בלי טפסים.",
          },
          {
            eyebrow: "סוף היום",
            title: "מפנה את העבודה השחורה",
            sub: "טיוטות נשלחו, נתונים עודכנו, לוחות זמנים סודרו, כך שמחר מתחיל נקי.",
          },
        ],
      },
      {
        tag: "מכירות",
        title: "הקוסם המכירתי",
        sub: "שותף להכנסות: שומר על פייפליין מלא, מנצח בתערוכה, ומצמיח את הלקוחות שכבר יש לכם.",
        rows: [
          {
            eyebrow: "ראש המשפך",
            title: "ממלא את הפייפליין",
            sub: "לידים חדשים, זוויות מכירה חדשות, ושווקים שטרם נגעתם בהם.",
          },
          {
            eyebrow: "לפני תערוכה",
            title: "מנצח בתערוכה",
            sub: "מתאים משתתפים לפרופיל הלקוח האידיאלי שלכם, מנסח פניות ראשונות, וקובע את הפגישות.",
          },
          {
            eyebrow: "לקוחות קיימים",
            title: "מצמיח את הקשר",
            sub: "מזהה אותות להרחבה: הזדמנויות אפסייל, חידושים סבירים, והיכרויות חמות ברשת שלכם.",
          },
        ],
      },
    ],
    more: "עוד דוגמאות בייצור, בשירות, במשאבי אנוש ובכספים. נעבור איתכם על אלה שהקרובות לעולם שלכם בשיחת הפילוט.",
  },
  integrations: {
    eyebrow: "אינטגרציות",
    h2: "רץ על הכלים שאתם כבר עובדים איתם",
    sub: "בלי להחליף מערכות. אנחנו בונים על המערכות שהארגון שלכם כבר רץ עליהן.",
  },
  proof: {
    eyebrow: "הוכחות",
    h2: "אנחנו לא מבקשים אמון. אנחנו מרוויחים אותו.",
    sub: "בלי מקרי בוחן מנופחים. הנה מה שעומד מאחורינו באמת היום.",
    badge: "מקום שמור",
    cards: [
      {
        title: "כלים שנולדו מעבודה אמיתית עם לקוחות",
        body: "הדוגמאות למטה הן תוכנה עובדת, לא מוקאפים. ההדגמות מתנגנות לבד. המשיכו לגלול.",
      },
      {
        title: "יצרן תעשייתי",
        blank: ", כ-200 עובדים",
        body: "שעות אדמיניסטרציה שנחסכות בחודש. המספרים האמיתיים ייכנסו לכאן אחרי הפילוטים הראשונים.",
      },
      {
        title: "פילוט נמדד",
        body: "מדדי הצלחה שהוסכמו מראש, ותוצאות שנמדדות מולם. אנחנו מוכיחים בשבועות, לא בהבטחות.",
      },
    ],
  },
  pilot: {
    eyebrow: "מתחילים בפילוט",
    h2: "מתחילים בפילוט.",
    body: "אנחנו מאבחנים, מציעים, בונים ומודדים: סקופ אחד מוגדר, מחיר התחלתי, תוצאות אמיתיות בשבועות. ואז אתם מחליטים עד כמה להרחיב.",
    workshopPre: "מעדיפים להתחיל בסדנה מעשית?",
    workshopLink: "גם את זה אנחנו עושים ←",
    workshopPrefill: "אני רוצה להתחיל בסדנה.",
    fields: {
      name: "שם",
      company: "חברה",
      role: "תפקיד",
      email: "אימייל",
      phone: "טלפון / וואטסאפ",
      phoneOptional: "(אופציונלי)",
      pain: "איפה הכי כואב?",
      painPlaceholder: "התהליך, הצוות או צוואר הבקבוק שהייתם מתקנים ראשון.",
    },
    submit: "לקביעת שיחת פילוט ←",
    sending: "שולח…",
    retry: "נסו שוב",
    success: "תודה. ניצור קשר לתיאום שיחת הפילוט.",
  },
  footer: {
    tag: "שותף ה-AI שלכם. לא סוכנות. לא ייעוץ. 25% מהתשלום שלנו צמודים ל-KPI שלכם.",
    copy: "2026 · © Mateos · כל הזכויות שמורות.",
    whatsapp: "וואטסאפ",
    linkedin: "לינקדאין",
    fabAria: "לשיחה איתנו בוואטסאפ",
  },
};

export const COPY: Record<Lang, Copy> = { en, he };
