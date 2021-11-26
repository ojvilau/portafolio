import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      className="dark:hover:border-white dark:focus:border-white inline-flex items-center justify-center w-12 h-12 border-2 border-gray-300 hover:border-gray-500 focus:border-gray-500 rounded-full focus:outline-none overflow-hidden"
      onClick={toggleDarkMode}
    >
      <div className="relative w-8 h-8">
        <span
          className="absolute inset-0 transform dark:-rotate-90 rotate-0 transition duration-700"
          style={{ transformOrigin: "50% 100px" }}
        >
          <Image alt="activate dark mode" src="/images/theme-switch/sun.svg" width={30} height={30} />
        </span>

        <span
          className="absolute inset-0 transform dark:rotate-0 rotate-90 transition duration-700"
          style={{ transformOrigin: "50% 100px" }}
        >
          <Image alt="activate light mode" src="/images/theme-switch/moon.svg" width={30} height={30} />
        </span>
      </div>
    </button>
  );
};

export default DarkModeToggle;
