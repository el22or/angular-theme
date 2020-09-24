import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {ThemeEnum} from '../enums/theme.enum';
import {ThemeModel} from '../model/theme.model';
import {THEMES_LIST} from '../themes-list';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnChanges {
  @Input() appTheme: ThemeEnum;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTheme']) {
      const theme = THEMES_LIST.find((t: ThemeModel) => t.name === this.appTheme);
      if (!theme) {
        console.error(`Theme ${this.appTheme} is not defined.`);
      } else {
        this.renderer.addClass(this.elementRef.nativeElement, theme.className);
      }
    }
  }
}
