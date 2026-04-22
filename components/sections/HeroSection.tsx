"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { heroContent, heroSlides } from "@/data/home";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[linear-gradient(180deg,#fff9ef_0%,#f3e5d2_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(195,154,61,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(91,16,24,0.16),transparent_28%)]" />
      <SectionContainer className="relative py-12 sm:py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <div className="flex flex-col justify-center rounded-[38px] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,252,247,0.96)_0%,rgba(248,237,222,0.96)_100%)] p-8 shadow-[var(--shadow-card)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
              {heroContent.eyebrow}
            </p>
            <h1 className="gold-divider mt-5 max-w-4xl font-serif text-4xl leading-tight text-[var(--color-charcoal)] sm:text-5xl xl:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {heroContent.description}
            </p>
            <p className="mt-4 font-script text-2xl text-[var(--color-maroon)]">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {heroContent.heritageNote}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
              <Button href={heroContent.secondaryCta.href} variant="secondary">
                {heroContent.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroContent.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[24px] border border-[var(--color-border)] bg-white/70 p-4"
                >
                  <p className="font-serif text-3xl text-[var(--color-maroon)]">{metric.value}</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-[var(--color-border-strong)] bg-[var(--color-charcoal)] shadow-[0_30px_90px_rgba(63,10,17,0.24)]">
            <div className="relative min-h-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.image}
                  initial={{ opacity: 0.15, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.15, scale: 1.01 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,10,0.16)_0%,rgba(18,12,10,0.28)_24%,rgba(18,12,10,0.75)_100%)]" />

              <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                <div className="rounded-full border border-[rgba(255,244,228,0.18)] bg-[rgba(91,16,24,0.72)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white">
                  Real Al Sharay Imagery
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous hero image"
                    onClick={showPrevious}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,244,228,0.22)] bg-[rgba(255,255,255,0.12)] text-white transition hover:bg-[rgba(255,255,255,0.18)]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next hero image"
                    onClick={showNext}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,244,228,0.22)] bg-[rgba(255,255,255,0.12)] text-white transition hover:bg-[rgba(255,255,255,0.18)]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="rounded-[28px] border border-[rgba(255,244,228,0.14)] bg-[rgba(24,18,16,0.72)] p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold-soft)]">
                    Heritage Visual
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(255,247,232,0.86)]">
                    {activeSlide.caption}
                  </p>
                  <div className="mt-4 flex gap-2">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.image}
                        type="button"
                        aria-label={`Show hero image ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition ${
                          index === activeIndex
                            ? "w-10 bg-[var(--color-gold-soft)]"
                            : "w-5 bg-white/35 hover:bg-white/55"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
