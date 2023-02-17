import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  @HostBinding('class.overMouse') isHovering!: boolean;

  constructor() { }
  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.isHovering = true;
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.isHovering = false;
  }
}
