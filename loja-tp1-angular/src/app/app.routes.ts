import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
import { ProdutoDetalhe } from './features/produtos/produto-detalhe/produto-detalhe';
import { Sobre } from './features/sobre/sobre';
import { ProdutoFrom } from './features/produtos/produto-from/produto-from';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'produtos', component: ListaProdutos},
    {path: 'produtos/novo', component: ProdutoFrom},
    {path: 'produtos/:id', component: ProdutoDetalhe},
    {path: 'sobre', component: Sobre},
    {path: '**', redirectTo: ''},
];
