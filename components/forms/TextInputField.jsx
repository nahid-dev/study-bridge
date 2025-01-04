import { cn } from "@/lib/utils";
import React from "react";
const INPUT_LABEL_STYLE = "";
const INPUT_BOX_STYLE =
  "px-5 py-4 focus:outline-none w-full rounded appearance-none block focus:border-blue-900 border";
const ERROR_TEXT_STYLE =
  "rounded-md bg-red-50 px-2 py-1 text-[13px] text-red-500 border border-red-200";

const TextInputField = ({
  label,
  id,
  name,
  type = "text",
  defaultValue,
  placeholder,
  labelClassName,
  inputClassName,
  errorMsgClassName,
  value,
  onChange,
  error,
  backendError,
  ...props
}) => {
  const LABEL_FIELD_STYLE = cn(INPUT_LABEL_STYLE, labelClassName);
  const INPUT_FIELD_STYLE = cn(INPUT_BOX_STYLE, inputClassName);
  const ERROR_FIELD_STYLE = cn(ERROR_TEXT_STYLE, errorMsgClassName);
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className={LABEL_FIELD_STYLE}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={INPUT_FIELD_STYLE}
        value={value}
        onChange={onChange}
        {...props}
      />

      {(!!error || !!backendError) && (
        <p className={ERROR_FIELD_STYLE}>{error || backendError}</p>
      )}
    </div>
  );
};

export default TextInputField;
