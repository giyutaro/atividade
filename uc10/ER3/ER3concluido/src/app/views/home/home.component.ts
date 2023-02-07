import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/models/noticias';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private noticiaService: NoticiasService) { }

  ListaNoticias = [] as Noticias[]

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias(){
    this.noticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticias[]) => {
      this.ListaNoticias = noticiasRecebidas;
      console.log(this.ListaNoticias);

    })
  }

}
  