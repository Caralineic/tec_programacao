export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imageUr?: string;
    promo?: boolean; 
}
