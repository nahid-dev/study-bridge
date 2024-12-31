import { cn } from "@/lib/utils";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import React, { useState } from "react";
const INPUT_LABEL_STYLE = "text-tertiary";
const INPUT_BOX_STYLE =
  "px-5 py-4 focus:outline-none w-full rounded appearance-none block focus:border-blue-900 border";
const ERROR_TEXT_STYLE =
  "rounded-md bg-red-50 px-2 py-1 text-[13px] text-red-500 border border-red-200";

const PasswordInputField = ({
  label,
  id,
  name,
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
  const [isShowPass, setIsShowPass] = useState(false);
  const LABEL_FIELD_STYLE = cn(INPUT_LABEL_STYLE, labelClassName);
  const INPUT_FIELD_STYLE = cn(INPUT_BOX_STYLE, inputClassName);
  const ERROR_FIELD_STYLE = cn(ERROR_TEXT_STYLE, errorMsgClassName);
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className={LABEL_FIELD_STYLE}>
        {label}
      </label>
      <div className="relative">
        <input
          type={isShowPass ? "text" : "password"}
          id={id}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={INPUT_FIELD_STYLE}
          value={value}
          onChange={onChange}
          {...props}
        />
        <div
          onClick={() => setIsShowPass((prev) => !prev)}
          className="w-fit absolute right-3 top-5 hover:cursor-pointer"
        >
          {isShowPass ? (
            <Eye className="size-5 text-foreground" />
          ) : (
            <EyeOff className="size-5 text-foreground" />
          )}
        </div>
      </div>

      {(!!error || !!backendError) && (
        <p className={ERROR_FIELD_STYLE}>{error || backendError}</p>
      )}
    </div>
  );
};

export default PasswordInputField;
