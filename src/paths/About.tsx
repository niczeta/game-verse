import { Gamepad2, Star, Users, ShieldCheck } from "lucide-react";
import { Button } from "../form-components/Button";

export const About = () => {
  return (
    <>
      <section className="w-full bg-gray-950 text-white">
        {/* Hero Section */}
        <div className="relative h-80 overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-500 pb-2">
              About GameVerse
            </h1>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
              Your ultimate destination for gaming excellence
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="px-6 sm:px-12 md:px-20 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center mb-12">
              At GameVerse, we believe gaming should be accessible, affordable,
              and enjoyable for everyone. We're dedicated to bringing you the
              best selection of games across all platforms at unbeatable prices.
              Whether you're a casual player or a hardcore gamer, we have
              something special for you.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="px-6 sm:px-12 md:px-20 py-16 bg-gray-900">
          <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
            Why Choose GameVerse?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition">
              <Gamepad2 className="text-cyan-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                Huge Selection
              </h3>
              <p className="text-gray-300 text-sm">
                Thousands of games across PC, PlayStation, Xbox, and Nintendo
                Switch platforms.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition">
              <Star className="text-yellow-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Best Prices
              </h3>
              <p className="text-gray-300 text-sm">
                Unbeatable deals and exclusive discounts on all your favorite
                titles.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition">
              <Users className="text-indigo-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                Community
              </h3>
              <p className="text-gray-300 text-sm">
                Join thousands of gamers and share your passion with a vibrant
                community.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition">
              <ShieldCheck className="text-green-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Secure & Trusted
              </h3>
              <p className="text-gray-300 text-sm">
                Safe transactions, authentic keys, and 24/7 customer support
                guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="px-6 sm:px-12 md:px-20 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                GameVerse was founded with a simple dream: to make gaming
                accessible to everyone, regardless of their budget. We started
                as a small team of passionate gamers who saw a gap in the market
                for truly affordable, quality game distribution.
              </p>
              <p>
                Today, we've grown into a trusted platform serving hundreds of
                thousands of gamers worldwide. We partner with leading
                publishers and developers to bring you legitimate, high-quality
                games at prices you won't find anywhere else.
              </p>
              <p>
                Our commitment to excellence, transparency, and customer
                satisfaction remains at the heart of everything we do. We're not
                just selling games—we're building a community of gamers who
                share our passion for quality entertainment.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-6 sm:px-12 md:px-20 py-16 bg-gradient-to-r from-cyan-600/20 via-indigo-600/20 to-purple-600/20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                500K+
              </div>
              <p className="text-gray-300 text-lg">Active Gamers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">10K+</div>
              <p className="text-gray-300 text-lg">Games Available</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">
                4.9/5
              </div>
              <p className="text-gray-300 text-lg">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="px-6 sm:px-12 md:px-20 py-16 md:py-24 text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to
            our team anytime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              text="Email Us"
              onClick={() =>
                (window.location.href = "mailto:support@gameverse.com")
              }
              color="cyan"
              size="medium"
              variant="outline"
            />
            <Button
              text="Contact Form"
              onClick={() => (window.location.href = "/contact-page")}
              color="yellow"
              size="medium"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </>
  );
};
