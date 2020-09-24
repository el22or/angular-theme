import {NgModule} from '@angular/core';
import {ThemeDirective} from './directives/theme.directive';

@NgModule({
  exports: [
    ThemeDirective,
  ],
  declarations: [
    ThemeDirective,
  ]
})
export class ThemeModule {
}
