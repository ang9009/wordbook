import { GroupBase, StylesConfig } from "react-select";
import { Option } from "./data";

export const reactSelectStyles: StylesConfig<
  Option,
  false,
  GroupBase<Option>
> = {
  valueContainer: (provided) => ({
    ...provided,
    padding: "10px 15px",
    fontSize: "0.8rem",
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: "0.8rem",
    outline: "none",
    width: "20vw",
  }),
  menuList: (provided) => ({
    ...provided,
    outline: "none",
    border: "none",
    background: "var(--cardBackgroundColor)",
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "12px",
    border: "1px solid var(--primaryBorderColor)",
    background: "var(--cardBackgroundColor)",
    cursor: "pointer",
    boxShadow: "none",
    marginTop: "20px",
    width: "20vw",
    "&:hover": {},
  }),
  option: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--pageHeadingColor)",
  }),
};
