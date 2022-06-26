import React, { useContext, useEffect, useState } from "react";
import { Option, themeOptions } from "../../data/data";
import Select from "react-select";
import useLocalStorage from "../../hooks/useLocalStorage";
import { reactSelectStyles } from "../../data/reactSelectStyles";

const ThemesPage = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  //TODO: ask alan about this
  const [themeOption, setThemeOption] = useState<Option>();

  useEffect(() => {
    setThemeOption(themeOptions.find((e) => e.value === theme));
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <h1>Themes</h1>
      <Select
        options={themeOptions}
        onChange={(e) => {
          setTheme(e!.value);
        }}
        value={themeOption}
        styles={reactSelectStyles}
        isSearchable={false}
      />
      <style jsx>{`
        .Select-arrow {
          background-color: var(--borderColor) !important;
        }
      `}</style>
    </>
  );
};

export default ThemesPage;
