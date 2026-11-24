export type LandingLink = { href: string; label: string };

export type LandingItem = {
  title: string;
  text: string;
  link?: LandingLink;
};

export type LandingFaq = { question: string; answer: string };

export type LandingPage = {
  slug: string;
  // Set false to keep a page out of search: it controls both the robots meta
  // tag and whether the page appears in the sitemap.
  indexable: boolean;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  hook: string;
  intro: string[];
  needs: { title: string; intro: string; items: LandingItem[] };
  build: { title: string; intro: string; items: LandingItem[] };
  platforms?: { title: string; paragraphs: string[]; links: LandingLink[] };
  proof: { text: string; points: string[]; note?: string };
  pricing: { title: string; paragraphs: string[]; link: LandingLink };
  faqs: LandingFaq[];
  furtherReading: string[];
  sibling: { question: string; text: string; link: LandingLink };
};

export const pubWebsiteDesign: LandingPage = {
  slug: "pub-website-design",
  indexable: true,
  h1: "Pub Website Design",
  metaTitle: "Pub Website Design | Websites for Independent Pubs | BEVV",
  metaDescription:
    "Pub website design from specialists who know the trade. Custom sites for independent, community, country and gastro pubs, built to be found and booked.",
  hook: "Most pub websites are built by people who've never worked a Friday night.",
  intro: [
    "Pub website design is what we do, and the only thing we do. BEVV builds websites for independent pubs, community pubs, country inns, gastropubs and micropubs, built around the three things customers actually come to your site for: can I book, what's on, and what are you serving.",
    "Most pub sites are made by a general agency with a hospitality tab on its website. Ours are made by people who know why bank holidays change everything and what a quiet Tuesday does to the till. You get a site that's easy to find, easy to use on a phone in a beer garden, and easy for your team to keep up to date.",
  ],
  needs: {
    title: "What a pub website needs to do",
    intro:
      "Strip away the clever bits and a pub website has a handful of jobs. Get these right and the rest is decoration.",
    items: [
      {
        title: "Opening hours and directions, above the fold",
        text: "Someone standing outside the wrong pub on a Saturday wants one thing: where you are and whether you're open. Hours, address, a map link and a phone number belong at the top of the page, with bank holiday and special hours handled properly.",
      },
      {
        title: "Menus as real web pages",
        text: "A PDF menu is slow on a phone, hard for search engines to read and out of date by Thursday. Your food and drink menus should be proper pages that load fast and are easy to edit.",
        link: {
          href: "/blog/pdf-menu-costing-you-customers",
          label: "Why your PDF menu is costing you customers",
        },
      },
      {
        title: "Table booking that takes a few taps",
        text: "Booking shouldn't mean a phone call in the middle of a rush. We connect your site to the booking system you already use, or help you choose one that fits.",
      },
      {
        title: "What's on and events",
        text: "Quiz nights, live music, food trucks, the Sunday roast. A clear diary that your team can update in minutes gives people a reason to come back.",
      },
      {
        title: "Functions and private hire",
        text: "Christenings, birthdays, wakes and Christmas parties are some of the most valuable bookings a pub takes. A dedicated page with a simple enquiry form makes them easy to ask for.",
      },
      {
        title: "Being found for \"pub near me\"",
        text: "Most people don't search for your pub by name. They search for what's close and what's good. Local SEO, a properly set up Google Business Profile and structured data are what put you in front of them.",
        link: {
          href: "/blog/pub-near-me-local-seo-guide",
          label: "The \"Pub Near Me\" local SEO guide for independent pubs",
        },
      },
    ],
  },
  build: {
    title: "What we build",
    intro:
      "Every pub site is designed and built around your venue. No templates, no bloated packages and no paying for things you don't need.",
    items: [
      {
        title: "Custom design",
        text: "A look that feels like your pub, not a theme with your logo dropped on it. Warm and characterful for a village local, sharp for a city gastropub.",
      },
      {
        title: "Booking and EPOS integrations",
        text: "We connect your site to the tools behind the bar, so bookings land in one place and nothing needs doing twice.",
      },
      {
        title: "Menus and events your team can update",
        text: "An editor that makes sense, with a walkthrough on handover. Add an event, swap a menu or post a closure notice without calling us.",
      },
      {
        title: "Local SEO and structured data",
        text: "Your opening hours, address and menus labelled in a way search engines can read, plus the groundwork to rank for local searches.",
        link: { href: "/services/digital-marketing", label: "Digital marketing for pubs" },
      },
      {
        title: "AI search readiness",
        text: "People now ask ChatGPT and Google's AI Overviews where to drink. We make sure your pub is clear, consistent and easy for those tools to recommend.",
        link: { href: "/services/geo-for-hospitality", label: "GEO for hospitality: getting found by AI" },
      },
    ],
  },
  proof: {
    text: "The Bell & Bear is a community-owned village pub in Emberton, Buckinghamshire, and the first site we rebuilt. It replaced a slow, plugin-heavy WordPress site with a fast custom theme that the pub's team can run themselves.",
    points: [
      "A What's On diary with filters by type and month, list and calendar views, and a next-up card on the homepage.",
      "Live opening status in the header, such as \"Open until 10pm\", that handles after-midnight closing, bank holidays and special hours automatically.",
      "Mobile performance up from 61 to 97 on Google Lighthouse, measured before and after the rebuild.",
    ],
  },
  pricing: {
    title: "What does a pub website cost?",
    paragraphs: [
      "It depends on what your pub needs, so we don't have a price list. As a rough guide, our cost guide puts a custom site from a specialist at around £3,000 to £12,000 for most small hospitality businesses, with simpler options below that and more complex builds above.",
      "You get a clear, fixed quote before any work starts, so there are no surprises after.",
    ],
    link: {
      href: "/blog/what-should-a-pub-website-cost",
      label: "What should a pub website cost in 2026?",
    },
  },
  faqs: [
    {
      question: "How much does a pub website cost?",
      answer:
        "Most custom pub websites from a specialist cost around £3,000 to £12,000, depending on what's included. We give you a fixed quote before we start. Our pub website cost guide goes through each level, from DIY builders to fully custom builds.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most builds take between six and twelve weeks from kick-off to launch, depending on the size of the site and how quickly content comes together. We plan around your busy periods rather than through them.",
    },
    {
      question: "Can my staff update the menu and events?",
      answer:
        "Yes. Every site comes with an easy editor and a walkthrough, so your team can change menus, events and opening hours without touching any code.",
    },
    {
      question: "Will it work with my booking system?",
      answer:
        "In most cases, yes. We connect to the booking platform you already use, or recommend one that suits your pub if you're starting fresh. Ask on the free call and we'll check it before you commit.",
    },
    {
      question: "Do you do the Google Business Profile too?",
      answer:
        "Yes. We can set up and look after your Google Business Profile as part of our digital marketing service, so your listing, your website and your opening hours all say the same thing.",
    },
  ],
  furtherReading: [
    "what-should-a-pub-website-cost",
    "pdf-menu-costing-you-customers",
    "pub-near-me-local-seo-guide",
    "squarespace-wix-or-custom-pub-website",
  ],
  sibling: {
    question: "Running a brewery or taproom?",
    text: "Breweries have a different set of jobs to do: telling the story, selling the beer and filling the taproom.",
    link: {
      href: "/services/web-development/brewery-website-design",
      label: "Brewery website design",
    },
  },
};

