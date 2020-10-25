import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KatKaz';
  isMain: boolean;

  constructor(private route: ActivatedRoute) {
    this.isMain = true;
  }

ngOnInit() {
  // this.route.params.subscribe(params => {
  //   console.log(params);
  // });
}

onClick() {
  this.isMain = false;
}
}
