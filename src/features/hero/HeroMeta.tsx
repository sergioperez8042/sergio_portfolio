type MetaItem = { num: string; plus: string; lbl: string };

export function HeroMeta({ items }: { items: readonly MetaItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 pt-8 border-t border-white/[0.06]">
      {items.map((item) => (
        <div key={item.lbl} className="flex flex-col gap-1">
          <div className="text-[28px] font-extrabold tracking-tight text-white-100 leading-none">
            {item.num}
            {item.plus ? (
              <span className="text-[var(--color-accent)] ml-0.5">
                {item.plus}
              </span>
            ) : null}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-secondary">
            {item.lbl}
          </div>
        </div>
      ))}
    </div>
  );
}
