"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff, Lock, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import GlassCard from "@/app/components/ui/GlassCard";
import AnimatedButton from "@/app/components/ui/AnimatedButton";
import { playMusic } from "@/app/lib/audio";

export default function PasswordGate() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Skip login if already unlocked
  useEffect(() => {
    const unlocked = sessionStorage.getItem("sunflowerUnlocked");

    if (unlocked === "true") {
      router.replace("/hero");
    }
  }, [router]);

  const submit = async () => {
    if (loading) return;

    if (!password.trim()) {
      toast.error("Please enter the password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.message || "Incorrect password.");
        setPassword("");
        setLoading(false);
        return;
      }

      sessionStorage.setItem("sunflowerUnlocked", "true");
      await playMusic();
      toast.success("Welcome Home ❤️");

      setTimeout(() => {
        router.push("/hero");
      }, 1500);
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong.");

      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <GlassCard className="w-full max-w-lg text-center">

        {/* Sunflower */}

        <div className="mb-6 text-6xl">
          🌻
        </div>

        {/* Heading */}

        <h1 className="mb-4 font-[var(--font-dancing)] text-5xl text-white">
          Hi Baaccchhhaaa...
        </h1>

        <p className="mb-10 leading-8 text-blue-100">
          Some memories are only meant
          <br />
          for one person.
        </p>

        {/* Password */}

        <div className="relative">

          <Lock
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-300"
          />

          <input
            value={password}
            disabled={loading}
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
            className="
            w-full
            rounded-full
            border
            border-white/20
            bg-white/10
            py-4
            pl-14
            pr-14
            text-white
            placeholder:text-blue-200
            backdrop-blur-lg
            outline-none
            transition
            focus:border-blue-400
            "
          />

          <button
            type="button"
            disabled={loading}
            onClick={() => setShowPassword((prev) => !prev)}
            className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-blue-300
            hover:text-white
            transition
            "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

        {/* Hint */}

        <p className="mt-5 text-sm text-blue-200">
          Hint:
          <br />
          <span className="italic">
            The day our story truly began...
          </span>
        </p>

        {/* Button */}

        <div className="mt-10">

          <AnimatedButton onClick={submit}>

            {loading ? (
              <div className="flex items-center justify-center gap-2">

                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="4"
                    strokeOpacity=".3"
                  />

                  <path
                    d="M22 12a10 10 0 0 1-10 10"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>

                Unlocking...

              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">

                <Heart size={18} />

                Open My Heart

              </div>
            )}

          </AnimatedButton>

        </div>

      </GlassCard>
    </div>
  );
}