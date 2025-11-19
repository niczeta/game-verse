import { useState } from "react";
import {
  ChevronDown,
  Gamepad2,
  CreditCard,
  LifeBuoy,
  User
} from "lucide-react";

// Type definition for individual FAQ items
type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: "general" | "payment" | "support" | "account";
};

const faqData: FAQItem[] = [
  // ... (tutti i tuoi item come sopra, identici)
  // General
  { id: 1, category: "general", question: "What is GameVerse?", answer: "GameVerse is a digital platform offering thousands of games across all platforms (PC, PlayStation, Xbox, Nintendo Switch) at unbeatable prices. We partner with leading publishers to bring you legitimate, high-quality games." },
  { id: 2, category: "general", question: "How do I get started?", answer: "Simply create an account, browse our catalog, add games to your cart, and proceed to checkout. Once purchased, you'll receive your game keys via email immediately." },
  { id: 3, category: "general", question: "Is GameVerse legal and safe?", answer: "Yes, GameVerse is 100% legal and secure. We work directly with publishers and developers, and all transactions are encrypted for your safety." },
  // Payment
  { id: 4, category: "payment", question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and various digital wallets." },
  { id: 5, category: "payment", question: "Is it safe to enter my payment information?", answer: "Absolutely. We use industry-standard SSL encryption and PCI DSS compliance to protect all your payment data. Your information is never stored on our servers." },
  { id: 6, category: "payment", question: "Do you offer discounts or seasonal sales?", answer: "Yes! We regularly offer discounts, bundle deals, and seasonal sales. Subscribe to our newsletter to get exclusive offers and early access to sales." },
  // Support
  { id: 7, category: "support", question: "How quickly will you respond to my support request?", answer: "We aim to respond to all support inquiries within 24 business hours. For urgent issues, contact us via phone or live chat for faster assistance." },
  { id: 8, category: "support", question: "What if I don't receive my game key?", answer: "Check your email spam folder first. If you still don't see it, contact our support team immediately. We'll resend your key or issue a refund if needed." },
  { id: 9, category: "support", question: "Do you offer technical support for games?", answer: "We provide support for purchase-related issues. For game-specific technical issues, please contact the game's publisher or developer support team." },
  // Account
  { id: 10, category: "account", question: "Can I change my account information?", answer: "Yes, you can update your profile, email, and password from your account settings anytime. Changes take effect immediately." },
  { id: 11, category: "account", question: "What is your refund policy?", answer: "We offer refunds within 30 days of purchase for most games. Some games may have different policies. Check the product page for specific refund conditions." },
  { id: 12, category: "account", question: "How do I delete my account?", answer: "You can request account deletion from your settings. Your data will be permanently removed within 30 days, but please note that past purchases cannot be restored." }
];

// Mapping da categoria a icona + label
const categoryLabels = {
  general: <><Gamepad2 className="w-6 h-6 text-cyan-400" /><span>General</span></>,
  payment: <><CreditCard className="w-6 h-6 text-yellow-400" /><span>Payment</span></>,
  support: <><LifeBuoy className="w-6 h-6 text-indigo-400" /><span>Support</span></>,
  account: <><User className="w-6 h-6 text-purple-400" /><span>Account</span></>,
};

const FAQAccordion = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderByCategory = (
    category: "general" | "payment" | "support" | "account"
  ) => {
    const items = faqData.filter((item) => item.category === category);
    return (
      <div key={category} className="mb-12">
        {/* Category heading con icona Lucide */}
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
          {categoryLabels[category]}
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-800 rounded-lg border border-neutral-700 hover:border-cyan-400/50 transition overflow-hidden"
            >
              {/* Accordion header - domanda + chevron */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-5 hover:bg-neutral-700/50 transition focus:outline-none"
              >
                <span className="font-semibold text-left text-white">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-cyan-400 transition-transform flex-shrink-0 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedId === item.id && (
                <div className="px-5 pb-5 border-t border-neutral-700">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-500">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Find answers to common questions about GameVerse, purchases, and
            more.
          </p>
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {renderByCategory("general")}
          {renderByCategory("payment")}
          {renderByCategory("support")}
          {renderByCategory("account")}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl border border-cyan-400/30 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              Still Need Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Didn't find your answer? Contact our support team, and we'll be
              happy to help!
            </p>
            <a
              href="/contact-page"
              className="inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export const FAQPage = () => <FAQAccordion />;
