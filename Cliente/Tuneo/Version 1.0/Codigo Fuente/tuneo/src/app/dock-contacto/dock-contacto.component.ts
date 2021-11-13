import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'dock-contacto',
  templateUrl: './dock-contacto.component.html',
  styleUrls: ['./dock-contacto.component.scss']
})
export class DockContactoComponent implements OnInit {
  @Input()
  home:string;
  constructor() { }

  ngOnInit() {
  }

}
