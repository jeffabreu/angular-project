import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
 template: `
  <div class="alert" style="color: red" *ngIf="temError()">{{text}}</div>
 `,
  styles: [`
   .alert {
    z-index: 0;
   }`]
})
export class MessageComponent {
  @Input() error: string='';
  @Input() control: FormControl= new FormControl();
  @Input() text: string = '';

  temError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
