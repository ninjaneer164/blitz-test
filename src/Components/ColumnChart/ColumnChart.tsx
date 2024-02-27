import './ColumnChart.css';

export interface ColumnChartProps {
  values: number[];
}

const ColumnChart = ({ values }: ColumnChartProps) => {
  const max = values.reduce((p, c) => Math.max(p, c), 0);

  return (
    <>
      <div className="column-chart">
        <div className="columns">
          {values &&
            values.map((value, i) => {
              const h = (value / max) * 4;
              return (
                <div
                  className="column"
                  key={`column-chart-${i}`}
                  style={{ height: `${h}rem` }}
                ></div>
              );
            })}
        </div>
        <div className="level"></div>
      </div>
    </>
  );
};

export { ColumnChart };
