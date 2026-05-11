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

const BLEND = 18; // how many px the cap bleeds down into the dark bar (hides the base)

const BarWithCap = (props: any) => {
  const { x, y, width, height, value, background } = props;
  if (!width || !height) return null;

  const r = 6;
  const totalHeight = background?.height ?? height;
  const remainingHeight = totalHeight - height; // gap from bar top to 100%

  return (
    <g>
      {/* Cap: starts at the 100% ceiling, extends down by (remainingHeight + BLEND)
          so its bottom is buried inside the dark bar — fully invisible */}
      {remainingHeight > 0 && (
        <rect
          x={x}
          y={y - remainingHeight}
          width={width}
          height={remainingHeight + BLEND}
          rx={width / 2}
          ry={width / 2}
          fill="#00000022"
        />
      )}

      {/* Dark bar — drawn after cap so it paints over the cap's lower portion */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={r}
        ry={r}
        fill="#0E0319"
      />

      {/* Value label inside bar */}
      <text
        x={x + width / 2}
        y={y + 16}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={8}
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
    <section className="rounded-3xl bg-[#C1DAD7] p-4 text-black">
      <div className="flex items-center gap-2 mb-3">
        <button className="flex items-center gap-1 text-[10px] font-bold bg-[#D1BEF5] rounded-full px-3 py-1">
          More <ChevronDown className="w-3 h-3" />
        </button>
        <button className="text-[12px] font-medium bg-white rounded-full px-3 py-1 shadow-sm">
          7 days
        </button>
      </div>

      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 4, left: 0, bottom: 5 }}
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
              ticks={[0, 25, 50, 75, 100]}
              style={{ fontSize: 8, fill: '#262A27', fontWeight: '700' }}
              width={24}
            />

            <Tooltip
              cursor={{ fill: '#00000010' }}
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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