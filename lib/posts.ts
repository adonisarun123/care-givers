/**
 * The Care Journal — content for /journal
 *
 * Each post body is a typed array of sections so the renderer is
 * predictable, accessible, and easy to extend (no MDX runtime needed).
 *
 * SEO strategy: every post targets a distinct keyword cluster, links
 * internally to 2–3 service pages and 1–2 locality pages, and carries
 * Article + FAQ schema where appropriate.
 */

export type Section =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string; id?: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "quote"; text: string; attribution?: string }
  | {
      kind: "callout";
      title: string;
      text: string;
      cta?: { href: string; label: string };
    }
  | { kind: "faq"; items: { q: string; a: string }[] };

export type Post = {
  slug: string;
  title: string;
  dek: string;
  /**
   * TL;DR — a 2–4 sentence direct answer designed for AI Overviews,
   * Perplexity, and Google's "answer engines". Should be specific and citable.
   */
  tldr: string;
  category: PostCategory;
  readMinutes: number;
  publishedAt: string; // ISO date
  author: { name: string; role: string };
  tags: string[];
  hero: string;
  seoTitle: string;
  seoDescription: string;
  related: string[]; // slugs
  sections: Section[];
};

export type PostCategory =
  | "For the Family"
  | "At Home in Bangalore"
  | "Care Knowledge"
  | "NRI & Working Families";

export const journal = {
  name: "The Care Journal",
  tagline: "Notes for Bangalore families navigating care at home.",
  description:
    "Honest writing on home caregiving, elder care, post-surgery recovery, dementia and the everyday decisions that families make when a loved one needs help at home.",
};

export const categoryDescriptions: Record<PostCategory, string> = {
  "For the Family":
    "Decision-support and emotional clarity for the people choosing care.",
  "At Home in Bangalore":
    "Local context — pricing, hospitals, neighbourhood realities.",
  "Care Knowledge":
    "Practical caregiving know-how, written for non-clinicians.",
  "NRI & Working Families":
    "For families managing parent care from another city or country.",
};

const author = {
  name: "The Care Givers Team",
  role: "Care editorial, Bangalore",
};

/* ──────────────────────────── Posts ──────────────────────────── */

