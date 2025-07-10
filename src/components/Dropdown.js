import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ value, setValue, options, icon: Icon, className = "" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[180px] transition"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {Icon && <Icon size={16} className="text-gray-500" />}
        <span className="flex-1 text-left truncate">{value}</span>
        <ChevronDown size={16} className="text-gray-400" />
      </button>
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                value === option
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
              aria-selected={value === option}
              role="option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
