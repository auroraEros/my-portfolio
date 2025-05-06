import { MoonIcon, SunIcon } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { cn } from "../lib/utils";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={cn(
        "absolute max-sm:hidden p-2 z-50 top-5 right-5 rounded-full",
         "transition-colors duration-300 focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-300" />
      ) : (
        <MoonIcon className="w-6 h-6 text-blue-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
