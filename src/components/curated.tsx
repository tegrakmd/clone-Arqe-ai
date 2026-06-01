import { COLLECTIONS_VIDEO } from "@/datas/videos"
import { LazyVideo } from "./LazyVideo"

export function CuratedSection() {
  return (
    <>
      {" "}
      <section
        id="curated_collections"
        className="px-5 pb-[90px] sm:px-10 sm:pb-[138px] lg:px-[88px]"
      >
        <div className="mx-auto flex max-w-[1264px] flex-col items-start gap-5 sm:gap-10 lg:flex-row lg:items-center lg:gap-[116px]">
          <div className="w-full max-w-[618px] flex-shrink-0">
            <div className="aspect-[4/3] overflow-hidden rounded-[20px] sm:aspect-square">
              <LazyVideo
                src={COLLECTIONS_VIDEO}
                autoPlay
                loop
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex max-w-[360px] flex-col items-start gap-5">
            <div className="flex flex-col gap-[5px]">
              <h2
                className="text-[30px] leading-[34px] tracking-[-0.4px] text-[#fafafa]"
                style={{ fontWeight: 600 }}
              >
                Curated collections
              </h2>
              <p
                className="max-w-[280px] text-[16px] leading-[1.2] text-[#a1a1a1] sm:max-w-none"
                style={{ fontWeight: 400 }}
              >
                <span>Themed sets handpicked by the Arqé</span>
                <span>
                  <br />
                  team. Made to inspire and streamline
                </span>
                <span>
                  <br />
                  your process.
                </span>
              </p>
            </div>
            <a
              href="/signup"
              className="inline-block rounded-[8px] bg-[#fafafa] px-[24px] py-[14px] text-[14px] leading-[14px] font-medium tracking-[-0.28px] text-[#0a0a0a] transition-opacity duration-200 hover:opacity-80"
            >
              Explore now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
