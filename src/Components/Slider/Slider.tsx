import { useEffect, useRef, useState } from 'react';
import { actions } from '../../store';
import './Slider.css';

export interface SliderProps {
  value: number;
}

const Slider = ({ value }: SliderProps) => {
  const sliderRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [left, setLeft] = useState(0);

  const thumbSize = 32;
  const thumbSize_ = thumbSize / 2;

  useEffect(() => {
    const sliderRect = (
      sliderRef.current as unknown as HTMLDivElement
    ).getBoundingClientRect();
    const x = value * (sliderRect.width - thumbSize);

    setLeft((x / sliderRect.width) * 100);
  }, []);

  const updateValue = (e: React.MouseEvent) => {
    if (isMouseDown) {
      const sliderRect = (
        sliderRef.current as unknown as HTMLDivElement
      ).getBoundingClientRect();

      const x_ =
        e.pageX < sliderRect.left
          ? 0
          : e.pageX > sliderRect.left + sliderRect.width
          ? sliderRect.width
          : e.pageX - sliderRect.left;
      const x = Math.min(
        Math.max(x_, thumbSize_),
        sliderRect.width - thumbSize_
      );
      const newLeft = x / sliderRect.width;
      const newValue = (x - thumbSize_) / (sliderRect.width - thumbSize);

      setLeft(newLeft * 100);

      actions.setHeadshotRate(newValue);
    }
  };

  return (
    <>
      <div className="slider" ref={sliderRef}>
        <div className="slider-track"></div>
        <div
          className="slider-thumb"
          onMouseDown={() => setIsMouseDown(true)}
          onMouseMove={(e) => updateValue(e)}
          onMouseOut={() => setIsMouseDown(false)}
          onMouseUp={() => setIsMouseDown(false)}
          style={{ left: `${left}%` }}
        ></div>
      </div>
    </>
  );
};

export { Slider };
