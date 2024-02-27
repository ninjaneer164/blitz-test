import { Card, Slider } from '../../Components';
import { Text, TextMode } from '../../Components/Text/Text';
import { useHeadshotRate } from '../../store';

export interface HeadshotSliderProps {
  title: string;
  weaponName: string;
}

const HeadshotSlider = ({ title, weaponName }: HeadshotSliderProps) => {
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
        <Slider value={headshotRate} />
      </Card>
    </>
  );
};

export { HeadshotSlider };
