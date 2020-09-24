const ThemeEnum = {
  FIRE: 'FIRE' as 'FIRE',
  GRASS: 'GRASS' as 'GRASS',
  SKY: 'SKY' as 'SKY',
};
type ThemeEnum = (typeof ThemeEnum)[keyof typeof ThemeEnum];
export {ThemeEnum};
