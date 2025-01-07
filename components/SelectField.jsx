"use client";
import { cn } from "@/lib/utils";
// import cn from "@/common/helpers/UtilKit";
import Select from "react-select";

const SELECT_LABEL_STYLES =
  "appearance-none block text-base font-semibold text-neutral-700";

export default function SelectField({
  label,
  name,
  id,
  defaultValue,
  className,
  options,
  onChange,
  placeholder,
  onClick,
  onInputChange,
  isLoading,
  value,
  error,
  backendError,
  isMulti = false,
  isClearable = false,
  horizontal = false,
  ...props
}) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused
        ? "rgba(5, 150, 105)"
        : "rgba(209, 213, 219)",
      boxShadow: state.isFocused
        ? "0 0 0 2px rgba(25, 200, 105)"
        : provided.boxShadow,
      border: state.isFocused ? "none" : provided.border,
      paddingTop: "3px",
      paddingBottom: "5px",
      whiteSpace: "nowrap",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled
        ? "rgb(200, 200, 200)"
        : (state.isFocused || state.isSelected) && !state.isMulti
        ? "rgb(5, 150, 105)"
        : provided.backgroundColor,
      color:
        (state.isFocused || state.isSelected) && !state.isMulti
          ? "white"
          : "rgb(15, 23, 42)",
      "&:hover": {
        backgroundColor: state.isDisabled
          ? "rgb(200, 200, 200)"
          : (state.isFocused || state.isSelected) && !state.isMulti
          ? "rgb(5, 150, 105)"
          : provided.backgroundColor,
        color:
          (state.isFocused || state.isSelected) && !state.isMulti
            ? "white"
            : "rgb(15, 23, 42)",
        cursor: state.isDisabled ? "not-allowed" : "pointer",

        // backgroundColor: "rgb(4, 120, 87)",
        // color: "white",
        // cursor: "pointer",
      },
      overflow: "hidden",
      fontSize: "14px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgb(15, 23, 42)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    input: (provided) => ({
      ...provided,
      "input:focus": {
        boxShadow: "none",
      },
    }),
  };
  return (
    <div
      className={cn("flex flex-col w-full gap-1", {
        "md:flex-row": horizontal,
      })}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label
        htmlFor={id}
        className={cn(SELECT_LABEL_STYLES, {
          "text-sm w-2/5": horizontal,
        })}
      >
        {label}
      </label>

      <div className={cn({ "flex flex-col w-full gap-2": horizontal })}>
        <Select
          name={name}
          id={id}
          value={value}
          styles={customStyles}
          classNamePrefix="select2-selection"
          placeholder={placeholder}
          options={options}
          noOptionsMessage={() => "No options"}
          isMulti={isMulti}
          onChange={onChange}
          onInputChange={onInputChange}
          isClearable={isClearable}
          defaultValue={defaultValue}
          isLoading={isLoading}
          {...props}
        />
      </div>

      {(!!error || !!backendError) && (
        <p className="rounded-md bg-red-50 px-2 py-1 mt-2 text-[13px] text-red-500 border border-red-200">
          {error || backendError}
        </p>
      )}
    </div>
  );
}
