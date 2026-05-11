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

  // The top boundary = background.y (the Y position of value 100 on the chart)
  const chartTop: number = background ? background.y : 0;

  // Shadow starts at most maxShadowExtension above bar, but never above chartTop
  const desiredShadowY = y - maxShadowExtension;
  const shadowY = Math.max(desiredShadowY, chartTop);
  const shadowHeight = y + height - shadowY;

  const showShadow = value < 100 && shadowY < y;

  return (
    <g>
      {/* Shadow — rounded top only, clipped to chart top (100-mark) */}
      {showShadow && (
        <path
          d={roundedTopPath(x, shadowY, width, shadowHeight, r)}
          fill="#1a1a1a"
          opacity={0.28}
        />
      )}

      {/* Main bar — rounded top only */}
      <path
        d={roundedTopPath(x, y, width, height, r)}
        fill="#0E0319"
      />

      {/* Value label */}
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
    <section className="relative rounded-3xl bg-[#C1DAD7] p-4 text-black overflow-hidden">
      {/* Decorative Curve */}
      <div className="absolute top-0 left-0 w-52 h-28 bg-[#A8D4CC] rounded-br-[80px] -z-10" />

      <div className="flex items-center gap-2 mb-3 relative z-10">
        <button className="flex items-center gap-1 text-[10px] font-bold bg-[#D1BEF5] rounded-full px-3 py-1">
          More <ChevronDown className="w-3 h-3" />
        </button>
        <button className="text-[12px] font-medium bg-white rounded-full px-3 py-1 shadow-sm">
          7 days
        </button>
      </div>

      <div className="h-44 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 38, right: 4, left: 0, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid
              stroke="#00000020"
              vertical={false}
              horizontal={true}
            />
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
              isAnimationActive={true}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ChartSection;