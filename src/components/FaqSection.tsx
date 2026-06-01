"use client"

import { useCallback, useState } from "react"
import { faqData } from "@/datas/faq-data"

function FaqIcon({ open }: { open: boolean }) {
  return (
    <div className="relative size-5 shrink-0">
      <svg
        className={`absolute inset-0 h-5 w-5 text-white transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 4v16"
        />
      </svg>
      <svg
        className="absolute inset-0 h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 12H4"
        />
      </svg>
    </div>
  )
}

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  isLast,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  isLast: boolean
  onToggle: () => void
}) {
  return (
    <div
      style={{
        borderBottom: isLast ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between pt-[20px] pb-[14px] text-left transition-opacity duration-200 hover:opacity-80 sm:py-[17px]"
      >
        <span
          className="max-w-[214px] pr-4 text-[20px] leading-[22px] tracking-[-0.8px] text-white sm:max-w-none"
          style={{ fontWeight: 500 }}
        >
          {question}
        </span>
        <FaqIcon open={isOpen} />
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition:
            "grid-template-rows 580ms cubic-bezier(0.24, 0.55, 0.1, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="max-w-160 pt-1.25 pb-5" style={{ opacity: 0.5 }}>
            <p
              className="text-[16px] leading-[1.3] text-white"
              style={{ fontWeight: 400 }}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }, [])

  return (
    <section id="faq" className="px-5 pb-[90px] sm:pb-[104px] lg:px-0">
      <div className="mx-auto flex max-w-[800px] flex-col items-center">
        <h2
          className="mb-[60px] text-center text-[28px] leading-[28px] tracking-[-0.28px] text-white sm:mb-[100px] sm:text-[30px]"
          style={{ fontWeight: 700 }}
        >
          {faqData.title}
        </h2>

        <div className="flex w-full flex-col gap-[35px]">
          {faqData.categories.map((category) => (
            <div key={category.id} className="flex flex-col gap-[10px]">
              <span
                className="text-[14px] leading-[22px] tracking-[-0.14px] text-[#A1A1A1]"
                style={{ fontWeight: 600 }}
              >
                {category.label}
              </span>
              <div>
                {category.items.map((item, index) => (
                  <FaqAccordionItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openId === item.id}
                    isLast={index === category.items.length - 1}
                    onToggle={() => toggle(item.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
