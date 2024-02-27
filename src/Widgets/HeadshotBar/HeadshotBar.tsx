import { BarGauge, Card } from '../../Components';
import { Text, TextMode } from '../../Components/Text/Text';
import { useHeadshotRate } from '../../store';
import './HeadshotBar.css';

export interface HeadshotBarProps {
  title: string;
  weaponName: string;
}

const HeadshotBar = ({ title, weaponName }: HeadshotBarProps) => {
  const headshotRate = useHeadshotRate();

  return (
    <>
      <Card>
        <div className="info">
          <div className="value-title">
            <Text
              mode={TextMode.percent}
              value={`${(headshotRate * 100).toFixed(1)}%`}
            />
            <Text mode={TextMode.damageType} value={title} />
          </div>
          <Text mode={TextMode.weaponName} value={weaponName} />
        </div>
        <BarGauge value={headshotRate} />
      </Card>
    </>
  );
};

export { HeadshotBar };
