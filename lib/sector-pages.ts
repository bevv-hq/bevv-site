import type { Metadata } from "next";
import type { LandingFaq, LandingLink } from "@/lib/landing-pages";
import type { SectionBody } from "@/components/SectionContent";
import { pageMetadata } from "@/lib/seo";

export type SectorSection = SectionBody & {
  title: string;
  // Short lead-in shown under the heading in the left column
  intro?: string;
};

export type SectorStep = { number: string; title: string; text: string };

// Sector landing pages that sit under a service other than web development,
// e.g. /services/digital-marketing/pub-marketing.
export type SectorPage = {
  parent: { slug: string; title: string };
  slug: string;
  // Set false to keep a page out of search: controls both the robots meta tag
  // and whether the page appears in the sitemap.
  indexable: boolean;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  hook: string;
  ctaLabel: string;
  intro: string[];
  sections: SectorSection[];
  steps: SectorStep[];
  // Optional left column beside the FAQs
  pricing?: { title: string; bullets: string[] };
  faqs: LandingFaq[];
  closing: { title: string; text: string; ctaLabel: string };
  furtherReading: string[];
  // Photo beside the Further reading list, with a related page overlaid
  related: { question: string; text: string; link: LandingLink };
  image: { src: string; alt: string };
};

export const pubMarketing: SectorPage = {
  parent: { slug: "digital-marketing", title: "Digital Marketing" },
  slug: "pub-marketing",
  indexable: true,
  h1: "Pub Marketing Agency",
  metaTitle: "Pub Marketing Agency | Hospitality Marketing for Pubs | BEVV",
  metaDescription:
    "Pub marketing that fills tables: local SEO, Google profiles, social, email and AI search for independent pubs, taprooms and breweries. No lock-in.",
  hook: "Marketing for independent pubs, taprooms and breweries that want more people at the bar and fewer quiet Tuesdays.",
  ctaLabel: "Book a free 30-minute health check",
  intro: [
    "Most marketing agencies treat a pub like any other small business. Same plan, same jargon, same report full of numbers that don't mean anything behind the bar.",
    "BEVV is a pub marketing agency that only works with pubs, taprooms and breweries. We know your busiest days are bank holidays, that the weather can make or break a weekend, and that the person reading our reports is usually also changing a barrel. So we keep it practical: get you found, get you booked, and bring people back.",
    "Every month, someone in your area types \"pub near me\" into their phone. Across the UK, Google Keyword Planner puts that search at between 1 and 10 million times a month. Pub marketing is about making sure your pub is the one they find, and the one they choose.",
  ],
  sections: [
    {
      title: "What we do",
      intro: "Seven jobs that, done well, keep a pub busy all year round.",
      items: [
        {
          title: "Local SEO and Google Business Profile",
          text: "For most pubs, the Google Business Profile does more work than the website. We set it up properly and keep it working: categories, attributes, hours, special hours, photos, weekly updates, and replies to reviews. Then we make sure your website backs it up, so you show up when people search for a pub, a Sunday roast or a beer garden nearby.",
          link: {
            href: "/blog/pub-near-me-local-seo-guide",
            label: "\"Pub near me\": a local SEO guide for independent pubs",
          },
        },
        {
          title: "AI search",
          text: "More people now ask ChatGPT, Gemini and Google's AI where to go for a pint. We make sure those tools can understand who you are, where you are and what you offer, so you're in the running when they recommend somewhere.",
          link: {
            href: "/services/geo-for-hospitality/ai-search-for-pubs",
            label: "AI search for pubs, inns and breweries",
          },
        },
        {
          title: "Social media",
          text: "Regular, real posts that show what your pub is actually like: the beer, the food, the regulars, the events. We plan around your calendar (match days, quiz nights, seasonal menus, bank holidays), not a generic content calendar.",
        },
        {
          title: "Email and regulars",
          text: "A mailing list is the one audience you own. We help you build it (in the pub, on your website, at events) and send emails people actually open: what's on, new beers, booking reminders for Christmas and Mother's Day.",
        },
        {
          title: "Paid search and social ads",
          text: "When you need results now, such as launching a new menu, filling a function room or selling tickets, we run focused Google and Meta ads with tight budgets and clear targets. No ads for the sake of ads.",
        },
        {
          title: "Reviews and reputation",
          text: "More reviews, better reviews, and calm, helpful replies to the difficult ones. We help you ask at the right moment and keep on top of replies across Google, TripAdvisor and Facebook.",
        },
        {
          title: "Events and seasonal campaigns",
          text: "Quiz nights, live music, beer festivals, Christmas, Six Nations, beer garden season. Each one gets a simple plan: a page on your website, a Google update, social posts and an email, timed so people hear about it before they've made other plans.",
        },
      ],
    },
    {
      title: "Who it's for",
      bullets: [
        {
          lead: "Independent pubs",
          text: "that want more bookings, more midweek trade and more regulars.",
        },
        {
          lead: "Taprooms",
          text: "that need people to find them, often on an industrial estate.",
        },
        {
          lead: "Breweries",
          text: "that want to sell more online and fill their taproom.",
        },
        {
          lead: "Small pub groups",
          text: "that want each pub to be found locally, without each site doing its own thing.",
        },
      ],
    },
  ],
  steps: [
    {
      number: "01",
      title: "The first pint",
      text: "A free 30-minute call and a health check of your website, Google profile, reviews and AI visibility.",
    },
    {
      number: "02",
      title: "The recipe",
      text: "A short, plain-English plan: what we'll do, what it costs and what we'll measure.",
    },
    {
      number: "03",
      title: "The brew",
      text: "We get the foundations right first: your Google profile, website basics, tracking and review routine.",
    },
    {
      number: "04",
      title: "On tap",
      text: "Monthly marketing that keeps you visible, with a short report in plain English. No vanity metrics, just bookings, calls, directions, orders and footfall where we can measure them.",
    },
  ],
  pricing: {
    title: "How we price",
    bullets: [
      "A clear quote for the setup work, with nothing hidden.",
      "Monthly marketing on a rolling month-to-month basis after the initial period, so you're never locked in.",
      "No packages padded with things you don't need. If something won't earn its keep, we won't sell it to you.",
    ],
  },
  faqs: [
    {
      question: "What does a pub marketing agency do?",
      answer:
        "A pub marketing agency helps you attract and keep customers. That usually means local SEO and Google Business Profile management, social media, email marketing, paid ads, review management and seasonal campaigns, all aimed at more bookings and more people through the door.",
    },
    {
      question: "How much does pub marketing cost?",
      answer:
        "It depends on what you need. Some pubs only need their Google profile and website sorted plus a light monthly routine; others want social, email and ads too. We give you a clear quote after a free health check, and ongoing marketing is month-to-month.",
    },
    {
      question: "Do you work with breweries and taprooms too?",
      answer:
        "Yes. We only work with pubs, taprooms and breweries. For breweries, that often includes webshop marketing, beer club promotion and filling the taproom.",
    },
    {
      question: "Can you help with Google reviews?",
      answer:
        "Yes. We'll help you ask for reviews at the right moment and reply to them properly. We never buy or fake reviews, because it breaks Google's rules and puts your listing at risk.",
    },
    {
      question: "Do I need a new website before you start marketing?",
      answer:
        "Not always. If your website is slow, hides your hours or uses a PDF menu, we'll tell you, because it limits what marketing can do. But many fixes are small, and we can work with what you have.",
    },
    {
      question: "How quickly will we see results?",
      answer:
        "Fixes to your Google profile and website can make a difference within weeks. Search rankings and a growing mailing list build over a few months. We'll agree what to measure at the start, so you can see what's working.",
    },
  ],
  closing: {
    title: "Ready to fill a few more tables?",
    text: "Start with a free 30-minute health check. The first pint's on us.",
    ctaLabel: "Get in touch",
  },
  furtherReading: [
    "pub-near-me-local-seo-guide",
    "will-chatgpt-recommend-your-pub",
    "pdf-menu-costing-you-customers",
  ],
  related: {
    question: "Want AI tools to recommend your pub too?",
    text: "More people now ask ChatGPT and Gemini where to go for a pint. Here's how we get you into the answer.",
    link: {
      href: "/services/geo-for-hospitality/ai-search-for-pubs",
      label: "AI search for pubs",
    },
  },
  image: {
    src: "/images/pub-front.jpg",
    alt: "The brick front of a traditional pub with hanging flower baskets and a sign reading Food Served Daily, Beer Garden, Fine Selection of Ales",
  },
};

