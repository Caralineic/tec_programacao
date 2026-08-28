import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";


@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  apenasPromo = signal(false);

  produtosExibidos = computed(() =>
     this.apenasPromo()
      ? this.produtos.filter(p => p.promo)
      :this.produtos)

      alternaPromo(){
        this.apenasPromo.update(v => !v);
      }

  produtos = <Produto[]>[
    {
    id: 1,
    nome: 'Mounjauro',
    preco: 1699.99,
    descricao: 'Canetas caras demais. Deus me livre',
    imageUrl: 'images/moujaro.jpeg',
    promo: false,
    estado: 'novo'
  },
    {
    id: 2,
    nome: 'Ozempic',
    preco: 1299.94,
    descricao: 'Contnuam caras demais. Deus continue me livrando',
    imageUrl: 'images/ozempic.jpeg',
    promo: false,
    estado: 'usado'
  },
    {
    id: 3,
    nome: 'Wegov',
    preco: 2500.00,
    descricao: 'Misericórdia. Deus foi pra floripa?',
    imageUrl: 'images/Wegov.png',
    promo: true,
    estado: 'esgotado'
  },

  {
    id: 4,
    nome: 'Novalgina',
    preco: 25.00,
    descricao: 'Misericórdia. Deus foi pra floripa?',
    imageUrl: 'images/Wegov.png',
    promo: true,
    estado: 'novo'
  }, 
];

onViewProduct(id: number){
  alert('Vizualizando produto id: '+id);
}

onAddProduct(produto: {id:number, qtd:number}){
  alert('Adicionando produto' +produto.id+ '| quantidade:'+produto.qtd);
}


}
