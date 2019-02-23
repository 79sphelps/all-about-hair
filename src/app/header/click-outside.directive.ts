import {Directive, ElementRef, Output, EventEmitter, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {}

    @Input() navbarOpen;
    @Output()
    public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside && this.navbarOpen) {
            this.clickOutside.emit(null);
        }
    }
}
