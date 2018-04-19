import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Artigo } from '../../models/artigo';
import { Comentario } from './../../models/comentario';
import { ArtigoInfoService } from '../../services/artigo-info.service';
import { ArtigoListComponent } from './../artigo-list/artigo-list.component';

@Component({
  selector: 'app-artigo-detail',
  templateUrl: './artigo-detail.component.html',
  styleUrls: ['./artigo-detail.component.css']
})
export class ArtigoDetailComponent implements OnInit {

  @Input() artigo: Artigo;
  @Output() saveArtigoEvent = new EventEmitter<Artigo>();
  @Output() closeDialogEvent = new EventEmitter();

  display: boolean;

  constructor(private artigoService: ArtigoInfoService) { }

  ngOnInit() {
  }

  // Teste para savar artigo no database
  /*saveArtigoInfo() {
    this.artigoService.saveArtigos(this.artigo).subscribe(
      data => {
        if (data.success) {
          this.display = false;
          this.artigo.id = data.id;
          this.saveArtigoEvent.emit(this.artigo);
        }
      }
    );
  }*/

  // Teste para adicionar um comentario
  addComentario() {
    // this.artigo.comentarios.push({ autor: '', texto: '' });
    this.artigo.comentarios.push({ id: 1 , autor: '', texto: ''});
  }

  // Teste para salvar sem usar subscribe
  /* saveArtigoInfo() {
    /*this.artigoService.getAllArtigos().then(res => {
      this.artigoList = res;
    })
    .catch(erro => console.log(erro));/*
  }*/

  // Metododo para deletar comentario
  /*deleteComentario(comentario: Comentario) {
    const comIndex = this.comentario.comentarioCollection.indexOf(comentario);
    if (comIndex >= 0) {
      this.comentario.comentarioCollection.splice(comIndex, 1);
    }
  }*/

  // Fechar caixa de dialogo que mostra os detalhes
  closeFormDialog() {
    this.display = false;
    this.closeDialogEvent.emit();
  }

}
