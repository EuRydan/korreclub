"use client";

import { useState } from "react";
import { DROP } from "@/lib/drop";
import SystemGrid from "@/components/ui/SystemGrid";
import TypographicListItem from "@/components/ui/TypographicListItem";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SystemGrid label="POR QUE DIFERENTE?" id="faq">
      <div className="flex flex-col w-full border-b border-[#C7C7C7]">
        {DROP.faq.map((faqItem, i) => (
          <TypographicListItem
            key={i}
            index={`00${i + 1}`}
            title={faqItem.question}
            description={faqItem.answer}
            isExpanded={openIndex === i}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
    </SystemGrid>
  );
}
