import { ChevIcon } from "@/lib/icons";

interface Props {
  items: string[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <div className="flex items-center" style={{ gap: 8, fontSize: 13, color: "#586478" }}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center" style={{ gap: 8 }}>
          {i > 0 && <ChevIcon size={12} />}
          <span
            style={{
              color: i === items.length - 1 ? "#0f1a30" : "#586478",
              fontWeight: i === items.length - 1 ? 600 : 400,
            }}
          >
            {item}
          </span>
        </span>
      ))}
    </div>
  );
}
