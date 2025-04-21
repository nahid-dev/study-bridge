"use client";

import { useState } from "react";
// import cn from "@/common/helpers/UtilKit";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

const SEARCH_LABEL_STYLES =
  "appearance-none block font-semibold text-neutral-700";
const SEARCH_BOX_STYLES =
  "appearance-none block pr-10 w-full rounded-md border border-gray-300 py-2.5 font-normal focus:border-primary-500 focus:outline-none focus:ring-primary-500 cursor-pointer pl-2";

export default function SearchByTextField({
  id,
  name,
  label,
  placeholder,
  className,
  value = "",
  onChange,
  onFocus,
  onReset,
}) {
  const SEARCH_FIELD_STYLES = cn(SEARCH_BOX_STYLES, className);
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={id} className={SEARCH_LABEL_STYLES}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        className={SEARCH_FIELD_STYLES}
      />

      {value.length > 0 ? (
        <button onClick={onReset} className="absolute top-[18px] right-3">
          <XMarkIcon className="size-5 text-neutral-500" />
        </button>
      ) : (
        <button className="absolute text-primary-600 top-[18px] right-3">
          <MagnifyingGlassIcon className="size-5" />
        </button>
      )}
    </div>
  );
}
