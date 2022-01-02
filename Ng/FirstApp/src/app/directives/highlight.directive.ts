import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[bigHeading]'
})

export class BigHeadingDirective implements OnInit {
    
    constructor(private elementRef : ElementRef, private renderer : Renderer2){

    }

    ngOnInit(): void {
       //this.elementRef.nativeElement.style.backgroundColor = "pink";
       this.elementRef.nativeElement.style.padding = "10px";
       this.renderer.setStyle(this.elementRef.nativeElement, 
        "border", "1px solid green");
       this.renderer.addClass(this.elementRef.nativeElement, "bg-info");

    }

    @HostListener('click') onElementClick(){
        let textElem = this.renderer.createText("Thank you!!!");
        this.renderer.appendChild(this.elementRef.nativeElement, textElem);
        this.renderer.addClass(this.elementRef.nativeElement, "bg-warning");
    }

}