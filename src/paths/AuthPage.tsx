import { useState, useEffect } from "react";
import { Button } from "../form-components/Button";
import { CustomInput } from "../form-components/CustomInput";
import { CustomCheckbox } from "../form-components/CustomCheckbox";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaGoogle, FaDiscord } from "react-icons/fa";
import { Eye, EyeOff, CheckCheck, Loader2, Rocket } from "lucide-react";

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

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked);
    setErrors((prev) => ({ ...prev, terms: "" }));
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
        isSignIn
          ? "Welcome back! Redirecting..."
          : "Account created! Redirecting..."
      );
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="bg-gray-950 text-white relative">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 -z-10"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT SIDE */}
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
            <div className="mt-12 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCheck size={22} className="text-cyan-300" />
                </div>
                <span className="text-cyan-100">Instant game access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCheck size={22} className="text-cyan-300" />
                </div>
                <span className="text-cyan-100">Unbeatable prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCheck size={22} className="text-cyan-300" />
                </div>
                <span className="text-cyan-100">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 py-40 lg:py-16 lg:min-h-screen">
          <div className="w-full max-w-md">
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
            {successMessage && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
                <CheckCheck size={24} className="text-green-400 flex-shrink-0" />
                <span className="text-green-300 font-medium text-sm">
                  {successMessage}
                </span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5" autoComplete="on">
              {/* Username */}
              {!isSignIn && (
                <CustomInput
                  type="text"
                  name="username"
                  id="auth-username"
                  autoComplete="username"
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
                type="email"
                name="email"
                id="auth-email"
                autoComplete="email"
                label="Email Address"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                labelClassName="text-gray-200 text-sm font-semibold"
                className="focus:ring-2 focus:ring-cyan-400/20"
              />
              {/* Password */}
              <CustomInput
                type={showPassword ? "text" : "password"}
                name="password"
                id="auth-password"
                autoComplete="current-password"
                label="Password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                labelClassName="text-gray-200 text-sm font-semibold"
                className="focus:ring-2 focus:ring-cyan-400/20"
                rightIcon={
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((p) => !p)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                }
              />
              {/* Confirm Password */}
              {!isSignIn && (
                <CustomInput
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="auth-confirm-password"
                  autoComplete="new-password"
                  label="Confirm Password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  labelClassName="text-gray-200 text-sm font-semibold"
                  className="focus:ring-2 focus:ring-cyan-400/20"
                  rightIcon={
                    <button
                      type="button"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      onClick={() => setShowConfirmPassword((p) => !p)}
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  }
                />
              )}
              {/* Forgot password */}
              {isSignIn && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              {/* Terms checkbox */}
              {!isSignIn && (
                <CustomCheckbox
                  id="terms"
                  name="terms"
                  checked={agreeTerms}
                  onChange={handleTermsChange}
                  error={errors.terms}
                  label={
                    <span>
                      I agree to the{" "}
                      <button type="button" className="text-cyan-400 hover:text-cyan-300">
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button type="button" className="text-cyan-400 hover:text-cyan-300">
                        Privacy Policy
                      </button>
                    </span>
                  }
                />
              )}
              <Button
                type="submit"
                text={
                  isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Rocket size={18} />
                      {isSignIn ? "Sign In" : "Create Account"}
                    </span>
                  )
                }
                variant="gradient"
                size="large"
                className="w-full mt-6"
                disabled={isLoading}
              />
            </form>
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-neutral-700 to-transparent"></div>
              <span className="text-gray-500 text-xs font-medium">OR</span>
              <div className="flex-1 h-px bg-gradient-to-l from-neutral-700 to-transparent"></div>
            </div>
            <div className="space-y-3">
              <button className="w-full py-2.5 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
                <FaGoogle size={18} />
                Continue with Google
              </button>
              <button className="w-full py-2.5 px-4 bg-[#5865F2] text-white font-semibold rounded-lg hover:bg-[#4752C4] transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
                <FaDiscord size={18} />
                Continue with Discord
              </button>
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              {isSignIn
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition cursor-pointer"
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
