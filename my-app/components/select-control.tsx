"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type SelectControlProps = {
  icon: ReactNode;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

export function SelectControl({
  icon,
  label,
  value,
  options,
  onChange,
}: SelectControlProps) {
  return (
    <label className="control-surface group flex min-h-10 w-full min-w-0 items-center gap-2 rounded-[8px] border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-slate-300 lg:gap-3 lg:px-4">
      <span className="text-slate-500">{icon}</span>
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 font-medium text-slate-700 outline-none focus:ring-0"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="size-4 text-slate-400 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
      />
    </label>
  );
}
