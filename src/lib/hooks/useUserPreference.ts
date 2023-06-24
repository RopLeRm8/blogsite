import { useEffect } from "react";

export default function useUserPreference() {
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("sfx") === null) {
      localStorage.setItem("sfx", "none");
    }
  }, []);
}
