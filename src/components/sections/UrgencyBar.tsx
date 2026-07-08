"use client";

import { motion } from "framer-motion";

export default function UrgencyBar() {
  return (
    <div style={{ width: "100%", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <div
        style={{
          maxWidth: "1152px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "16px",
          paddingBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 md:gap-6"
        >
          <span className="shrink-0 w-1.5 h-1.5 bg-[#1B3FD3] rounded-full animate-pulse" />
          <p className="font-[family-name:var(--font-display)] text-[#FAFAFA] text-[11px] md:text-sm uppercase tracking-[0.15em] text-center">
            LOTE FUNDADOR · SÓ AS 30 PRIMEIRAS · SEU NOME NO MURAL
          </p>
          <span className="shrink-0 w-1.5 h-1.5 bg-[#1B3FD3] rounded-full animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
