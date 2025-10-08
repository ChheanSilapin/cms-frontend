export const currency = (n, decimals = 0) => {
  const num = Number(n || 0);
  return num.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};
export const dateTime = (d) => new Date(d).toLocaleString();
