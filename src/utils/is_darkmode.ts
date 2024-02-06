import { useEffect, useState } from "react";

export default function useSystemDarkMode() {
  const [isDarkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (event: MediaQueryListEvent) =>
      setDarkMode(event.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, []);

  return isDarkMode
}
