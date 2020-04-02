import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-medecins-list',
  templateUrl: './medecins-list.component.html',
  styleUrls: ['./medecins-list.component.css']
})
export class MedecinsListComponent implements OnInit {

  @Input() firstname: string;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
