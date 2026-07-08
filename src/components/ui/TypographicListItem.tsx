"use client";

import { motion } from "framer-motion";

interface TypographicListItemProps {
  index: string;
  title: string;
  description?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

export default function TypographicListItem({
  index,
  title,
  description,
  onClick,
  isExpanded = false,
}: TypographicListItemProps) {
  return (
    <motion.div
      className="border-t border-[#C7C7C7] w-full flex flex-col md:flex-row items-start py-[60px] md:py-[100px] cursor-pointer group"
      onClick={onClick}
    >
      {/* Index Sidebar */}
      <div className="w-full md:w-48 shrink-0 mb-6 md:mb-0">
        <span className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-[14px] uppercase tracking-[0.2em] font-bold">
          {index}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full">
        <div className="flex items-start justify-between w-full gap-8">
          <h3 className="font-[family-name:var(--font-display)] text-[#141414] group-hover:text-[#1351AA] transition-colors duration-300 ease-linear text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] pr-6">
            {title}
          </h3>
          {description && (
            <span className="text-[#1351AA] text-3xl font-light shrink-0 transition-transform duration-300 ease-linear mt-1" style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>
              +
            </span>
          )}
        </div>
        
        {/* Expandable content for FAQ use cases */}
        {description && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="overflow-hidden"
          >
            <p className="mt-8 text-[#444343] text-xl leading-relaxed max-w-4xl font-[family-name:var(--font-inter)]">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
