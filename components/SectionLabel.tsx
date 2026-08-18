export default function SectionLabel({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: string;
}) {
  return (
    <div className="sectionLabel">
      {index && <span className="sectionIndex">{index}</span>}
      <span>{children}</span>
    </div>
  );
}
