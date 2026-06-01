/**
 * @module constants/navigation
 * Navigation configuration and routes
 */

export const NAVIGATION_ROUTES = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const

export const AUTH_ROUTES = [
  {
    label: "Sign In",
    href: "/signin",
  },
  {
    label: "Sign Up",
    href: "/signup",
  },
] as const

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    url: "https://twitter.com/arqe",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/arqe",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/arqe",
  },
] as const
