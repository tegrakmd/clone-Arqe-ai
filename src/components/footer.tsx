// components/Footer.tsx
import Link from "next/link";

const productLinks = [
  { href: "/", label: "Features" },
  { href: "/", label: "Pricing" },
  { href: "/", label: "FAQs" },
  { href: "", label: "" },
] as const;

const socialLinks = [
  { href: "https://www.instagram.com/arqe_ai", label: "Instagram" },
  { href: "https://www.threads.com/@arqe_ai", label: "Threads" },
  { href: "https://x.com/arqe_ai", label: "X.com" },
] as const;

const Footer = () => {
  return (
    <div className="max-w-[922px] mx-auto  p-6 px-12">
      {/* Link Columns */}
      <div className="flex gap-[50px] mb-[100px] sm:mb-[200px]">
        {/* Product Column */}
        <div className="flex flex-col">
          <p
            className="text-[#a1a1a1] text-[14px] leading-[22px] tracking-[-0.14px] mb-[14px] sm:mb-[25px]"
            style={{ fontWeight: 600 }}
          >
            Product
          </p>
          <div className="flex flex-col space-y-1">
            {productLinks.map((link) =>
              link.label ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#fafafa] text-[14px] leading-[1.4] tracking-[-0.14px] hover:opacity-70 transition-opacity py-[6px] sm:py-0"
                  style={{ fontWeight: 600 }}
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
            style={{ fontWeight: 600 }}
          >
            Social
          </p>
          <div className="flex flex-col space-y-1">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fafafa] text-[14px] leading-[1.4] tracking-[-0.14px] hover:opacity-70 transition-opacity py-[6px] sm:py-0"
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-row justify-between items-center">
        <p
          className="text-[#737373] text-[11px] leading-[22px]"
          style={{  fontWeight: 500 }}
        >
          © 2026 Clone Arqé
        </p>
        <div className="flex items-center gap-[30px]">
          <Link
            href="/privacy"
            className="text-[#737373] text-[11px] leading-[22px] hover:opacity-70 transition-opacity"
            style={{  fontWeight: 500 }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[#737373] text-[11px] leading-[22px] hover:opacity-70 transition-opacity"
            style={{ fontWeight: 500 }}
          >
            Terms of use
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;