export const posts: Post[] = [
  /* 1. Decision-support / high-intent */
  {
    slug: "how-to-choose-a-caregiver-bangalore",
    title:
      "How to choose a caregiver for your aging parents in Bangalore",
    dek:
      "A practical, honest checklist for the most important hire your family will ever make.",
    tldr:
      "Choose a caregiver in Bangalore by matching the person to the patient’s actual situation — not just a job title. Insist on Aadhaar and police verification, a documented 60+ hour training programme, language match, transparent pricing, and a 24-hour replacement guarantee. Typical 2026 rates: ₹220/hour, ₹950 for a 12-hour shift, ₹28,000–38,000/month for live-in. Use a three-week observation window to confirm fit.",
    category: "For the Family",
    readMinutes: 8,
    publishedAt: "2026-02-12",
    author,
    tags: ["elder care", "Bangalore", "caregiver hiring", "checklist"],
    hero:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "How to Choose a Caregiver in Bangalore | A Family Checklist",
    seoDescription:
      "A clear, honest guide for Bangalore families choosing an elder caregiver — verification, training, language, fit, pricing and the signals to watch for.",
    related: [
      "home-caregiver-cost-bangalore",
      "live-in-vs-day-caregiver",
      "old-age-home-vs-home-care-bangalore",
    ],
    sections: [
      {
        kind: "p",
        text: "Choosing a caregiver is the most consequential household decision many of us will make in our parents’ later years. It rivals choosing a school for a child — only with less time to prepare and less collective wisdom to draw on. This guide is what we wish someone had given us when we started.",
      },
      {
        kind: "p",
        text: "It’s written for families in Bangalore, but the principles travel anywhere in India. We’ll cover the practical checklist (verification, training, fit), the questions to ask before signing, and the quiet signals that tell you a placement is going well.",
      },
      { kind: "h2", text: "Start with the situation, not the role" },
      {
        kind: "p",
        text: "Most families start with a job title — “we need an attendant” — when they should start with the situation. A 78-year-old recovering from a hip replacement needs a different person from a 65-year-old with early dementia, and both are different from a 90-year-old who simply finds the days lonely. Spend ten minutes writing down the actual day you wish your parent could have, and the people who could make it possible will become much clearer.",
      },
      {
        kind: "callout",
        title: "Match the person, not the package",
        text: "If your parent is recovering from hospital, you want a patient care attendant. If memory is the concern, dementia training matters more than clinical training. If they live alone, continuity is more important than versatility.",
        cta: { href: "/services", label: "See all care types" },
      },
      { kind: "h2", text: "The non-negotiables (verification)" },
      {
        kind: "p",
        text: "These should be table stakes for any caregiver entering your home. If an agency hesitates on any of them, walk away.",
      },
      {
        kind: "list",
        items: [
          "Aadhaar verification with original sighted",
          "Permanent and current address verification",
          "Police background check on file",
          "References from at least two prior placements",
          "Recent in-person interview (not just a phone call)",
          "A care manager you can call who actually knows the caregiver",
        ],
      },
      { kind: "h2", text: "Training, not just experience" },
      {
        kind: "p",
        text: "A caregiver with eight years of experience and no formal training is often less safe than one with two years and a 60-hour curriculum behind her. Ask specifically about: geriatric care basics, fall prevention, medication adherence, vitals tracking, dementia communication if relevant, and a clear escalation pathway in an emergency. The agency should be able to share the curriculum without hesitation.",
      },
      { kind: "h2", text: "Match for language and rhythm" },
      {
        kind: "p",
        text: "In Bangalore, this matters more than people expect. A Kannada-only grandmother and a Hindi-only caregiver can survive a few days, but they will not build the daily relationship that good care depends on. Insist on language match — Kannada, Tamil, Telugu, Malayalam, Bengali, English, Hindi are all available with a little patience. Then think about rhythm: morning person or evening person, talkative or quiet, structured or flexible. A good agency will ask these questions before you do.",
      },
      { kind: "h2", text: "What pricing should look like" },
      {
        kind: "p",
        text: "Honest pricing is shown upfront. In Bangalore, ranges are reasonably stable: hourly visits start around ₹220 with a 4-hour minimum, 12-hour day or night shifts run ₹950–1,250 depending on care complexity, and live-in 24×7 placements are ₹28,000–38,000 per month. Anything dramatically below those numbers usually means the caregiver is underpaid or undertrained — both of which become your problem within a month.",
      },
      {
        kind: "callout",
        title: "Want our exact pricing?",
        text: "We publish all of it transparently — no callbacks, no negotiation. See it on one page.",
        cta: { href: "/pricing", label: "View pricing" },
      },
      { kind: "h2", text: "Questions to ask before you sign" },
      {
        kind: "list",
        items: [
          "What happens if the caregiver and our family don’t feel like a fit?",
          "Who covers the caregiver’s weekly off, and how is the relief person introduced?",
          "How often does a supervisor visit our home?",
          "Who picks up the phone at 2 AM if there’s an emergency?",
          "What is not covered, so we can plan the rest of the household?",
          "How do you handle medication errors or missed doses?",
          "Can we step the engagement up or down without paperwork friction?",
        ],
      },
      { kind: "h2", text: "Signals a placement is going well (and not)" },
      {
        kind: "p",
        text: "After two weeks, you’ll know more from observing than from asking. Going well: your parent says the caregiver’s name unprompted, eats slightly more than they did before, sleeps a little better, and looks for the caregiver after the off day. Not going well: your parent goes quiet around the caregiver, refuses care, develops new agitation, or you start hearing complaints from neighbours or family. Don’t over-interpret week one — but week three is real data.",
      },
      { kind: "h2", text: "If you’re an NRI" },
      {
        kind: "p",
        text: "Manage from a distance with structure: set up a WhatsApp group with the caregiver and supervisor, schedule a 10-minute weekly video call with your parent and the caregiver together, and make sure the agency has both an India and an international point of contact. ",
      },
      {
        kind: "callout",
        title: "Continue reading",
        text: "What home care actually costs in Bangalore — a transparent 2026 guide.",
        cta: {
          href: "/journal/home-caregiver-cost-bangalore",
          label: "Read the pricing guide",
        },
      },
    ],
  },

  /* 2. Pricing intent — Bangalore */
  {
    slug: "home-caregiver-cost-bangalore",
    title:
      "Home caregiver cost in Bangalore: a transparent 2026 guide",
    dek:
      "What you’ll actually pay for elder care, patient care and live-in caregivers across Bangalore — and why prices vary.",
    tldr:
      "Home caregiver cost in Bangalore in 2026: hourly visits from ₹220 (4-hour minimum), 12-hour day or night shifts ₹950–1,250 depending on care complexity, and 24×7 live-in placements ₹28,000–38,000 per month including weekly off coverage. Anything dramatically below these numbers usually means an underpaid or undertrained caregiver, which becomes the family’s problem within a month.",
    category: "At Home in Bangalore",
    readMinutes: 7,
    publishedAt: "2026-02-26",
    author,
    tags: ["pricing", "Bangalore", "live-in", "elder care"],
    hero:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "Home Caregiver Cost in Bangalore (2026) | Transparent Pricing Guide",
    seoDescription:
      "Real 2026 pricing for elder care, patient care, live-in and night caregivers in Bangalore. Hourly rates, monthly packages, what affects cost.",
    related: [
      "how-to-choose-a-caregiver-bangalore",
      "live-in-vs-day-caregiver",
      "nri-guide-parent-care-bangalore",
    ],
    sections: [
      {
        kind: "p",
        text: "Most families researching home caregiver cost in Bangalore run into the same wall: agencies don’t publish prices. Calls turn into qualifying conversations, and qualifying conversations turn into pressure. We think a transparent baseline does more for trust than any sales script — so this is what care actually costs in Bangalore in 2026.",
      },
      { kind: "h2", text: "Hourly visits" },
      {
        kind: "p",
        text: "Hourly visits start around ₹200–250 per hour, with a typical four-hour minimum. They make sense for short-term needs: a few hours of bath and meal help in the morning, a couple of hours in the evening, or as a step-down after a longer engagement. Below ₹200/hour, you are usually looking at an unsupervised gig worker, not a trained, accountable attendant.",
      },
      { kind: "h2", text: "12-hour day and night shifts" },
      {
        kind: "p",
        text: "The most flexible and most-booked pattern. ₹950–1,100 per shift for general elder care; ₹1,100–1,250 for patient care or post-surgery; ₹1,250–1,400 for dementia or specialised care. Day and night are priced the same — staying alert through the night is paid work, not standby.",
      },
      { kind: "h2", text: "Live-in 24×7" },
      {
        kind: "p",
        text: "Live-in caregivers in Bangalore range from ₹28,000 to ₹38,000 a month depending on care complexity. The ₹28,000–30,000 band is general elder care for relatively independent seniors. ₹32,000–35,000 typically covers patient care or post-surgery recovery. ₹36,000–38,000 covers specialised dementia or fully bedridden cases. Weekly off coverage and bi-weekly supervisor visits should always be included — if they’re extra, that’s a red flag.",
      },
      {
        kind: "callout",
        title: "Our exact prices",
        text: "Hourly: ₹220. Day/night shift: ₹950. Live-in: from ₹28,000/month. Listed openly across every page.",
        cta: { href: "/pricing", label: "See full pricing" },
      },
      { kind: "h2", text: "What actually moves the price" },
      {
        kind: "list",
        items: [
          "Care complexity (general → patient → specialised → bedridden)",
          "Hours and continuity (short bursts cost more per hour than monthly)",
          "Locality and travel time (further locales add a small premium)",
          "Language and gender preferences (no extra cost — but harder matches take time)",
          "Equipment needs (air mattress, hoist, RT-feed setup)",
          "Family preferences around food and accommodation for live-in",
        ],
      },
      { kind: "h2", text: "Hidden costs to watch for" },
      {
        kind: "p",
        text: "The published price is rarely the final bill, unless the agency is upfront. Watch for: weekly off charged extra, supervisor visits charged separately, “onboarding” or “registration” fees, and per-incident charges for changing the caregiver. None of these should be standard — they exist to make the headline rate look smaller.",
      },
      { kind: "h2", text: "What to budget over a year" },
      {
        kind: "p",
        text: "If your situation calls for ongoing live-in care, budget ₹3.5–4.5 lakh a year. That sounds large, but it should be compared to the realistic alternatives — multiple shift attendants, an old age home, hospital re-admissions from poor care, or family members compromising their own work. For most families, the live-in option is comparable to or cheaper than the alternatives once you do the maths.",
      },
      { kind: "h2", text: "Across Bangalore neighbourhoods" },
      {
        kind: "p",
        text: "Pricing is broadly consistent across Bangalore zones; what changes is response time. Our caregivers reach Indiranagar, Koramangala and HSR fastest (under 30 minutes), with Whitefield, Hebbal and Electronic City typically 35–50 minutes. ",
      },
      {
        kind: "callout",
        title: "See your area",
        text: "We publish coverage detail per neighbourhood — local hospitals, response time, density.",
        cta: { href: "/locations", label: "Browse Bangalore localities" },
      },
      {
        kind: "faq",
        items: [
          {
            q: "Is GST extra on top of the prices listed?",
            a: "Most home-care services are GST-exempt as personal care, but always confirm — your invoice should show this clearly.",
          },
          {
            q: "Can we pay weekly instead of monthly?",
            a: "Yes for shift-based hires; live-in is typically billed monthly with the option to end the engagement on a week’s notice.",
          },
          {
            q: "Are tips expected for caregivers?",
            a: "Not expected. A small bonus on a religious occasion or after a difficult month is appreciated, but not required.",
          },
        ],
      },
    ],
  },

  /* 3. Comparison: live-in vs day */
  {
    slug: "live-in-vs-day-caregiver",
    title: "Live-in vs day caregiver: which one your family actually needs",
    dek:
      "A simple way to think about the most common decision Bangalore families face when arranging home care.",
    tldr:
      "Choose a live-in caregiver if anyone needs supervision through the night, no family member is reliably present at night, or care will last more than 6 weeks. Choose a 12-hour day shift if family covers the night, the engagement is short, or your home has no spare sleeping space. A live-in placement (₹28,000–38,000/month) is usually cheaper than two separate shifts.",
    category: "For the Family",
    readMinutes: 6,
    publishedAt: "2026-03-08",
    author,
    tags: ["live-in", "day caregiver", "decision support"],
    hero:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "Live-in vs Day Caregiver | How to Choose for Your Family",
    seoDescription:
      "Live-in caregiver or 12-hour day caregiver? A clear-eyed comparison for Bangalore families — cost, continuity, suitability, and how to decide.",
    related: [
      "how-to-choose-a-caregiver-bangalore",
      "home-caregiver-cost-bangalore",
      "old-age-home-vs-home-care-bangalore",
    ],
    sections: [
      {
        kind: "p",
        text: "Almost every family that calls us asking for help arrives at the same fork: should we hire a live-in caregiver, or just have someone for 12 hours during the day? The answer depends on the patient, the household, and a few honest questions most families don’t think to ask.",
      },
      { kind: "h2", text: "Live-in: when one person carries the day" },
      {
        kind: "p",
        text: "A live-in caregiver moves into your home and stays through the days and nights. They handle personal care, medications, mobility, night-time wakings — everything. The trade-off is space (the caregiver needs a bed) and the household adjustment of having a new person in the home full-time.",
      },
      {
        kind: "p",
        text: "Live-in works best when: the patient needs supervision through the night, falls are a real risk, the family is not present in the home (NRI children, working adults living elsewhere), or care is going to extend over many months. It’s also often cheaper per hour than splitting into two shifts.",
      },
      { kind: "h2", text: "Day caregiver: when nights are covered" },
      {
        kind: "p",
        text: "A 12-hour day shift suits households where someone — a spouse, a son or daughter, a relative — is present at night. The caregiver arrives in the morning, handles the day’s care, and leaves in the evening with a written handover. The family does the night, knowing daytime is fully looked after.",
      },
      {
        kind: "p",
        text: "Day-only is cheaper, requires no spare room, and lets the family stay close to the patient’s evening routine. It struggles when the patient is at high fall risk overnight or when the family also needs to sleep through the night.",
      },
      { kind: "h2", text: "A simple decision flow" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Does the patient need supervision through the night? If yes — live-in or night shift.",
          "Is anyone reliably present at night? If no — live-in.",
          "Is the engagement likely to last more than 6 weeks? If yes — live-in is usually cheaper.",
          "Does your home have space for the caregiver? If no — day shift, possibly with a separate night shift.",
          "Will family routines be disrupted by a live-in person? If strongly yes — start with a day shift, see how it goes.",
        ],
      },
      { kind: "h2", text: "The hybrid most families end up at" },
      {
        kind: "p",
        text: "Many families pick day-only first, run it for two weeks, realise the nights are still hard, and then add a night shift — effectively a 24×7 setup, but with two attendants. That works well for shorter stints (post-surgery, post-discharge) but costs roughly 1.6× a live-in placement long-term. So if it’s clearly going to last months, just start with live-in.",
      },
      {
        kind: "callout",
        title: "Need help deciding?",
        text: "Tell us your situation in 60 seconds — we’ll suggest the right shape and price.",
        cta: { href: "/book", label: "Start a booking" },
      },
      { kind: "h2", text: "Pricing comparison" },
      {
        kind: "p",
        text: "A 12-hour day shift in Bangalore averages ₹950 per day, or ~₹28,500 for a month. A live-in placement is ₹28,000–35,000 per month and includes weekly off coverage. Two shifts (day + night) for full 24×7 cover comes to ~₹57,000 a month — almost double a single live-in person — and adds the cognitive load of two caregivers, two handovers, and twice the matching to get right.",
      },
      { kind: "h2", text: "When live-in is the wrong call" },
      {
        kind: "p",
        text: "Don’t default to live-in if your home doesn’t have a separate sleeping area for the caregiver, if the patient strongly objects to a stranger in the house overnight, or if the engagement is genuinely short (less than 3 weeks). In those cases, two shifts or a day-only arrangement preserves dignity and household rhythm better — even at higher cost.",
      },
    ],
  },

  /* 4. Dementia — informational, big keyword cluster */
  {
    slug: "dementia-care-at-home-india",
    title: "Dementia care at home: 9 things every Indian family should know",
    dek:
      "Dementia care isn’t about doing more. It’s about doing the same things, the same way, every day.",
    tldr:
      "The most important rule of dementia home care is continuity — the same caregiver every day with one consistent backup. Validate emotions instead of correcting facts. Build a strict daily routine. Manage sundowning with morning sunlight and a low-stimulation evening. Bring in a trained dementia caregiver earlier than you think, and coach the wider family alongside the patient.",
    category: "Care Knowledge",
    readMinutes: 11,
    publishedAt: "2026-03-22",
    author,
    tags: ["dementia", "Alzheimer's", "sundowning", "home care"],
    hero:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "Dementia Care at Home (India) | 9 Things Every Family Should Know",
    seoDescription:
      "Practical, family-grade guidance on dementia care at home in India — communication, sundowning, wandering, daily routines, when to bring in a caregiver.",
    related: [
      "how-to-choose-a-caregiver-bangalore",
      "post-discharge-checklist-bangalore",
      "prevent-bedsores-at-home",
    ],
    sections: [
      {
        kind: "p",
        text: "If a parent has been diagnosed with dementia or Alzheimer’s, you have probably already read fifty articles, half of them frightening. This is meant to be the calm one. It’s the practical playbook we share with families when we begin a placement — what works, what makes things harder, and where to start when the diagnosis is fresh.",
      },
      { kind: "h2", text: "1. Continuity matters more than skills" },
      {
        kind: "p",
        text: "If you take one principle from this article, take this. Dementia patients do not adapt well to new faces, voices or rhythms. The single biggest determinant of how well care goes is whether the same people show up at the same times. Pick a primary caregiver and a single backup, and resist the urge to rotate “for variety”.",
      },
      { kind: "h2", text: "2. Validate, don’t correct" },
      {
        kind: "p",
        text: "When a parent insists their long-deceased mother is coming for dinner, you can either correct them (which they will not retain, but will cause distress) or validate the feeling and gently redirect. The trained version of this is called validation therapy: meet them where they are, not where you wish they were.",
      },
      { kind: "h2", text: "3. Build a daily rhythm and protect it" },
      {
        kind: "p",
        text: "Pick wake-up time, bath time, breakfast time, walk time, lunch, rest, tea, dinner — and then defend that schedule like the foundation it is. Dementia patients regulate to routine even when they cannot regulate to memory. Rotating times of day is one of the fastest ways to destabilise a household.",
      },
      { kind: "h2", text: "4. Sundowning is real, and it’s manageable" },
      {
        kind: "p",
        text: "Many families notice agitation rising in the late afternoon and lasting into the evening. This is sundowning. It improves with: morning sunlight (start the day with 15–20 minutes outside), an afternoon walk, dim and warm lighting from 5 PM, and a low-stimulation evening routine (no loud TV, no new visitors). Knowing the pattern halves the suffering on both sides.",
      },
      { kind: "h2", text: "5. Make the home dementia-aware" },
      {
        kind: "list",
        items: [
          "Add a discreet door alert if wandering is a risk",
          "Remove loose rugs and trip hazards",
          "Install motion lights for night-time bathroom trips",
          "Keep a labelled basket of frequently lost items (glasses, wallet, keys)",
          "Use a single, large analogue clock per main room",
          "Place a current photo of the family caregiver near the bed for orientation",
        ],
      },
      { kind: "h2", text: "6. Learn the language of redirection" },
      {
        kind: "p",
        text: "When agitation rises, three tools work better than reasoning: change the room (move to a window, the garden, another floor), change the activity (a song they like, a familiar photo album, folding a small basket of clothes), or change the topic (bring up a person from their childhood — earlier memories often remain vivid even when recent ones don’t).",
      },
      { kind: "h2", text: "7. Bring in a trained caregiver earlier than you think" },
      {
        kind: "p",
        text: "Family members do dementia care on instinct. Trained caregivers do it with a vocabulary — they know the validation lines, the redirection moves, the sundowning protocol. Most families bring caregivers in only at advanced stages, when an earlier engagement would have made the early years far easier on everyone, including the patient.",
      },
      {
        kind: "callout",
        title: "Specialised dementia care",
        text: "Our dementia caregivers complete 120+ hours of training, with continuity-first scheduling and a fortnightly supervisor visit.",
        cta: { href: "/services/dementia-care", label: "Explore dementia care" },
      },
      { kind: "h2", text: "8. Coach the wider family, not just the patient" },
      {
        kind: "p",
        text: "Half the difficulty of dementia care is family members who don’t know what to say. A grandchild who asks 'don’t you remember me?', a sibling who corrects every memory, a spouse who interprets disorientation as defiance — each adds load. A 30-minute session with a trained care manager can reset the whole household’s communication pattern.",
      },
      { kind: "h2", text: "9. Look after the primary caregiver" },
      {
        kind: "p",
        text: "Whether that’s you, your other parent, or a relative — the primary caregiver in a dementia household is at very high risk of burnout, and burnout shows up as quiet resentment, sleep loss and forgotten medications. Build in respite shifts before you’re desperate, not after. Two days a week off, even early on, can sustain a primary caregiver for years.",
      },
      {
        kind: "faq",
        items: [
          {
            q: "How do I know if it’s dementia or normal forgetting?",
            a: "Forgetting where you put the keys is normal; forgetting what keys are for is not. If a parent is repeating the same question multiple times within an hour, getting lost in familiar places, or struggling with simple sequences (making tea, dressing), see a neurologist for a baseline.",
          },
          {
            q: "Should we tell the patient about the diagnosis?",
            a: "Most clinicians recommend yes, gently, in the early stages — the patient still has the cognitive room to understand and adjust. In later stages, the conversation no longer lands the same way and adds distress without retention.",
          },
          {
            q: "Is medication enough?",
            a: "Medication can slow progression and reduce some symptoms (especially mood), but daily routine, environment and skilled caregiving have at least equal impact on quality of life. They are not optional.",
          },
        ],
      },
    ],
  },

  /* 5. Post-discharge checklist */
  {
    slug: "post-discharge-checklist-bangalore",
    title:
      "Bringing your parent home from hospital: a Bangalore family’s checklist",
    dek:
      "The first 72 hours after discharge often decide how the next 6 weeks go. Here’s what to put in place.",
    tldr:
      "The first 72 hours after hospital discharge in Bangalore decide the next 6 weeks of recovery. Read the discharge summary the day before, prepare the bedroom and walker, reconcile every medication with the doctor, and arrange 24×7 caregiver coverage if no family is continuously present. Reposition every 2–3 hours to prevent bedsores. Escalate immediately for fever, breathlessness, swelling, bleeding or confusion.",
    category: "Care Knowledge",
    readMinutes: 9,
    publishedAt: "2026-04-04",
    author,
    tags: ["post-surgery", "discharge", "hospital", "recovery"],
    hero:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "Post-Hospital Discharge Checklist (Bangalore) | Bringing a Parent Home",
    seoDescription:
      "Step-by-step discharge checklist for Bangalore families bringing a parent home from hospital — equipment, medication, caregiver, escalation plan.",
    related: [
      "live-in-vs-day-caregiver",
      "dementia-care-at-home-india",
      "prevent-bedsores-at-home",
    ],
    sections: [
      {
        kind: "p",
        text: "Hospitals are very good at the surgery and very busy at the discharge. The discharge summary is usually pushed across a counter at 11 AM with a stack of medications, a follow-up date, and a polite goodbye. The first 72 hours back home are where most preventable complications begin — and they are also the most fixable, with a small amount of preparation.",
      },
      { kind: "h2", text: "Before discharge day: 3 things to do" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Read the discharge summary as a family (or with a trained caregiver) the day before you leave hospital — note the medications, the do-nots, and the warning signs.",
          "Set up the room: bed in a position the patient can get out of safely, walker beside it, water on the bedside, phone within reach, soft lighting.",
          "Decide who is in the home for the first 72 hours. If no one can be present continuously, arrange a 24×7 caregiver before discharge, not after.",
        ],
      },
      {
        kind: "callout",
        title: "Discharge-day caregiver",
        text: "We can place an attendant at the hospital ward to ride along home with you, with 24 hours’ notice.",
        cta: { href: "/services/post-surgery-care", label: "Post-surgery care" },
      },
      { kind: "h2", text: "Equipment to have ready" },
      {
        kind: "list",
        items: [
          "Walker or wheelchair if mobility is reduced",
          "Air mattress for any patient who will be in bed for more than 4–5 days",
          "Bedpan and adult diapers for the first few days",
          "Pulse oximeter, BP monitor, glucometer (per condition)",
          "Pill organiser with morning/afternoon/evening compartments",
          "Notebook for vitals and intake/output",
          "Emergency contact card on the fridge: family + treating doctor + ambulance",
        ],
      },
      { kind: "h2", text: "Medication: the most common failure point" },
      {
        kind: "p",
        text: "Discharge medication errors are stunningly common — duplicate prescriptions from different specialists, dosages that need to be tapered, drugs that can’t be taken together. Spend an hour with your treating doctor, the discharge nurse, or your pharmacist before you go home, and reconcile every medication on the list against the previous home regimen.",
      },
      { kind: "h2", text: "Pain and sleep" },
      {
        kind: "p",
        text: "The first nights are usually painful. Stay ahead of pain — don’t wait until it spikes. Use prescribed analgesics on schedule for the first 48–72 hours rather than on demand, and keep a written log so you and the caregiver can see patterns. Poorly-managed pain in the first week is the single biggest reason patients lose mobility and confidence.",
      },
      { kind: "h2", text: "Mobility: little and often" },
      {
        kind: "p",
        text: "Even after major surgery, most patients are encouraged to stand and take a few steps within the first day. Three short walks (to the bathroom and back, then around the bed) are far better than one long one. Resist the well-meaning instinct to keep them in bed — bed rest beyond what the surgeon prescribed costs muscle, breathing capacity and morale.",
      },
      { kind: "h2", text: "Skin and pressure" },
      {
        kind: "p",
        text: "Any patient who will be in bed for more than 4–5 days is at risk of pressure sores. Reposition every 2–3 hours, day and night, and use an air mattress. We have a separate guide on this.",
      },
      {
        kind: "callout",
        title: "Read next",
        text: "How to prevent bedsores in a bedridden parent at home — the protocol that actually works.",
        cta: { href: "/journal/prevent-bedsores-at-home", label: "Read the bedsore guide" },
      },
      { kind: "h2", text: "When to escalate" },
      {
        kind: "p",
        text: "Print these warning signs and stick them on the fridge. Call the treating doctor immediately for: fever above 38.5°C, sudden chest pain or breathlessness, sudden swelling in the legs (especially one-sided), significant bleeding, mental confusion, or a fall. For the caregiver, our 24×7 care manager is the second line — between your family and the ambulance partner.",
      },
      { kind: "h2", text: "Week-by-week expectations" },
      {
        kind: "list",
        items: [
          "Week 1: stabilising routine, pain management, first short walks, vitals trending right",
          "Week 2: appetite returns, sutures often reviewed by surgeon, mobility expanding",
          "Week 3: independence in basics (bathroom, dressing) for most patients",
          "Week 4–6: physiotherapy progresses, caregiver hours often taper, household routine returns",
        ],
      },
      { kind: "h2", text: "Bangalore-specific tips" },
      {
        kind: "p",
        text: "Coordinate with the hospital case manager before discharge — Manipal, Apollo, Sakra, Fortis and Narayana all have one. Ask about home physiotherapy partners they recommend. If you live in Whitefield or Electronic City, plan the discharge route to avoid peak traffic — a calm two-hour drive can become a difficult three-hour one. We can coordinate ambulance partners directly if needed.",
      },
    ],
  },

  /* 6. NRI guide */
  {
    slug: "nri-guide-parent-care-bangalore",
    title:
      "How NRI children manage parent care in Bangalore (without burning out)",
    dek:
      "Quiet systems and small rituals that let you stay close from a different time zone.",
    tldr:
      "Manage parent care in Bangalore from abroad by building a triangle of you, the caregiver and a local supervisor, running a daily WhatsApp group, choosing live-in care so nights are covered, and using two visits home a year intentionally. Live-in caregiving in Bangalore costs ₹28,000–38,000/month. Three triggers always justify flying back: a hospitalisation with discharge decisions, sudden cognitive changes, and end-of-life conversations.",
    category: "NRI & Working Families",
    readMinutes: 8,
    publishedAt: "2026-04-18",
    author,
    tags: ["NRI", "remote care", "parents", "Bangalore"],
    hero:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "NRI Guide: Managing Parent Care in Bangalore from Abroad",
    seoDescription:
      "How Indian families abroad arrange and oversee parent care in Bangalore — caregivers, supervisors, video calls, financial setup, what to do remotely.",
    related: [
      "how-to-choose-a-caregiver-bangalore",
      "home-caregiver-cost-bangalore",
      "live-in-vs-day-caregiver",
    ],
    sections: [
      {
        kind: "p",
        text: "If you live abroad and your parents live in Bangalore, you already know the particular guilt of being a long flight away when something matters. This guide isn’t about removing that feeling. It’s about building enough of a system around it that the feeling stops being the only signal you have.",
      },
      { kind: "h2", text: "Build a triangle, not a line" },
      {
        kind: "p",
        text: "From overseas, the worst architecture is a line: you → caregiver. Information is patchy, caregivers don’t want to alarm you, and small drift accumulates. The right architecture is a triangle: you, the caregiver, and a local supervisor or care manager who visits the home regularly. The supervisor is the steady second pair of eyes that catches what a single caregiver might quietly miss.",
      },
      { kind: "h2", text: "Set up the WhatsApp group" },
      {
        kind: "p",
        text: "One group, three or four people: you, your parent (if they use WhatsApp), the caregiver and the supervisor. Daily summary in the evening; vitals once a week; flag for anything unusual. Don’t expect long messages — short, consistent ones work better. We also recommend a weekly 10-minute video call with all three of you on the line — it has a different quality from a phone update.",
      },
      { kind: "h2", text: "The financial setup" },
      {
        kind: "list",
        items: [
          "Set up a recurring direct debit for the caregiving fee from your parent’s primary account, not your own — it normalises the arrangement and avoids monthly transfers",
          "Add yourself as a joint signatory or holder on key accounts (with your parent’s consent) so you can act in an emergency",
          "Keep a small float (₹50,000–1,00,000) at home for medications, groceries and the occasional ambulance",
          "Use a household credit card on auto-pay for utilities, pharmacy and groceries",
          "Maintain a digital folder of insurance, hospital records, and key documents — shared with one trusted local family member or friend",
        ],
      },
      { kind: "h2", text: "Choose the right care shape" },
      {
        kind: "p",
        text: "For NRI families, live-in care is usually the right baseline — not because of cost, but because it removes the question of who is there at night. A 12-hour day shift with no night cover means a 4 AM problem becomes your 4 AM problem from another time zone. Live-in puts a trained, supervised person between the problem and the phone call.",
      },
      {
        kind: "callout",
        title: "Live-in care for NRI families",
        text: "Continuous day-and-night care, weekly off coverage included, supervisor visits every two weeks. Built for managing remotely.",
        cta: { href: "/services/live-in-caregiver", label: "Explore live-in care" },
      },
      { kind: "h2", text: "Plan for the visits home" },
      {
        kind: "p",
        text: "Two visits a year is a common cadence. Use them well. Spend the first day quietly observing — the rhythm of the home, what the caregiver is like in person, your parent’s mood. The second day, have a slow conversation with the caregiver about what they’re finding hard. The third, sit with the supervisor for a 30-minute review. The fourth onwards, be the family — eat together, take a walk, watch your parent read the newspaper. Care planning shouldn’t crowd out presence.",
      },
      { kind: "h2", text: "When to fly" },
      {
        kind: "p",
        text: "Three triggers always justify a flight, no matter the cost: a hospitalisation that may turn into a discharge requiring decisions, a sudden change in cognitive state (new confusion, sudden withdrawal), and end-of-life conversations with the treating doctor. Anything else can usually be handled with a longer call and a steady supervisor on the ground.",
      },
      { kind: "h2", text: "The siblings conversation" },
      {
        kind: "p",
        text: "If you have siblings — in India or abroad — you need a clear, simple agreement about who handles what, and you need it in writing (even if just an email thread). Resentment in NRI families almost always begins with care load drift, not with money. The sibling who is closest geographically is doing the most invisible work; recognising and compensating that — financially or in kind — keeps families intact.",
      },
      { kind: "h2", text: "What we provide that helps NRI families specifically" },
      {
        kind: "list",
        items: [
          "WhatsApp group with caregiver, supervisor and family from day one",
          "Daily evening summary, weekly vitals, monthly written review",
          "Bilingual care manager point-of-contact for international time zones",
          "On-call escalation 24×7 for the family, including international numbers",
          "Photo and video updates with the patient’s consent",
        ],
      },
    ],
  },

  /* 7. Comparison: home care vs old age home */
  {
    slug: "old-age-home-vs-home-care-bangalore",
    title:
      "Old age home or home care: an honest comparison for Bangalore families",
    dek:
      "Both are valid choices. Here’s how to think clearly about which fits your parent.",
    tldr:
      "In Bangalore, an old age home (₹25,000–60,000/month) suits independent, socially extroverted seniors who would thrive in a peer community. Home care (₹28,000–38,000/month for live-in) suits seniors rooted in their home, those with cognitive decline, and families who want to remain involved daily. Cost is rarely the deciding factor — fit, dignity and medical complexity are. Many families settle at a hybrid.",
    category: "For the Family",
    readMinutes: 7,
    publishedAt: "2026-04-30",
    author,
    tags: ["old age home", "home care", "comparison", "Bangalore"],
    hero:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "Old Age Home vs Home Care in Bangalore | Honest Comparison",
    seoDescription:
      "Old age home or care at home in Bangalore? Cost, dignity, medical needs, social life and family preferences compared honestly.",
    related: [
      "how-to-choose-a-caregiver-bangalore",
      "live-in-vs-day-caregiver",
      "nri-guide-parent-care-bangalore",
    ],
    sections: [
      {
        kind: "p",
        text: "There is a quiet conversation that many Bangalore families have — usually late at night, after a difficult day — about whether it might be time for an old age home. We are obviously a home care service, but we don’t think old age homes are wrong. Some are excellent, and some situations are better served by them. This is an honest comparison.",
      },
      { kind: "h2", text: "Where each option is at its best" },
      {
        kind: "p",
        text: "Old age homes work well when: your parent is reasonably independent, would benefit from a community of peers, is socially extroverted, and your home isn’t set up for them — multi-storey houses, no ground-floor bedroom, no easy bathroom access. They also work well when family logistics simply make home care impractical for years on end.",
      },
      {
        kind: "p",
        text: "Home care works well when: your parent is rooted in their home, doesn’t adapt easily to new environments, has cognitive decline that benefits from familiar surroundings, requires more medical attention than a typical home can provide, or when the family is present and wants to remain involved in daily care.",
      },
      { kind: "h2", text: "Cost — looked at honestly" },
      {
        kind: "p",
        text: "A reputable old age home in Bangalore charges ₹25,000–60,000 a month depending on tier and location, with assisted-living units at the higher end. A live-in caregiver at home costs ₹28,000–38,000 a month. So pure cost is rarely a deciding factor. What differs is what each cost includes — meals, housekeeping, social programs in a home; a one-on-one trained presence in your living room with home care.",
      },
      { kind: "h2", text: "Medical capability" },
      {
        kind: "p",
        text: "A good assisted-living facility has on-site nurses, physician visits, and emergency protocols. Home care can match medical capability with the right tier (patient care attendants, home nursing, doctor home visits) but it is not free — and the coordination is on you. For complex medical conditions in stable state, home care is usually equal in care and superior in comfort. For unstable medical situations, a facility may be safer.",
      },
      { kind: "h2", text: "Dignity and identity" },
      {
        kind: "p",
        text: "This is the part most cost calculations miss. Many parents derive a deep part of who they are from their home — the kitchen, the garden, the corner where they have always read the newspaper. Moving them out of it is sometimes the right decision, and sometimes a slow grief that nobody anticipated. If you can hear hesitation in your parent’s voice when this comes up, listen carefully.",
      },
      { kind: "h2", text: "Social life" },
      {
        kind: "p",
        text: "Older parents in city homes can be lonely. A good old age home can offer them genuine peer community — chess in the courtyard, group reading, shared meals — that a single home caregiver cannot replicate. If your parent is socially extroverted and isolated, a facility may add years of life. If they are introverted or memory-impaired, a facility’s social density can overwhelm rather than help.",
      },
      { kind: "h2", text: "What we’ve seen work" },
      {
        kind: "p",
        text: "Many families end up at a hybrid: home care for primary daily living, a senior community membership for social engagement two or three days a week. It’s the best of both, and it’s often cheaper than a full assisted-living tier.",
      },
      {
        kind: "callout",
        title: "Talking to your parent",
        text: "If you’re considering a transition, our care managers can offer a 20-minute conversation — no obligation. Sometimes a third voice helps the family find the right answer.",
        cta: { href: "/contact", label: "Talk to a care manager" },
      },
      {
        kind: "faq",
        items: [
          {
            q: "Is moving to an old age home reversible?",
            a: "Often yes. Most reputable facilities allow exit on a month’s notice. Some families try a 3-month trial, then return to home care if it isn’t the right fit.",
          },
          {
            q: "Can a home caregiver also drive my parent to community programs?",
            a: "Caregivers don’t drive, but can accompany. Coordinating transport adds about ₹500–800 a day.",
          },
          {
            q: "Does insurance cover either option?",
            a: "Most Indian health insurance covers neither home care nor old-age-home stays as standard, though some senior policies are starting to. Always read fine print.",
          },
        ],
      },
    ],
  },

  /* 8. Bedsores — clinical informational */
  {
    slug: "prevent-bedsores-at-home",
    title: "How to prevent bedsores in a bedridden parent at home",
    dek:
      "Bedsores are largely preventable. Here is the protocol families and caregivers should run.",
    tldr:
      "Prevent bedsores in a bedridden patient at home with four habits: reposition every 2–3 hours day and night, use an alternating-pressure air mattress, keep skin clean and dry, and maintain protein and hydration. Check heels, sacrum, hips, elbows and back of the head daily. Stage 1 redness usually resolves in 48 hours with offloading; any broken skin needs medical escalation immediately.",
    category: "Care Knowledge",
    readMinutes: 7,
    publishedAt: "2026-05-07",
    author,
    tags: ["bedsores", "pressure ulcers", "bedridden", "skin care"],
    hero:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80",
    seoTitle:
      "How to Prevent Bedsores at Home | Pressure Sore Care for Families",
    seoDescription:
      "A clear, family-friendly protocol for preventing bedsores in bedridden patients at home — repositioning, mattress, skin care, nutrition, what to watch for.",
    related: [
      "post-discharge-checklist-bangalore",
      "dementia-care-at-home-india",
      "live-in-vs-day-caregiver",
    ],
    sections: [
      {
        kind: "p",
        text: "Bedsores — pressure ulcers — are one of the most preventable problems in home care, and one of the most painful when they aren’t prevented. They begin where bone presses skin against mattress for too long, and they progress quickly without a steady protocol. The good news: with a few non-negotiable habits, most bedridden patients at home can avoid them entirely.",
      },
      { kind: "h2", text: "The four habits that prevent bedsores" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Reposition every 2–3 hours, day and night — side, back, side. Never longer than 3 hours in one position.",
          "Use an air mattress (alternating-pressure type). This is non-negotiable for any patient bedridden for more than 4–5 days.",
          "Keep skin clean and dry. Sponge bath daily, change linens promptly after any incontinence, dry thoroughly.",
          "Maintain protein and hydration. Skin healing depends on both — dehydrated, undernourished patients develop sores fastest.",
        ],
      },
      { kind: "h2", text: "The vulnerable points" },
      {
        kind: "p",
        text: "Pressure sores most often appear at heels, sacrum (lower back), hips, elbows, and the back of the head. Check these areas every time you reposition. Look for redness that doesn’t fade in 30 minutes, broken skin, or any small open wound. Photograph and date the spot — this is how you’ll know if it’s improving or worsening.",
      },
      { kind: "h2", text: "Repositioning, done well" },
      {
        kind: "p",
        text: "Two people make this safer than one. Use a draw sheet rather than pulling under the patient (friction itself damages skin). Place pillows: one between the knees on side-lying, one supporting the back, one cradling the heels off the mattress. Rotate the position log: 2 PM left side, 4 PM back, 6 PM right side, and so on.",
      },
      { kind: "h2", text: "Skin care basics" },
      {
        kind: "list",
        items: [
          "Sponge bath with mild, pH-balanced soap once daily",
          "Pat dry — never rub. Pay extra attention to skin folds and the perineal area",
          "Apply a barrier cream around the perineal area if incontinent",
          "Keep linens wrinkle-free and dry — wrinkles cause focal pressure",
          "Avoid rubber rings or donut cushions; they actually worsen pressure",
        ],
      },
      { kind: "h2", text: "Nutrition and hydration" },
      {
        kind: "p",
        text: "Bedridden patients need protein (eggs, dal, paneer, fish, chicken) and fluids — at least 1.5–2 litres a day unless restricted by the doctor. Underfed patients form sores within days; well-nourished ones tolerate the same conditions for weeks. If the patient isn’t eating well, a nutritionist consult is one of the best investments you can make.",
      },
      { kind: "h2", text: "What to watch and when to escalate" },
      {
        kind: "p",
        text: "Stage 1 sores — non-blanching redness — usually resolve with offloading and protocol tightening within 48 hours. If you see broken skin (Stage 2), open wound (Stage 3), or any sign of infection (foul smell, pus, fever, increased redness around a wound), call your doctor or our care manager immediately. The earlier the stage, the better the outcome.",
      },
      {
        kind: "callout",
        title: "Specialised bedridden care",
        text: "Our bedridden care attendants train 120+ hours including supervised pressure-area care rotations.",
        cta: { href: "/services/bedridden-care", label: "Bedridden care details" },
      },
      { kind: "h2", text: "What we do for families" },
      {
        kind: "p",
        text: "On day one, we run a pressure-area assessment and a home equipment review. We coach the family on the protocol, and the caregiver follows it under supervision. For complex cases, we coordinate a home-visit nurse for active dressings and a physiotherapist for range-of-motion exercises that also reduce pressure-area risk.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: PostCategory) {
  return posts.filter((p) => p.category === category);
}

export function getRecentPosts(limit = 6) {
  return [...posts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export const allCategories: PostCategory[] = [
  "For the Family",
  "At Home in Bangalore",
  "Care Knowledge",
  "NRI & Working Families",
];
