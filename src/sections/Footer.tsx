import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Quick Links navigation items - excludes FAQ, replaced with Cart
const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about-page" },
  { name: "Cart", to: "/cart-page" },
  { name: "Contact Us", to: "/contact-page" },
];

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 border-t border-gray-800 py-12 px-6 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid - Four column layout for different sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo Section - Company branding and tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition">
              <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
                GameVerse
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your ultimate destination for gaming excellence and unbeatable prices.
            </p>
          </div>

          {/* Quick Links - Primary navigation shortcuts (Home, About, Cart, Contact) */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to.split("#")[0];
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`text-sm transition hover:text-cyan-400 focus:outline-none ${
                      isActive ? "text-cyan-400 font-semibold" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Support Section - Help resources and FAQ link */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">
              Support
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:nicolemisuraca@outlook.it"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                nicolemisuraca@outlook.it
              </a>
              <a
                href="/faq-page"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                FAQ
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social Media - Links to external social platforms with brand colors */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-6">
              {/* Facebook link with official brand color */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-[#1877F2] transition focus:outline-none focus:ring-2 focus:ring-[#1877F2] rounded"
                style={{ color: "#1877F2" }}
              >
                <FaFacebookF size={24} />
              </a>

              {/* Instagram link with official brand color */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E4405F] transition focus:outline-none focus:ring-2 focus:ring-[#E4405F] rounded"
                style={{ color: "#E4405F" }}
              >
                <FaInstagram size={24} />
              </a>

              {/* X Twitter link with official brand color */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="hover:text-[#1DA1F2] transition focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] rounded"
                style={{ color: "#1DA1F2" }}
              >
                <FaXTwitter size={24} />
              </a>

              {/* YouTube link with official brand color */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-[#FF0000] transition focus:outline-none focus:ring-2 focus:ring-[#FF0000] rounded"
                style={{ color: "#FF0000" }}
              >
                <FaYoutube size={24} />
              </a>

              {/* Discord link with official brand color */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="hover:text-[#5865F2] transition focus:outline-none focus:ring-2 focus:ring-[#5865F2] rounded"
                style={{ color: "#5865F2" }}
              >
                <FaDiscord size={24} />
              </a>

              {/* Twitch link with official brand color */}
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitch"
                className="hover:text-[#9146FF] transition focus:outline-none focus:ring-2 focus:ring-[#9146FF] rounded"
                style={{ color: "#9146FF" }}
              >
                <FaTwitch size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line - Separates main content from bottom footer */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer - Copyright and brand tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-bold">GameVerse</span>. All rights
            reserved.
          </p>
          <p>
            Made with <span className="text-red-500">❤️</span> by gamers, for gamers.
          </p>
        </div>
      </div>
    </footer>
  );
};
