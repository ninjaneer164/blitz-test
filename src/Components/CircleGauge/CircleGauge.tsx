import { Text, TextMode } from '../Text/Text';
import './CircleGauge.css';

export interface CircleGaugeProps {
  backgroundColor: string;
  value: number;
}

const CircleGauge = ({ backgroundColor, value }: CircleGaugeProps) => {
  const percent = value * 0.65 * 100;

  return (
    <>
      <div className="circle-gauge">
        <div
          className="circle-gauge-outer_"
          style={{
            background: `conic-gradient(${backgroundColor} 35%, var(--circle-gauge-bg-color) 0)`,
          }}
        ></div>
        <div
          className="circle-gauge-outer"
          style={{
            background: `conic-gradient(var(--circle-gauge-active-bg-color) ${percent}%, rgba(0, 0, 0, 0) 0)`,
          }}
        ></div>
        <div className="circle-gauge-inner" style={{ backgroundColor }}>
          <Text
            mode={TextMode.percentLarge}
            value={`${Math.round(value * 100)}%`}
          />
        </div>
      </div>
    </>
  );
};

export { CircleGauge };
