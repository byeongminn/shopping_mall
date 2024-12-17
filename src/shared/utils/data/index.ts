export const numberRounded = (value: number) => {
  return Math.round(value * 10) / 10;
};

export const getSalePercent = (regularPrice: number, salePrice: number) => {
  return Math.floor(((regularPrice - salePrice) / regularPrice) * 100);
};
