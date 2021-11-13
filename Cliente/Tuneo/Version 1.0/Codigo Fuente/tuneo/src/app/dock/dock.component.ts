import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent implements OnInit {
    @Input()
    home:string;
    opcion:number;
  constructor() { }

  ngOnInit() {
    this.opcion = 1;
  }
  setOpcion(op:number):void{    
    this.opcion = op;    
    for (let index = 1; index < 6; index++) {
        let element:HTMLImageElement = document.querySelector('#watchme'+index);
        element.dataset.seleccion = '';        
    }
    let elemento:HTMLImageElement = document.querySelector('#watchme'+op);
    elemento.dataset.seleccion = 's';
  }
  overimg(id){
      var path:HTMLImageElement = document.querySelector('#'+id);
      //console.log(path);
      var parts = (/(\w?\:?\/?[\w\-_ \/]*\/+)?([\w-_ ]+)?(\.[\w-_ ]+)?/gi).exec(path.dataset.src);
      var objeto = {
          path: parts[0] || "",
          folder: parts[1] || "",
          name: parts[2] || "",
          extension: parts[3] || "",
      };
      if(path.dataset.seleccion!='s'){
          path.src = objeto.folder+objeto.name+"S"+objeto.extension;
      }
  }
  leaveimg(id){
      var path:HTMLImageElement = document.querySelector('#'+id);
      //console.log(path);
      var parts = (/(\w?\:?\/?[\w\-_ \/]*\/+)?([\w-_ ]+)?(\.[\w-_ ]+)?/gi).exec(path.dataset.src);
      var objeto = {
          path: parts[0] || "",
          folder: parts[1] || "",
          name: parts[2] || "",
          extension: parts[3] || "",
      };
      if(path.dataset.seleccion!='s'){
          path.src = path.dataset.src;
      }
  }
}
