import { Bell, Search, SlidersHorizontal } from "lucide-react";
import avatarKwame from '../assets/avatar-kwame.svg'
import chineseLang from '../assets/chinese-lang.svg'
import connection from '../assets/connections.svg'
import avatarThabo1 from '../assets/avatar-thabo1.jpg'
import avatarThabo2 from '../assets/avatar-thabo2.jpg'
import DealRow from "./deal-row";
import ChartSection from "./chart";

export default function DashboardPage() {

  return (
    <div className="px-2 pt-4 space-y-4">
      {/* Header */}
      <header className="relative overflow-hidden rounded-xl bg-[#0E0319] px-5 py-8 flex items-center justify-between">
        {/* Left Arc */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full" />
        {/* Right Arc */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full" />

        <div className='ml-4'>
          <h1 className="text-xl font-extrabold leading-tight font-montserrat">
            Hello, Kwame!
          </h1>
          <p className="text-[12px] text-white/60 mt-0.5">
            Good morning!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
  aria-label="Notifications"
  className="relative text-white/90"
>
  <Bell className="w-5 h-5" strokeWidth={1.8} />

  <span className="absolute -top-[2px] right-[2px] text-[10px] font-bold leading-none text-white">
    Z
  </span>
</button>
          <div className="w-15 h-15 rounded-full overflow-hidden ring-2 bg-[#D6E264] mr-4">
            <img
              src={avatarKwame}
              alt="Kwame"
              className="w-full h-full object-cover"
              width={64}
              height={61}
            />
          </div>
        </div>
      </header>

      {/* Network Stats */}
      <section>
        <h2 className="text-[10px] font-semibold px-1 text-[#0E0319] ml-4 font-montserrat">Network Stats</h2>
        <div className="flex items-center gap-3">
          <div className="flex-1 justify-between rounded-full bg-white px-5 py-2 flex items-center gap-3 shadow-[0px_1px_2px_2px_#00000026] border-[1.5px] border-[#0E0319]">
            <div className='flex gap-4 items-center justify-center'>
              <img src={chineseLang} alt="Chinese Language" className="w-[30px] h-[30px]" />
              <div className="leading-tight">
                <div className="text-xl font-bold bg-linear-to-b from-[#EE8821] to-[#F05831] bg-clip-text text-transparent">
                  45k
                </div>
                <div className="text-[13px] text-[#727677] -mt-0.5">Leads</div>
              </div>
            </div>

            <div className='flex gap-4 items-center justify-center'>
              <img src={connection} alt="Connections" className="w-7.5 h-7.5" />
              <div className="leading-tight">
                <div className="text-xl font-bold text-[#0496FF]">75k</div>
                <div className="text-[13px] text-[#727677] -mt-0.5">Connections</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex -space-x-2">
              <img
                src={avatarKwame}
                alt="Kwame"
                className="w-6 h-6 rounded-full object-cover border border-[#0F4B37] ring-2 ring-[#0F4B37]"
              />
              <img
                src={avatarThabo1}
                alt="Thabo 1"
                className="w-6 h-6 rounded-full object-cover border border-[#0F4B37] ring-2 ring-[#0F4B37]"
              />
              <img
                src={avatarThabo2}
                alt="Thabo 2"
                className="w-6 h-6 rounded-full object-cover border border-[#0F4B37] ring-2 ring-[#0F4B37]"
              />
            </div>
            <span className="text-[8px] text-[#0E0319]">200k+ People</span>
            <span className="text-[8px] mt-0.5 shadow-[0px_1px_2px_2px_#00000026] font-bold bg-[#D1BEF5] text-[#262A27] rounded-full px-4 py-2">
              Active Members
            </span>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <ChartSection />

      {/* Tab Navigation (Directory / Smart matches / Active Leads) */}
      <nav className="flex items-center justify-between shadow-[0px_1px_2px_0px_#0000004D,_0px_4px_7px_3px_#00000026] bg-[#F1EEEE] rounded-full p-1 text-[12px] border-[0.5px] border-solid border-[#F9F9F9]">
        <button className="flex-1 py-2 rounded-full text-[#000000] text-xs">Directory</button>
        <button className="flex-1 py-2 text-xs rounded-full bg-[#D1BEF5] text-[#0E0319] font-semibold">
          Smart matches
        </button>
        <button className="flex-1 py-2 rounded-full text-[#000000] text-xs">Active Leads</button>
      </nav>

      {/* Deal Cards Section */}
      <section className="rounded-3xl bg-[#0E0319] p-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="text-[12px] leading-tight">
            <div className="text-white/70 text-[10px] italic font-normal">Let's find your</div>
            <div className="font-bold italic text-sm">next deal</div>
          </div>
          <div className="flex-1 border border-[#2DD4A8]/30 flex items-center gap-2 bg-[#D3F1E729] italic rounded-full px-3 py-2">
            <input placeholder="Search" className="flex-1 bg-transparent text-[12px] outline-none placeholder:text-white/50" />
            <Search className="w-4 h-4 text-white/70" />
          </div>
          <button className="w-9 h-9 rounded-full bg-[oklch(0.22_0.03_275)] flex items-center justify-center">
            <SlidersHorizontal className="w-5.5 h-5.5" />
          </button>
        </div>

        <DealRow deal={{
          id: 1,
          name: "Thabo Molefe",
          location: "Johannesburg, South Africa",
          title: "CFO",
          industry: "Renewable Energy",
          rating: 4.6,
          img: avatarThabo1,
        }} />
        <div className="h-px bg-white/10" />
        <DealRow deal={{
          id: 2,
          name: "Thabo Molefe",
          location: "Johannesburg, South Africa",
          title: "CFO",
          industry: "Renewable Energy",
          rating: 4.6,
          img: avatarThabo2,
        }} />
      </section>
    </div>
  );
}