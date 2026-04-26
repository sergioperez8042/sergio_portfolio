export function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="status-pill">
      <span className="ring" aria-hidden="true" />
      {children}
    </span>
  );
}
