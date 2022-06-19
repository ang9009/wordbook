export interface Option {
  value: string;
  label: string;
}

export const themeOptions: Option[] = [
  { label: "Dark", value: "" },
  { label: "Light", value: "light" },
  { label: "Stealth", value: "stealth" },
];
