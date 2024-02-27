export const getBlocks = (length: number, value: number) => {
  if (value === 0) {
    return Array.from({ length }, () => ({
      active: false,
    }));
  }

  const increment = 0.75 / (length - 1);
  const blocks = Array.from({ length }, (_, i) => ({
    active: value >= i * increment,
  }));

  return blocks;
};
