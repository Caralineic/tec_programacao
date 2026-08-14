import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = input.required<string>();
  textoSobre = output<string>();

  enviarSobre():void{
    this.textoSobre.emit('Tecnicas de Programação I. Desenvolvido por Caroline')
  }
  exibirMensagem(msg: string):void{
    alert(msg);
  }
}
