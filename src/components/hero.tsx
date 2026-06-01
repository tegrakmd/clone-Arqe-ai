"use client"
import { LazyVideo } from "./LazyVideo"
import { Button } from "./ui/button"
import { HERO_VIDEO } from "@/datas/videos"

export function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="mx-auto px-6 pt-29.5 pb-22.5 sm:pt-47 sm:pb-25"
      >
        <div className="flex flex-col-reverse items-center gap-12.5 sm:flex-col sm:gap-15">
          <div className="mx-auto flex max-w-90 flex-col items-center gap-3.75">
            <h1
              className="max-w-65 text-center text-[40px] leading-8.5 tracking-[-0.1rem] text-foreground sm:max-w-none sm:text-[60px] sm:leading-[0.85]"
              style={{ fontWeight: 600 }}
            >
              <span>Art directed stock library</span>
            </h1>
            <p
              className="max-w-73.5 text-center text-[16px] leading-[1.2] text-muted-foreground"
              style={{ fontWeight: 400 }}
            >
              Browse &amp; download curated AI visuals — royalty free, 4K,
              created with intent.
            </p>
            <div className="mt-[15px]">
              <a
                href="/signup"
                className="inline-block rounded-[8px] bg-[#fafafa] px-[24px] py-[14px] text-[14px] leading-[14px] font-medium tracking-[-0.28px] text-[#0a0a0a] transition-opacity duration-200 hover:opacity-80"
              >
                Get started
              </a>
            </div>
            {/* <Button className="mt-3.75 rounded-[8px]">Get started</Button> */}
          </div>

          <div className="mx-auto w-full max-w-230.5">
            <div className="overflow-hidden rounded-lg border-2 border-[#0000] ring-1 ring-muted-foreground/20">
              <LazyVideo
                src={HERO_VIDEO}
                priority
                autoPlay
                loop
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
