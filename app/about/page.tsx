import type { Metadata } from "next";
import Link from "next/link";
import {
  advisoryBoard,
  buildMetadata,
  leadership,
  site,
  type TeamMember,
} from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { FinalCta } from "@/components/FinalCta";
import { Stats } from "@/components/Stats";
import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  HeartHandIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "About Care Givers — Built by Families, for Families in Bangalore",
  description:
    "Care Givers is a Bangalore-based home caregiving service founded in 2021. Our story, our promises, our team, and the families we serve. Read what we stand for.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="container pt-16 sm:pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="chip">Our story</span>
            <h1 className="mt-5 font-display text-[44px] sm:text-[58px] md:text-[72px] leading-[1.02] tracking-[-0.02em] text-ink-900">
              We were tired families first.
              <br />
              <span className="text-teal-700">
                Then we built what we needed.
              </span>
            </h1>
            <p className="mt-7 text-[18px] sm:text-[19px] leading-[1.7] text-ink-700 max-w-2xl">
              Care Givers exists because finding good home care in Bangalore should not
              be the hardest part of an already hard week. So we made it easier — for our
              own families, and then for yours.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Origin story ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-teal-500" /> How this began
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
            One paralysed mother-in-law. Six weeks of phone calls.
          </h2>

          <div className="mt-7 space-y-5 text-[17.5px] leading-[1.78] text-ink-800">
            <p>
              This started in 2021. Priyanka's mother-in-law had been paralysed by a
              sudden stroke — bedridden, unable to move her left side, dependent on
              others for every basic act of the day. The family was scrambling. They
              needed a trained caregiver who actually knew how to look after a
              bedridden patient: someone who could reposition Amma every two hours
              through the night to prevent bedsores, manage a catheter, help with
              feeding, watch for the small changes that would matter.
            </p>
            <p>
              Priyanka spent six weeks calling agencies. The ones who picked up either
              had no trained bedridden-care specialists available, or pressured her to
              sign year-long contracts before she'd even met the caregiver. The first
              attendant they did hire arrived two days late, had never been trained on
              pressure-area care, and quit after three weeks. Amma developed her first
              bedsore in that window. Priyanka quit her job to look after Amma
              herself.
            </p>
            <p>
              Six months in — and exhausted — she realised something obvious. The
              problem wasn't a shortage of caregivers in Bangalore; there were
              thousands. The problem was the missing layer between caregivers and
              families: rigorous training, careful matching, ongoing supervision.
              Nobody was investing in the trained-care side of the equation.
              Bedridden patients deserved specialists. Dementia patients deserved
              specialists. Post-surgery families deserved someone who'd been through
              80 hours of supervised hospital exposure before stepping into their home.
            </p>
            <p>
              So she built it. Care Givers started as a network of 12 verified,
              trained caregivers operating out of a one-room office in Indiranagar.
              Every one of them completed a structured 60-hour training programme
              before their first placement — and a 120-hour specialist track for
              dementia and bedridden care. Today we serve more than 1,200 Bangalore
              families with the same operating philosophy: train deeply, match
              carefully, supervise continuously, charge fairly, never pressure.
              Priyanka still runs the company.
            </p>
          </div>
        </div>
      </section>

      {/* ───── A letter from the founder ───── */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container max-w-3xl">
          <div className="rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft p-8 sm:p-12">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> A note from our founder
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
              If you're reading this, you're probably tired.
            </h2>

            <div className="mt-7 space-y-5 text-[17px] leading-[1.78] text-ink-800">
              <p>
                I know because I was tired too, when I started looking for help with my
                mother-in-law. Amma had been paralysed by a stroke — bedridden,
                completely dependent — and the search for a <em>trained</em> caregiver
                who actually knew how to look after her took six weeks of phone calls,
                hospital referrals and dead ends. Six weeks our family couldn't
                really afford. The kind of tired where you stop saying it aloud
                because nobody in your house has the energy to absorb it back.
              </p>
              <p>
                If you've spent any time looking at home care in Bangalore, you've
                probably been let down at least once. By an agency that promised and
                then disappeared. By a caregiver who arrived late, untrained for the
                specific situation, or worse. By the quiet despair of realising that
                the people available are not the people you imagined would look after
                the person you love.
              </p>
              <p>
                We built Care Givers as the opposite of that experience. We invest in
                training before placement — 60 to 120 hours, depending on what the
                case demands. Bedridden care is not the same as dementia care, which
                is not the same as post-surgery recovery, and we won't pretend
                otherwise. We screen for temperament as carefully as we screen for
                skills. We match by language, gender, household culture, and the
                patient's specific situation. We are slow where slow matters and fast
                where fast matters.
              </p>
              <p>
                I think a lot about the people we send into homes. They are doing the
                work that most of us, if we're honest, would not want to do every
                day. We pay them properly, we train them properly, we visit them
                during their placements, we pick up the phone when they call us. The
                quality of care a family receives is downstream of how well we treat
                the people doing the caring. It always is.
              </p>
              <p>
                Whatever brought you to this page — a parent who's slipped, a partner
                in recovery, a long quiet decline you've been holding alone, a
                mother-in-law you're trying to look after with whatever energy you
                have left — I'm glad you're here. You don't have to do this alone
                any longer.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-ink-100">
              <div className="flex items-center gap-4">
                <Avatar initials="PI" />
                <div>
                  <div className="font-display text-xl text-ink-900">Priyanka Iyer</div>
                  <div className="text-[13px] text-ink-500">
                    Founder & CEO, Care Givers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* ───── Our promises ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> What we promise
            </span>
            <h2 className="mt-3 section-title">
              Six promises we make to every family.
            </h2>
            <p className="mt-4 lead">
              We will keep these or we will tell you, in writing, why we couldn't —
              and what we're doing to make it right.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Verification, without exception",
                body: "Every caregiver completes Aadhaar verification, address verification, two reference checks, an in-person interview and a police background check before their first placement. No exceptions, even for urgent cases.",
              },
              {
                title: "60+ hours of paid training",
                body: "No caregiver enters your home without completing our training programme. For specialised cases — dementia, bedridden, post-surgery — it's 80 to 120 hours. We pay them through the training.",
              },
              {
                title: "Supervisor visits, in person",
                body: "A trained supervisor visits the placement every two weeks. They sit with the patient, read the care log, observe the room, talk to the family. This is the quality system that text messages cannot replace.",
              },
              {
                title: "Replacement in 24 hours",
                body: "If the fit isn't right — for any reason, including reasons that are hard to articulate — we replace the caregiver within 24 hours. The replacement is free. We'd rather find the right match than leave you anxious.",
              },
              {
                title: "Pricing in writing, upfront",
                body: "What you see on our pricing page is what you pay. Any change to the plan is confirmed in writing before it takes effect. No callbacks, no escalating quotes, no surprise add-ons.",
              },
              {
                title: "Real humans, day and night",
                body: "Our care manager line is staffed 24×7 by trained operations staff, not a chatbot, not a recorded menu. The phone rings; someone picks up.",
              },
            ].map((p, i) => (
              <li
                key={p.title}
                className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6 sm:p-7"
              >
                <div className="font-display text-3xl text-teal-700 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-[20px] leading-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-ink-600 leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── What we won't do ───── */}
      <section className="py-14 sm:py-20 bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-teal-700/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-sage-500/20 blur-3xl" />

        <div className="container relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
              <span className="h-px w-6 bg-sage-300" /> What we will never do
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Anti-promises. The hard list.
            </h2>
            <p className="mt-4 text-cream-100/85 max-w-xl">
              Promises are easy. Anti-promises are what tell you who someone really
              is. These are ours.
            </p>
          </div>

          <ul className="mt-12 grid gap-3 md:grid-cols-2">
            {[
              "We will never charge a caregiver to be on our roster.",
              "We will never use physical or chemical restraints on a patient.",
              "We will never pressure a family to upgrade beyond what they need.",
              "We will never ask for advance payments before a caregiver is placed.",
              "We will never publish a fake review or buy a Google rating.",
              "We will never ghost an applicant or a family — every message gets a reply.",
              "We will never put a caregiver into a home we wouldn't accept for our own parents.",
              "We will never share patient or family details with anyone outside the assigned care team.",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur p-5"
              >
                <span className="shrink-0 mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-white/10 text-cream-100">
                  <CloseIcon size={14} />
                </span>
                <span className="text-[15px] leading-relaxed text-cream-100/95">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Three families ───── */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Three families
            </span>
            <h2 className="mt-3 section-title">
              The work, in stories.
            </h2>
            <p className="mt-4 lead">
              Quotes are useful. Stories are truer. With each family's permission,
              three short ones.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <FamilyStory
              eyebrow="Indiranagar · Elder care"
              title="The morning Amma asked for Lakshmi by name."
              body="When we first hired Lakshmi, we were nervous about a stranger spending the day with my mother. Amma had always been independent — the idea of someone bathing her, helping her dress, felt like a violation she might not survive. Three weeks in, on Lakshmi's off day, my mother turned to me at breakfast and said, 'When is she coming?' That's when I knew."
              by="Anjali R., daughter"
            />
            <FamilyStory
              eyebrow="Whitefield · NRI family"
              title="From Singapore, my father's worst night went quietly."
              body="Appa woke at 2 AM with severe chest pain. By the time my brother got the call from Singapore, the night caregiver had already done three things: vitals, the family doctor, the ambulance to Manipal. By the time I landed the next afternoon, Appa was stable and the discharge nurse said the night caregiver had probably saved his life. I had been twelve hours away. The work was already done."
              by="Karthik V., son · NRI"
            />
            <FamilyStory
              eyebrow="HSR · Post-surgery"
              title="Three weeks of bedsores, gone in eight days."
              body="We had a different agency before. Three weeks bedridden, my mother-in-law had two bedsores that wouldn't heal. When we switched to Care Givers, the new caregiver started repositioning every two hours from the first night, brought an air mattress within twenty-four hours, and the senior wounds were healing in eight days. The new caregiver also taught my husband how to do the repositioning correctly. We hadn't realised we'd been doing it wrong."
              by="Sunita M., daughter-in-law"
            />
          </div>
        </div>
      </section>

      {/* ───── Stories from caregivers ───── */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> The people we send
            </span>
            <h2 className="mt-3 section-title">
              They have names. Here are two of them.
            </h2>
            <p className="mt-4 lead">
              The caregivers you'll meet are not strangers to us. We've sat with them
              through training, through their first hard placement, through the
              decision to stay in this work. A small part of their story.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <CaregiverStory
              name="Lakshmi"
              role="Senior Elder Care Attendant · 9 years"
              body="Lakshmi came to us in 2022 from a hospital attendant job at a smaller Bangalore hospital. She had no formal training but had cared for her own grandmother through advanced dementia for four years. We trained her through our 60-hour programme — and she pushed back, gently, when our training contradicted what she'd actually learned in those four years. We updated our curriculum. She now mentors new elder-care joiners on dementia communication. Her families ask for her by name."
            />
            <CaregiverStory
              name="Raju"
              role="Patient Care Attendant · 6 years"
              body="Raju started his career as a hospital ward boy at one of Bangalore's biggest tertiary care hospitals. He saw enough discharges go wrong — patients sent home with no plan, families overwhelmed, readmissions — that when he heard about Care Givers, he wanted in. He completed our 80-hour patient care attendant programme in 2024. He now specialises in post-cardiac and post-orthopedic recovery, and he says the first 72 hours at home are when he feels most useful in his career."
            />
          </div>
        </div>
      </section>

      {/* ───── How care actually works (our method) ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Our method
            </span>
            <h2 className="mt-3 section-title">
              How care actually works at Care Givers.
            </h2>
            <p className="mt-4 lead">
              The system we built so that good care isn't a lucky accident.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Hire slow",
                body: "We turn down about six in ten caregiver applicants. The interview asks about temperament more than skills — patience can't be taught in 60 hours; skills can.",
              },
              {
                n: "02",
                title: "Train deep",
                body: "60 to 120 hours of paid in-class and supervised practice before the first placement. Quarterly refreshers, always. Speciality bridge programmes (dementia, bedridden) for those who want them.",
              },
              {
                n: "03",
                title: "Match carefully",
                body: "Every placement is decided by a human, not an algorithm. Language, gender, household culture, patient's pace of life — all read before assignment. We say no to placements that feel like a stretch.",
              },
              {
                n: "04",
                title: "Supervise continuously",
                body: "Daily care log review. Bi-weekly home visits by a trained supervisor. Quarterly clinical training updates. A 24×7 care manager who picks up the phone, real human.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6 sm:p-7"
              >
                <div className="font-display text-3xl text-teal-700 tabular-nums">
                  {s.n}
                </div>
                <h3 className="mt-2 font-display text-xl text-ink-900">{s.title}</h3>
                <p className="mt-2 text-[14px] text-ink-600 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Numbers that mean something ───── */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Numbers we watch
            </span>
            <h2 className="mt-3 section-title">
              Eight numbers that tell the truth.
            </h2>
            <p className="mt-4 lead">
              Stars and review counts are the noise. These are what we actually
              optimise for.
            </p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "1,200+", label: "Bangalore families served since 2021" },
              { value: "6 hrs", label: "Median time from booking to caregiver at the door" },
              { value: "60–120 hrs", label: "Paid training before any caregiver's first placement" },
              { value: "94%", label: "Caregiver retention at six months" },
              { value: "4.9 / 5", label: "Average family rating across all completed placements" },
              { value: "<24 hrs", label: "Replacement caregiver placement if the fit isn't right" },
              { value: "7", label: "Languages we routinely match for (Kn, Ta, Te, Ml, Hi, En, Bn)" },
              { value: "24×7", label: "Care manager phone line, staffed by real humans" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-5"
              >
                <dt className="font-display text-3xl sm:text-4xl text-ink-900 tabular-nums">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[13px] text-ink-600 leading-relaxed">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───── The team ───── */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Who runs this
            </span>
            <h2 className="mt-3 section-title">
              The team behind the team.
            </h2>
            <p className="mt-4 lead">
              The four of us who hold this work together. Together, 50+ years across
              healthcare, operations and lived caregiving experience.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Advisory board ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Medical advisory board
            </span>
            <h2 className="mt-3 section-title">
              The doctors who review what we say.
            </h2>
            <p className="mt-4 lead">
              We are not a hospital and we don't pretend to be. But every clinical
              claim on this site is reviewed by a practising clinician, and we
              consult our advisory board before any change to our care protocols.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-3">
            {advisoryBoard.map((m) => (
              <li
                key={m.name}
                className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6"
              >
                <div className="flex items-center gap-4">
                  <Avatar initials={m.initials} />
                  <div>
                    <div className="font-display text-[18px] text-ink-900 leading-tight">
                      {m.name}
                    </div>
                    <div className="text-[12.5px] text-teal-700 font-medium">
                      {m.role}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[14px] text-ink-600 leading-relaxed">{m.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Looking ahead ───── */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-4xl">
          <div className="rounded-[32px] bg-gradient-to-br from-sage-100 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-8 sm:p-12">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Looking ahead
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
              What we're working on next.
            </h2>

            <ul className="mt-8 space-y-5 text-[16px] text-ink-700 leading-relaxed">
              <li className="flex items-start gap-4">
                <span className="shrink-0 mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-teal-700 text-white font-display text-xs">
                  1
                </span>
                <div>
                  <strong className="text-ink-900">A Family Portal.</strong> A
                  secured dashboard where the family — including the son in
                  Singapore — can see today's vitals, today's photos, today's notes
                  from the caregiver. By the end of this year.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-teal-700 text-white font-display text-xs">
                  2
                </span>
                <div>
                  <strong className="text-ink-900">An annual Bangalore
                  Caregiving Index.</strong> 500 anonymised family interviews on
                  what they actually paid, found, regretted, and recommend.
                  Published openly, every March.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-teal-700 text-white font-display text-xs">
                  3
                </span>
                <div>
                  <strong className="text-ink-900">Vernacular versions of
                  everything.</strong> Our service pages, journal, and tools in
                  Kannada and Tamil first. Caregiving conversations should not
                  require English.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-teal-700 text-white font-display text-xs">
                  4
                </span>
                <div>
                  <strong className="text-ink-900">A free family caregiver
                  support group.</strong> Once a month, in person at our
                  Indiranagar office. For the daughters, sons and spouses doing
                  the work themselves. With a clinical psychologist.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───── How to verify everything we've said ───── */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-teal-500" /> Verify us
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
            Don't take our word. Here's how to check.
          </h2>
          <p className="mt-5 text-[16px] text-ink-700 leading-relaxed">
            Anyone running an honest business should be able to be checked. These are
            the places to look. If you find anything inconsistent with what's on this
            page, tell us — we'll fix the page, not the truth.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Verified caregiver credentials",
                body: "Ask to see the placement caregiver's training certificate and police verification — we carry hard copies to every placement.",
              },
              {
                icon: StarIcon,
                title: "Google reviews",
                body: "Search ‘Care Givers Bangalore’ on Google. Every review is from a real placement, never bought.",
              },
              {
                icon: HeartHandIcon,
                title: "Reference families",
                body: "Ask us to connect you with one of our existing families. With their consent, we'll arrange a 10-minute call.",
              },
              {
                icon: SparklesIcon,
                title: "The pricing page",
                body: "Compare our pricing with the quote we give you. They should match within a small range. If they don't, we owe you an explanation.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl bg-white ring-1 ring-ink-100 p-5"
              >
                <span className="shrink-0 grid h-10 w-10 place-items-center rounded-full bg-sage-100 text-sage-700">
                  <Icon size={18} />
                </span>
                <div>
                  <div className="font-display text-[18px] text-ink-900">{title}</div>
                  <p className="mt-1 text-[14.5px] text-ink-600 leading-relaxed">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Contact / final ───── */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-3xl">
          <div className="rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft p-8 sm:p-12 text-center">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
              If something here resonated, talk to us.
            </h2>
            <p className="mt-4 text-[15.5px] text-ink-700 max-w-xl mx-auto">
              No questionnaire. No fee. Just a 10-minute call with someone who has
              spent the last few years helping families like yours.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={site.whatsappHref} className="btn-lg btn-primary">
                <WhatsAppIcon size={16} /> WhatsApp us
              </a>
              <a href={site.phoneHref} className="btn-lg btn-secondary">
                <PhoneIcon size={16} /> {site.phone}
              </a>
              <Link href="/book" className="btn-lg btn-ghost">
                Or start a booking <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

/* ─── Small page-local components ──────────────────────── */

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-teal-700 text-white font-display text-[15px] tracking-tight">
      {initials}
    </span>
  );
}

function FamilyStory({
  eyebrow,
  title,
  body,
  by,
}: {
  eyebrow: string;
  title: string;
  body: string;
  by: string;
}) {
  return (
    <article className="rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft p-7 sm:p-8 flex flex-col">
      <div className="flex items-center gap-1 text-amber-500">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} size={13} className="fill-current" />
        ))}
      </div>
      <div className="mt-3 text-[11.5px] uppercase tracking-[0.16em] text-teal-700 font-semibold">
        {eyebrow}
      </div>
      <h3 className="mt-2 font-display text-[22px] leading-[1.2] tracking-tight text-ink-900">
        {title}
      </h3>
      <p className="mt-4 text-[14.5px] text-ink-700 leading-[1.7]">
        “{body}”
      </p>
      <div className="mt-6 pt-5 border-t border-ink-100 text-[13px] text-ink-500">
        — {by}
      </div>
    </article>
  );
}

function CaregiverStory({
  name,
  role,
  body,
}: {
  name: string;
  role: string;
  body: string;
}) {
  return (
    <article className="rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft p-7 sm:p-8">
      <div className="flex items-center gap-4">
        <Avatar initials={name.slice(0, 2).toUpperCase()} />
        <div>
          <div className="font-display text-xl text-ink-900">{name}</div>
          <div className="text-[12.5px] text-teal-700 font-medium">{role}</div>
        </div>
      </div>
      <p className="mt-5 text-[15px] text-ink-700 leading-[1.75]">{body}</p>
    </article>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <li className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 flex flex-col">
      <div className="flex items-center gap-3">
        <Avatar initials={member.initials} />
        <div>
          <div className="font-display text-[17px] text-ink-900 leading-tight">
            {member.name}
          </div>
          <div className="text-[12px] text-teal-700 font-medium">{member.role}</div>
        </div>
      </div>
      <p className="mt-4 text-[13.5px] text-ink-600 leading-relaxed">{member.bio}</p>
      {member.quote && (
        <blockquote className="mt-4 pt-4 border-t border-ink-100 text-[13.5px] text-ink-700 italic leading-relaxed">
          “{member.quote}”
        </blockquote>
      )}
    </li>
  );
}
