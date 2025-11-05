import { useState, useEffect } from "react";
import { Button } from "../form-components/Button";
import { CustomInput } from "../form-components/CustomInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaGoogle, FaDiscord, FaEye, FaEyeSlash } from "react-icons/fa";

export const AuthPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const mode = searchParams.get("mode");
    setIsSignIn(mode !== "signup");
  }, [searchParams]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isSignIn) {
      if (!formData.username.trim()) {
        newErrors.username = "Username is required";
      } else if (formData.username.length < 3) {
        newErrors.username = "Username must be at least 3 characters";
      }

      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!agreeTerms) {
        newErrors.terms = "You must accept the terms and conditions";
      }
    }

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
      setSuccessMessage(
        isSignIn ? "Welcome back! Redirecting..." : "Account created! Redirecting..."
      );
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="bg-gray-950 text-white relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 -z-10"></div>

      {/* Contenuto relativo */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT SIDE - Hero */}
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

            {/* Features list */}
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

        {/* RIGHT SIDE - Form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 py-40 lg:py-16 lg:min-h-screen">
          <div className="w-full max-w-md">
            {/* Header */}
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

            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
                <svg width="24" height="24" fill="currentColor" className="text-green-400 flex-shrink-0">
                  <path d="M9 16.2a1.2 1.2 0 0 1-.85-.35l-4.6-4.6a1.2 1.2 0 1 1 1.7-1.7l3.75 3.75 6.1-6.1a1.2 1.2 0 1 1 1.7 1.7l-6.95 6.95A1.2 1.2 0 0 1 9 16.2z" />
                </svg>
                <span className="text-green-300 font-medium text-sm">{successMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username (Sign Up) */}
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

              {/* Email */}
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

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Password</label>
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
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password (Sign Up) */}
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
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition"
                    >
                      {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              {/* Forgot Password (Sign In) */}
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

              {/* Terms & Conditions (Sign Up) */}
              {!isSignIn && (
                <div className="flex items-center gap-2 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 rounded bg-neutral-700 border border-neutral-600 cursor-pointer accent-cyan-400 flex-shrink-0"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-300 cursor-pointer flex-1">
                    I agree to the{" "}
                    <button type="button" className="text-cyan-400 hover:text-cyan-300">
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button type="button" className="text-cyan-400 hover:text-cyan-300">
                      Privacy Policy
                    </button>
                  </label>
                </div>
              )}
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

              {/* Submit Button */}
              <Button
                type="submit"
                text={isLoading ? "⏳ Processing..." : isSignIn ? "🚀 Sign In" : "🚀 Create Account"}
                variant="gradient"
                size="large"
                className="w-full mt-6"
                disabled={isLoading}
              />
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-neutral-700 to-transparent"></div>
              <span className="text-gray-500 text-xs font-medium">OR</span>
              <div className="flex-1 h-px bg-gradient-to-l from-neutral-700 to-transparent"></div>
            </div>

            {/* Social Login */}
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

            {/* Toggle */}
            <p className="text-center text-gray-400 text-sm mt-8">
              {isSignIn ? "Don't have an account? " : "Already have an account? "}
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
