// components/Footer.tsx
import Link from "next/link";

const productLinks = [
  { href: "#curated_collections", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "#faq", label: "FAQs" },
  { href: "", label: "" },
] as const;

const socialLinks = [
  { href: "https://www.instagram.com/arqe_ai", label: "Instagram" },
  { href: "https://www.threads.com/@arqe_ai", label: "Threads" },
  { href: "https://x.com/arqe_ai", label: "X.com" },
] as const;

const Footer = () => {
  return (
    <div className="max-w-[922px] mx-auto">
      {/* Link Columns */}
      <div className="flex gap-[50px] mb-[100px] sm:mb-[200px]">
        {/* Product Column */}
        <div className="flex flex-col">
          <p
            className="text-[#a1a1a1] text-[14px] leading-[22px] tracking-[-0.14px] mb-[14px] sm:mb-[25px]"
            style={{ fontFamily: "Suisse Intl, system-ui, sans-serif", fontWeight: 500 }}
          >
            Product
          </p>
          <div className="flex flex-col">
            {productLinks.map((link) =>
              link.label ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#fafafa] text-[14px] leading-[1.4] tracking-[-0.14px] hover:opacity-70 transition-opacity py-[6px] sm:py-0"
                  style={{ fontFamily: "Suisse Intl, system-ui, sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key="empty"
                  className="py-[6px] sm:py-0"
                  aria-hidden="true"
                />
              )
            )}
          </div>
        </div>

        {/* Social Column */}
        <div className="flex flex-col">
          <p
            className="text-[#a1a1a1] text-[14px] leading-[22px] tracking-[-0.14px] mb-[14px] sm:mb-[25px]"
            style={{ fontFamily: "Suisse Intl, system-ui, sans-serif", fontWeight: 500 }}
          >
            Social
          </p>
          <div className="flex flex-col">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fafafa] text-[14px] leading-[1.4] tracking-[-0.14px] hover:opacity-70 transition-opacity py-[6px] sm:py-0"
                style={{ fontFamily: "Suisse Intl, system-ui, sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-row justify-between items-center">
        <p
          className="text-[#737373] text-[11px] leading-[22px]"
          style={{ fontFamily: "Suisse Intl, system-ui, sans-serif", fontWeight: 500 }}
        >
          © 2026 Arqé
        </p>
        <div className="flex items-center gap-[30px]">
          <Link
            href="/privacy"
            className="text-[#737373] text-[11px] leading-[22px] hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Suisse Intl, system-ui, sans-serif", fontWeight: 500 }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[#737373] text-[11px] leading-[22px] hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Suisse Intl, system-ui, sans-serif", fontWeight: 500 }}
          >
            Terms of use
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;