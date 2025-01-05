import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import {
  CartesianGrid,
  Dot,
  LabelList,
  Line,
  LineChart,
  XAxis,
} from "recharts";

// 사용자의 위험도 점수
// 연도별, 월별 (검사/챗 날짜)
// 점수별 색상
const chartData = [
  { month: "1", score: 86 },
  { month: "2", score: 50 },
  { month: "3", score: 37 },
  { month: "4", score: 73 },
  { month: "5", score: 73 },
  { month: "6", score: 9 },
  { month: "7", score: 14 },
  { month: "8", score: 14 },
  { month: "9", score: 24 },
  { month: "10", score: 21 },
  { month: "11", score: 24 },
  { month: "12", score: 47 },
];

const chartConfig = {
  score: {
    label: "위험도 점수",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const getColorByScore = (score: number) => {
  if (score >= 80) return "#ED2F1A"; // 긴급
  if (score >= 60) return "#FF7D10"; // 위험
  if (score >= 30) return "#F9DC34"; // 경고
  return "#0CE538";
};

const Chart = () => {
  return (
    <div className="w-[500px] h-64">
      <ChartContainer config={chartConfig}>
        <LineChart
          height={600}
          width={400}
          accessibilityLayer
          data={chartData}
          margin={{
            top: 24,
            left: 24,
            right: 24,
          }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="score"
            type="natural"
            stroke="#919add"
            strokeWidth={2}
            dot={(props) => {
              const { cx, cy, payload } = props;
              return (
                <Dot
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill={getColorByScore(payload.score)}
                  stroke={getColorByScore(payload.score)}
                />
              );
            }}
            activeDot={{
              r: 6,
            }}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default Chart;