export const breweryWebsiteDesign: LandingPage = {
  slug: "brewery-website-design",
  indexable: true,
  h1: "Brewery Website Design",
  metaTitle: "Brewery Website Design | Webshops, Taprooms & Beer Clubs | BEVV",
  metaDescription:
    "Brewery website design for craft and independent brewers. Webshops, taproom pages and beer clubs, with age checks and mixed cases done properly.",
  hook: "A brewery site has three jobs: tell the story, sell the beer and fill the taproom.",
  intro: [
    "Brewery website design is a different job to building a site for a shop or a café. Yours has three jobs: tell the story, sell the beer and fill the taproom. Most brewery sites manage one of them. We build for all three, including the awkward bits like age verification, courier rules for glass, mixed cases and beer clubs.",
    "We work with independent and craft breweries, whether you have a webshop, a taproom or both. Everything is built around your beer, your customers and the way your business actually makes money.",
  ],
  needs: {
    title: "What a brewery website needs",
    intro:
      "A brewery website carries more weight than a pub's. It's a brand, a shop and a venue in one, and each part needs to work.",
    items: [
      {
        title: "The story and the about page",
        text: "People buy into the brewery as much as the beer: who you are, why you started, the brewers and the kit. We tell it in your voice, with proper photography, and structure it so search engines understand what makes you different.",
      },
      {
        title: "Your beer range and tap list",
        text: "Core range, seasonals, one-offs and what's pouring now. A site that lists a beer which ran dry last month costs you trust, so we connect it to the tools you already use and keep it in step with the cellar.",
      },
      {
        title: "The webshop",
        text: "Mixed case builders, beer club subscriptions, age checks at checkout, delivery zones and sensible shipping for glass. Selling beer online comes with rules that ordinary shops never think about, and we set them up properly.",
        link: {
          href: "/blog/selling-beer-online-uk-webshop",
          label: "Selling beer online in the UK: what your webshop needs",
        },
      },
      {
        title: "The taproom",
        text: "Opening hours (often limited), events, bookings, food trucks, your policy on kids and dogs, and how to find you. Taprooms are often tucked away on industrial estates, so clear directions matter more than you'd think.",
      },
      {
        title: "Trade and wholesale enquiries",
        text: "Pubs, bottle shops and distributors need a simple way to ask about stocking your beer. A dedicated trade page with a short form saves everyone time.",
      },
    ],
  },
  build: {
    title: "What we build",
    intro:
      "Every brewery site is designed and built from scratch. No templates, and nothing you don't need.",
    items: [
      {
        title: "Webshops and beer clubs",
        text: "Online shops that are simple to run and nice to buy from, with age verification, delivery zones, click and collect and recurring payments handled properly.",
      },
      {
        title: "Storytelling pages",
        text: "The people, the process and the reason you started, told properly and built to be found.",
      },
      {
        title: "Tap list and taproom pages",
        text: "What's pouring, when you're open and what's on, kept up to date without anyone rewriting the page every week.",
      },
      {
        title: "Integrations",
        text: "Booking systems, stock, email platforms and loyalty schemes, connected so nothing needs doing twice.",
      },
      {
        title: "Search and AI visibility",
        text: "Local SEO, structured data and the groundwork to be recommended when people ask ChatGPT where to find good beer.",
        link: { href: "/services/geo-for-hospitality", label: "GEO for hospitality: getting found by AI" },
      },
    ],
  },
  platforms: {
    title: "Shopify, WordPress or headless?",
    paragraphs: [
      "The honest answer is that it depends on what the site's main job is. If it's mostly about selling beer, Shopify is often the right call. If it's about telling your story and filling the taproom, with a shop as a useful extra, WordPress usually suits better. Bigger operations with serious online sales and serious content sometimes go headless, though most independents don't need it yet.",
      "We build on all three, so we've no reason to push you one way. We'll ask how you sell, who updates the site and where you want to be in two years, then recommend what fits.",
    ],
    links: [
      { href: "/blog/shopify-vs-wordpress-for-breweries", label: "Shopify vs WordPress for breweries" },
      { href: "/blog/what-is-a-headless-website-brewery", label: "What is a headless website?" },
    ],
  },
  proof: {
    text: "The Bell & Bear is a pub rather than a brewery, but it's the best evidence we have of how we build. It's a full rebuild of a slow, plugin-heavy WordPress site as a fast custom theme that the team can run themselves.",
    points: [
      "A spreadsheet importer that turns a food truck rota into dozens of linked events in one go, with a preview first.",
      "A What's On diary with filters, list and calendar views, so visitors can see what's happening at a glance.",
      "Mobile performance up from 61 to 97 on Google Lighthouse, measured before and after the rebuild.",
    ],
    note: "We're looking for breweries to be our next case study. If that sounds like you, we'd love to hear from you.",
  },
  pricing: {
    title: "What does a brewery website cost?",
    paragraphs: [
      "Brewery sites vary a lot, from a storytelling and taproom site to a full webshop with subscriptions. As a rough guide, our cost guide puts a custom site from a specialist at around £3,000 to £12,000 for most small hospitality businesses. Webshops typically start around £2,000 to £5,000 for a straightforward freelancer build and £5,000 to £15,000 for a standard agency build, with more for complex custom work.",
      "We don't do fixed packages. You get a clear quote built around your brewery before any work starts.",
    ],
    link: {
      href: "/blog/what-should-a-pub-website-cost",
      label: "What should a pub website cost in 2026?",
    },
  },
  faqs: [
    {
      question: "Shopify or WordPress for a brewery?",
      answer:
        "Shopify if the site's main job is selling beer, WordPress if it's telling your story and filling the taproom with a shop as a useful extra. If you need serious volume and serious storytelling, the two can be combined. Our Shopify vs WordPress guide goes through it in detail.",
    },
    {
      question: "Can you handle age verification?",
      answer:
        "Yes. We set up age checks at checkout and plan for checks on delivery too, and we point you to the licensing and record-keeping you need to have in place so the shop is set up properly from day one.",
    },
    {
      question: "Can customers build mixed cases?",
      answer:
        "Yes. Mixed case builders, bundles and gift boxes are standard parts of a brewery webshop, and we build them as part of the shop.",
    },
    {
      question: "Do you integrate with brewery management software?",
      answer:
        "Often, yes, depending on the software and what it lets us connect to. Tell us what you use on the free call and we'll say honestly what's possible, rather than promising it up front.",
    },
    {
      question: "Can you move our existing shop over?",
      answer:
        "Yes. We plan the move properly: your products, your content and redirects from the old URLs, so you don't lose the search visibility you've already built.",
    },
  ],
  furtherReading: [
    "shopify-vs-wordpress-for-breweries",
    "selling-beer-online-uk-webshop",
    "what-is-a-headless-website-brewery",
    "what-should-a-pub-website-cost",
  ],
  sibling: {
    question: "Running a pub instead?",
    text: "Pubs have a different set of jobs: booking, what's on and what you're serving.",
    link: {
      href: "/services/web-development/pub-website-design",
      label: "Pub website design",
    },
  },
};

export const landingPages: LandingPage[] = [pubWebsiteDesign, breweryWebsiteDesign];
