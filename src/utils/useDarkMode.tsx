import {useMediaQuery} from "@mui/material";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    return useLocalStorage(
        "dark-mode-enabled",
        prefersDarkMode
    )
}
