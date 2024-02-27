import { getBlocks } from '../../utils';
import './BarGauge.css';

export interface BarGaugeProps {
  value: number;
}

const BarGauge = ({ value }: BarGaugeProps) => {
  const blocks = getBlocks(14, value);

  return (
    <>
      <div className="bar-gauge">
        {blocks &&
          blocks.map((block, i) => (
            <div
              className={`block ${block.active ? 'active' : ''}`}
              key={`block-${i}`}
            ></div>
          ))}
      </div>
    </>
  );
};

export { BarGauge };
