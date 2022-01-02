import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[addOptionSelected]'
})

export class AddOptionSelectedDirective implements AfterViewChecked,
 AfterContentChecked,
 OnDestroy {
    @Input('addOptionSelected') defaultValue : string = '';
    optionElem : HTMLOptionElement = null;
    constructor(private elementRef : ElementRef, private renderer : Renderer2){
        this.renderer = renderer;
        this.optionElem = (this.elementRef.nativeElement as HTMLOptionElement);
    }
    ngOnDestroy(): void {
        console.log('ngOnDestroy')
    }
    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
        this.defaultValue = "-1";
    }

    ngAfterContentChecked(): void {
        console.log(this.defaultValue);
        console.log(this.optionElem.value);
        if(this.defaultValue == this.optionElem.value)
        {
          
            this.optionElem.selected = true;
            //this.defaultValue = "-1";
        }
    }

}