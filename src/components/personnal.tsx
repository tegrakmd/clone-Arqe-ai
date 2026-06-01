import Image from "next/image"

export function PersonnalBoard() {
  return (
    <section
      id="personal_boards"
      className="overflow-hidden pb-[110px] sm:px-10 sm:pb-[184px] lg:px-[88px]"
    >
      <div className="mx-auto flex max-w-[1264px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-[139px]">
        <div className="order-2 mt-[-75px] flex w-full flex-col items-start gap-[20px] px-5 sm:mt-0 sm:px-0 lg:order-1 lg:w-[360px] lg:shrink-0">
          <div className="flex w-full flex-col gap-[5px]">
            <h2
              className="text-[30px] leading-[34px] tracking-[-0.4px] text-[#fafafa]"
              style={{ fontWeight: 600 }}
            >
              Personal boards
            </h2>
            <p
              className="max-w-[270px] text-[16px] leading-[1.2] text-[#a1a1a1] sm:max-w-none"
              style={{ fontWeight: 400 }}
            >
              <span>Curate your own image sets.</span>
              <span>
                <br />
                Organize ideas, campaigns, or
              </span>
              <span>
                <br />
                creative concepts with ease.
              </span>
            </p>
          </div>
          <a
            href="/signup"
            className="inline-block rounded-[8px] bg-[#fafafa] px-[24px] py-[14px] text-[14px] leading-[14px] font-medium tracking-[-0.28px] text-[#0a0a0a] transition-opacity duration-200 hover:opacity-80"
          >
            Create a board
          </a>
        </div>

        <div
          className="relative order-1 shrink-0 lg:order-2"
          style={{ width: "100%", maxWidth: 711, aspectRatio: "711 / 819" }}
        >
          <div
            className="absolute overflow-hidden will-change-transform"
            style={{
              left: "29.7%",
              top: "0%",
              width: "25.3%",
              height: "29.2%",
              opacity: 0.1,
              zIndex: 1,
              transform: "translateY(9.645px)",
            }}
          >
            <Image
              src="https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/personal_boards/boards-bg-top.webp"
              alt=" secondary background"
              fill
              sizes="(max-width: 711px) 25vw, 180px"
              className="object-cover"
              loading="eager"
              aria-hidden
            />
          </div>
          <div
            className="absolute overflow-hidden will-change-transform"
            style={{
              left: "0%",
              top: "24.4%",
              width: "44.2%",
              height: "50.7%",
              opacity: 1,
              zIndex: 2,
              transform: "translateY(16.8788px)",
            }}
          >
            <Image
              src="https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/personal_boards/boards-main.webp"
              alt="Personal boards preview"
              fill
              sizes="(max-width: 711px) 44vw, 314px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/20" />
            <div className="absolute right-4 bottom-4 flex flex-col gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#fafafa] shadow-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#fafafa] shadow-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="absolute overflow-hidden will-change-transform"
            style={{
              left: "67.4%",
              top: "21%",
              width: "32.6%",
              height: "37.6%",
              opacity: 0.3,
              zIndex: 1,
              transform: "translateY(7.23375px)",
            }}
          >
            <Image
              src="https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/personal_boards/boards-bg-right.webp"
              alt="secondary background"
              fill
              sizes="(max-width: 711px) 33vw, 232px"
              className="object-cover"
              aria-hidden
            />
          </div>
          <div
            className="absolute overflow-hidden will-change-transform"
            style={{
              left: "43.2%",
              top: "67.6%",
              width: "28.1%",
              height: "32.4%",
              opacity: 0.2,
              zIndex: 1,
              transform: "translateY(12.0563px)",
            }}
          >
            <Image
              src="https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/personal_boards/boards-bg-bottom.webp"
              alt="secondary background"
              fill
              sizes="(max-width: 711px) 28vw, 200px"
              className="object-cover"
              aria-hidden
            />
          </div>
          <div
            className="absolute z-10 overflow-hidden will-change-transform"
            style={{
              left: "27.7%",
              top: "35%",
              width: "30.9%",
              aspectRatio: "220 / 160",
              transform: "translateY(24.1125px)",
            }}
          >
            <Image
              src="https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/personal_boards/Popup.png"
              alt="Boards panel"
              fill
              sizes="(max-width: 711px) 31vw, 220px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
