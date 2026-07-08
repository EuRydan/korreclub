"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface SpotsCounterProps {
  sold: number;
  total: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { duration: 1500, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on("change", (v) => setCurrent(v));
    return unsubscribe;
  }, [value, spring, display]);

  return <span>{current}</span>;
}

export default function SpotsCounter({ sold, total }: SpotsCounterProps) {
  const percentage = (sold / total) * 100;

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-[#FAFAFA] font-[family-name:var(--font-display)] text-sm uppercase tracking-wider">
          <AnimatedNumber value={sold} /> DE {total} GARANTIDAS
        </span>
        <span className="text-white/50 text-xs">
          {total - sold} restantes
        </span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#1B3FD3] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>
    </div>
  );
}
