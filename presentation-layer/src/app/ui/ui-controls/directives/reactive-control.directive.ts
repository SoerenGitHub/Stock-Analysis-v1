import { AfterViewInit, Directive, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appReactiveControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReactiveControlDirective),
      multi: true
    }]
})
export class ReactiveControlDirective<T> implements ControlValueAccessor, AfterViewInit {

  @Input()
  appReactiveControl?: string;
  
  @Output()
  controlChange: EventEmitter<T> = new EventEmitter<T>();

  private input: FormControl = new FormControl();

  private touchFn = () => {};

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) { }

  ngAfterViewInit(): void {
    
      const inputElement = this.elementRef.nativeElement.querySelector('input');
      inputElement.setAttribute('formControlName', this.appReactiveControl);
      this.renderer.listen(inputElement, 'keyup', (event) => {
        this.writeValue(inputElement.value)
      })
  }

  writeValue(obj: T): void {
    this.touchFn();
    this.input.setValue(obj);
    this.controlChange.emit(obj);
  }
  registerOnChange(fn: any): void {
    this.input.registerOnChange(fn);
  }
  registerOnTouched(fn: any): void {
    this.touchFn = fn;
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.input.disable() : this.input.enable();
  }

  

}
