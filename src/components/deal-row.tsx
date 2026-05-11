import { MapPin, Star } from 'lucide-react';

type Deal = {
  id: number;
  name: string;
  location: string;
  title: string;
  industry: string;
  rating: number;
  img: string;
};

export default function DealRow({ deal }: { deal: Deal }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={deal.img}
        alt={deal.name}
        loading="lazy"
        className="w-20.75 h-16.5 rounded-l-3xl object-cover shrink-0 p-2"
      />

      {/* Middle content */}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[13px] text-[#F3F0E9]">
          {deal.name}
        </div>

        <div className="flex items-center gap-1 text-[11px] text-white/45 mt-0.5 mb-1.5">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="text-[#F3F0E9] font-light text-[8px]">
            {deal.location}
          </span>
        </div>

        <div className="text-[#27E6A7] text-[8px] font-medium">Title</div>
        <div className="font-bold text-white text-[11px]">{deal.title}</div>
      </div>

      {/* Right side: Rating + Industry stacked */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <div className="flex items-center gap-1">
          <span className="text-base text-white">{deal.rating}</span>
          <Star className="w-4 h-4 fill-[#27E6A7] text-[#27E6A7]" />
        </div>

        <div className="text-left">
          <div className="font-medium text-[#27E6A7] text-[8px]">
            Industry
          </div>
          <div className="font-bold text-white text-[11px]">
            {deal.industry}
          </div>
        </div>
      </div>
    </div>
  );
}