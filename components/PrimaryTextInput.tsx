import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  placeholder: string;
  name: string;
  backgroundColor?: string;
  border?: string;
  padding?: string;
  margin?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  borderRadius?: string;
  fontSize?: string;
  width?: string;
  minWidth?: string;
  required?: boolean;
  inputType?: HTMLInputTypeAttribute;
  register?: UseFormRegister<any>;
  boxShadow?: string;
  focusOutline?: string;
  color?: string;
  error?: {
    message?: string;
  };
}

const PrimaryTextInput: React.FC<Props> = ({
  placeholder,
  name,
  backgroundColor,
  border,
  padding = "12px 18px",
  margin,
  mt,
  mb,
  ml,
  mr,
  borderRadius = "4px",
  color = "var(--primaryTextColor)",
  fontSize = "0.8rem",
  width = "100%",
  minWidth = "0",
  required = true,
  inputType = "text",
  boxShadow,
  focusOutline,
  register,
  error,
}) => {
  return (
    <>
      <div>
        <input
          className={error?.message && "invalid"}
          type={inputType}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          {...(register && register(name))}
        />
      </div>

      <style jsx>{`
        div {
          margin-top: ${mt};
          margin-bottom: ${mb};
          margin-left: ${ml};
          margin-right: ${mr};
          width: ${width};
          min-width: ${minWidth};
          height: fit-content;
        }

        input {
          margin: ${margin};
          background: ${backgroundColor};
          outline: ${border};
          border: none;
          padding: ${padding};
          border-radius: ${borderRadius};
          font-size: ${fontSize};
          box-shadow: ${boxShadow};
          transition: all 0.05s;
          color: ${color};
          width: 100%;
        }

        input:focus {
          outline: ${focusOutline}
          outline-offset: 0;
        }

        input.invalid {
          outline-color: var(--errorColor);
        }

        .err-msg {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default PrimaryTextInput;
