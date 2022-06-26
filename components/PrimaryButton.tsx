import React from "react";

interface Props {
  text: string;
  onClick?: (...any: any) => any;
  buttonType?: "submit" | "reset" | "button";
  padding?: string;
  disabled?: boolean;
  width?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  color?: string;
  margin?: string;
  background?: string;
  border?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
}

const PrimaryButton: React.FC<Props> = ({
  buttonType = "button",
  text,
  onClick,
  disabled = false,
  color = "#fff",
  width = "max-content",
  border = "none",
  mt,
  mb,
  ml,
  mr,
  margin,
  background = "var(--primaryButtonColor)",
  hoverBgColor,
  hoverTextColor,
  padding,
}) => {
  return (
    <>
      <button type={buttonType} onClick={onClick} disabled={disabled}>
        {text}
      </button>

      <style jsx>{`
        button {
          margin-top: ${mt};
          margin-bottom: ${mb};
          margin-left: ${ml};
          margin-right: ${mr};
          margin: ${margin};
          padding: ${padding};
          border-radius: 5px;
          border: ${border};
          cursor: pointer;
          background: ${background};
          color: ${color};
          width: ${width};
          transition: all 0.2s;
        }

        button:hover {
          background: ${hoverBgColor};
          color: ${hoverTextColor};
        }
      `}</style>
    </>
  );
};

export default PrimaryButton;
