import { Button } from "@/components/ui/button";

const inputClassName =
  "w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]";

export function InquiryForm() {
  return (
    <form className="space-y-4 rounded-[32px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_50px_rgba(31,24,20,0.06)]">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--color-charcoal)]">
          Your Name
        </label>
        <input id="name" name="name" className={inputClassName} placeholder="Enter your full name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--color-charcoal)]">
          Email Address
        </label>
        <input id="email" name="email" type="email" className={inputClassName} placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[var(--color-charcoal)]">
          Subject
        </label>
        <input id="subject" name="subject" className={inputClassName} placeholder="Admissions, campus visit, hostel, or general inquiry" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--color-charcoal)]">
          Message
        </label>
        <textarea id="message" name="message" rows={6} className={inputClassName} placeholder="Tell us how we can help." />
      </div>
      <Button type="submit">Send Inquiry</Button>
    </form>
  );
}
