"use client";

import GridSidebarLabel from "./GridSidebarLabel";

interface SystemGridProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SystemGrid({
  label,
  children,
  className = "",
  id,
}: SystemGridProps) {
  return (
    <section id={id} className={`w-full border-t border-[#C7C7C7] ${className}`}>
      <div 
        className="mx-auto w-[90%] md:w-[85%] max-w-[1440px]"
        style={{ paddingTop: '160px', paddingBottom: '160px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[96px] relative">
          {/* Sidebar Label (Cols 1-3) */}
          <div className="md:col-span-3 border-l-4 md:border-l-0 border-[#1351AA] pl-4 md:pl-0">
            <GridSidebarLabel label={label} />
          </div>

          {/* Main Content (Cols 4-12) */}
          <div className="md:col-span-9">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
