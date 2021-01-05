import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangeralert',
  templateUrl: './danger.component.html',
  styleUrls: ['./danger.component.css']
})
export class DangerComponent implements OnInit {

  name: string = 'WARNING BROTHER';

  constructor() { }

  ngOnInit(): void {
  }

}
