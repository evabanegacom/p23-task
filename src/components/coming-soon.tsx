import type { TabId } from "../App";

const TAB_LABELS: Record<TabId, string> = {
  dashboard: 'Dashboard',
  messages: 'Messages',
  deals: 'Deals',
  search: 'Search',
  network: 'Network',
};

export default function ComingSoonPage({ tab, icon }: { tab: TabId; icon: React.ReactNode }) {
  const gradients: Record<TabId, string> = {
    dashboard: '',
    messages: 'from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]',
    deals: 'from-[#2DD4A8] via-[#0ea5e9] to-[#6366f1]',
    search: 'from-[#f59e0b] via-[#ef4444] to-[#ec4899]',
    network: 'from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6]',
  };

  const bgPatterns: Record<TabId, string> = {
    dashboard: '',
    messages: 'bg-[#1a1040]',
    deals: 'bg-[#0a1a2e]',
    search: 'bg-[#1c0a00]',
    network: 'bg-[#0a1520]',
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 ${bgPatterns[tab]}`}>
      {/* Decorative circles */}
      <div className="absolute top-20 left-8 w-32 h-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl"
        style={{ background: `linear-gradient(135deg, #2DD4A8, #6366f1)` }}
      />
      <div className="absolute bottom-40 right-6 w-40 h-40 rounded-full opacity-8 blur-3xl"
        style={{ background: `linear-gradient(135deg, #f59e0b, #ef4444)` }}
      />

      {/* Icon container */}
      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${gradients[tab]} flex items-center justify-center mb-6 shadow-2xl`}>
        <div className="text-white">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-2 font-montserrat">
        {TAB_LABELS[tab]}
      </h2>

      {/* Coming Soon badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-4 border border-white/10">
        <div className="w-2 h-2 rounded-full bg-[#2DD4A8] animate-pulse" />
        <span className="text-sm font-medium text-white/80">Coming Soon</span>
      </div>

      {/* Description */}
      <p className="text-center text-white/50 text-sm max-w-[260px] leading-relaxed">
        We're crafting something amazing for you. This feature will be available in the next update.
      </p>

      {/* Decorative line */}
      <div className="mt-8 w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}