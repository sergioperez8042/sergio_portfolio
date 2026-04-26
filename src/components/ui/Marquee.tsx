type Props = { items: readonly string[] };

export function Marquee({ items }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
