import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

  year: number = new Date().getUTCFullYear();

  constructor() {

  }

  ngOnInit(): void {
  }
}
