import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comentario } from './../../models/comentario';

@Component({
  selector: 'app-comentario-info',
  templateUrl: './comentario-info.component.html',
  styleUrls: ['./comentario-info.component.css']
})
export class ComentarioInfoComponent implements OnInit {
  @Input() comentario: Comentario;
  @Output() deleteComentarioNotify: EventEmitter<Comentario> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteFavourite(comentario: Comentario) {
    this.deleteComentarioNotify.emit(comentario);
  }

}
