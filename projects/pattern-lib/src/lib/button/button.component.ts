import {Component, Input} from '@angular/core';

@Component({
  selector: 'pl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export default class ButtonComponent {
  // @ts-ignore
  @Input('label') label: string | null;
  // @ts-ignore
  @Input('pink') pink: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
