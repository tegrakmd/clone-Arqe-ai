"use client"

import type { FC } from "react"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { LogoIcon, HamburgerIcon, CloseIcon } from "@/constants/icons"

interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
}

const NavLink: FC<NavLinkProps> = ({ href, label, onClick }) => (
  <a
    href={href}
    className="text-[14px] font-medium text-[#fafafa] transition-opacity duration-200 hover:opacity-70"
    onClick={onClick}
  >
    {label}
  </a>
)

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      {/* Mobile Menu */}
      <div className="fixed top-0 right-0 left-0 z-50 px-5 pt-2 lg:hidden">
        <div
          className="overflow-hidden rounded-[10px] p-2.5 font-sans backdrop-blur-[15px]"
          style={{ backgroundColor: "rgba(23, 23, 23, 0.8)" }}
        >
          <div className="flex h-11 shrink-0 items-center justify-between pr-1 pl-[15px]">
            <a
              className="flex h-[22px] w-[51px] items-center justify-center"
              href="/"
              onClick={closeMenu}
              aria-label="ARQE Home"
            >
              <LogoIcon />
            </a>
            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-11 w-11 items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-in-out",
              isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="min-h-0 overflow-hidden">
              <nav
                className="flex flex-col gap-4 px-[15px] pt-5 pb-2.5"
                aria-hidden={!isMenuOpen}
                inert={!isMenuOpen}
              >
                <div className="flex flex-col gap-4 space-y-4">
                  <NavLink
                    href="#features"
                    label="Features"
                    onClick={closeMenu}
                  />
                  <NavLink
                    href="/pricing"
                    label="Pricing"
                    onClick={closeMenu}
                  />
                  <NavLink href="#faq" label="FAQs" onClick={closeMenu} />
                </div>

                <div className="h-px w-full bg-white/20" />

                <a
                  className="flex h-[42px] w-full items-center justify-center rounded-[8px] bg-[#fafafa] text-[14px] font-medium tracking-[-0.28px] text-[#0a0a0a] transition-opacity duration-200 hover:opacity-80"
                  href="/signup"
                  onClick={closeMenu}
                >
                  Sign Up
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 hidden px-4 transition-opacity duration-200 sm:px-6 lg:flex lg:justify-center lg:px-0"
        style={{ paddingTop: 40 }}
      >
        <div
          className="w-full max-w-[800px] items-center overflow-hidden rounded-[10px] p-[10px] backdrop-blur-[15px] lg:flex"
          style={{ backgroundColor: "rgba(23, 23, 23, 0.8)" }}
        >
          <div className="flex w-full items-center justify-between">
            {/* Left Links */}
            <div className="flex items-center gap-[15px] pl-[10px]">
              <NavLink href="#features" label="Features" />
              <NavLink href="/pricing" label="Pricing" />
              <NavLink href="#faq" label="FAQs" />
            </div>

            {/* Center Logo */}
            <a
              className="absolute left-1/2 -translate-x-1/2"
              href="/"
              aria-label="ARQE Home"
            >
              <LogoIcon />
            </a>

            {/* Right Buttons */}
            <div className="flex items-center gap-[8px]">
              <a
                className="flex items-center justify-center rounded-[8px] px-[24px] py-[14px] font-[600] text-[#fafafa] transition-opacity duration-200 hover:opacity-70"
                href="/login"
              >
                Log in
              </a>
              <a
                className="flex items-center justify-center rounded-[8px] bg-[#fafafa] px-[20px] py-[10px] font-medium text-[#0a0a0a] transition-opacity duration-200 hover:opacity-80"
                href="/signup"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
