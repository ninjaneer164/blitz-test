import { useEffect, useState } from 'react';
import { BarChart, Card, CircleGauge, ColumnChart } from '../../Components';
import { Text, TextMode } from '../../Components/Text/Text';
import { useHeadshotRate } from '../../store';
import './HeadshotStats.css';

export interface HeadshotStatsProps {
  title: string;
}

const HeadshotStats = ({ title }: HeadshotStatsProps) => {
  const [colValues, setColValues] = useState<number[]>([]);
  const headshotRate = useHeadshotRate();

  useEffect(() => {
    const values = [
      ...Array.from({ length: 14 }, () => Math.random() * headshotRate * 0.75),
      headshotRate,
    ];
    setColValues(values);
  }, []);

  return (
    <>
      <Card>
        <div className="stats-wrapper">
          <CircleGauge backgroundColor="rgb(19, 22, 28)" value={headshotRate} />
          <div className="title-wrapper">
            <Text mode={TextMode.damageTypeLarge} value={title} />
          </div>
          <div className="stats-detail">
            <Text
              mode={TextMode.percentSmall}
              value={`${Math.round(headshotRate * 100)}%`}
            />
            <span>&nbsp;</span>
            <Text
              mode={TextMode.default}
              value="higher than your last 15 average"
            />
          </div>
          <div className="column-chart-wrapper">
            <ColumnChart values={colValues} />
          </div>
          <div className="bar-chart-wrapper">
            <BarChart title="Statistics" value={999} />
          </div>
          <div className="bar-chart-wrapper">
            <BarChart title="Statistics" value={999} />
          </div>
          <div className="bar-chart-wrapper">
            <BarChart title="Statistics" value={999} />
          </div>
        </div>
      </Card>
    </>
  );
};

export { HeadshotStats };
