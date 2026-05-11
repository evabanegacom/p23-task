import { ChevronDown } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import chartBg from '../assets/chart-bg.svg';

function roundedTopPath(
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): string {
  r = Math.min(r, w / 2, h);

  return [
    `M ${x + r} ${y}`,
    `H ${x + w - r}`,
    `Q ${x + w} ${y} ${x + w} ${y + r}`,
    `V ${y + h}`,
    `H ${x}`,
    `V ${y + r}`,
    `Q ${x} ${y} ${x + r} ${y}`,
    'Z',
  ].join(' ');
}

const BarWithCap = (props: any) => {
  const { x, y, width, height, value, background } = props;

  if (!width || !height || height < 1) return null;

  const r = width / 2;
  const shadowExtension = 30;

  const chartTop: number = background ? background.y : 0;
  const desiredShadowY = y - shadowExtension;
  const shadowY = Math.max(desiredShadowY, chartTop);
  const shadowHeight = y + height - shadowY;

  const showShadow = value < 100 && shadowY < y;

  return (
    <g>
      {/* Shadow bar behind - lighter gray */}
      {showShadow && (
        <path
          d={roundedTopPath(x, shadowY, width, shadowHeight, r)}
          fill="#9CA3AF"
          opacity={0.5}
        />
      )}

      {/* Main dark bar */}
      <path d={roundedTopPath(x, y, width, height, r)} fill="#0E0319" />

      {/* Value label inside bar */}
      <text
        x={x + width / 2}
        y={y + 18}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={10}
        fontWeight="700"
        fontFamily="Montserrat, sans-serif"
      >
        {value}%
      </text>
    </g>
  );
};

const ChartSection = () => {
  const chartData = [
    { day: 'Mon', value: 56 },
    { day: 'Tue', value: 89 },
    { day: 'Wed', value: 44 },
    { day: 'Thur', value: 67 },
    { day: 'Fri', value: 59 },
    { day: 'Sat', value: 87 },
    { day: 'Sun', value: 100 },
  ];

  return (
    <section className="relative rounded-3xl px-0 py-4 text-black overflow-hidden">

      {/* Chart container */}
      <div className="relative rounded-2xl overflow-hidden" style={{ height: 250 }}>

        {/* Background */}
        <img
          src={chartBg}
          alt="chart background"
          className="absolute inset-0 w-full h-full object-fill z-0"
        />

        {/* Top-left pill row: More + 7 days inside the SVG notch */}
        <div
          className="absolute z-20 flex items-center gap-5"
          style={{ top: 12, left: 4 }}
        >
          <button className="flex items-center gap-1 text-[11px] font-bold bg-[#D1BEF5] rounded-full px-3.5 py-1.5 shadow-sm mb-[2px]">
            More <ChevronDown className="w-3 h-3" />
          </button>
          <div className="text-[11px] font-semibold bg-white rounded-full px-3.5 py-1.5 shadow-sm mt-[2px]">
            7 days
          </div>
        </div>

        {/* Chart */}
        <div className="relative z-10 w-full h-full">
          {/* Baseline that protrudes to the left */}
          <div
            className="absolute bg-[#262A27] z-20"
            style={{
              height: 2.5,
              left: 4,
              right: 10,
              bottom: 33
            }}
          />
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 85, right: 10, left: 10, bottom: 5 }}
              barCategoryGap="18%"
            >
              <CartesianGrid
                stroke="#7a8a8550"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fill: '#4a5568', fontWeight: '500' }}
                dy={4}
              />

              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                ticks={[25, 50, 75, 100]}
                tickFormatter={(v: number) => `${v}%`}
                tick={{ fontSize: 9, fill: '#000000', fontWeight: '700' }}
                width={35}
              />

              <Bar
                dataKey="value"
                shape={<BarWithCap />}
                background={{ fill: 'transparent' }}
                isAnimationActive
                barSize={28}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;