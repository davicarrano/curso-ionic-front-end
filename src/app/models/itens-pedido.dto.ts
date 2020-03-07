import { ProdutoDTO } from './Produto.dto';
import { RefDTO } from './ref.dto';

export interface ItensPedidoDTO{
    quantidade: number,
    produto: RefDTO;
}