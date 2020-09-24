import {ThemeModel} from './model/theme.model';
import {ThemeEnum} from './enums/theme.enum';

export const THEMES_LIST: ThemeModel[] = [
  {
    name: ThemeEnum.FIRE,
    className: 'theme-fire',
  },
  {
    name: ThemeEnum.GRASS,
    className: 'theme-grass',
  },
  {
    name: ThemeEnum.SKY,
    className: 'theme-sky',
  }
];
