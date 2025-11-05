import { useState } from "react";
import { CustomInput } from "../form-components/CustomInput";
import { CustomTextarea } from "../form-components/CustomTextarea";
import { Button } from "../form-components/Button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-500">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 sm:px-12 md:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left - Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-8">Contact Information</h2>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <FaEnvelope className="text-cyan-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-400">nicolemisuraca@outlook.it</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-indigo-500/20 rounded-lg">
                <FaPhone className="text-indigo-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-400">+39 334 391 5430</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-400">Rome, Italy</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <FaClock className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                <p className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400 text-sm">Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="md:col-span-2">
            <div
              className="w-full bg-neutral-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-800 animate-fade-in"
              style={{
                animation: "fadeIn 0.7s cubic-bezier(.4,2,.9,.7) 0s 1"
              }}
            >
              <h2 className="text-3xl font-bold mb-2 text-yellow-400">Send us a Message</h2>
              <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

              {successMessage && (
                <div className="flex flex-col items-center text-green-300 bg-green-900/40 border border-green-600 rounded-lg p-4 text-center mb-6 animate-bounce">
                  <svg width="34" height="34" fill="currentColor" className="mb-2">
                    <path d="M15.32 23.47l-6.18-6.18a1.25 1.25 0 111.77-1.77l5.29 5.29 9.68-9.68a1.25 1.25 0 111.77 1.77l-10.47 10.47a1.25 1.25 0 01-1.77 0z" />
                  </svg>
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <CustomInput
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  className="focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all"
                />

                <CustomInput
                  label="Email Address"
                  type="text"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  className="focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all"
                />

                <CustomTextarea
                  label="Message"
                  name="message"
                  placeholder="Write your message here... (min 10 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  className="focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-all"
                />

                <Button
                  type="submit"
                  text={isLoading ? "⏳ Sending..." : "🚀 Send Message"}
                  variant="gradient"
                  size="large"
                  className="w-full transition-transform"
                  disabled={isLoading}
                />
              </form>

              <p className="text-xs text-gray-500 text-center mt-6">
                We typically respond within 24 hours. Thank you for reaching out!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
};
