import './Text.css';

export enum TextMode {
  damageType,
  damageTypeLarge,
  default,
  percent,
  percentLarge,
  percentSmall,
  weaponName,
}

export interface TextProps {
  mode: TextMode;
  value: string;
}

const Text = ({ mode, value }: TextProps) => {
  const renderText = (mode: TextMode, value: string) => {
    let className = '';

    switch (mode) {
      case TextMode.damageType:
        className = 'damage-type';
        break;
      case TextMode.damageTypeLarge:
        className = 'damage-type-large';
        break;
      case TextMode.percent:
        className = 'percent';
        break;
      case TextMode.percentLarge:
        className = 'percent percent-large';
        break;
      case TextMode.percentSmall:
        className = 'percent percent-small';
        break;
      case TextMode.weaponName:
        className = 'weapon-name';
        break;
      default:
        className = 'default';
        break;
    }

    return <p className={`text ${className}`}>{value}</p>;
  };

  return <>{renderText(mode, value)}</>;
};

export { Text };
