import { LazyVideo } from "@/components/LazyVideo"
import { CTA_VIDEO } from "@/datas/videos"
import Link from "next/link";

export function Cta() {
  return (
    <section id="video" className="px-5  pb-0 sm:px-6 lg:px-10">
      <div className="relative aspect-[2.3/1] min-h-[600] w-full overflow-hidden rounded-[14px]">
        <div className="absolute inset-0">
          <LazyVideo
            src={CTA_VIDEO}
            autoPlay
            loop
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
          />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
          <div
            className="flex flex-col items-center gap-[25px]"
            style={{ maxWidth: 262 }}
          >
            <div className="flex flex-col items-center gap-[10px]">
              <p
                className="text-center text-[15px] leading-[18px] tracking-[-0.15px] whitespace-nowrap text-white"
                style={{
                  fontWeight: 600,
                  opacity: 0.4,
                }}
              >
                Welcome to Arqé
              </p>
              <h2
                className="text-center text-[35px] leading-none tracking-[-0.35px] text-white"
                style={{ fontWeight: 600 }}
              >
                <span>The library for what&apos;s next.</span>
              </h2>
            </div>
            <Link
              href="/signup"
              className="inline-block rounded-[8px] bg-white/10 text-center text-[14px] leading-[14px] tracking-[-0.28px] text-white backdrop-blur-[20px] transition-all duration-200 hover:bg-white hover:text-[#0a0a0a]"
              style={{
                fontWeight: 600,
                padding: "14px 24px",
              }}
            >
              Get started from $29/mo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
