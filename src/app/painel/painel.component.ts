import { Component, OnInit } from '@angular/core';
import { Frase } from './../shared/frase.model';
import { FRASES } from './frase-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:';
  public frases: Frase[] = FRASES;
  public resposta: string = '';

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() { 
    this.atualizaRodada()
    console.log(this.rodadaFrase)
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta);
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert("Tradução correta.")
     
      //atualiza rodada
      this.rodada++

      //atualiza progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)

      this.atualizaRodada()

      console.log(this.rodada)
      
    }else{
      alert("Tradução incorreta.")
    }
   
  }

  public atualizaRodada(): void {
    //atualiza o objeto rodadaFrase
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
