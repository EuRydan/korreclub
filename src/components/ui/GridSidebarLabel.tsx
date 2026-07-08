"use client";

interface GridSidebarLabelProps {
  label: string;
}

export default function GridSidebarLabel({ label }: GridSidebarLabelProps) {
  return (
    <div className="sticky top-32">
      <span className="block font-bold text-[12px] uppercase tracking-[0.2em] text-[#7A7A7A]">
        {label}
      </span>
    </div>
  );
}
