export default function NavBtn({
  children,
  active,
  onClick,
  label,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={
        'w-12 h-12 rounded-2xl cursor-pointer flex items-center justify-center transition-all duration-300 relative ' +
        (active
          ? 'bg-[#2DD4A8] text-[#0E0319] shadow-[0_0_16px_rgba(45,212,168,0.35)] scale-110'
          : 'text-white/70 hover:text-white/90 active:scale-95')
      }
    >
      {children}
      {/* Active indicator dot */}
      {active && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2DD4A8]" />
      )}
    </button>
  )
}
