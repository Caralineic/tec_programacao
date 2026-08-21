import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = <Produto[]>[
    {
    id: 1,
    nome: 'Mounjauro',
    preco: 1699.99,
    descricao: 'Canetas caras demais. Deus me livre',
    imageUrl: 'images/moujaro.jpeg',
    promo: false
  },
    {
    id: 2,
    nome: 'Ozempic',
    preco: 1299.94,
    descricao: 'Contnuam caras demais. Deus continue me livrando',
    imageUrl: 'images/ozempic.jpeg',
    promo: false
  },
    {
    id: 3,
    nome: 'Wegov',
    preco: 2500.00,
    descricao: 'Misericórdia. Deus foi pra floripa?',
    imageUrl: 'images/Wegov.png',
    promo: true
  },
];

onViewProduct(id: number){
  alert('Vizualizando produto id: '+id);
}

onAddProduct(produto: {id:number, qtd:number}){
  alert('Adicionando produto' +produto.id+ '| quantidade:'+produto.qtd);
}


}
