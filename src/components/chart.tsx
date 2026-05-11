import { ChevronDown } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from 'recharts';

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
        <button className="text-[12px] font-medium bg-white rounded-full px-3 py-1 shadow-sm">7 days</button>
      </div>

      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
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
              tick={{ fontSize: 10, fill: '#00000060' }}
              ticks={[0, 25, 50, 75, 100]}
              style={{ fontSize: 8, fill: '#262A27', fontWeight: '700' }}
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
              fill="#0E0319"
              radius={[8, 8, 0, 0]}
            >
              {/* Value Labels Inside Bar */}
              <LabelList
                dataKey="value"
                position="top"
                offset={-18}
                fill="#ffffff"
                fontSize={8}
                fontWeight="700"
                formatter={(value) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ChartSection;