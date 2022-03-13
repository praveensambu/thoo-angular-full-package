import { Component, OnInit } from '@angular/core';
import data from "../../../data/services.json";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public services:any[] = data;
  constructor() { }

  ngOnInit(): void {
  }

}
