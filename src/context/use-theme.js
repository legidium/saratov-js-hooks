import { useContext } from "react";
import ThemeContext from "./theme-context";

const defaultTheme = {
 color: "red"
};

function useTheme() {
 const theme = useContext(ThemeContext);
 return theme || defaultTheme;
}

export default useTheme;
