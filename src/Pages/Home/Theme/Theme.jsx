import { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Theme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <input
        type="checkbox"
        onClick={toggleTheme}
        className="toggle theme-controller"
      />
      <span>Change Theme</span>
    </>
  );
};

export default Theme;
