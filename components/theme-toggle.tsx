"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="flex items-center justify-between p-1 rounded-full bg-neutral-100 dark:bg-neutral-950/15 w-fit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ThemeButton
        active={theme === "light"}
        onClick={() => setTheme("light")}
        icon={<Sun size={14} />}
      />
      <ThemeButton
        active={theme === "system"}
        onClick={() => setTheme("system")}
        icon={<Monitor size={14} />}
      />
      <ThemeButton
        active={theme === "dark"}
        onClick={() => setTheme("dark")}
        icon={<Moon size={14} />}
      />
    </motion.div>
  );
}

interface ThemeButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

function ThemeButton({ icon, onClick, active }: ThemeButtonProps) {
  return (
    <motion.button
      className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
        active ? "text-neutral-800 dark:text-neutral-100" : "text-neutral-500"
      }`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {active && (
        <motion.div
          className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-full"
          layoutId="activeTheme"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{icon}</span>
    </motion.button>
  );
}
