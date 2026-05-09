import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center py-20">
      <div className="container max-w-xl text-center">
        <div className="font-display text-7xl text-teal-700">404</div>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl text-ink-900">
          We couldn’t find that page.
        </h1>
        <p className="mt-3 lead">
          But we can find a caregiver for your family in under an hour. Let us help with
          that instead.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-lg btn-secondary">
            Back home
          </Link>
          <Link href="/book" className="btn-lg btn-primary">
            Book a caregiver <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
