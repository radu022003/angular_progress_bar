import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progbar',
  templateUrl: './progbar.component.html',
  styleUrls: ['./progbar.component.css']
})
export class ProgbarComponent implements OnInit {
  @Input() offset: number;
  @Input() total: number;
  @Input() mainLabel;
  color = 'red';
  progress: number;
  constructor() { }

  ngOnInit(): void {

    this.progress = this.offset;
    // if we don't have progress, set it to 0.
    if(!this.offset) {
      this.offset = 0;
    }
    // if we don't have a total aka no requirement, it's 100%.
    if(this.total === 0) {
      this.total = this.offset;
    } else if(!this.total) {
      this.total = 100;
    }
    // if the progress is greater than the total, it's also 100%.
    if(this.offset > this.total) {
      this.offset = 100;
      this.total = 100;
    }

  }

  clickEvent($event): void{
    console.log('Button is Clicked');
    console.log($event);
    const div = document.getElementById('main');
    const rect = div.getBoundingClientRect();
    console.log(rect);
    if (($event.screenX / rect.width ) * 100 < this.offset){
      this.progress = this.offset;
    }
    else {
      this.progress =  ($event.screenX / rect.width ) * 100;
    }
  }

}
