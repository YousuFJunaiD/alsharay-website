"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { mainNavigation, utilityLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setExpandedItem(null);
  }, [pathname]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label="Open mobile navigation"
        onClick={() => setOpen(true)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/80 text-[var(--color-maroon)] shadow-[var(--shadow-soft)]"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[120] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Close mobile navigation"
              className="absolute inset-0 h-full w-full bg-[rgba(16,10,10,0.62)] backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-dvh w-[90vw] max-w-sm overflow-y-auto border-l border-[rgba(195,154,61,0.24)] bg-[linear-gradient(180deg,#fffdf9_0%,#f8eedf_100%)] px-5 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))] shadow-[0_24px_80px_rgba(18,10,10,0.22)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            >
              <div className="sticky top-0 z-10 -mx-5 -mt-[max(1.25rem,env(safe-area-inset-top))] mb-6 border-b border-[rgba(195,154,61,0.16)] bg-[linear-gradient(180deg,rgba(255,253,249,0.96)_0%,rgba(248,238,223,0.96)_100%)] px-5 pb-4 pt-[max(1.25rem,env(safe-area-inset-top))] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-2xl text-[var(--color-maroon)]">
                    {siteConfig.shortName}
                  </p>
                  <p className="mt-1 font-script text-lg text-[var(--color-gold)]">
                    {siteConfig.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close mobile navigation"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/80"
                >
                  <X className="h-5 w-5" />
                </button>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Menu
                </p>
              </div>

              <div className="space-y-3">
                {mainNavigation.map((item) => (
                  <div
                    key={item.href}
                    className="rounded-[28px] border border-[var(--color-border)] bg-white/90 p-4 shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!item.children) {
                            setOpen(false);
                          }
                        }}
                        className={cn(
                          "block flex-1 text-sm font-semibold uppercase tracking-[0.16em]",
                          pathname.startsWith(item.href)
                            ? "text-[var(--color-maroon)]"
                            : "text-[var(--color-charcoal)]"
                        )}
                      >
                        {item.title}
                      </Link>
                      {item.children ? (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.title} submenu`}
                          onClick={() =>
                            setExpandedItem((current) =>
                              current === item.href ? null : item.href
                            )
                          }
                          className="rounded-full bg-[rgba(195,154,61,0.12)] p-2 text-[var(--color-maroon)] transition hover:bg-[rgba(195,154,61,0.2)]"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      ) : null}
                    </div>
                    {item.children && expandedItem === item.href ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 space-y-2 border-t border-[var(--color-border)] pt-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-2xl px-2 py-2 text-sm text-[var(--color-muted)] transition hover:bg-[rgba(195,154,61,0.08)] hover:text-[var(--color-maroon)]"
                          >
                            {child.title}
                          </Link>
                        ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Quick Institutional Links
                </p>
                <div className="flex flex-wrap gap-3">
                  {utilityLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-[var(--color-border-strong)] bg-white/70 px-4 py-2 text-sm text-[var(--color-charcoal)]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,var(--color-maroon-strong)_0%,var(--color-maroon)_100%)] px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white"
                >
                  Admission Enquiry
                </Link>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  Main Branch: {siteConfig.location}. Contact the admissions desk for application support, hostel details, and campus guidance.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