export const aiSearchForPubs: SectorPage = {
  parent: { slug: "geo-for-hospitality", title: "GEO for Hospitality" },
  slug: "ai-search-for-pubs",
  indexable: true,
  h1: "AI Search for Pubs, Inns & Breweries",
  metaTitle: "AI Search for Pubs, Inns & Breweries | BEVV",
  metaDescription:
    "Get your pub, inn or brewery recommended by ChatGPT, Gemini and Google's AI. GEO for hospitality from specialists who only work with the drinks trade.",
  hook: "When someone asks ChatGPT for a dog-friendly pub near the station, will it mention yours?",
  ctaLabel: "Get a free AI visibility check",
  intro: [
    "Search used to mean ten blue links. Now more people ask ChatGPT, Gemini, Perplexity or Google's AI Overviews a straight question, like \"a proper cask pub near Bath station\", \"a dog-friendly pub with rooms in the Cotswolds\" or \"a taproom that's good with kids\". They get back a shortlist of two or three places, not a page of results.",
    "Being on that shortlist is what GEO (generative engine optimisation) is about. It's the AI-era version of SEO, and for pubs it comes down to one thing: making it easy for AI tools to understand, trust and recommend you.",
    "BEVV does GEO for pubs, inns, taprooms and breweries, and nothing else.",
  ],
  sections: [
    {
      title: "How AI tools decide which pubs to recommend",
      intro:
        "No AI company publishes exactly how it chooses. But the venues that get recommended tend to have the same things in common.",
      bullets: [
        {
          lead: "Clear facts on their own website:",
          text: "opening hours, food times, dogs, kids, accessibility, parking, rooms, events, written in plain English rather than hidden in a PDF or a photo.",
        },
        {
          lead: "Consistent details everywhere:",
          text: "the same name, address, phone and hours on the website, Google, Bing, Apple Maps, TripAdvisor and Facebook.",
        },
        {
          lead: "Reviews across several platforms,",
          text: "not just Google.",
        },
        {
          lead: "Structured data",
          text: "that labels the venue for machines: this is a pub, here are its hours, here's the menu.",
        },
        {
          lead: "A reputation beyond their own site:",
          text: "local press, \"best pubs in…\" lists, CAMRA guides, beer blogs and event listings.",
        },
      ],
      link: {
        href: "/blog/will-chatgpt-recommend-your-pub",
        label: "Will ChatGPT recommend your pub?",
      },
    },
    {
      title: "What we do",
      items: [
        {
          title: "AI visibility check",
          text: "We ask ChatGPT, Gemini, Perplexity and Google the questions your customers ask, and record where you appear, where you don't, and who gets recommended instead. You get a plain-English report and a prioritised fix list.",
        },
        {
          title: "Fix the facts",
          text: "We make sure every important detail about your venue is written clearly on your website and matches everywhere else: Google Business Profile, Bing Places, Apple Business Connect, TripAdvisor, Facebook and Untappd.",
        },
        {
          title: "Structured data",
          text: "We add proper schema to your website, such as BarOrPub, Brewery, Hotel or BedAndBreakfast, plus opening hours, menus and events, generated from the same data as your pages so it never goes out of date.",
        },
        {
          title: "Answer-ready content",
          text: "AI tools answer questions, so your website needs answers: FAQ sections, event pages, a beer garden page, a \"getting here\" page. We write and structure content so the facts are easy to find and quote.",
        },
        {
          title: "Reputation and mentions",
          text: "We help you build the wider footprint AI tools trust: more reviews across platforms, local press, roundups and guides.",
        },
        {
          title: "Monitoring",
          text: "We re-check your AI visibility regularly, so you can see whether you're mentioned more often, and for which questions.",
        },
      ],
    },
    {
      title: "Pubs with rooms, inns and hotels",
      intro:
        "If you have rooms, AI search matters twice over. People ask AI tools for somewhere to stay, not just somewhere to drink: \"a cosy inn with rooms near Hay-on-Wye\", \"a dog-friendly pub with rooms in the Peak District\", \"somewhere to stay with a good restaurant near Oxford\".",
      paragraphs: [
        "For inns, pubs with rooms and small hotels, we also make sure AI tools and search engines understand:",
      ],
      bullets: [
        {
          lead: "Your rooms:",
          text: "how many, what kind, whether dogs and children are welcome, accessibility, parking and breakfast.",
        },
        {
          lead: "The structured data for accommodation:",
          text: "Hotel, BedAndBreakfast or LodgingBusiness alongside your pub listing.",
        },
        {
          lead: "Your booking route:",
          text: "whether people should book direct on your website, so AI tools don't only send them to booking sites.",
        },
        {
          lead: "What's nearby:",
          text: "walks, attractions and events that people pair with a stay.",
        },
      ],
      outro:
        "That's GEO for hotels and inns, built for independent venues rather than chains.",
    },
    {
      title: "Who it's for",
      bullets: [
        {
          lead: "Independent pubs",
          text: "that want to be recommended, not just listed.",
        },
        {
          lead: "Inns and pubs with rooms",
          text: "that want more direct bookings.",
        },
        {
          lead: "Taprooms and breweries",
          text: "that people should be able to find and visit.",
        },
        {
          lead: "Small pub groups",
          text: "that need every venue described accurately and consistently.",
        },
      ],
    },
    {
      title: "What we won't promise",
      paragraphs: [
        "Nobody can honestly guarantee a ChatGPT mention, and you can't currently pay for an organic AI recommendation. What we can do is remove every reason for an AI tool to leave you out, and show you, with regular checks, whether it's working.",
      ],
    },
  ],
  steps: [
    {
      number: "01",
      title: "The first pint",
      text: "A free 30-minute call, including a quick AI visibility check.",
    },
    {
      number: "02",
      title: "The recipe",
      text: "A clear plan and quote, starting with the fixes that matter most.",
    },
    {
      number: "03",
      title: "The brew",
      text: "We fix your facts, listings and structured data, and add answer-ready content.",
    },
    {
      number: "04",
      title: "On tap",
      text: "Ongoing monitoring and improvements, month-to-month after the initial period.",
    },
  ],
  faqs: [
    {
      question: "What is GEO for hospitality?",
      answer:
        "GEO, or generative engine optimisation, is the work of making your venue easy for AI tools like ChatGPT, Gemini and Google's AI Overviews to understand, trust and recommend. For hospitality, that means clear facts, consistent listings, reviews, structured data and a good reputation online.",
    },
    {
      question: "Is GEO different from SEO?",
      answer:
        "They overlap a lot. SEO aims to rank you in Google's list of results; GEO aims to get you mentioned in an AI-written answer. GEO puts extra weight on plain-English facts, consistent details everywhere and reviews across several platforms.",
    },
    {
      question: "Can you guarantee ChatGPT will recommend my pub?",
      answer:
        "No, and nobody honestly can. AI companies don't publish how they choose. We fix the things that recommended venues have in common and check regularly to show you what's changed.",
    },
    {
      question: "Does AI search matter for pubs with rooms?",
      answer:
        "Yes, arguably more. People increasingly ask AI tools where to stay as well as where to drink. Clear information about your rooms, plus the right structured data, helps AI tools describe and recommend your inn accurately.",
    },
    {
      question: "How long does GEO take to work?",
      answer:
        "Fixing your facts, listings and structured data can be done in a few weeks. AI tools then need time to pick up the changes, and building reviews and mentions is ongoing. We'll check your visibility before and after so you can see the difference.",
    },
    {
      question: "Do I need a new website for GEO?",
      answer:
        "Not necessarily. Many improvements, like listings, structured data, FAQs and clearer wording, can be made to your existing site. If your site makes that hard, we'll say so.",
    },
  ],
  closing: {
    title: "Want to know if AI recommends you?",
    text: "Book a free AI visibility check. The first pint's on us.",
    ctaLabel: "Get in touch",
  },
  furtherReading: ["will-chatgpt-recommend-your-pub", "pub-near-me-local-seo-guide"],
  related: {
    question: "Want the wider marketing picture?",
    text: "AI search sits alongside local SEO, Google profiles, social and email. See how we market pubs end to end.",
    link: {
      href: "/services/digital-marketing/pub-marketing",
      label: "Pub marketing",
    },
  },
  image: {
    src: "/images/home-temp.jpg",
    alt: "A pint of beer in a plastic cup on a green metal table beside a laptop and a notepad",
  },
};

export const sectorPages: SectorPage[] = [pubMarketing, aiSearchForPubs];

export function sectorPagePath(page: SectorPage) {
  return `/services/${page.parent.slug}/${page.slug}`;
}

export function sectorPagesFor(parentSlug: string) {
  return sectorPages.filter((page) => page.parent.slug === parentSlug);
}

export function findSectorPage(parentSlug: string, slug: string) {
  return sectorPagesFor(parentSlug).find((page) => page.slug === slug);
}

export function sectorMetadata(page: SectorPage): Metadata {
  return {
    ...pageMetadata({
      title: page.metaTitle,
      description: page.metaDescription,
      path: sectorPagePath(page),
    }),
    robots: page.indexable ? undefined : { index: false, follow: true },
  };
}
