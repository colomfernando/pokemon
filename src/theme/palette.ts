const palette = {
  primary: {
    main: '#52dee5',
    contrastText: '#000',
  },
  secondary: {
    main: '#f9c22e',
    contrastText: '#fff',
  },
  common: {
    black: '#000',
    white: '#fff',
    grey: '#e0e2db',
  },
};

export const hexToRgb = (hex: string): string => {
  if (!hex) return '';

  const hexReplace = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_m, r, g, b) => '#' + r + r + g + g + b + b
  );

  const subString = hexReplace.substring(1);
  const matchHex = subString.match(/.{2}/g) || [];
  const joinHex = matchHex.map((x) => parseInt(x, 16)).join(',');
  return joinHex;
};

export default palette;
