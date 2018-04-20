import { Component, OnInit } from '@angular/core';

import { ArtigoInfoService } from './../../services/artigo-info.service';
import { Artigo } from './../../models/artigo';
import { ConfirmationService } from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-artigo-list',
  templateUrl: './artigo-list.component.html',
  styleUrls: ['./artigo-list.component.css']
})
export class ArtigoListComponent implements OnInit {

  artigoList: Artigo[];
  artigo: Artigo;

  constructor(private artigoService: ArtigoInfoService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getAllArtigos();
  }

  // Solicitar os dados da database json
  getAllArtigos() {
    /*this.artigoService.getAllArtigos().then(res => {
      this.artigoList = res;
    })
    .catch(erro => console.log(erro));*/
    this.artigoService.getAllArtigos().subscribe(
      data => {
        this.artigoList = data;
      }
    );
  }

  selectArtigo(artigo: Artigo) {
    this.artigo = Object.assign({}, artigo);
  }

  // Adicionar um novo artigo a database
  addNewArtigo() {
    this.artigo = new Artigo();
  }

  // Salvar um artigo a database
  saveArtigo(artigo: Artigo) {
    const artigoFilterdList = this.artigoList.filter(a => a.id === artigo.id);
    console.log(artigoFilterdList);
    if (artigoFilterdList.length === 0) {
      this.artigoList.push(artigo);
    } else {
      artigoFilterdList[0].id = artigo.id;
      artigoFilterdList[0].titulo = artigo.titulo;
      artigoFilterdList[0].autor = artigo.autor;
      artigoFilterdList[0].conteudo = artigo.conteudo;
      artigoFilterdList[0].categoria = artigo.categoria;
    }
    this.artigo = null;
  }

  // Deletar um artigo da database com dialogo de confirmação
  deleteArtigo(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove artigo?',
      accept: () => {
          this.artigoService.deleteArtigos(id).then(res => {
            console.log('deu bom');
          }).catch(() => {
            console.log('deu ruim');
         });
      }
    });
  }

  closeDialogForm() {
    this.artigo = null;
  }
}
