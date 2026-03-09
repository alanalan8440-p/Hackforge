export const normalizeArray = (arr) => {
  if (!arr) return [];
  return arr.map(i => i.toLowerCase());
};