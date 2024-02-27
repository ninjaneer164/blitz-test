import './BarChart.css';

export interface BarChartProps {
  title: string;
  value: number;
}

const BarChart = ({ title, value }: BarChartProps) => {
  return (
    <>
      <div className="bar-chart">
        <div className="info-wrapper">
          <div className="title">{title}</div>
          <div className="value">{value}</div>
        </div>
        <div className="bar-wrapper">
          <div className="bar"></div>
          <div className="bar bar-active" style={{ width: '98%' }}></div>
          <div className="value-indicator" style={{ left: '98%' }}></div>
          <div className="avg-indicator" style={{ left: '83%' }}></div>
        </div>
      </div>
    </>
  );
};

export { BarChart };
