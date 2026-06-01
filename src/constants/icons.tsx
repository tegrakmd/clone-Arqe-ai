/**
 * @module constants/icons
 * SVG icon components as constants
 */

import type { FC, SVGProps } from "react"

export type IconProps = SVGProps<SVGSVGElement>
export type IconComponent = FC<IconProps>

// ─────────────────────── Logo Icon ──────────────────────
export const LogoIcon: IconComponent = (props) => (
  <svg
    className="h-[22px] w-[51px] text-[#fafafa]"
    viewBox="0 0 599 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M76.6229 0H114.654L191.85 205.752H152.399L136.217 160.06H52.7924L36.8974 205.752H0L76.6229 0ZM63.2816 129.976H125.43L94.2124 41.7184L63.2816 129.976Z"
      fill="currentColor"
    />
    <path
      d="M288.616 53.3532V87.4105C282.947 86.8496 277.554 86.5632 272.446 86.5632C251.158 86.5632 238.95 95.0716 238.95 125.728V205.764H205.179V53.0788H238.389V80.3222C246.611 63.2935 261.372 53.0788 279.821 52.7924C282.375 52.7924 286.062 53.0788 288.616 53.3532Z"
      fill="currentColor"
    />
    <path
      d="M401.277 53.0668H435.048V255.418H401.277V185.609C392.196 200.644 376.301 209.451 355.871 209.451C318.413 209.451 290.31 178.52 290.31 129.415C290.31 80.3103 318.401 49.6659 355.871 49.6659C376.301 49.6659 392.196 58.4606 401.277 73.5084V53.0668ZM363.258 77.1957C339.415 77.1957 325.513 96.778 325.513 129.415C325.513 162.052 339.415 181.921 363.258 181.921C385.107 181.921 402.709 164.606 402.709 129.415C402.709 94.2243 385.107 77.1957 363.258 77.1957Z"
      fill="currentColor"
    />
    <path
      d="M484.368 139.057C486.635 167.434 506.504 181.348 525.799 181.348C543.675 181.348 557.303 174.535 563.258 160.06H596.468C589.654 184.463 566.384 209.439 527.22 209.439C478.126 209.439 450.024 172.255 450.024 128.27C450.024 84.284 481.814 49.6539 524.952 49.6539C571.778 49.6539 601.301 87.9713 598.174 139.045H484.368V139.057ZM484.368 114.368H563.831C562.983 90.5251 544.821 76.0501 524.952 76.0501C509.057 76.0501 487.494 85.7041 484.368 114.368ZM533.174 32.9236H507.351L533.747 0H573.473L533.174 32.9236Z"
      fill="currentColor"
    />
  </svg>
)

// ─────────────────────── Hamburger Icon ──────────────────────
export const HamburgerIcon: IconComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <line
      x1="4"
      y1="8"
      x2="20"
      y2="8"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="4"
      y1="16"
      x2="20"
      y2="16"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

// ─────────────────────── Close Icon ──────────────────────
export const CloseIcon: IconComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
      stroke="#fafafa"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
      stroke="#fafafa"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

// ─────────────────────── User Icon ──────────────────────
export const UserIcon: IconComponent = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className="invert"
    {...props}
  >
    <circle cx="10" cy="7" r="3.5" stroke="#fafafa" strokeWidth="1.2" />
    <path
      d="M3 18.5C3 15.4624 5.46243 13 8.5 13H11.5C14.5376 13 17 15.4624 17 18.5"
      stroke="#fafafa"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
)
