import { ChevronDown } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
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

  const r = 9;
  const maxShadowExtension = 26;

  const chartTop: number = background ? background.y : 0;
  const desiredShadowY = y - maxShadowExtension;
  const shadowY = Math.max(desiredShadowY, chartTop);
  const shadowHeight = y + height - shadowY;

  const showShadow = value < 100 && shadowY < y;

  return (
    <g>
      {showShadow && (
        <path
          d={roundedTopPath(x, shadowY, width, shadowHeight, r)}
          fill="#1a1a1a"
          opacity={0.28}
        />
      )}

      <path d={roundedTopPath(x, y, width, height, r)} fill="#0E0319" />

      <text
        x={x + width / 2}
        y={y + 17}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={9}
        fontWeight="700"
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
    <section className="relative rounded-3xl p-4 text-black overflow-hidden">

      {/* Chart container */}
      <div className="h-44 relative rounded-2xl overflow-hidden">

        {/* Background */}
        <img
          src={chartBg}
          alt="chart background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Top-left pill row: More + 7 days side by side */}
<div className="absolute left-2 z-20 flex items-center gap-2" style={{ top: -5, left: 1 }}>
              <button className="flex items-center gap-1 text-[11px] font-bold bg-[#D1BEF5] rounded-full px-3 py-1.5">
            More <ChevronDown className="w-3 h-3" />
          </button>
          <div className="text-[11px] font-medium bg-white rounded-full px-3 py-1.5 shadow-sm">
            7 days
          </div>
        </div>

        {/* Chart */}
        <div className="relative z-10 w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 38, right: 4, left: 0, bottom: 5 }}
              barCategoryGap="20%"
            >
              <CartesianGrid stroke="#00000020" vertical={false} />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 8, fill: '#00000070', fontWeight: '400' }}
              />

              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                style={{ fontSize: 8, fill: '#262A27', fontWeight: '700' }}
                width={24}
              />

              <Tooltip
                cursor={{ fill: '#00000010' }}
                contentStyle={{
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                }}
              />

              <Bar
                dataKey="value"
                shape={<BarWithCap />}
                background={{ fill: 'transparent' }}
                isAnimationActive
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;