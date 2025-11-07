// Authentication page with Sign In and Sign Up forms
// Displays different content based on URL search params (mode=signup or mode=signin)
// Includes form validation, password visibility toggle, and social login options

import { useState, useEffect } from "react";
import { Button } from "../form-components/Button";
import { CustomInput } from "../form-components/CustomInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaGoogle, FaDiscord, FaEye, FaEyeSlash } from "react-icons/fa";

export const AuthPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Form state management
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Form data for email, password, username inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  // Store validation errors for each form field
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Detect URL parameter on page load to determine if showing Sign In or Sign Up form
  useEffect(() => {
    const mode = searchParams.get("mode");
    setIsSignIn(mode !== "signup");
  }, [searchParams]);

  // Toggle between Sign In and Sign Up forms, reset all form state
  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    });
    setErrors({});
    setAgreeTerms(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  // Update form data when user types in inputs, clear field errors as user corrects them
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate all form fields based on Sign In or Sign Up mode
  // Returns object with validation errors, empty if all fields valid
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Email validation - required and format check
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation - required and minimum length
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Additional validations for Sign Up mode only
    if (!isSignIn) {
      // Username validation - required and minimum length
      if (!formData.username.trim()) {
        newErrors.username = "Username is required";
      } else if (formData.username.length < 3) {
        newErrors.username = "Username must be at least 3 characters";
      }

      // Confirm password validation - required and must match password
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      // Terms acceptance validation
      if (!agreeTerms) {
        newErrors.terms = "You must accept the terms and conditions";
      }
    }

    return newErrors;
  };

  // Handle form submission with validation
  // Shows success message, simulates API call, then redirects to home page
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    // Stop submission if validation errors exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate authentication process
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(
        isSignIn
          ? "Welcome back! Redirecting..."
          : "Account created! Redirecting..."
      );
      // Redirect to home page after success message displays
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="bg-gray-950 text-white relative">
      {/* Fixed gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 -z-10"></div>

      {/* Main content container with two-column layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT SIDE - Hero section (hidden on mobile, visible on lg screens) */}
        <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-cyan-600 via-indigo-700 to-indigo-800 min-h-screen">
          <div className="max-w-md text-center">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">
                {isSignIn ? "Welcome Back" : "Join GameVerse"}
              </span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-white rounded-full mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-cyan-100 leading-relaxed">
              {isSignIn
                ? "Sign in to access your game library and continue your adventure."
                : "Create an account and start exploring thousands of amazing games."}
            </p>

            {/* Feature checklist displayed on hero section */}
            <div className="mt-12 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-cyan-300">✓</span>
                </div>
                <span className="text-cyan-100">Instant game access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-cyan-300">✓</span>
                </div>
                <span className="text-cyan-100">Unbeatable prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-cyan-300">✓</span>
                </div>
                <span className="text-cyan-100">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Authentication form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 py-40 lg:py-16 lg:min-h-screen">
          <div className="w-full max-w-md">
            {/* Form header with title and subtitle */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
                {isSignIn ? "Sign In" : "Create Account"}
              </h2>
              <p className="text-gray-400">
                {isSignIn
                  ? "Enter your credentials to continue"
                  : "Join our gaming community today"}
              </p>
            </div>

            {/* Success message displayed after successful submission */}
            {successMessage && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-green-400 flex-shrink-0"
                >
                  <path d="M9 16.2a1.2 1.2 0 0 1-.85-.35l-4.6-4.6a1.2 1.2 0 1 1 1.7-1.7l3.75 3.75 6.1-6.1a1.2 1.2 0 1 1 1.7 1.7l-6.95 6.95A1.2 1.2 0 0 1 9 16.2z" />
                </svg>
                <span className="text-green-300 font-medium text-sm">
                  {successMessage}
                </span>
              </div>
            )}

            {/* Main authentication form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username field - only shown in Sign Up mode */}
              {!isSignIn && (
                <CustomInput
                  type="text"
                  name="username"
                  label="Username"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  error={errors.username}
                  labelClassName="text-gray-200 text-sm font-semibold"
                  className="focus:ring-2 focus:ring-cyan-400/20"
                />
              )}

              {/* Email field - displayed in both Sign In and Sign Up modes */}
              <CustomInput
                type="text"
                name="email"
                label="Email Address"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                labelClassName="text-gray-200 text-sm font-semibold"
                className="focus:ring-2 focus:ring-cyan-400/20"
              />

              {/* Password field with visibility toggle button */}
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 pr-10 ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500"
                        : "border-neutral-700 focus:ring-cyan-700"
                    }`}
                  />
                  {/* Eye icon button to toggle password visibility */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm password field - only shown in Sign Up mode */}
              {!isSignIn && (
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 pr-10 ${
                        errors.confirmPassword
                          ? "border-red-500 focus:ring-red-500"
                          : "border-neutral-700 focus:ring-cyan-700"
                      }`}
                    />
                    {/* Eye icon button to toggle confirm password visibility */}
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition"
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash size={18} />
                      ) : (
                        <FaEye size={18} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {/* Forgot password link - only shown in Sign In mode */}
              {isSignIn && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Terms and conditions checkbox - only shown in Sign Up mode */}
              {!isSignIn && (
                <div className="flex items-center gap-2 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 rounded bg-neutral-700 border border-neutral-600 cursor-pointer accent-cyan-400 flex-shrink-0"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs text-gray-300 cursor-pointer flex-1"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>
              )}
              {errors.terms && (
                <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
              )}

              {/* Submit button using custom Button component */}
              {/* Text changes based on loading state and form mode */}
              <Button
                type="submit"
                text={
                  isLoading
                    ? "⏳ Processing..."
                    : isSignIn
                    ? "🚀 Sign In"
                    : "🚀 Create Account"
                }
                variant="gradient"
                size="large"
                className="w-full mt-6"
                disabled={isLoading}
              />
            </form>

            {/* Divider between form and social login options */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-neutral-700 to-transparent"></div>
              <span className="text-gray-500 text-xs font-medium">OR</span>
              <div className="flex-1 h-px bg-gradient-to-l from-neutral-700 to-transparent"></div>
            </div>

            {/* Social login buttons - Google and Discord */}
            <div className="space-y-3">
              <button className="w-full py-2.5 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <FaGoogle size={18} />
                Continue with Google
              </button>
              <button className="w-full py-2.5 px-4 bg-[#5865F2] text-white font-semibold rounded-lg hover:bg-[#4752C4] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <FaDiscord size={18} />
                Continue with Discord
              </button>
            </div>

            {/* Toggle button to switch between Sign In and Sign Up forms */}
            <p className="text-center text-gray-400 text-sm mt-8">
              {isSignIn
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
