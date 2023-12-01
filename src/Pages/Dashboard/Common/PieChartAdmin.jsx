import PropTypes from "prop-types";

import { Cell, Legend, Pie, PieChart } from "recharts";

const COLORS = ["#B31312", "#00C49F", "#FFBB28", "#2B2A4C", "#0088FE"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.05;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index % COLORS.length]}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartAdmin = ({ stats }) => {
  const data = stats.map(({ data, title }) => ({ name: title, value: data }));

  return (
    <div className="flex justify-center w-full overflow-x-auto">
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`sector-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

PieChartAdmin.propTypes = {
  stats: PropTypes.array,
};

export default PieChartAdmin;
