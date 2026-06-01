import { SEARCH_VIDEO } from "@/datas/videos"
import { LazyVideo } from "./LazyVideo"

export function AdvancedSearch() {
  return (
    <>
      <section
        id="advanced_search"
        className="px-6 pb-[120px] sm:px-10 sm:pb-[184px] lg:px-[88px]"
      >
        <div className="mx-auto flex max-w-[1264px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-[116px]">
          <div className="w-full max-w-[618px] shrink-0">
            <div className="aspect-square overflow-hidden rounded-[20px]">
              <LazyVideo
                src={SEARCH_VIDEO}
                autoPlay
                loop
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[20px]">
            <div className="flex max-w-[360px] flex-col gap-[5px]">
              <h2
                className="text-[30px] leading-[34px] tracking-[-0.4px] text-[#fafafa]"
                style={{ fontWeight: 600 }}
              >
                Advanced search
              </h2>
              <p
                className="max-w-[280px] text-[16px] leading-[1.2] text-[#a1a1a1] sm:max-w-none"
                style={{ fontWeight: 400 }}
              >
                <span>Search by keyword, tag, or even color.</span>
                <span>
                  <br />
                  Designed for fast, visual discovery.
                </span>
              </p>
            </div>
            <a
              href="/signup"
              className="inline-block rounded-[8px] bg-[#fafafa] px-[24px] py-[14px] text-[14px] leading-[14px] font-medium tracking-[-0.28px] text-[#0a0a0a] transition-opacity duration-200 hover:opacity-80"
            >
              Try now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
