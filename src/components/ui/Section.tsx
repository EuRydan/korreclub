interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "footer";
}

export default function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={className} style={{ width: "100%" }}>
      <div className="section-container">{children}</div>
    </Tag>
  );
}
