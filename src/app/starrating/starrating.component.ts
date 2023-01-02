import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent {
  stars = [1,2,3,4,5];    
  @Input() rating: any;
  hoverState = 0;  
  @Output() mainClick : EventEmitter<number> = new EventEmitter();
  @Output() mouseEnter : EventEmitter<number> = new EventEmitter();
  @Output() mouseLeave : EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    console.log(this.rating >= 3 || 3 <= this.hoverState);
    this.hoverState = this.rating;
  }

  onMouseLeave(i: number) {
    this.hoverState = this.rating;
  }

  onMouseEnter(i: number) {    
    this.hoverState = i;        
  }

  onMainClick(i: number) {
    this.mainClick.emit(i);
  }
}
