// Contact page - displays contact information and a contact form for user inquiries
// Includes form validation, loading state, and success message feedback

import { useState } from "react";
import { CustomInput } from "../form-components/CustomInput";
import { CustomTextarea } from "../form-components/CustomTextarea";
import { Button } from "../form-components/Button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const ContactPage = () => {
  // Form data state - stores name, email, and message inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validation errors state - stores field-specific error messages
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Success message state - displayed after successful form submission
  const [successMessage, setSuccessMessage] = useState("");

  // Loading state - controls button disabled state and loading text during submission
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes and clear field errors as user types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form fields - checks for required fields and valid email format
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation - required field
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Email validation - required and format check
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    // Message validation - required field
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Handle form submission with validation
  // Simulates API call, shows success message, and resets form on successful submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form and show errors if any
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission process
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Thank you! Your message has been sent.");
      // Reset form fields after successful submission
      setFormData({ name: "", email: "", message: "" });
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* Hero Section with gradient background and page title */}
      <div className="relative h-80 overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-500">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content - Two column layout with contact info and form */}
      <div className="px-6 sm:px-12 md:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Contact Information with icons */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-8">
                Contact Information
              </h2>
            </div>

            {/* Email Contact Info */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <FaEnvelope className="text-cyan-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-400">nicolemisuraca@outlook.it</p>
              </div>
            </div>

            {/* Phone Contact Info */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-indigo-500/20 rounded-lg">
                <FaPhone className="text-indigo-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-400">+39 334 391 5430</p>
              </div>
            </div>

            {/* Location Contact Info */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-400">Rome, Italy</p>
              </div>
            </div>

            {/* Business Hours Contact Info */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <FaClock className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                <p className="text-gray-400 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-400 text-sm">
                  Sat - Sun: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form with fade-in animation */}
          <div className="md:col-span-2">
            <div
              className="w-full bg-neutral-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-800 animate-fade-in"
              style={{
                animation: "fadeIn 0.7s cubic-bezier(.4,2,.9,.7) 0s 1",
              }}
            >
              {/* Form Header */}
              <h2 className="text-3xl font-bold mb-2 text-yellow-400">
                Send us a Message
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {/* Success Message - Displayed after successful submission */}
              {successMessage && (
                <div className="flex flex-col items-center text-green-300 bg-green-900/40 border border-green-600 rounded-lg p-4 text-center mb-6 animate-bounce">
                  <svg
                    width="34"
                    height="34"
                    fill="currentColor"
                    className="mb-2"
                  >
                    <path d="M15.32 23.47l-6.18-6.18a1.25 1.25 0 111.77-1.77l5.29 5.29 9.68-9.68a1.25 1.25 0 111.77 1.77l-10.47 10.47a1.25 1.25 0 01-1.77 0z" />
                  </svg>
                  {successMessage}
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input Field */}
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

                {/* Email Input Field */}
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

                {/* Message Textarea Field */}
                <CustomTextarea
                  label="Message"
                  name="message"
                  placeholder="Write your message here... (min 10 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  className="focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-all"
                />

                {/* Submit Button using custom Button component */}
                {/* Text changes based on loading state */}
                <Button
                  type="submit"
                  text={isLoading ? "⏳ Sending..." : "🚀 Send Message"}
                  variant="gradient"
                  size="large"
                  className="w-full transition-transform"
                  disabled={isLoading}
                />
              </form>

              {/* Helper text with response time expectation */}
              <p className="text-xs text-gray-500 text-center mt-6">
                We typically respond within 24 hours. Thank you for reaching
                out!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations - Fade in effect for form container */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
};
