import { GroupBase, StylesConfig } from "react-select";
import { Option } from "./data";

export const reactSelectStyles: StylesConfig<
  Option,
  false,
  GroupBase<Option>
> = {
  valueContainer: (provided) => ({
    ...provided,
    padding: "15px 15px",
    fontSize: "0.8rem",
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: "0.8rem",
    width: "20vw",
    borderRadius: "7px",
    boxShadow: "none",
    background: "var(--cardBackgroundColor)",
  }),
  menuList: (provided) => ({
    ...provided,
    borderRadius: "7px",
    border: "1px solid var(--borderColor)",
    boxShadow: "none",
    background: "var(--cardBackgroundColor)",
    "&:hover": {},
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "9px",
    border: "1px solid var(--borderColor)",
    background: "var(--cardBackgroundColor)",
    cursor: "pointer",
    boxShadow: "none",
    marginTop: "20px",
    width: "20vw",
    "&:hover": {},
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    color: "var(--secondaryTextColor)",
    "&:hover": {
      backgroundColor: "var(--cardHoverColor)",
    },
    padding: "10px 16px",
    backgroundColor: state.isSelected
      ? "var(--selectedOptionBgColor)"
      : "var(--cardBackgroundColor)",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--primaryTextColor)",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--borderColor)",
  }),
};
